










	
					
							
									
									
									
									
									
									
									
													/>
													checked={this.state.celiac}
													checked={this.state.diabetic}
													checked={this.state.halal}
													checked={this.state.kosher}
													checked={this.state.lactoseIntolerance}
													checked={this.state.peanutAllergy}
													checked={this.state.vegetarianVegan}
													className="form-check-input" 
													className="form-check-input" 
													className="form-check-input" 
													className="form-check-input" 
													className="form-check-input" 
													className="form-check-input" 
													className="form-check-input" 
													id='celiac'
													id='diabetic'
													id='halal'
													id='kosher'
													id='lactoseIntolerance'
													id='peanutAllergy'
													id='vegetarianVegan'
													name="celiac"
													name="diabetic"
													name="halal"
													name="kosher" 
													name="lactoseIntolerance"
													name="peanutAllergy"
													name="vegetarianVegan" 
													onChange={this.handleChange}
													onChange={this.handleChange}/>
													onChange={this.handleChange}/>
													onChange={this.handleChange}/>
													onChange={this.handleChange}/>
													onChange={this.handleChange}/>
													onChange={this.handleChange}/>
											<input type="checkbox"
											<input type="checkbox"
											<input type="checkbox" 
											<input type="checkbox" 
											<input type="checkbox" 
											<input type="checkbox" 
											<input type="checkbox" 
											Celiac's Disease
											checked={this.state.gender==="Male"}
											className="form-check-input" 
											className="form-check-label">
											className="form-check-label">
											className="form-check-label">
											className="form-check-label">
											className="form-check-label">
											className="form-check-label">
											className="form-check-label">
											Diabetic
											Halal
											id="Male"
											Kosher
											Lactose Intolerant
											name="gender" 
											onChange={this.handleChange}/>
											Peanut Allergy
											value="Male"
											Vegetarian/Vegan
										<label htmlFor="Female" className="form-check-label">Female</label>
										checked={this.state.gender==="Female"}
										className="form-check-input" 
										id="Female"
										name="gender" 
										onChange={this.handleChange}/>
										value="Female"
									</label>
									</label>
									</label>
									</label>
									</label>
									</label>
									</label>
									<input type="radio" 
									<input type="radio" 
									<label htmlFor="celiac" 
									<label htmlFor="diabetic" 
									<label htmlFor="halal" 
									<label htmlFor="kosher" 
									<label htmlFor="lactoseIntolerance" 
									<label htmlFor="Male" className="form-check-label">Male</label>
									<label htmlFor="peanutAllergy" 
									<label htmlFor="vegetarianVegan" 
									<option value="">--Please Choose A Destination--</option>
									<option value="Oaxaca, Mexico">Oaxaca, Mexico</option>
									<option value="Oslo, Norway">Oslo, Norway</option>
									<option value="Paris, France">Paris, France</option>
									<option value="Rio De Janeiro, Brazil">Rio De Janeiro, Brazil</option>
									>
									className="m-2 form-control text-center"
									className="m-2 form-control text-center"
									className="m-2 form-control text-center"
									className='mt-2 mb-2'
									id="age"
									id="destination"
									id="firstName"
									id="firstName"
									name="age"
									name="firstName"
									name="lastName"
									onChange={this.handleChange}
									onChange={this.handleChange}
									onChange={this.handleChange}
									onChange={this.handleChange}
									placeholder="Age"
									placeholder="First Name"
									placeholder="Last Name"
									value={this.state.age}
									value={this.state.destination}
									value={this.state.firstName}
									value={this.state.lastName}
								</div>
								</div>
								</div>
								</div>
								</div>
								</div>
								</div>
								</div>
								</div>
								<div className="col-6">
								<div className="col-6">
								<div className="col-6">
								<div className="col-6">
								<div className="col-6">
								<div className="col-6">
								<div className="col-6">
								<div className="form-check">
								<div className="form-check">
							/>
							/>
							/>
							</div>
							</div>
							</select>
							<div className="col-6">
							<div className="row ml-2" id="dietary-restrictions-checkboxes">
							<input type="text" 
							<input type="text" 
							<input type="text" 
							<li className="list-group-item">Diabetic: {this.state.diabetic ? "Yes" : "No"} </li>
							<li className="list-group-item">Gluten Freee: {this.state.celiac ? "Yes" : "No"}</li>
							<li className="list-group-item">Halal: {this.state.halal ? "Yes" : "No"} </li>
							<li className="list-group-item">Kosher: {this.state.kosher ? "Yes" : "No"}</li>
							<li className="list-group-item">Lactose Free: {this.state.lactoseIntolerance ? "Yes" : "No"} </li>
							<li className="list-group-item">Peanut Allergy: {this.state.peanutAllergy ? "Yes" : "No"}</li>
							<li className="list-group-item">Vegetarian/Vegan: {this.state.vegetarianVegan ? "Yes" : "No"}</li>
							<select name="destination" 
						</form>
						</ul>
						<form action="">
						<h2>Your Dietary Restrictions:</h2>
						<h5>Your Age: {this.state.age}</h5>
						<h5>Your Destination: {this.state.destination}</h5>
						<h5>Your Gender: {this.state.gender}</h5>
						<h5>Your Name: {this.state.firstName} {this.state.lastName}</h5>
						<ul className="list-group">
						[ name ] : checked 
					</div>
					</div>
					</div>
					<div className="card bg-info col-8">
					<div className="col-6">
					<div className="col-6">	
					<h2>Entered Information:</h2>
				</div>
				</div>
				<div className="d-flex row justify-content-center">
				<div className="d-flex row">
				<hr/>
				})
			</div>
			<div className="container">
			age: '',
			celiac: false,
			destination: '',
			diabetic: false,
			firstName: '',
			gender: '',
			halal: false
			kosher: false,
			lactoseIntolerance: false,
			lastName: '',
			peanutAllergy: false,
			this.setState({
			this.setState({[ name ] : value })
			vegetarianVegan: false,
		)
		const {name, value, type, checked} = event.target
		if(type==='checkbox'){
		return (
		super()
		this.handleChange = this.handleChange.bind(this)
		this.state={
		}
		}
		}else{
	constructor(){
	handleChange(event){
	render(){
	}
	}
	}
class Form extends Component {
export default Form 
import React, {Component} from 'react';
}