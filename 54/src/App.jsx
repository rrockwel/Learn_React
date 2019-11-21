// Use Effect is Replacement for:
// ComponentDidMount
// ComponentDidUpdate
// ComponentWillUnmount

// Side Effects?
// Network Request
// Manual DOM manipulation
// Setting Event Listeners Manually or Timeouts and Intervals

import React, {useState, useEffect} from 'react';
import randomcolor from 'randomcolor'

function App(){
	const [ count, setCount ] = useState(0);
	const [ color, setColor ] = useState('');

	// Increment Function to Add To Count
	function increment(){
		setCount(prevCount=>prevCount+1)
	}
	function decrement(){
		setCount(prevCount=>prevCount-1)
	}

	useEffect(()=>{
		setColor(randomcolor())
	}, [count/* , otherVariable, * can include a list of variables to watch for changes in*/])
	// Only Run UseEffect On First Render
	// useEffect(()=>{
	// 	setColor(randomcolor())
	// 	},[]
	// )

	return(
		<div>
			<h1 id='h' style={{color:color}}>{ count }</h1>
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
