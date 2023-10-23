(function () {
	let tasks = [];

	const tasklist = document.getElementById('list');
	const addTaskInput = document.getElementById('add');
	const tasksCounter = document.getElementById('total-tasks');


	async function fetchToDos() {
		// fetch("https://jsonplaceholder.typicode.com/todos")
		// .then(function(response){
		// 	return response.json();
		// }).then(function(data){
		// 	tasks=data.slice(0,10);
		// 	renderlist()
		// })
		try {
			const response = await fetch("https://jsonplaceholder.typicode.com/todos");
			const data = await response.json();
			tasks = data.slice(0, 10)
			renderlist();
		} catch (err) {
			console.log(err);
		}
	}

	function addTasktoDOM(task) {
		const li = document.createElement('li');
		li.innerHTML = `
		<input type="checkbox" id="${task.id}" ${task.completed ? 'checked': " "} class="custom-checkbox">
		<label for="${task.id}">${task.title}</label>
		<img src="./bin.jpg" class="delete" data-id="${task.id}" />
		`
		tasklist.append(li);
	}

	function renderlist() {
		tasklist.innerHTML = "";
		for (let i = 0; i < tasks.length; i++) {
			addTasktoDOM(tasks[i])
		}
		tasksCounter.innerHTML = "total " + tasks.length + " tasks";
	}

	function toggleTask(taskid) {
		let completedTask = tasks.find(function (task) {
			return task.id === Number(taskid)
		})
		if (completedTask) {
			completedTask.completed = !completedTask.completed;
			renderlist();
			showNotification("task has been toggled successfully");
		} else {
			showNotification("task was NOT TOGGLED task not found");
		}

	}

	function deleteTask(taskid) {
		const newtasks = tasks.filter(function (task) {
			return task.id !== Number(taskid);
		})
		tasks = newtasks;
		renderlist();
		showNotification("task has been deleted successfully");
		return
	}

	function addTask(task) {
		if (task) {
			tasks.push(task);
			renderlist();
			showNotification("task has been added successfully");
			return;
		}

	}

	function showNotification(text) {
		alert(text);
	}

	function handleInput(event) {

		if (event.key === "Enter") {
			const text = event.target.value;
			console.log('text', text)
			if (!text) {
				showNotification('Please give some input');
				return
			}
			const task = {
				title: text,
				id: Date.now(),
				completed: false
			}
			event.target.value = "";
			addTask(task);
		}

	}

	function handleClickListener(event) {
		const target = event.target;
		console.log('target', target.id);
		if (target.className === "delete") {
			let targetid = target.dataset.id;
			deleteTask(targetid);
			return;
		} else if (target.className === "custom-checkbox") {
			let targetid = target.id;
			toggleTask(targetid)
			return;
		}
	}


	function initialize() {
		fetchToDos()
		document.addEventListener("click", handleClickListener);
		addTaskInput.addEventListener("keydown", handleInput);
	}
	initialize();
})()