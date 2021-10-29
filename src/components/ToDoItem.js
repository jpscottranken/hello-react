import React from "react";

function ToDoItem(props) {
//	console.log(todos);
	const completedStyle = {
		fontStyle: "italic",
		color: "#cdcdcd",
		textDecoration: "line-through"
	}

		return (
			<div className="todo-item">
				  <p style={props.item.completed ? completedStyle : null}>
					  {props.item.text}
				  </p>
				  <input 
				  		 type="checkbox" 
				  		 checked={props.item.completed}
						 onChange={() =>
								props.handleChange(props.item.id)} 
				  />
			</div>
		)
}

export default ToDoItem