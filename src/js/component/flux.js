const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			students: [
				{
					id: 1,
					name: "Daniel",
					classID: 1
				},
				{
					id: 2,
					name: "Chris",
					classID: 1
				},
				{
					id: 3,
					name: "Alejandro",
					classID: 2
				}
			],
			classes: [
				{
					id: 1,
					name: "Full-Stack Part-Time",
					desc: "full stack course in 14 weeks",
					roster: [1, 2]
				},
				{
					id: 2,
					name: "Full-Stack Full-Time",
					desc: "full stack course in 8 weeks",
					roster: [3]
				}
			]
		},
		actions: {
			getStudents: () => {
				return getStore().students;
			},
			getStudent: id => {
				const students = getStore().students;
				id = parseInt(id);
				let student = {};

				students.forEach(element => {
					if (id === element.id) {
						student = element;
					}
				});

				return student;
			},
			addStudent: (name, course) => {
				// console.log(name, course);
				//get the store
				let store = getStore();
				let sLength = store.students.length;
				let lastID = store.students[sLength - 1].id;
				// add student into students
				let newStudent = { id: lastID + 1, name: name, classID: course };
				store.students = [...store.students, newStudent];

				// add new student into the corresponding course
				let actions = getActions();
				let c = actions.getClass(course);
				c.roster = [...c.roster, newStudent.id];

				// update the store
				setStore(store);
				console.log(store);
			},
			getClasses: () => {
				return getStore().classes;
			},
			getClass: id => {
				const classes = getStore().classes;
				id = parseInt(id);
				let course = {};

				classes.forEach(element => {
					if (id === element.id) {
						course = element;
					}
				});

				return course;
			}
		}
	};
};

export default getState;
