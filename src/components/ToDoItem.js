import React from "react";

function ToDoItem(props) {
//	console.log(todos);
		return (
			<div className="todo-item">
				  <p>{props.item.text}</p>
				  <input type="checkbox" 
				  		 checked={props.item.completed}
						 onChange={() =>
								props.handleChange(props.item.id)} />
			</div>
		)
}

export default ToDoItem