
document.addEventListener("DOMContentLoaded", () => {

  const createtask = document.getElementById('create-task-form')
  createtask.addEventListener('submit',handleSubmit)


});

function handleSubmit(e){
  e.preventDefault()
  createelement(e.target['new-task-description'].value);

}

function createelement(event){
  let li = document.createElement('li')
  let tasks = document.getElementById('tasks')
  li.textContent = `${event} `
  btn = document.createElement('button')
  //btn.addEventListener('click', (e) => e.target.parentNode.remove()) //btn.parentNode.remove())
  btn.addEventListener('click', () => tasks.removeChild(li))
  btn.textContent = 'x'
  li.appendChild(btn)
  tasks.appendChild(li)

}

// function hundledelete(){

// }




// const text = document.getElementById("new-task-description")
// const tasks = document.getElementById('tasks')
// const textcnt = text.textContent 
// text.appendChild(textcnt)

// console.log(text)
