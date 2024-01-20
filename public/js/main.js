//declare variables for all of my checkboxes
let myFirstCheckbox = document.querySelector("#uppercase")

let mySecondCheckbox = document.querySelector("#lowercase")

let myThirdCheckbox = document.querySelector("#numbers")

let myFourthCheckbox = document.querySelector("#symbols")

let allCheckboxes = [myFirstCheckbox,mySecondCheckbox,myThirdCheckbox,myFourthCheckbox]

//variable for my button
let myBtn = document.querySelector("#generate-password")

//my paragraph which will contain password ultimately
let inputWithPassword = document.querySelector(".my-password")


//all my different options are stocked in a variable
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseLetters = upperCaseLetters.toLowerCase()
let numbers = "0123456789"
let symbols = "!@#$%^&*()"

//create an array for all of my different options
let allOptions = []


//select the input number field
let valueNumber = document.querySelectorAll("input[type=number]")

//my password to be generated is equal to the number value
let passwordLength

let myPassword = "";

//function to check which boxes have been checked
function checkBoxes(){
    //check which checkboxes have been checked by using ".checked" and push them to array with my options if checked
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
}

//function for the password creation
function password(){
    //LOOP defined by length of the password length selected
    for (var i = 0; i < passwordLength; i++) {
        //for each character a random index is selected to chose one of the options checked by the user
        let randomNumberOne = Math.floor(Math.random() * allOptions.length);
        let myOption = allOptions[randomNumberOne]
        //a second random number is defined to select the character of my string of my option variable
        let randomNumberTwo = Math.floor(Math.random() * myOption.length);
        //password is pieced together by all the substrings randomly selected
        myPassword += myOption.substring(randomNumberTwo, randomNumberTwo +1);
    }
}

//event listener for my button that calls my two functions and shows in the end the password
myBtn.addEventListener("click",()=>{
    //emtpy my variables for the next round
    allOptions = []
    myPassword = ""
    passwordLength = document.querySelector("input[type=number]").value
    console.log(passwordLength)
    checkBoxes()
    password()
    //show new created password
    inputWithPassword.innerText = myPassword
})

//there seems to be a problem: Document is not focused
function clipboard() {

   // Copy the text inside the text field
  navigator.clipboard.writeText(myPassword);

  // Alert the copied text
  alert("Copied the text: " + myPassword);

}

