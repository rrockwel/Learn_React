import React from 'react';
import ReactDOM from 'react-dom';
import Joke from './components/joke.jsx';
import './styles.css'

function App(){
	return (
		<div className="container">
			<div className="row">
				<Joke joke={{
					answer:"It's hard to explain puns to kleptomaniacs because they always take things literally"
				}}
				/>
				<Joke joke={{
					question:'What goes up and down but does not move?',
					answer:'Stairs'
					}}
				/>
				<Joke joke={{
					question:'Why did the picture go to jail?',
					answer:'Because it was framed.'
					}}
				/>
				<Joke joke={{
					question:'What gets wetter the more it dries?',
					answer:'A towel.'
					}}
				/>
				<Joke joke={{
					question:'Why do bicycles fall over?',
					answer:'Because they are two-tired!'
					}}
				/>
				<Joke joke={{
					question:'Why was the broom late?',
					answer:'It over swept!'
					}}
				/>
			</div>
		</div>
		)
}

ReactDOM.render(<App/>,document.getElementById('root'));