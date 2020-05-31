const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req,res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=4e30b7964820196eea519c075569f8b4";

    https.get(url, (response)=>{
        console.log(response.statusCode );

        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);
            console.log(weatherData.weather);
            res.send(weatherData.weather[0].icon);
        })
    })

})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})