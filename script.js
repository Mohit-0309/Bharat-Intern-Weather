const apikey="190722cd4134975fe03c83bd608a920b";
// const apiurl="https://api.openweathermap.org/data/2.5/weather?q=";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&APPID=190722cd4134975fe03c83bd608a920b&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
const city = document.querySelector(".city");

async function checkweather(city){

    const response= await fetch(apiurl + city);
    if(response.status == 404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".cityname").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp-273.15) + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";


        switch (data.weather[0].main.toLowerCase()) {
            case "clouds":
                weathericon.src = "images/clouds.png";
                break;
            case "clear":
                weathericon.src = "images/clear.png";
                break;
            case "rain":
                weathericon.src = "images/rain.png";
                break;
            case "drizzle":
                weathericon.src = "images/drizzle.png";
                break;
            case "mist":
                weathericon.src = "images/mist.png";
                break;
            case "snow":
                weathericon.src = "images/snow.png";
                break;
        }
        

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
});

city.addEventListener("keypress", (event)=>{
    if(event.key === "Enter")
    {
        checkweather(searchbox.value);
    }
});