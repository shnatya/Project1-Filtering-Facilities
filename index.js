//when Submit pushed, clear the table and send fetch request  ????What to write in README?
//listen for buttons Clear All and Select All
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#activity-form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        clearTable()
        fetchFacilities()
    })  

    const buttonClearAll = document.querySelector('#Clear')
    buttonClearAll.addEventListener('click', () => handleClearAll())

    const buttonSelectAll =document.querySelector("#Select-All")
    buttonSelectAll.addEventListener('click', () => handleSelectAll())
})
//function clears the table
function clearTable(){
    const tableBody = document.getElementById('table-body')
    tableBody.innerHTML = ' '                       //innerHTML?
}
//function sends request to API to get data of Facilities
function fetchFacilities() {
    fetch("https://ridb.recreation.gov/api/v1/facilities?apikey=9a06bc0e-182c-4cb0-8cff-0d5e2a8504a7", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
        .then(res => res.json())
        .then((data => proccessData(data.RECDATA))
    )
}
//function gets array of checked checkboxes and gives it to sortFacility function
function proccessData(facilitiesArray){
    const arrayOfCheckedBoxes = readCheckBoxes()
    facilitiesArray.forEach(facilityObj => sortFacility(facilityObj, arrayOfCheckedBoxes))
}
//function checkes what checkboxes were checked and return an array of checked checkboxes
function readCheckBoxes(){
    const NodeListOfCheckedBoxes = document.querySelectorAll('input[type = "checkbox"]:checked')
    let arrayOfCheckedBoxes = []
    for(let i = 0; i < NodeListOfCheckedBoxes.length; i++) {  
        arrayOfCheckedBoxes.push(NodeListOfCheckedBoxes[i].value)
    }
    return arrayOfCheckedBoxes
}
//according to array of checked checkboxes function chooses what facility should be rendered
function sortFacility(facilityObj, arrayOfCheckedBoxes) {
    
    arrayOfCheckedBoxes.forEach(checkBox => {
                                        if(facilityObj.FacilityTypeDescription === checkBox){
                                            renderFacility(facilityObj)}
                                         }
                               )    
}
//function renders facility by creating a new table row with next table columns: Name, Type, Phone, Like
//listen for a Like button to be pressed
function renderFacility(facilityObj){
    const tableBody = document.getElementById("table-body")
    let tableRow = document.createElement("tr"); //is it ok to use innerHTML?

    tableRow.innerHTML = `  
        <td>${facilityObj.FacilityName}</td>
        <td>${facilityObj.FacilityTypeDescription}</td>
        <td>${facilityObj.FacilityPhone}</td>
        <td><button class = "button-corn styled cursor" id = ${facilityObj.FacilityID}></button></td>
    `
    tableBody.appendChild(tableRow) 
  

   let buttonLike = document.getElementById(`${facilityObj.FacilityID}`)
    buttonLike.addEventListener('click', (event) => handleButtonLike(event))
}
//function changes color of Like button (from corn to salmon or from salmon to corn color)
function handleButtonLike(event){
    if(event.target.attributes[0].nodeValue === 'button-corn styled cursor'){  
        event.target.attributes[0].nodeValue = 'button-salmon styled cursor'  
    }else{
        event.target.attributes[0].nodeValue = 'button-corn styled cursor'
    }
}
//function uncheckes all checkboxes in form
function handleClearAll(){
    const form = document.querySelector('#activity-form')
    form.reset() 
    clearTable()
}
//function select all checkboxes in form 
function handleSelectAll(){
    const NodeListOfAllCheckBoxes = document.querySelectorAll('input[type = "checkbox"]')
    for(let i = 0; i < NodeListOfAllCheckBoxes.length; i++){
        NodeListOfAllCheckBoxes[i].checked = true
    }
}

// tableRow.id = `${facilityObj.FacilityName}`
    /*let facility = document.getElementById(`${facilityObj.FacilityName}`)
    console.log(facility)
    facility.addEventListener('click', (event) => showDescription(event))
    tableRow = document.createElement("tr");
    tableRow.innerHTML = `  
        <td colspan = '4'>${facilityObj.FacilityDescription}</td>
    `
    tableBody.appendChild(tableRow) */