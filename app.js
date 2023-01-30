

//variables

const input =document.querySelector(".new-task-input");
const inputSubmit = document.querySelector(".new-input-submit");
const edit = document.querySelector(".edit");
const submit = document.querySelector(".submit");
const text = document.querySelector(".text");
const taskLi = document.querySelector("#task")
const form  = document.querySelector("#form");

todos = JSON.parse(localStorage.getItem(task)) || [];
localStorage.getItem('value')


//eventListeners

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    if(!task){
        alert("please add a a task"); 
        return;
    }

        todos.push(task);
        localStorage.setItem('todos', JSON.stringify('todos'));

        displayTodos()

    function displayTodos(){
    localStorage.setItem('value', task);
    taskEl = localStorage.getItem('value')
    
    const taskEl = document.createElement("div") ;
    taskEl.classList.add("task"); 
    
    const taskContentEl = document.createElement("div");
    taskContentEl.classList.add("content");

    taskEl.appendChild(taskContentEl);

    const taskInputEl = document.createElement("input");
    taskInputEl.classList.add("text");
    taskInputEl.type = "text";
    taskInputEl.value = task;
    taskInputEl.setAttribute("readonly", "readonly");
    localStorage.setItem('todos', JSON.stringify('todos'));

    taskContentEl.appendChild(taskInputEl);

    const taskActionEl = document.createElement("div");
    taskActionEl.classList.add("actions");

    const taskEditEl = document.createElement("button");
    taskEditEl.classList.add("edit")
    taskEditEl.innerHTML = "Edit"

    const taskDeleteEl = document.createElement("button")
    taskDeleteEl.classList.add("delete")
    taskDeleteEl.innerHTML = "Delete"

    taskActionEl.appendChild(taskEditEl);
    taskActionEl.appendChild(taskDeleteEl);
    
    taskEl.appendChild(taskActionEl);

    taskLi.appendChild(taskEl);
   

    input.value = "";
    }

    

    taskEditEl.addEventListener('click',() =>{
       if(taskEditEl.innerText.toLocaleLowerCase() == "edit"){
        taskInputEl.removeAttribute("readonly");
        taskInputEl.focus();
        taskEditEl.innerHTML = "Save";
        }else{
            taskInputEl.setAttribute("readonly","readonly");
            taskEditEl.innerText = "Edit";
    
        }
        
    })

    taskDeleteEl.addEventListener('click',() => {
        taskLi.removeChild(taskEl);
        localStorage.setItem('todos', JSON.stringify('todos'));
        displayTodos()

    })

    
 })