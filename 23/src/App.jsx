import React from 'react';

import productsData from './vschoolProducts.js';
import Product from './components/Product.jsx';

function App(){
	const productComponents = productsData.map(item=><Product key={item.id} product={item}/>);
	return (
		<div className="container">
			<div className="row flex">
				{productComponents}
			</div>
		</div>	
	)
}


export default App;