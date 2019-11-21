import React from 'react';

function TodoItem(props){
	return(
		<div className='todo-item'>
			<input type="checkbox" onChange={()=>console.log('change')}/>
			<p>{props.item.text}</p>
		</div>
	)
}

export default TodoItem;