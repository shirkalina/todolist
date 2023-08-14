const tasks = document.querySelectorAll(".task");
const tasksBlock = document.querySelector(".tasks__block");
const btn = document.querySelector("button");
const newTaskInput = document.querySelector(".new-task");
// const fragment = document.createDocumentFragment();

console.log(tasks);

btn.addEventListener("click", createNewTask);

tasks.forEach((task) => task.addEventListener("click", checked));
// for (let task of tasks) {
//   task.addEventListener("click", checked);
//   console.log(tasks);
// }

function checked() {
  const checkbox = this.querySelector(".checkbox");
  checkbox.classList.add("checked");
  setTimeout(() => {
    this.remove();
  }, 500);

  this.removeEventListener("click", checked);
}

function createNewTask() {
  const newTaskValue = newTaskInput.value;

  if (newTaskValue != "") {
    const li = document.createElement("li");
    li.classList.add("task");
    const span = document.createElement("span");
    span.classList.add("checkbox");
    const p = document.createElement("p");
    p.classList.add("task__name");
    p.textContent = newTaskValue;

    li.append(span);
    li.append(p);

    tasksBlock.prepend(li);
    newTaskInput.value = "";
  }
}
