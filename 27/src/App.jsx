import React from 'react';

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			answer: 'yes'
		}
	}

	render(){
		return(
			<div>
				<h1>Is state Important to Know? {this.state.answer.toUpperCase()}</h1>
			</div>
		)
	}
}

export default App;