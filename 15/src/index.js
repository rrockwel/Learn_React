import React from 'react';
import ReactDOM from 'react-dom';

function App(){
	const date = new Date();
	console.log(date);
	const hours = date.getHours();

	let timeOfDay;

	if(hours<12){
		timeOfDay = 'morning';
	}else if(hours>=12 && hours < 17){
		timeOfDay = 'afternoon';
	}else{
		timeOfDay = 'night';
	}

	return (
		<div>
		<h1>It is currently {`${date.getHours()%12}:${date.getMinutes()}`}. </h1>
		<h1>Good {timeOfDay}!</h1>
		</div>
		)
}

ReactDOM.render(<App/>,document.getElementById('root'));
