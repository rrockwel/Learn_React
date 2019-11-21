import React, {Component} from 'react';
import './style/styles.css'

class App extends Component {
	// Change To Use Class Properties
	state = {
		firstName: ''
	}

	// Change To Use Arrow Function
	handleChange = event => {
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	render(){
		return(
			<main>
				<form action="">
					<input type="text" 
						name="firstName" 
						value={this.state.firstName} 
						onChange={this.handleChange} 
						placeholder="First Name"/>
				</form>
				<h1>{this.state.firstName}</h1>
			</main>	
		)
	}
}

export default App;


