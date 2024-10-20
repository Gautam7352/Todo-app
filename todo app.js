let index = 2;

function addTodo() {
  //store the item from the input tag
  const input = document.getElementById("add").value.trim();

  //check if input is empty
  if (input === "") {
    alert("Please enter a todo item.");
    return;
  }

  const parentEl = document.getElementById("todos");

  //create new element
  const newTodo = document.createElement("div");
  newTodo.setAttribute("id", "todo-" + index);

  //create heading
  const heading = document.createElement("h4");
  heading.textContent = index + ". " + input;

  //create modify button
  const button1 = document.createElement("button");
  button1.textContent = "Modify";
  button1.setAttribute("onclick", "editTodo(" + index + ")");

  //create delete button
  const button2 = document.createElement("button");
  button2.textContent = "delete";
  button2.setAttribute("onclick", "deleteTodo(" + index + ")");

  //add the created element to page
  newTodo.appendChild(heading);
  newTodo.appendChild(button1);
  newTodo.appendChild(button2);

  parentEl.appendChild(newTodo);

  index++;
}


function editTodo(index) {
  const input = document.getElementById("mod").value.trim();

  const element = document.getElementById("todo-" + index);

  const h4 = document.createElement("h4");
  h4.innerHTML = index + ". " + input;

  const button = document.createElement("button");
  button.textContent = "Modify";
  button.setAttribute("onclick", "editTodo(" + index + ")");

  const button2 = document.createElement("button");
  button2.textContent = "delete";
  button2.setAttribute("onclick", "deleteTodo(" + index + ")");

  const newEl= document.createElement("div");
  newEl.setAttribute("id", "todo-" + index);
  newEl.appendChild(h4);
  newEl.appendChild(button);
  newEl.appendChild(button2);

  if (element) {
    element.parentNode.replaceChild(newEl, element);
  }

}

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  if (element) {
    element.parentNode.removeChild(element);
  }
}