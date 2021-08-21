var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");

function clickHandler(){
    console.log("Clicked!");
    console.log("Input: ", textInput.value);
}

btnTranslate.addEventListener("click", clickHandler)


