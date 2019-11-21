import React, {Component} from 'react';

class App extends Component {
	constructor(){
		super()
		this.state={
			firstName: '',
			lastName: '',
			age: '',
			gender: '',
			destination: '',
			lactoseIntolerance: false,
			vegetarianVegan: false,
			peanutAllergy: false,
			diabetic: false,
			celiac: false,
			kosher: false,
			halal: false

			

		}
		this.handleChange = this.handleChange.bind(this)
	}
	
	handleChange(event){
		const {name, value, type, checked} = event.target
		if(type==='checkbox'){
			this.setState({
						[ name ] : checked 
				})
		}else{
			this.setState({[ name ] : value })
		}
	}

	render(){
		return (
			<div className="container">
				<div className="d-flex row justify-content-center">
					<div className="card bg-info col-8">
						<form action="">
							<input type="text" 
									name="firstName"
									value={this.state.firstName}
									id="firstName"
									placeholder="First Name"
									className="m-2 form-control text-center"
									onChange={this.handleChange}
							/>

							<input type="text" 
									name="lastName"
									value={this.state.lastName}
									id="firstName"
									placeholder="Last Name"
									className="m-2 form-control text-center"
									onChange={this.handleChange}
							/>

							<input type="text" 
									name="age"
									value={this.state.age}
									id="age"
									placeholder="Age"
									className="m-2 form-control text-center"
									onChange={this.handleChange}
							/>
							
							<div className="col-6">
								<div className="form-check">
									<input type="radio" 
											className="form-check-input" 
											name="gender" 
											value="Male"
											id="Male"
											checked={this.state.gender==="Male"}
											onChange={this.handleChange}/>
									<label htmlFor="Male" className="form-check-label">Male</label>
								</div>

								<div className="form-check">
									<input type="radio" 
										className="form-check-input" 
										name="gender" 
										value="Female"
										id="Female"
										checked={this.state.gender==="Female"}
										onChange={this.handleChange}/>
										<label htmlFor="Female" className="form-check-label">Female</label>
								</div>
							</div>

							<select name="destination" 
									id="destination"
									className='mt-2 mb-2'
									value={this.state.destination}
									onChange={this.handleChange}
									>
									<option value="">--Please Choose A Destination--</option>
									<option value="Oaxaca, Mexico">Oaxaca, Mexico</option>
									<option value="Paris, France">Paris, France</option>
									<option value="Rio De Janeiro, Brazil">Rio De Janeiro, Brazil</option>
									<option value="Oslo, Norway">Oslo, Norway</option>
									
							</select>

							<div className="row ml-2" id="dietary-restrictions-checkboxes">
								<div className="col-6">
									<label htmlFor="lactoseIntolerance" 
											className="form-check-label">
											<input type="checkbox" 
													name="lactoseIntolerance"
													className="form-check-input" 
													id='lactoseIntolerance'
													checked={this.state.lactoseIntolerance}
													onChange={this.handleChange}/>

											Lactose Intolerant
									</label>
								</div>
								<div className="col-6">
									<label htmlFor="vegetarianVegan" 
											className="form-check-label">
											<input type="checkbox"
													name="vegetarianVegan" 
													checked={this.state.vegetarianVegan}
													className="form-check-input" 
													id='vegetarianVegan'
													onChange={this.handleChange}
													/>
											Vegetarian/Vegan
									</label>
									
								</div>
								<div className="col-6">
									<label htmlFor="peanutAllergy" 
											className="form-check-label">
											<input type="checkbox" 
													name="peanutAllergy"
													checked={this.state.peanutAllergy}
													className="form-check-input" 
													id='peanutAllergy'
													onChange={this.handleChange}/>
											Peanut Allergy
									</label>
									
								</div>
								<div className="col-6">
									<label htmlFor="diabetic" 
											className="form-check-label">
											<input type="checkbox" 
													name="diabetic"
													checked={this.state.diabetic}
													className="form-check-input" 
													id='diabetic'
													onChange={this.handleChange}/>
											Diabetic
									</label>
									
								</div>
								<div className="col-6">
									<label htmlFor="celiac" 
											className="form-check-label">
											<input type="checkbox" 
													name="celiac"
													checked={this.state.celiac}
													className="form-check-input" 
													id='celiac'
													onChange={this.handleChange}/>
											Celiac's Disease
									</label>
									
								</div>
								<div className="col-6">
									<label htmlFor="kosher" 
											className="form-check-label">
											<input type="checkbox"
													name="kosher" 
													checked={this.state.kosher}
													className="form-check-input" 
													id='kosher'
													onChange={this.handleChange}/>
											Kosher
									</label>
									
								</div>
								<div className="col-6">
									<label htmlFor="halal" 
											className="form-check-label">
											<input type="checkbox" 
													name="halal"
													checked={this.state.halal}
													className="form-check-input" 
													id='halal'
													onChange={this.handleChange}/>
											Halal
									</label>
									
								</div>
							</div>
						</form>
					</div>
				</div>
				<hr/>
				<div className="d-flex row">
					

					<div className="col-6">	
					<h2>Entered Information:</h2>
						<h5>Your Name: {this.state.firstName} {this.state.lastName}</h5>
						<h5>Your Age: {this.state.age}</h5>
						<h5>Your Gender: {this.state.gender}</h5>
						<h5>Your Destination: {this.state.destination}</h5>
					</div>
					<div className="col-6">
						<h2>Your Dietary Restrictions:</h2>
						<ul className="list-group">
							<li className="list-group-item">Lactose Free: {this.state.lactoseIntolerance ? "Yes" : "No"} </li>
							<li className="list-group-item">Peanut Allergy: {this.state.peanutAllergy ? "Yes" : "No"}</li>
							<li className="list-group-item">Gluten Freee: {this.state.celiac ? "Yes" : "No"}</li>
							<li className="list-group-item">Halal: {this.state.halal ? "Yes" : "No"} </li>
							<li className="list-group-item">Vegetarian/Vegan: {this.state.vegetarianVegan ? "Yes" : "No"}</li>
							<li className="list-group-item">Diabetic: {this.state.diabetic ? "Yes" : "No"} </li>
							<li className="list-group-item">Kosher: {this.state.kosher ? "Yes" : "No"}</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}


export default App