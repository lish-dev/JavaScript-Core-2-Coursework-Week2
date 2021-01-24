function buttonColors() {
    let content = document.querySelector("#content");
    let firstButton = document.getElementById("blueBtn");
    let secondButton2 = document.getElementById("orangeBtn");
    let thirdButton3 = document.getElementById("greenBtn");
    let bigSquare = document.getElementsByClassName("bigSquare");
    let giveMoney = document.getElementById("giveMoney");
    let charity = document.getElementById("charity");
    firstButton.addEventListener("click", event => {
        bigSquare[0].style.backgroundColor = `#588fbd`;
        giveMoney.style.backgroundColor = `#ffa500`;
        charity.style.backgroundColor = `black`;
        charity.style.color = "white";
       })
   secondButton2.addEventListener("click", event => {
        bigSquare[0].style.backgroundColor = `#f0ad4e`;
        giveMoney.style.backgroundColor = `#5751fd`;
        charity.style.backgroundColor = `#31b0d5`;
        charity.style.color = "white";
   })
   thirdButton3.addEventListener("click", event =>{
        bigSquare[0].style.backgroundColor = `#87ca8a`;
        giveMoney.style.backgroundColor = `black`;
        charity.style.backgroundColor = `#8c9c08` ;
        charity.style.color = "white";
})
}

buttonColors();


function formValidation(){
formInput.addEventListener("click",formValidation)
for (let i = 0; i < form.length; i++) {
    let subBtn = document.getElementById("entertothemagicland");
    function formValidation() {
        var formInput = document.getElementsByClassName("form-control");
        for (let i= 0; i< formInput.length; i++) {
            if (!(formInput[i].value).length > 0){
                formInput[i].style.backgroundColor = "#ffb1ad";
            };
        };
        let email = formInput[0].value;
        // email  is just a string
        console.log(email);
            if (!email.includes("@")){
             formInput[0].style.backgroundColor = "#ffb1ad";
        }
    }
   //  event that occurs on click of submit with a prevention of refresh
     subBtn.addEventListener("click", function(event){
         event.preventDefault();
}


 formValidation();