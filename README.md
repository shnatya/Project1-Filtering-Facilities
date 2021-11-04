# Description of the app

This app gives an opportunity to show recreational centers located in the USA. Users can choose what type of centers they want to be listed on the screen. In the light-blue form there are five checkboxes: Campground, Activity Pass, Facility, Visitor Centor, Ticket Facility. Below the checkboxes, three buttons are located : 
- **Select All** to select all checkboxes at once;
- **Submit** to submit the request and render the result of the search in the table;
- **Clear All** to uncheck all checkboxes and clear the table. 

The table has four columns: 
- **Name of Facility**;
- **Type** - type of a center (Campground, Activity Pass, Facility, Visitor Centor, Ticket Facility);
- **Phone** of facility 
- **Like** Users can check facilities which they like or uncheck them using **Like** button presenting  in each row.

# Installation
In the repository of this app, copy information about this repository in **Code** section.
In your terminal, type *git clone* and paste what you have copied from GitHub.

# How to use?
To work with the app, you have to get APIKey at https://ridb.recreation.gov/landing. After signing up, you will find their APIKey in yout profile. Copy the APIKey and paste it in index.js inside function called fetchFacilities.

function fetchFacilities() {
    fetch("https://ridb.recreation.gov/api/v1/facilities?apikey=PASTE_YOUR_APIKEY_HERE", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
        .then(res => res.json())
        .then((data => proccessData(data.RECDATA))
    )
}

# API Reference

In this project, API from Recreation.gov was used. API Documentation can be found here https://ridb.recreation.gov/docs. 

## License
[MIT](https://choosealicense.com/licenses/mit/)