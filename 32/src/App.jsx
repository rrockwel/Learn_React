import React from 'react';

import todosData from './todosData.js';
import TodoItem from './components/TodoItem.jsx';


class App extends React.Component {
	constructor(){
		super();
		this.state={
			todos: todosData
		}
	}

	render(){
		const todoComponents = this.state.todos.map(item=><TodoItem key={item.id} item={item}/>);
		return(
			<div className='todo-list mt-5'>
				{todoComponents}
			</div>
		)
	}
}

export default App;