let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let Numbers = document.getElementById("Numbers");
let lowercase = document.getElementById("lowercase");
let UpperCase = document.getElementById("UpperCase");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copy = document.getElementById("copy");

//Showing input slideer value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click',()=>{
    passBox.value = generatepassword();
})

let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

//function to generate password

function generatepassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerchars : "";
    allChars += UpperCase.checked ? upperchars: "";
    allChars += symbols.checked ? allsymbols : "";
    allChars += Numbers.checked ? allnumbers : "";

    if (allChars== "" || allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++; 
    }
    return genPassword;
}
copy.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
        copy.innerText ="check";
        copy.title = "Password Copied";

        setTimeout(()=>{
            copy.innerHTML = "content_copy"
            copy.title = "";
        }, 3000)
    }
})