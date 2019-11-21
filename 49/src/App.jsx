import React from 'react';
import Header from './components/Header.jsx'
import MemeGenerator from './components/MemeGenerator.jsx'
import './styles.css'

function App(){
	return(
		<div className="container">
			<Header/>
			<MemeGenerator/>
		</div>
	)
}


export default App;