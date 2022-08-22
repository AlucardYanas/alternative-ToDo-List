function renderData(toDoList) {
    const container = document.getElementById("todo-app");
    container.innerHTML = "";
    toDoList.forEach((element) => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = element.description;
        container.append(newDiv);
        let doneButton = document.createElement('div');
        doneButton.textContent = 'Удалить'
        doneButton.classList.add('delete-button')
        container.append(doneButton)
    });
}


document.getElementById("button").addEventListener("click", () => {
    addTask(document.getElementById("input").value)
    renderData(data);
});

document.getElementById("delete-button").addEventListener("click", () => {
    deleteTask()
    renderData(data);
});




renderData(data);