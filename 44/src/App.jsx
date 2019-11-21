import React, {Component} from 'react';

class App extends Component {
	constructor(){
		super()
		this.state={
			firstName: "",
			lastName: "",
			isFriendly: true,
			textArea: '',
			gender: '',
			favoriteColor: '',
			email: '',
			password: ''

		}
		this.handleChange=this.handleChange.bind(this);
	}

	handleChange(event){
		const {name, value, type, checked} = event.target
		if(type === 'checkbox'){
			this.setState({[ name ]: checked});
		}else{
			this.setState({[ name ]: value});
		}
	}
		
	render(){
		return(
			<div className="container mt-3">
				<div className="row">
					<div className="card bg-primary col-8">
						<form action="post" onSubmit={this.handleSubmit}>
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
								<input type='email' 
									name='email' 
									value={this.state.email} 
									id='email' 
									placeholder='example@email.com'  
									className="m-2 form-control text-center" 
									onChange={this.handleChange}
								/>
								<input type='password' 
									name='password' 
									value={this.state.password} 
									id='password'  
									className="m-2 form-control text-center" 
									onChange={this.handleChange}
								/>
								{/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
								<textarea value={this.state.textArea} 
									rows="4" 
									name="textArea" 
									id="textArea" 
									placeholder="Say your piece and get out" 
									className='m-2 form-control'
									onChange={this.handleChange}
									/>
								
								<div className="d-flex checkbox justify-content-center">
									<label>
										<input type="checkbox"
											id="isFriendly"
											name='isFriendly'
											checked={this.state.isFriendly}
											className="m-1"
											onChange={this.handleChange}
										/>
										Is Friendly? 
									</label>
									
								</div>

								<div className="form-check">
									<input type="radio" 
										className="form-check-input" 
										name="gender" 
										value="Male"
										checked={this.state.gender==='male'}
										onChange={this.handleChange}
										/>
									<label htmlFor="male" className="form-check-label">Male</label>
								</div>
								<div className="form-check">
									<input type="radio" 
										className="form-check-input" 
										name="gender" 
										value="Female"
										checked={this.state.gender==='female'}
										onChange={this.handleChange}
										/>
									<label htmlFor="female" className="form-check-label">Female</label>
								</div>

							{/** Formik Library Helps Write React Forms **/}
								<div className="row">
									<div className="col-12 mt-3 mb-0">
										<label htmlFor="favColor" className="text-dark-100 mr-3">Favorite Color</label>
									</div>
									<div className="col-12 mt-0">
										<select name="favoriteColor" 
												id="favColor" 
												value={this.state.favoriteColor} 
												onChange={this.handleChange}
										>
											<option value="Red">Red</option>
											<option value="Orange">Orange</option>
											<option value="Yellow">Yellow</option>
											<option value="Green">Green</option>
											<option value="Blue">Blue</option>
											<option value="Violet">Violet</option>
										</select>
									</div>
								</div>
								
							</div>
							<div className="form-group text-center">
								<button type="submit" value="submit" className="submit m-2">Submit</button>
								<h1>State: </h1>
								<h3>First Name: {this.state.firstName} </h3>
								<h3>Last Name: {this.state.lastName} </h3>
								<h3>Text Area: {this.state.textArea} </h3>
								<h3>Gender: {this.state.gender}</h3>
								<h3>Favorite Color: {this.state.favoriteColor}</h3>
							</div>
						</form>
					</div>
				</div>
			</div>
			
		)
	}
}

export default App;