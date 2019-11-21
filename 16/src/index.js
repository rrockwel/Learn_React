import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

function App(){

	const date = new Date();
	let hours = date.getHours()%24;

	let timeOfDay;

	const styles = {
		fontSize: "30px"
	}


	if(hours<12){
		timeOfDay='morning';
		styles.color = "yellow"
	}else if(hours>=12 && hours < 17){
		timeOfDay='afternoon';
		styles.color="blue"
	}else{
		timeOfDay='night';
		styles.color="black"
	}






	return (
		<div>
			<h1 style={styles}>Good {timeOfDay}</h1>
		</div>
		)


}

ReactDOM.render(<App/>, document.getElementById('root'));

