import React from 'react';
import ContactCard from './components/contact-card.jsx';


function App(){
	return(
		<div className="container">
			<ContactCard 
				contact={{
					name:"Mr. Whiskerson",
					imgUrl:"http://placekitten.com/300/200",
					phone:"(212) 555-0223",
					email:"mr.whiskerz@gmail.com"
				}}
			/>
			<ContactCard 
				contact={{
					name:'Fluffykins',
					imgUrl:'http://placekitten.com/400/200',
					phone:'(212) 555-2535',
					email:'fluffy@gmail.com'
				}}
				
			/>
			<ContactCard
				contact={{ 
					name:'Destroyer',
					imgUrl:'http://placekitten.com/400/300',
					phone:'(212) 555-9831',
					email:'ofworlds@gmail.com'
				}}
			/>
			<ContactCard 
				contact={{
					name:'Felix', 
					imgUrl:'http://placekitten.com/200/100', 
					phone:'(212) 555-2382',
					email:'thecat@gmail.com'
			}}
			/>

		</div>
		)
}

export default App;