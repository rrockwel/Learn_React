import React from 'react';

class App extends React.Component {
	constructor(){
		super()
		this.state={
			loggedIn: false
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(){
		this.setState(prevState=>{
			return {
				loggedIn: !prevState.loggedIn
			}
		})
	}
	render(){
		return (
			<div className="container mt-3">
				<div className="row">
					<div>
						<button className={this.state.loggedIn===true ? 'btn btn-danger' : 'btn btn-success'} onClick={this.handleChange}>{this.state.loggedIn===true ? <span>Log Out</span> : <span>Log In</span>}</button>
						<h2>You are currently logged {this.state.loggedIn===true ? <span>In</span> : <span>Out</span>}</h2>
					</div>
				</div>
			</div>
		)
	}
}

export default App;