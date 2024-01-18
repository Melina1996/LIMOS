let myFirstCheckbox = document.querySelector("#uppercase")

let mySecondCheckbox = document.querySelector("#lowercase")

let myThirdCheckbox = document.querySelector("#numbers")

let myFourthCheckbox = document.querySelector("#symbols")

let allCheckboxes = [myFirstCheckbox,mySecondCheckbox,myThirdCheckbox,myFourthCheckbox]

let myBtn = document.querySelector("#generate-password")

let inputWithPassword = document.querySelector(".my-password")


//all my different options
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseLetters = upperCaseLetters.toLowerCase()
let numbers = "0123456789"
let symbols = "!@#$%^&*()"

let allOptions = []


//select the input number field
let valueNumber = document.querySelectorAll("input[type=number]")

//my password to be generated is equal to the number value
let passwordLength

let myPassword = "";


function checkBoxes(){
        if(myFirstCheckbox.checked == true){
            allOptions.push(upperCaseLetters)
        }

        if(mySecondCheckbox.checked == true){
            allOptions.push(lowerCaseLetters)
        }

        if(myThirdCheckbox.checked == true){
            allOptions.push(numbers)
        }

        if(myFourthCheckbox.checked == true){
            allOptions.push(symbols)
        }
    console.log(allOptions)
}

function password(){
    for (var i = 0; i < passwordLength; i++) {
        let randomNumberOne = Math.floor(Math.random() * allOptions.length);
        let myOption = allOptions[randomNumberOne]
        let randomNumberTwo = Math.floor(Math.random() * myOption.length);
        myPassword += myOption.substring(randomNumberTwo, randomNumberTwo +1);
    }
}

myBtn.addEventListener("click",()=>{
    passwordLength = document.querySelector("input[type=number]").value
    console.log(passwordLength)
    checkBoxes()
    password()
    inputWithPassword.innerText = myPassword
    allOptions = []
    myPassword = ""
})

