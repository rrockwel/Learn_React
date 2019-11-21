import React from 'react';

function Conditional(props){
	return (
		<div>
			<div className="navbar">Navbar Here</div>
			<h1>Loaded</h1>
			<div className="footer">Footer Down Here</div>
		</div>
	)
	// if(props.isLoading === true){
	// 	return (
	// 		<h1>Loading...</h1>
	// 	)
	// }else{
	// 	return (
	// 		<h1>Now Loaded</h1>
	// 	)
	// }
}

export default Conditional;