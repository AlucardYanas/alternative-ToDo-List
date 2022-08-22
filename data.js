const data = [{
        id: "qjlk5h6gmpq",
        description: 'сходить погулять',
        completed: false
    },
    {
        id: "2s1r6r8z4qs",
        description: "сходить в магазин",
        completed: false
    }
];

const generateId = () => Math.random().toString(36).slice(2)

function addTask(description) {
    let task = {};
    task.id = generateId()
    task.description = description
    task.completed = false
    data.push(task)
}

function deleteTask(id) {
    let taskIndex = data.findIndex(task => task.id === id);
    data.splice(taskIndex, 1)
}



deleteTask("2s1r6r8z4qs")

console.log(data)