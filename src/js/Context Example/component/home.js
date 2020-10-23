import React, { useContext } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import context
import { MyContext, Context } from "../store/AppContext.js";

//create your first component
export function Home() {
	let { todos, setTodos } = useContext(Context);
	console.log(todos);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<ul>
				{todos.store.todos.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

// export default MyContext(Home);
