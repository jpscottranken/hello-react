import React, {Component} from "react";
import './App.css';
import ToDoItem from "./components/ToDoItem";
import todosData from "./todosData";

//	Changed from fbc to cbc line 7 below
class App extends Component {
	//	New stuff here
	constructor() {
		super();
		this.state = {
			todos: todosData
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {
        // 	Update state so that the item with the given id 
		//	"flips" completed from false to true (or vice-versa).

        //	Remember not to modify prevState directly, but rather
		//	to return a new version of state with the change you 
		//	want included in that update.
		//	(Think how you might use the .map method for this).

		//console.log("Changed", id)
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if (todo.id === id) {
					//todo.completed = !todo.completed
					return {
						...todo,
						completed: !todo.completed
					}
				}

				return todo
			})

			return {
				todos: updatedTodos
			}
		})
    }

	render() {
		const todoItems = this.state.todos.map(item =>
							<ToDoItem 
								key={item.id}
								item={item}
								handleChange={this.handleChange} />);

		const name = "Jeff Scott";
		//	Instantiate date object
		const d = new Date();
		let   h = checkTime(d.getHours());
		let   m = checkTime(d.getMinutes());
		let   s = checkTime(d.getSeconds());
		let  ap;
		
		const styles    = {};

		function startTime() {
			setTimeout(startTime, 1000);
		}
		  
		  function checkTime(i) {
			if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
			return i;
		  }
		
		//	Format date in dd/mm/yyyy format
		let   month  	= d.getMonth() + 1;
		let   day  		= d.getDate();
		let   year 		= d.getFullYear();
		
		// //	Add a.m. or p.m. depending on time of day
		if ((h >= 0) && (h < 12)) {
			ap = " a.m.";
		}
		else if ((h >= 12) && (h <= 23)) {
			ap = " p.m.";
		}
		
		//	Figure out welcome based on hour of day
		let   welcome;
		let   tod = d.getHours();
		if ((tod >= 0) && (tod < 12)) {
			styles.color = "#FFFF00";	//	Set color to bright yellow
			welcome = " Morning!";
		}
		else if ((tod >= 12) && (tod < 18)) {
			welcome = " Afternoon!";
			styles.color = "#0096FF";	//	Set color to bright blue
		}
		else if ((tod >= 18) && (tod <= 23)) {
			welcome = " Evening!";
			styles.color = "#A9A9A9";	//	Set color to dark gray
		}

		return (
			<div>
				<h1 style={styles}>Good {`${welcome}`}</h1>
				<h1>ToDo List for {`${name}`}</h1>
				<h3>Current Date: {`${month}/${day}/${year}`}</h3>
				<h3>Current time: {`${h}:${m}:${s} ${ap}`}</h3>
				<div className="todo-list">
					{todoItems} 	
				</div>
			</div>
		)
	}
}

export default App;
