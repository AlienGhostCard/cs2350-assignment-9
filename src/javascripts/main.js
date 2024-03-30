//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// let initial_guests = [
//     {fname: "Aedan", lname: "Hernandez"},
//     {fname: "John", lname: "Doe"},
//     {fname: "Sara", lname: "Smith"}
// ]
// localStorage.setItem('guests', JSON.stringify(initial_guests))


function addGuest(event){
    event.preventDefault()
    let f = document.querySelector("#fname").value
    let l = document.querySelector("#lname").value
    
    let guests = getGuests()
    // make sure code is working
    console.log(guests)
    if(f && l){
        let guest = { fname: f, lname: l }
        // let guests = JSON.parse(localStorage.getItem('guest')) || []
        guests.push(guest)
        localStorage.setItem('guests', JSON.stringify(guests))
    }

    // this.reset()
    // document.querySelector("#myForm").reset()
    displayGuests()
}

function clearAll(){
    // show its working
    localStorage.clear()
    displayGuests()
}

function getGuests(){
    if(localStorage.getItem('guests') && localStorage.getItem("guests") != '[]'){
        return JSON.parse(localStorage.getItem('guests'))
    } else{
        return []
    }
}

function displayGuests(){
    let guests = getGuests()
    let guests_html = ""
    for(let g of guests){
        guests_html += `
  <div class="names">${g.fname}</div>
  <div class="names">${g.lname}</div>`
    }

    document.querySelector("#guestlist").innerHTML = guests_html
}

// document.querySelector("#addguest").onclick = addGuest
document.querySelector("#addguest").addEventListener("click", addGuest)
document.querySelector("#clearall").addEventListener("click", clearAll)

displayGuests()
