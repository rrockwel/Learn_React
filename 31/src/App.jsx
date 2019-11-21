import React from 'react';

function handleClick(){
	alert("I was Clicked?");
}

function hover(){
	console.log("Au revoir, gopher!");
}

// 

function App(){
	return (
		<div className='container'>
			<div className="d-flex row mt-3 justify-content-center">
				<div className="col-6 text-center">
					<img src="https://www.fillmurray.com/300/200" alt="Bill Murray" onMouseOver={hover}/>
					<br/>
					<br/>
					<button onClick={handleClick} >Click Here</button>
				</div>	
			</div>
		</div>	
	)
}

export default App;