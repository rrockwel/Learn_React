import React from 'react';
import '../styles.css'


function TodoItem(props){
	let styles={}
	let styles2={}
	return (
		<div className="todo-item m-2" style={props.item.completed ? {backgroundColor: 'blue',color:'red'}:{backgroundColor:'red',color:'blue'}}>
			<input type='checkbox' id={props.item.id} className='m-2' checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}/>
			<label style={props.item.completed ? styles : styles2}className='form-check-label'>{props.item.text}</label>
		</div>
	)
}

export default TodoItem;