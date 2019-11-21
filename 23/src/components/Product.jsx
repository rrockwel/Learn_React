import React from 'react';

function Product(props){



	return (
		<div className="card col-4 border-primary m-2">
			<div className="card-body">
				<h3>{props.product.name}</h3>
				<h3>{props.product.price.toLocaleString('en-us',{style:'currency',currency:'USD'})}</h3>
				<p>{props.product.description}</p>
			</div>
		</div>
		)
}


export default Product;