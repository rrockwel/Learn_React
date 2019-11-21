import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			isLoggedIn: false
		}
	}
	render(){
		let wordDisplay
		if(this.state.isLoggedIn===true){
			wordDisplay = 'in';
		}else{
			wordDisplay = 'out';
		}
		return(
			<div className="container">
				<h3>You are currently logged {wordDisplay}</h3>
			</div>
		)
	}
}

export default App;