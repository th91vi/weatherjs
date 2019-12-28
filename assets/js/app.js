// inicia localStorage
const storage = new Storage();
// pega cidade armazenada
const weatherLocation  = storage.getLocationData();
// inicia objeto de clima
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// inicia ui
const ui = new Ui();

// pega o clima quando DOM carregar
document.addEventListener('DOMContentLoaded', getWeather);

// evento para mudar cidade
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    // muda cidade
    weather.changeLocation(city, country);

    // guarda cidade em localStorage
    storage.setLocationData(city, country);

    // pega e exibe clima
    getWeather();

    // fecha modal
    $('#locModal').modal('hide');
})

function getWeather(){weather.getWeather()
    .then(results => {
        console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));}