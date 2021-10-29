document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#activity-form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event)
        handleSubmit(event)
    })
    
})
function handleSubmit(event){
    const arrayOfInputs = document.getElementsByTagName('input')
    console.log(arrayOfInputs)
    for(let i = 0; i < arrayOfInputs.length - 2; i++){
        console.log(`${arrayOfInputs[i].name}:` + arrayOfInputs[i].checked)
    }
}
fetchFacilities();

function fetchFacilities(){
    fetch("http://localhost:3000/RECDATA")
    .then(res => res.json())
    .then(facilitiesArray => facilitiesArray.forEach(facilityObj => {
        renderFacility(facilityObj)}))
}
let count = 0;
function renderFacility(facilityObj){
   
    if(facilityObj.FacilityTypeDescription === "Tree Permit"){
        
        const tableBody = document.getElementById("table-body")
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td>${facilityObj.FacilityName}</td>
            <td>${facilityObj.FacilityPhone}</td>
            <td>Like</td>
    `
        tableBody.appendChild(tableRow)
        
    }
}
function handleClearAllButton(){

}
// Facility type:
// 0: "Activity Pass"
// 1: "Archives"
// ? 2: "Campground"?
// 3: "Cemetery and Memorial"
// 4: "Construction Camp site"
// 5: "Facility"
// 6: "Federal"
// 7: "Kiosk"
// + 8: "Library"+
// + 9: "Museum"+
// + 10: "National Fish Hatchery"+
// 11: "Permit"
// 12: "State"
// 13: "Ticket Facility"
// +14: "Timed Entry" put like ticket+
// +15: "Tree Permit"+
// +16: "Visitor Center"+

// function fetchAreas(){
//     fetch("http://localhost:4000/RECDATA")
//     .then(res => res.json())
//     .then(areasArray => areasArray.forEach(areaObj => {
//         //console.log(areaObj)
//         renderArea(areaObj)}))
// }

// function fetchAreaAddress(){
//     fetch("http://localhost:5000/RECDATA")
//     .then(res => res.json())
//     .then(areaAddresssArray => areaAddresssArray.forEach(areaAddressObj => {
//        // console.log(areaAddressObj)

//         renderAreaAddress(areaAddressObj)}))
// }
// function renderArea(areaObj){
//     let area = document.createElement("li");
//     area.innerHTML = `
//     <h2>Area name: ${areaObj.RecAreaName}</h2>
//     <p>Area directions: ${areaObj.RecAreaDirections}</p>
//     `
//     document.querySelector("body").appendChild(area)
// }
// let arr= ["State", "one more state"]
// function renderAreaAddress(areaAddressObj){
//     mark = 0;
//     for(let i = 0; i < arr.length; i++){

//         if(arr[i] === `${areaAddressObj.PostalCode}`){
    
//             mark = 1;
//             break;
//         } 
//     }
//     if(mark === 0){

//         arr.push(`${areaAddressObj.PostalCode}`)
//     }   
//     console.log(arr.sort())
//     let areaAddress = document.createElement("li");
//     areaAddress.innerHTML = `
//     <h2>Recreation area ID: ${areaAddressObj.RecAreaID}</h2>
//     <h3>City: ${areaAddressObj.City}</h3>
//     <p>State: ${areaAddressObj.PostalCode}</p>
//     `
//     document.querySelector("body").appendChild(areaAddress)
// }

//fetchAreaAddress();
//fetchAreas();

//<p>${areaObj.RecAreaDirections}</p> <p>${areaObj.RecAreaDescription}</p>
//<h4>${areaObj.ParentOrgID}</h4> <h2>${areaObj.RecAreaName}</h2>
//<p>${areaObj.RecAreaDescription}</p> <h4>${areaObj.FacilityTypeDescription}</h4>
//<h4>${areaObj.Reservable}</h4> <h4>${areaObj.FacilityDescription}</h4>
