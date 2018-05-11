//Requires
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();


//Set global variables
let port = process.env.PORT || 8080;
let DarkSkyKey = '6284670e428f60915bbecf052a0ae21b';
let googleKey = 'AIzaSyDP1JQawfsm6Stct8CR0SR-1yoj_3TpKis';
let varLatitude;
let varLongitude;


//Allow app to use Public directory for CSS
app.use(express.static(__dirname + '/public'));
//Allow app to use body-parser
app.use(bodyParser.urlencoded({extended: true}));


//Set view engine to EJS
app.set('view engine', 'ejs');

//Homepage get request
app.get('/', function(req, res) {
    res.render('index.ejs');
});



//Location search
app.post('/search', function(req, res) {
    //Read location search body fields
    let locationrequest = req.body;
    let userLocation = req.body.userLocation;
    let userCountry = req.body.userCountry;
    console.log(userLocation);
    console.log(userCountry);

    let searchtext = userLocation + ", " + userCountry;

    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + searchtext + "&key=" + googleKey, function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    let varUserLocation = JSON.parse(body);
    let varLatitude = (varUserLocation.results[0].geometry.location.lat);
    let varLongitude = (varUserLocation.results[0].geometry.location.lng);
    let varLocation = (varUserLocation.results[0].formatted_address);
    console.log(varLatitude);
    console.log(varLongitude);

    let darkskyurl = "https://api.darksky.net/forecast/" + DarkSkyKey + "/" + varLatitude + "," + varLongitude + "?units=si";
    request(darkskyurl, function (error, response, body) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        let varWeather = JSON.parse(body);
        
        var varDSLastUpdate = (varWeather.currently.time);
        var varDSStormDistance = (varWeather.currently.nearestStormDistance);
        var varDSPrecipitationIntensity = (varWeather.currently.precipIntensity);
        //var varDSPrecipitationProbability = (varWeather.currently.precipProbability);
        var varDSPrecipitationProbability = (varWeather.hourly.data[0].precipProbability);
        var varDSCloudCover = (varWeather.currently.cloudCover);
        var varDSSummary = (varWeather.currently.summary);
        var varDSIcon = (varWeather.currently.icon);
        var varDSTemperature = (varWeather.currently.temperature);
        var varDSFeelsLike = (varWeather.currently.apparentTemperature);
        var varDSHumidity = (varWeather.currently.humidity);
        var varDSWindSpeed = (varWeather.currently.windSpeed);
        var varDSVisibility = (varWeather.currently.visibility);

        var varChanceOfRain = Math.round((varDSPrecipitationProbability * 100));

        var varDS0 = (varWeather.hourly.data[0].precipIntensity);
        var varDS1 = (varWeather.hourly.data[1].precipIntensity);
        var varDS2 = (varWeather.hourly.data[2].precipIntensity);
        var varDS3 = (varWeather.hourly.data[3].precipIntensity);
        var varDS4 = (varWeather.hourly.data[4].precipIntensity);
        var varDS5 = (varWeather.hourly.data[5].precipIntensity);
        var varDS6 = (varWeather.hourly.data[6].precipIntensity);
        var varDS7 = (varWeather.hourly.data[7].precipIntensity);
        var varDS8 = (varWeather.hourly.data[8].precipIntensity);
        var varDS9 = (varWeather.hourly.data[9].precipIntensity);
        var varDS10 = (varWeather.hourly.data[10].precipIntensity);
        var varDS11 = (varWeather.hourly.data[11].precipIntensity);
        var varDS12 = (varWeather.hourly.data[12].precipIntensity);


        
        
        
        //var skycons = new Skycons({"color": "white"});
        


        //skycons.add(document.getElementById("icon1"), varDSIcon);
        //skycons.play();
        console.log(varDSIcon);
        res.render('index.ejs', {displayLocation: varLocation,
                                displayDSSummary: varDSSummary,
                                displayDSLastUpdate: varDSLastUpdate,
                                displayDSIcon: varDSIcon,
                                displayDSWindSpeed: varDSWindSpeed,
                                displayChanceOfRain: varChanceOfRain,
                                displayLatitude: varLatitude,
                                displayLongitude: varLongitude
                            });
    });
    });



    

    //res.render('dashboard.ejs', {data1: appListLength, data2: result, data3: appListData});
    
});



//Listen server
app.listen(port, function() {
    console.log('Server started and listening on port ' + port);
});
