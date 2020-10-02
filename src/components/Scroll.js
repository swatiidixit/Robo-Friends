import React from 'react';


const Scroll = (props) => {
	return (
		<div class="scrollbar" id="style-4" style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
		 {props.children}
		 <div class="force-overflow"></div>
		 </div>
		 );
};
export default Scroll;