const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [
				{
					ID: 36,
					post_content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "Lorem Event",
					meta_keys: {
						day: "20180428",
						time: "07:00:00",
						_groupId: 9,
						_rsvpNo: ["robert", "jjtime", "username2"],
						_rsvpYes: ["cheeselover", "neweradude", "james1996"]
					}
				}
			],
			Groups: [
				{
					ID: 9,
					post_content: "The nicest Meetup ever",
					post_title: "Tech Enthusiasts",
					members: ["robert", "jjtime", "username2", "cheeselover", "neweradude", "james1996"]
				}
			],
			session: {
				ID: 2,
				username: "theUser",
				user_friendly_name: "Joey",
				token: "qwerty12345asdfgzxcv"
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
