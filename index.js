// import * as addTask from '/data.js';

function renderData(toDoList) {
    const container = document.getElementById("todo-app");
    container.innerHTML = "";
    const result = toDoList.map(item => item.attribute);
    const newDiv = document.createElement('div');
    newDiv.innerHTML = result.description;
    newDiv.id = result.id;
    container.append(newDiv);
    // container.append(result);
    let doneButton = document.createElement('div');    
    doneButton.textContent = 'Удалить';
    doneButton.classList.add('delete-button');
    container.append(doneButton);
}


document.getElementById("button").addEventListener("click", () => {
    addTask(document.getElementById("input").value);
    renderData(data);
});

const deleteButton = document.querySelectorAll('delete-button');

deleteButton.addEventListener("click", () => {
    deleteTask(newDiv.id);
    renderData(data);
});


renderData(data);