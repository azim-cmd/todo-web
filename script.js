const toDoTasks = [{name:'fresh hona', dueDate:'2025-10-5'},
                   {name:'brush karna', dueDate:'2025-10-5'}];

const toDoInput = document.querySelector('.task-input');
const toDoDueDate = document.querySelector('.task-due-date');

function addingTasks(){
  const toDoValue = toDoInput.value;
  const dueDate = toDoDueDate.value;
  toDoTasks.push({name: toDoValue, dueDate: dueDate});
  console.log(toDoTasks);
  toDoInput.value = '';
  showingToDoTasks();
}

showingToDoTasks();

function showingToDoTasks(){
  let ToDoTasksList = ``;

  for(let index = 0; index < toDoTasks.length; index++){
    let todoObject = toDoTasks[index];
    let name = todoObject.name;
    let dueDate = todoObject.dueDate;
    let todoHtml = `<div class="task">
                        <p>${name}</p> <p class="date-class">${dueDate}</p>
                        <button class="delete-task-btn" onclick="btnDeleteTask('${todoObject}')">delete
                        </button>
                    </div>`;
    ToDoTasksList = ToDoTasksList + todoHtml;
  }
  document.querySelector('.task-list').innerHTML = ToDoTasksList;
}



function btnDeleteTask(task){
  toDoTasks.splice(task, 1);
  showingToDoTasks();
}
