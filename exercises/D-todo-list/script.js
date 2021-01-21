function todoList(routineList) {
    let content = document.querySelector("#content");
    let ul = document.createElement("ul");
    routineList.forEach(element => {
      let li = document.createElement('li');
      li.innerText = element.todo;
      li.addEventListener("click", event =>{
        event.preventDefault();
        if(li.style.textDecoration === "line-through"){
          li.style.textDecoration = "none"
        } else {
          li.style.textDecoration = "line-through"; 
        }
      })
        ul.appendChild(li);
  })
    content.appendChild(ul); 
    }

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);