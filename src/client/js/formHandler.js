function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    const zipCode = document.getElementById('zip').value;

    /* Variables */
    const baseURL = 'https://api.openweathermap.org/data/2.5/';
    const apiKey = 'b4c921d8c7cd365351d4d3b006368d9d&units=imperial'; //my api key
    const baseIconURL = 'https://openweathermap.org/img/wn/';

    console.log("::: Form Submitted :::")
    fetch(`${baseURL}weather?zip=${zipCode}&appid=${apiKey}`)
    .then(res => res.json())
    .then(function(res) {
        const icon = res.weather[0].icon;
        document.getElementById('results-name').innerHTML = `Name: ${formText}`;
        document.getElementById('results-zip').innerHTML = `Zip Code: ${zipCode}`;
        document.getElementById('results-temp').innerHTML = `Temperature: ${Math.round(res.main.temp)}  °F `;
        document.getElementById('results-weather').innerHTML = `Weather Status: ${res.weather[0].main}`;
        document.getElementById('results-icon').innerHTML = ` <img src='${baseIconURL}${icon}@4x.png' alt='weather icon'> `;

    })
}

export { handleSubmit }
