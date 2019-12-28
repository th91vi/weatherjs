class Ui {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.clouds = document.getElementById('w-clouds');
        this.tempMax = document.getElementById('w-tempMax');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.name +', '+ weather.sys.country;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp + ' ºC';
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.clouds.textContent = `Clouds: ${weather.weather[0].description}`;
        this.tempMax.textContent = `Max. Temperature: ${weather.main.temp_max} ºC`;
        this.wind.textContent = `Wind Spd.: ${weather.wind.speed} meter/sec`;
    }
}