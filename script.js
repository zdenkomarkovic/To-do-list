const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("button-add");
const list = document.getElementById("ul-tasks");

btnAdd.addEventListener("click", createTask);
function createTask() {
  if (inputTask.value == "") {
    alert("Please type the task");
  } else {
    const line = document.createElement("li");
    line.innerHTML = `${inputTask.value}. `;
    list.appendChild(line);
    line.addEventListener("click", function () {
      console.log("hgfdsa");
      this.classList.toggle("checked");
    });

    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    btnDelete.className = "delete";
    line.appendChild(btnDelete);
    btnDelete.addEventListener("click", taskDelete);
  }
  inputTask.value = "";
}
function taskDelete() {
  this.parentNode.remove();
}
