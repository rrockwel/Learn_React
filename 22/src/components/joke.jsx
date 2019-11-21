import React from 'react';

function Joke(props){
	return (
		
		<div className="card col-4 m-2 joke bg-primary">
			<div className="card-body">
				<h1 style={{display: !props.question && "none"}} className='card-title bg-info'>{props.question}</h1>
				<h3 style={{color: !props.question && "purple"}} className='card-text bg-warning'>{props.punchLine}</h3>
			</div>
		</div>
	)
}

export default Joke;