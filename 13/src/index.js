import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import 'styles.css'

function App(){
	return(
		<div>
			<Header/>
			<MainContent/>
			<Footer/>
		</div>
		)
}

ReactDOM.render(<App/>, document.getElementById('root'));
