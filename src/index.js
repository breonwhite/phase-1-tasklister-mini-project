document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#main-content").addEventListener("submit", (e) => {
    e.preventDefault();
    handleToDo(document.querySelector('input').value);
  })
});

function handleToDo(todo){
  console.log(todo)
  let li = document.createElement(`li`)
  let btn = document.createElement(`button`)
  btn.addEventListener('click', handleDelete)
  btn.textContent = `Remove Todo`
  li.textContent = `${todo} `
  li.appendChild(btn)
  document.getElementById(`tasks`).appendChild(li)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}