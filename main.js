var checkprog = 0;
const arr = [];
function addTodo(){
    // find the place where to append new todo
    let todoList = document.getElementsByClassName("todolist")[0]

// referencing the input tag and fetching value
let inputValue = document.getElementsByClassName("todoInput")[0]
let duedate = document.getElementsByClassName("todoDate")[0]
if(inputValue.value == "") {
    alert("No event entered");
    return false;
}
if(duedate.value == "") {
    alert("No due date entered");
    return false;
}
console.log(duedate.value)
console.log(inputValue.value)

// adding new todo
let compl = document.createElement("button")
compl.innerText = "Completed"
let newTodo = document.createElement("div")
newTodo.innerText = inputValue.value
let uniqueId = Math.random();
newTodo.classList.add(uniqueId);
newTodo.classList.add("todoclass");
// todoList.appendChild(newTodo);

// adding due date
let TodoDate = document.createElement("samp")
TodoDate.classList.add(uniqueId)
TodoDate.classList.add("date_table")
TodoDate.appendChild(document.createTextNode(duedate.value))
// todoList.appendChild(TodoDate);
newTodo.appendChild(TodoDate);

// adding delete button
let newTodoDelete = document.createElement("button")
newTodoDelete.innerText = "X"
newTodoDelete.setAttribute("id",uniqueId);
// todoList.appendChild(newTodoDelete);
newTodo.appendChild(newTodoDelete);

// in progress button 
let newTodoprogress = document.createElement("button")
newTodoprogress.innerText = "PROG"
newTodoprogress.setAttribute("class",uniqueId);
// todoList.appendChild(newTodoprogress);
newTodo.appendChild(newTodoprogress);
newTodoprogress.addEventListener('click',function progressTodo(event){
    checkprog = 1;
    console.log(checkprog);
    newTodo.classList.add("progressclass");
});

// mark done button
let markdone = document.createElement("button")
markdone.innerText = "DONE"
markdone.setAttribute("class",uniqueId);
markdone.addEventListener('click',function doneTodo(event){
    newTodo.classList.add("donestrike");
    newTodoDelete.classList.add("invisible");
    newTodoprogress.classList.add("invisible");
    TodoDate.classList.add("invisible");
    markdone.classList.add("invisible");
    // newTodo.classList.add("completed")
    newTodo.appendChild(compl);
});
// todoList.appendChild(markdone);
newTodo.appendChild(markdone);
todoList.appendChild(newTodo);
inputValue.value=""
duedate.value=""
arr.push(uniqueId);
newTodoDelete.addEventListener('click',deleteTodo);
}

function deleteTodo(event){
    // event target -> has reference to the trigger in this the button itself
    let uniqueId = event.target.id;
    for(var i=0;i<arr.length;i++){
        if(arr[i] == uniqueId){
            arr.splice(i,1);
        }
    }
    var referenceTodo = document.getElementsByClassName(uniqueId)[0];
    var referenceTodo2 = document.getElementsByClassName(uniqueId)[1];
    var referenceTodo3 = document.getElementsByClassName(uniqueId)[2];
    var referenceTodo4 = document.getElementsByClassName(uniqueId)[3];
    referenceTodo2.remove();
    referenceTodo.remove();
    referenceTodo3.remove();
    referenceTodo4.remove();
    event.target.remove();
}

// reference of button
let addButton = document.getElementsByClassName("addbutton")[0]
addButton.addEventListener("click", addTodo);

let clearButton = document.getElementsByClassName("clearAll")[0]
clearButton.addEventListener("click", clearButtonAll);

function clearButtonAll(){
    console.log(arr.length)
    for(var i = 0; i < arr.length; i++){
    let uniqueId = arr[i];
    var referenceTodo = document.getElementsByClassName(uniqueId)[0];
    var referenceTodo2 = document.getElementsByClassName(uniqueId)[1];
    var referenceTodo3 = document.getElementsByClassName(uniqueId)[2];
    var referenceTodo4 = document.getElementsByClassName(uniqueId)[3];
    var referenceTodo1 = document.getElementById(uniqueId);
    console.log(referenceTodo2);
    referenceTodo2.remove();
   
    referenceTodo1.remove();
    referenceTodo.remove();
    referenceTodo3.remove();
    referenceTodo4.remove();
    }
}