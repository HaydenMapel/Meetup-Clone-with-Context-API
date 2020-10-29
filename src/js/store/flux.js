const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			months: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			],
			events: [
				{
					ID: 36,
					post_content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "Lorem Event",
					meta_keys: {
						day: "2018,04,28",
						time: "07:00:00",
						_groupId: 9,
						_rsvpNo: ["robert", "jjtime", "username2"],
						_rsvpYes: ["cheeselover", "neweradude", "james1996"]
					}
				},
				{
					ID: 37,
					post_content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "Ipsum Event",
					meta_keys: {
						day: "2018,04,29",
						time: "10:00:00",
						_groupId: 10,
						_rsvpNo: ["john", "kyle", "christine"],
						_rsvpYes: ["myles", "nikki", "ollie"]
					}
				},
				{
					ID: 38,
					post_content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "Dolor Event",
					meta_keys: {
						day: "2018,05,01",
						time: "14:00:00",
						_groupId: 9,
						_rsvpNo: ["cheeselover", "neweradude", "james1996"],
						_rsvpYes: ["robert", "jjtime", "username2"]
					}
				}
			],
			Groups: [
				{
					ID: 9,
					post_content: "The nicest Meetup ever",
					post_title: "Tech Enthusiasts",
					members: ["robert", "jjtime", "username2", "cheeselover", "neweradude", "james1996"]
				},
				{
					ID: 10,
					post_content: "The meanest Meetup ever",
					post_title: "Food Friends",
					members: ["john", "kyle", "christine", "myles", "nikki", "ollie"]
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
			getGroups: () => {
				return getStore().Groups;
			},
			getEvents: () => {
				return getStore().events;
			},
			getGroup: id => {
				const groups = getStore().Groups;
				id = parseInt(id);
				let group = {};

				groups.forEach(element => {
					if (id === element.ID) {
						group = element;
					}
				});

				return group;
			},
			getEvent: id => {
				const groups = getStore().events;
				id = parseInt(id);
				let event = {};

				groups.forEach(element => {
					if (id === element.ID) {
						event = element;
					}
				});

				return event;
			},
			toAMPM: timeString => {
				const timeString12hr = new Date("1970-01-01T" + timeString + "Z");
				return timeString12hr.toLocaleTimeString(
					{},
					{ timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
				);
			}
		}
	};
};

export default getState;
