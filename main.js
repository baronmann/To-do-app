const input = document.querySelector('.new-task-input');
const  submit = document.querySelector('.new-input-submit');
const todos = [];
const task = document.querySelector('#task')


submit.addEventListener('click',function (e){
    e.preventDefault()
    
    const todo = input.value
    todos.push(todo)
    todos.map( (element,index)=>{
        return `<div key=${index} class="task">
        <div class="content">
            <input
            type="text"
            class="text"
            value=${element}
            readonly
            />
        </div>
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    </div> `
    })


})