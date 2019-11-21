import React, {useState}/*, {Component} */from 'react';

function App(){
	const [ answer ] = useState('yes');
	return (
		<div>
			<h1>Is State Important To Know? {answer} </h1>
		</div>
	)
}

// class App extends Component{
// 	constructor(){
// 		super()
// 		this.state = {
// 			answer: 'yes'
// 		}
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<h1>Is state important to know? {this.state.answer}</h1>
// 			</div>
// 		)
// 	}
// }

export default App;
