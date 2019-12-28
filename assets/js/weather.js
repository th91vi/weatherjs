class Weather {
    constructor(city, country){
        this.apiKey = 'fa3b4b06d7ed5a393bad38e1f9bf8c1f';
        this.city = city;
        this.country = country;
        this.units = 'metric';
        // this.language = 'pt';
    }

    // pega clima da API
    async getWeather(){
        // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=${this.units}&lang=${this.language}&appid=${this.apiKey}`);
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=${this.units}&appid=${this.apiKey}`);
        
        const responseData = await response.json();

        return responseData;
    }

    // muda local
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }

}