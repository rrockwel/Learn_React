import React from 'react';

import TodoItem from './components/TodoItem.jsx';
import todosData from './todosData.js';

function App(){
	const todosComponents = todosData.map(item=><TodoItem key={item.id} item={item}/>);
	return(
		<div className="container mt-5">
			<div className="border-primary bg-light todo-list">
			<h1>Todo List</h1>
				{todosComponents}
			</div>	
		</div>
	)	
}

export default App;