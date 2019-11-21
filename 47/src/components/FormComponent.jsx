import React from 'react'

function FormComponent(props){
	return (
		<div className="container mt-3 justify-content-center">
			<div className="col-6 card bg-primary">
				<form>
					<div className="form-group mt-3">
						<input name="firstName" 
							value={props.data.firstName} 
							onChange={props.handleChange}
							className='form-control' 
							type="text" 
							placeholder="First Name"/>
						<br/>
						
						<input name="lastName" 
							value={props.data.lastName} 
							onChange={props.handleChange}
							className='form-control' 
							type="text" 
							placeholder="Last Name"/>
						<br/>
						
						<input name="age" 
							value={props.data.age} 
							onChange={props.handleChange}
							className='form-control' 
							type="text" 
							placeholder="Age"/>
						<br/>

						<div className="row ml-1 mb-2">
							<div className="form-check form-check-inline">
								<label
									htmlFor="male" 
									className="form-check-label">
									<input 
										type="radio" 
										className="form-check-input" 
										name="gender"
										id='male'  
										value="Male"
										checked={props.data.gender==='Male'}
										onChange={props.handleChange}/>
									Male
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input 
									type="radio" 
									className="form-check-input col-6" 
									name="gender" 
									id='female'
									value="Female"
									checked={props.data.gender==='Female'}
									onChange={props.handleChange}/>
								<label 
									htmlFor="female" 
									className="form-check-label">
									Female
								</label>
							</div>
						</div>

						<div className="row m-1">
							<select name="destination" value={props.data.destination} onChange={props.handleChange}>
								<option value="">-----Select Location-----</option>
								<option value="Germany">Germany</option>
								<option value="Norway">Norway</option>
								<option value="North Pole">North Pole</option>
								<option value="France">France</option>
							</select>
						</div>	

						<div className="form-check">
							<input 
								type="checkbox" 
								className="form-check-input"
								name="isVegan"
								onChange={props.handleChange}
								checked={props.data.isVegan}
								/>
							<label 
								htmlFor="isVegan" 
								className="form-check-label">
								Vegan
							</label>
						</div>
						<div className="form-check">
							<input 
								type="checkbox" 
								className="form-check-input"
								name="isKosher"
								onChange={props.handleChange}
								checked={props.data.isKosher}
								/>
							<label 
								htmlFor="isKosher" 
								className="form-check-label">
								Kosher
							</label>
						</div>
						<div className="form-check">
							<input 
								type="checkbox" 
								className="form-check-input"
								name="isLactoseFree"
								onChange={props.handleChange}
								checked={props.data.isLactoseFree}
								/>
							<label 
								htmlFor="isLactoseFree" 
								className="form-check-label">
								Lactose Free
							</label>
						</div>

						<button className='m-1 mt-3'>Submit</button>
					</div>
				</form>
			</div>
			<div className="col-12">
				<hr/>
				<h2>Entered Information:</h2>
				<h5>Name: {props.data.firstName} {props.data.lastName}</h5>
				<h5>Age: {props.data.age}</h5>
				<h5>Gender: {props.data.gender}</h5>
				<h5>Destination: {props.data.destination}</h5>
				<h5>Dietary Restrictions: </h5>
					<table className="table">
						<thead>
							<th scope='col'>Vegan</th>
							<th scope='col'>Kosher</th>
							<th scope='col'>Lactose Free</th>
						</thead>
						<tbody>
							<tr>
								<td>{props.data.isVegan ? "Yes" : "No"}</td>
								<td>{props.data.isKosher ? "Yes" : "No"}</td>
								<td>{props.data.isLactoseFree ? "Yes" : "No"}</td>
							</tr>
						</tbody>
					</table>
			</div>
		</div>
	)
}

export default FormComponent;