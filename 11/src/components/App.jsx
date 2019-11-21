import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

function App (){
	return (
		<div>
			<Nav/>
			<MainContent/>
			<Footer/>
		</div>
	)
}

export default App;