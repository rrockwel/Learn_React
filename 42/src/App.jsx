import React, {Component} from 'react';

class App extends Component {
	constructor(){
		super()
		this.state={
			firstName: "",
			lastName: ""
		}
		this.handleChange=this.handleChange.bind(this);
	}

	handleChange(event){
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}
		
	render(){
		return(
			<div className="container mt-3">
				<div className="row">
					<div className="card bg-primary col-8">
						<form action="">
							<div className="form-group text-center mt-3">
								<input type="text" 
									name="firstName"
									value={this.state.firstName} 
									id='firstName'
									placeholder="First Name" 
									className="m-2 form-control text-center" 
									onChange={this.handleChange}
								/>
								<input type='text' 
									name='lastName' 
									value={this.state.lastName} 
									id='lastName' 
									placeholder='Last Name' 
									className="m-2 form-control text-center" 
									onChange={this.handleChange}
								/>
								<button type="submit" value="submit" className="submit mt-2">Submit</button>
								<h1>State: </h1>
								<h3>First Name: {this.state.firstName} </h3>
								<h3>Last Name: {this.state.lastName} </h3>
							</div>
						</form>
					</div>
				</div>
			</div>
			
		)
	}
}

export default App;