  function listOfColours(colours) {
    let content = document.querySelector("#content");
    let select = document.createElement("select");
    let pea = document.createElement("h1");
    colours.forEach(element => {
      let option = document.createElement("option");
      option.value = element;
      option.innerText = element;
      select.appendChild(option);
  select.addEventListener("click", event =>{
        event.preventDefault();
        console.log(event.target.value);
        if(event.target.value === element){
         pea.innerHTML = `you have selected: ${element}`
        }
      })
    })
  content.appendChild(pea);
    content.appendChild(select);
  }


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
