import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import Scroll from '../components/Scroll';
import './App.css';
class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response=> response.json())
		  .then(users => this.setState({robots: users}));
	}
	onSerachChange = (event) => {
      this.setState({searchfield: event.target.value})  
	}
	render() {
		 const filteredRobots = this.state.robots.filter(robots => {
      	return robots.name.toLowerCase().includes(this.state.searchfield)
      })
		 return !robots.length ?
		 	<h1>Loading</h1> :
		 
		

	return (
		<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		 <SearchBox searchChange = {this.onSerachChange}/>
		 <Scroll>
		   <CardList robots={filteredRobots}/>
		 </Scroll>
		 </div>
		);
	
 }
}
export default App;