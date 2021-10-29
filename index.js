document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#activity-form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        clearTable()
        fetchFacilities()
    })  

    const buttonClearAll = document.querySelector('#Clear')
    buttonClearAll.addEventListener('click', () => handleClearAll())

    const buttonSelectAll =document.querySelector("#Select All")
    buttonSelectAll.addEventListener('click', () => handleSelectAll())
})
function clearTable(){
    const tableBody = document.getElementById('table-body')
    tableBody.innerHTML = ' '                       //innerHTML?
}
function fetchFacilities() {
    fetch("http://localhost:3000/RECDATA")
        .then(res => res.json())
        .then((facilitiesArray => proccessData(facilitiesArray))
    )
}
function proccessData(facilitiesArray){
    const arrayOfCheckedInputs = readCheckBoxes()
    facilitiesArray.forEach(facilityObj => sortFacility(facilityObj, arrayOfCheckedInputs))
}
function readCheckBoxes(){
    const arrayOfAllInputs = document.getElementsByTagName('input')
    let arrayOfCheckedInputs = []
    for(let i = 0; i < arrayOfAllInputs.length - 3; i++) {  //how to get elemet Checkbox by type?
        if(arrayOfAllInputs[i].checked === true) {
            arrayOfCheckedInputs.push(arrayOfAllInputs[i].value)
        }
    }
    return arrayOfCheckedInputs
}
function sortFacility(facilityObj, arrayOfCheckedInputs) {
    arrayOfCheckedInputs.forEach(checkedInputs => {
                                        if(facilityObj.FacilityTypeDescription === checkedInputs){
                                             console.log(facilityObj)
                                             renderFacility(facilityObj)}
                                         }
                                )
}
function renderFacility(facilityObj){
    const tableBody = document.getElementById("table-body")
    let tableRow = document.createElement("tr"); //is it ok to use innerHTML?
    tableRow.innerHTML = `  
        <td>${facilityObj.FacilityName}</td>
        <td>${facilityObj.FacilityTypeDescription}</td>
        <td>${facilityObj.FacilityPhone}</td>
        <td>Like</td>
    `
    tableBody.appendChild(tableRow)  
}
function handleClearAll(){
    const form = document.querySelector('#activity-form')
    form.reset() 
    clearTable()
}
function handleSelectAll(){
    
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

// function proccessData(facilitiesArray){
//     const arrayOfCheckedInputs = readCheckBoxes()

//     for(let i = 0; i < facilitiesArray.length; i++) {      //instead of forEach?
//         sortFacility(facilitiesArray[i], arrayOfCheckedInputs);
//     }
// }

// function sortFacility(facilityObj, arrayOfCheckedInputs) {
//     for(let i = 0; i < arrayOfCheckedInputs.length; i++){
//         if(facilityObj.FacilityTypeDescription === arrayOfCheckedInputs[i]){
//             console.log(facilityObj)
//             renderFacility(facilityObj)}
//     }
// }