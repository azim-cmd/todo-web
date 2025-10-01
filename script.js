const toDoTasks = [];

const toDoInput = document.querySelector('.task-input');


function addingTasks(){
  const toDoValue = toDoInput.value;
  toDoTasks.push(toDoValue);
  console.log(toDoTasks);
  toDoInput.value = '';
}