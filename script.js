let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let Numbers = document.getElementById("Numbers");
let lowercase = document.getElementById("lowercase");
let UpperCase = document.getElementById("UpperCase");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");


//Showing input slideer value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click',()=>{
    passBox.value = generatepassword();
})

let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//function to generate password

function generatepassword(){
    let genPassword = "";

    genPassword = Math.floor(Math.random() * upperchars.length);
    return genPassword;
}