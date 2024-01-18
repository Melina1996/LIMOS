
//select the input number field
let valueNumber = document.querySelectorAll("input[type=number]")

console.log(valueNumber)

//my password to be generated is equal to the number value
let passwordLength = valueNumber.value

let myFirstCheckbox = document.querySelector("#uppercase")

myFirstCheckbox.addEventListener("click",()=>{
    console.log(myFirstCheckbox.checked)
})

let mySecondCheckbox = document.querySelector("#lowercase")

let myThirdCheckbox = document.querySelector("#numbers")

let myFourthCheckbox = document.querySelector("#symbols")
