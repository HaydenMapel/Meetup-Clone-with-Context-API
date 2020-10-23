import React, { useState, createContext } from "react";

//create the context variable, we will use this in the children components to get the values
const Context = React.createContext(null);

// create the function that will wrap and pass the content to the rest of the app
const MyContext = PassedComponent => {
	const [todos, setTodos] = useState({
		store: {
			todos: ["Make the bed", "Take out the trash"]
		},
		actions: {
			getTodos: () => {
				return todos.store.todos;
			}
		}
	});

	// return the wrapper;
	return (
		<Context.Provider value={{ todos, setTodos }}>
			{PassedComponent.children}
		</Context.Provider>
	);
};

export { Context, MyContext };
