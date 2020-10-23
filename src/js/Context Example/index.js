//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { MyContext } from "./store/AppContext.js";

const Wrapped = () => (
	<MyContext>
		<Home />
	</MyContext>
);

//render your react application
ReactDOM.render(<Wrapped />, document.querySelector("#app"));

// import React from "react";
// import { render } from "react-dom";
// import PropTypes from "prop-types";

// /*
//   This Will be the global state of the application
//   and here we are initializing it with some todo's
// */
// const MyContext = React.createContext(null);

// /*
//   Create a "Provider" that uses the Context
// */
// class ThemeProvider extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			store: {
// 				todos: ["Make the bed", "Take out the trash"]
// 			},
// 			actions: {
// 				addTask: title =>
// 					this.setState({
// 						store: { todos: this.state.store.todos.concat(title) }
// 					})
// 			}
// 		};
// 	}

// 	render() {
// 		return (
// 			<MyContext.Provider value={this.state}>
// 				{this.props.children}
// 			</MyContext.Provider>
// 		);
// 	}
// }

// //Validate props
// ThemeProvider.propTypes = {
// 	children: PropTypes.any
// };

// /*
//   Asuming this is one of your application views, you can add
//   as many components that you like, all of them will have access
//   to the global context.
// */
// const MyView = () => (
// 	<ThemeProvider>
// 		<TodoList />
// 	</ThemeProvider>
// );

// /*
//   On any component, whenever you want to have use the store,
//   you have to start by waping everything inside a Consumer tag
// */
// const TodoList = () => (
// 	<MyContext.Consumer>
// 		{context => (
// 			<div>
// 				{context.store.todos.map((task, i) => (
// 					<li key={i}>{task}</li>
// 				))}
// 				<button
// 					onClick={() =>
// 						context.actions.addTask(
// 							"I am the task " +
// 								parseInt(context.store.todos.length + 1)
// 						)
// 					}>
// 					+ add
// 				</button>
// 			</div>
// 		)}
// 	</MyContext.Consumer>
// );

// render(<MyView />, document.getElementById("app"));
