import React from 'react';

function TodoItem(props){
	return(
		<div className="card m-3 text-center border-info bg-dark text-white todo-item">
			<input type="checkbox" checked={props.item.completed}/><p>{props.item.text}</p>
		</div>
		)
}

export default TodoItem;
