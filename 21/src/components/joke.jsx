import React from 'react';

function Joke(props){
	return (
		
		<div className="card col-4 m-2 joke bg-primary">
			<div className="card-body">
				<h1 style={{display: props.joke.question?"block":"none"}} className='card-title bg-info'>{props.joke.question}</h1>
				<h3 style={{color: !props.joke.question && "purple"}}className='card-text bg-warning'>{props.joke.answer}</h3>
			</div>
		</div>
	)
}

export default Joke;