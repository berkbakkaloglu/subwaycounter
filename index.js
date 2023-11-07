
let countEl = document.getElementById("count-el")
let saveEl =  document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}
/* function increment() {
    count += 1
    
    document.getElementById("count-el").innerText = count
    
} */



function save() {
    
    
    let savings = count + " - "
    saveEl.textContent += savings
    count= 0
    countEl.textContent = count
    
    
    
}
/*  also could be 
 

console.log(countEl)

let count = 0


 */





/* let welcomeEL = document.getElementById("welcome-el")
let name = "Berk"
let greeting = "Welcome back"
let message = greeting +" "+  name
welcomeEL.innerText = message 
console.log(welcomeEL.innerText) */