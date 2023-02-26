const weather ={
    apiKey:"40d92f7635bd45657ede46a116bd45bc",
    featchWeather :function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid=40d92f7635bd45657ede46a116bd45bc")
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather:function(data){
 
        const {name}= data
        const {description} = data.weather[0];
        const {temp,humidity}=data.main;
        const {speed} = data.wind;
        console.log(name,description,temp,humidity,speed)
        document.querySelector('.city').innerHTML="Weather in "+name
        document.querySelector('.description').innerHTML = description
        document.querySelector('.temperature').innerHTML=temp
        document.querySelector('.humidity').innerHTML=humidity
        document.querySelector('.wind').innerHTML = speed
    },

    searchWeather:function(){
        this.featchWeather(document.querySelector('.search').value)
        
    }
}

document.querySelector('.btn').addEventListener('click',function(){
    weather.searchWeather();
})


