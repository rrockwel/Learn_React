import React, {useState} from 'react';


function App(){
	const [ count, setCount ] = useState(0);

	// Increment Function to Add To Count
	function increment(){
		setCount(prevCount=>prevCount+1)
	}
	function decrement(){
		setCount(prevCount=>prevCount-1)
	}

	return(
		<div>
			<h1>{ count }</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}
// class App extends React.Component{
// 	constructor(){
// 		super()
// 		this.state={
// 			count: 0
// 		}
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<h1>{this.state.count}</h1>
// 				<button>Change!</button>
// 			</div>
// 		)
// 	}

// }

export default App;
