

function loadWeather(click) {
    console.log("Can I Drone? button clicked");


    var city = document.getElementById("userLocation").value;
    console.log("City input as " + city);

    var country = document.getElementById("userCountry").value;
    console.log("Country input as " + country);
    
    var searchtext = city + ", " + country;

    //var searchtext = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + ", " + country + "') and u='c'"
    //change city variable dynamically as required
    //$.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function (data) {
    //    console.log(data);
    //    console.log("Yahoo Connection");
    //    var varLocation = (data.query.results.channel.location.city + "," + data.query.results.channel.location.region + ", " + data.query.results.channel.location.country);
    //    var varLatitude = (data.query.results.channel.item.lat);
    //    var varLongitude = (data.query.results.channel.item.long);
    //    var varLastUpdate = (data.query.results.channel.item.pubDate);
    //    var varTemperature = (data.query.results.channel.item.condition.temp);
    //    var varStatusText = (data.query.results.channel.item.condition.text);
    //    var varStatusCode = (data.query.results.channel.item.condition.code);
    //    var varWindSpeed = (data.query.results.channel.wind.speed)
    //    var varWindSpeedUnits = (data.query.results.channel.units.speed);
    //    var varSunrise = (data.query.results.channel.astronomy.sunrise);
    //    var varSunset = (data.query.results.channel.astronomy.sunset);
    //    var varHumidity = (data.query.results.channel.atmosphere.humidity);
    //    var varPressure = (data.query.results.channel.atmosphere.pressure);
    //    var varPressureUnits = (data.query.results.channel.units.pressure);
    //    var varVisibility = (data.query.results.channel.atmosphere.visibility);
    //    var varVisibilityUnits = (data.query.results.channel.units.distance);






    //    $('#day0day').html(data.query.results.channel.item.forecast[0].day);
    //    $('#day1day').html(data.query.results.channel.item.forecast[1].day);
    //    $('#day2day').html(data.query.results.channel.item.forecast[2].day);
    //    $('#day3day').html(data.query.results.channel.item.forecast[3].day);
    //    $('#day4day').html(data.query.results.channel.item.forecast[4].day);
    //    $('#day5day').html(data.query.results.channel.item.forecast[5].day);
    //    $('#day6day').html(data.query.results.channel.item.forecast[6].day);
    //    $('#day7day').html(data.query.results.channel.item.forecast[7].day);
    //    $('#day8day').html(data.query.results.channel.item.forecast[8].day);
    //    $('#day9day').html(data.query.results.channel.item.forecast[9].day);

    //    $('#day0date').html(data.query.results.channel.item.forecast[0].date);
    //    $('#day1date').html(data.query.results.channel.item.forecast[1].date);
    //    $('#day2date').html(data.query.results.channel.item.forecast[2].date);
    //    $('#day3date').html(data.query.results.channel.item.forecast[3].date);
    //    $('#day4date').html(data.query.results.channel.item.forecast[4].date);
    //    $('#day5date').html(data.query.results.channel.item.forecast[5].date);
    //    $('#day6date').html(data.query.results.channel.item.forecast[6].date);
    //    $('#day7date').html(data.query.results.channel.item.forecast[7].date);
    //    $('#day8date').html(data.query.results.channel.item.forecast[8].date);
    //    $('#day9date').html(data.query.results.channel.item.forecast[9].date);

    //    $('#day0text').html(data.query.results.channel.item.forecast[0].text);
    //    $('#day1text').html(data.query.results.channel.item.forecast[1].text);
    //    $('#day2text').html(data.query.results.channel.item.forecast[2].text);
    //    $('#day3text').html(data.query.results.channel.item.forecast[3].text);
    //    $('#day4text').html(data.query.results.channel.item.forecast[4].text);
    //    $('#day5text').html(data.query.results.channel.item.forecast[5].text);
    //    $('#day6text').html(data.query.results.channel.item.forecast[6].text);
    //    $('#day7text').html(data.query.results.channel.item.forecast[7].text);
    //    $('#day8text').html(data.query.results.channel.item.forecast[8].text);
    //    $('#day9text').html(data.query.results.channel.item.forecast[9].text);

    //    $('#day0high').html(data.query.results.channel.item.forecast[0].high);
    //    $('#day1high').html(data.query.results.channel.item.forecast[1].high);
    //    $('#day2high').html(data.query.results.channel.item.forecast[2].high);
    //    $('#day3high').html(data.query.results.channel.item.forecast[3].high);
    //    $('#day4high').html(data.query.results.channel.item.forecast[4].high);
    //    $('#day5high').html(data.query.results.channel.item.forecast[5].high);
    //    $('#day6high').html(data.query.results.channel.item.forecast[6].high);
    //    $('#day7high').html(data.query.results.channel.item.forecast[7].high);
    //    $('#day8high').html(data.query.results.channel.item.forecast[8].high);
    //    $('#day9high').html(data.query.results.channel.item.forecast[9].high);

    //    $('#day0low').html(data.query.results.channel.item.forecast[0].low);
    //    $('#day1low').html(data.query.results.channel.item.forecast[1].low);
    //    $('#day2low').html(data.query.results.channel.item.forecast[2].low);
    //    $('#day3low').html(data.query.results.channel.item.forecast[3].low);
    //    $('#day4low').html(data.query.results.channel.item.forecast[4].low);
    //    $('#day5low').html(data.query.results.channel.item.forecast[5].low);
    //    $('#day6low').html(data.query.results.channel.item.forecast[6].low);
    //    $('#day7low').html(data.query.results.channel.item.forecast[7].low);
    //    $('#day8low').html(data.query.results.channel.item.forecast[8].low);
    //    $('#day9low').html(data.query.results.channel.item.forecast[9].low);


    //    $('#day0code').html('<i class="wi wi-yahoo-' + data.query.results.channel.item.forecast[0].code + '"></i>');
    //    $('#day1code').html('<i class="wi wi-yahoo-' + data.query.results.channel.item.forecast[1].code + '"></i>');
    //    $('#day2code').html('<i class="wi wi-yahoo-' + data.query.results.channel.item.forecast[2].code + '"></i>');
    //    $('#day3code').html('<i class="wi wi-yahoo-' + data.query.results.channel.item.forecast[3].code + '"></i>');
    //    $('#day4code').html('<i class="wi wi-yahoo-' + data.query.results.channel.item.forecast[4].code + '"></i>');
    //    $('#day5code').html('<i class="wi wi-yahoo-' + data.query.results.channel.item.forecast[5].code + '"></i>');
    //    $('#day6code').html('<i class="wi wi-yahoo-' + data.query.results.channel.item.forecast[6].code + '"></i>');
    //    $('#day7code').html('<i class="wi wi-yahoo-' + data.query.results.channel.item.forecast[7].code + '"></i>');
    //    $('#day8code').html('<i class="wi wi-yahoo-' + data.query.results.channel.item.forecast[8].code + '"></i>');
    //    $('#day9code').html('<i class="wi wi-yahoo-' + data.query.results.channel.item.forecast[9].code + '"></i>');

    //    console.log("Update successful");

    
    $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + searchtext + "&key=AIzaSyDP1JQawfsm6Stct8CR0SR-1yoj_3TpKis").success(function (data) {
    console.log(data);
    var varLatitude = (data.results[0].geometry.location.lat);
    var varLongitude = (data.results[0].geometry.location.lng);
    var varLocation = (data.results[0].formatted_address);
    

        $.getJSON("https://thingproxy.freeboard.io/fetch/https://api.darksky.net/forecast/" + DarkSkyKey + "/" + varLatitude + "," + varLongitude + "?units=si").success(function (data) {
            console.log("DarkSky Connection");
            var varDSLastUpdate = (data.currently.time);
            var varDSStormDistance = (data.currently.nearestStormDistance);
            var varDSPrecipitationIntensity = (data.currently.precipIntensity);
            //var varDSPrecipitationProbability = (data.currently.precipProbability);
            var varDSPrecipitationProbability = (data.hourly.data[0].precipProbability);
            var varDSCloudCover = (data.currently.cloudCover);
            var varDSSummary = (data.currently.summary);
            var varDSIcon = (data.currently.icon);
            var varDSTemperature = (data.currently.temperature);
            var varDSFeelsLike = (data.currently.apparentTemperature);
            var varDSHumidity = (data.currently.humidity);
            var varDSWindSpeed = (data.currently.windSpeed);
            var varDSVisibility = (data.currently.visibility);



            var varDS0 = (data.hourly.data[0].precipIntensity);
            var varDS1 = (data.hourly.data[1].precipIntensity);
            var varDS2 = (data.hourly.data[2].precipIntensity);
            var varDS3 = (data.hourly.data[3].precipIntensity);
            var varDS4 = (data.hourly.data[4].precipIntensity);
            var varDS5 = (data.hourly.data[5].precipIntensity);
            var varDS6 = (data.hourly.data[6].precipIntensity);
            var varDS7 = (data.hourly.data[7].precipIntensity);
            var varDS8 = (data.hourly.data[8].precipIntensity);
            var varDS9 = (data.hourly.data[9].precipIntensity);
            var varDS10 = (data.hourly.data[10].precipIntensity);
            var varDS11 = (data.hourly.data[11].precipIntensity);
            var varDS12 = (data.hourly.data[12].precipIntensity);


            
            
            
            var skycons = new Skycons({"color": "white"});
            
            
            $('#localinfo_placeholder').html('<div class="card text-white bg-secondary mb-3">\
                                                    <div class="card-header">' + varLocation + '</div>\
                                                    <div class="card-body">\
                                                        <h2 class="card-title">' + '<canvas id="icon1" width="38" height="38"></canvas> ' + varDSSummary + '</h2>\
                                                        <small class="card-text">Data at ' + varDSLastUpdate + '</small>\
                                                    </div>\
                                                </div>');
            

            skycons.add(document.getElementById("icon1"), varDSIcon);
            skycons.play();
            

            //FLYSAFE LOGIC STARTS HERE ===========================================================================================================================================================
            
            
            
 
            
            
            $('#FlySafeScore_placeholder').html('<div class="card text-white bg-primary mb-3">\
                                                <div class="card-header">FlySafe Score</div>\
                                                    <div class="card-body">\
                                                        <h2 class="card-title">Coming soon</h2>\
                                                        <p class="card-text">Our FlySafe algorithm is able to score your local weather conditions, maximising the safety of your drone.</p>\
                                                    </div>\
                                                </div>');
            
            
            
    

            
            
            
            
            //FLYSAFE LOGIC ENDS HERE =============================================================================================================================================================





            //LOGIC STARTS HERE ===================================================================================================================================================================






            //WindSpeed Logic
            if (varDSWindSpeed >= 5.5) {
                $('#windspeed_placeholder').html('<div class="card text-white bg-danger mb-3">\
                                                    <div class="card-header">Wind speed</div>\
                                                        <div class="card-body">\
                                                            <h5 class="card-title">' + varDSWindSpeed + 'm/s' + '</h5>\
                                                            <p class="card-text">Wind will affect the performance and safety of your drone.</p>\
                                                        </div>\
                                                    </div>');
            } else if (varDSWindSpeed < 5.5 && varDSWindSpeed > 4.1) {
                $('#windspeed_placeholder').html('<div class="card text-white bg-warning mb-3">\
                                                    <div class="card-header">Wind speed</div>\
                                                        <div class="card-body">\
                                                            <h5 class="card-title">' + varDSWindSpeed + 'm/s' + '</h5>\
                                                            <p class="card-text">Wind will affect the performance and safety of your drone.</p>\
                                                        </div>\
                                                    </div>');
            } else {
                $('#windspeed_placeholder').html('<div class="card text-white bg-success mb-3">\
                                                    <div class="card-header">Wind speed</div>\
                                                        <div class="card-body">\
                                                            <h5 class="card-title">' + varDSWindSpeed + 'm/s' + '</h5>\
                                                            <p class="card-text">Wind will affect the performance and safety of your drone.</p>\
                                                        </div>\
                                                    </div>');
            }









            //Chance of rain Logic
            var varChanceOfRain = Math.round((varDSPrecipitationProbability * 100));
            if (varChanceOfRain >= 40) {
                $('#DSPrecipitationProbability_placeholder').html('<div class="card text-white bg-danger mb-3">\
                                                    <div class="card-header">Chance of rain</div>\
                                                        <div class="card-body">\
                                                            <h5 class="card-title">' + "High: " + varChanceOfRain + "%" + '</h5>\
                                                            <p class="card-text">The probability of rain at this location within the next 60 minutes.</p>\
                                                        </div>\
                                                    </div>');
            } else if (varChanceOfRain < 40 && varChanceOfRain > 20) {
                $('#DSPrecipitationProbability_placeholder').html('<div class="card text-white bg-warning mb-3">\
                                                        <div class="card-header">Chance of rain</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + "Medium: " + varChanceOfRain + "%" + '</h5>\
                                                                <p class="card-text">The probability of rain at this location within the next 60 minutes.</p>\
                                                            </div>\
                                                        </div>');
            } else {
                $('#DSPrecipitationProbability_placeholder').html('<div class="card text-white bg-success mb-3">\
                                                        <div class="card-header">Chance of rain</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + "Low: " + varChanceOfRain + "%" + '</h5>\
                                                                <p class="card-text">The probability of rain at this location within the next 60 minutes.</p>\
                                                            </div>\
                                                        </div>');
            }









            //Temperature Logic
            if (varDSTemperature >= 35) {
                $('#temperature_placeholder').html('<div class="card text-white bg-danger mb-3">\
                                                    <div class="card-header">Temperature</div>\
                                                        <div class="card-body">\
                                                            <h5 class="card-title">' + varDSTemperature + "°C" + '</h5>\
                                                            <p class="card-text">Extremely low or high temperatures are bad for your battery.</p>\
                                                        </div>\
                                                    </div>');
            } else if (varDSTemperature < 35 && varDSTemperature > 0) {
                $('#temperature_placeholder').html('<div class="card text-white bg-success mb-3">\
                                                        <div class="card-header">Temperature</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + varDSTemperature + "°C" + '</h5>\
                                                                <p class="card-text">Extremely low or high temperatures are bad for your battery.</p>\
                                                            </div>\
                                                        </div>');
            } else if (varDSTemperature <= 0 && varDSTemperature > -10) {
                $('#temperature_placeholder').html('<div class="card text-white bg-warning mb-3">\
                                                        <div class="card-header">Temperature</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + varDSTemperature + "°C" + '</h5>\
                                                                <p class="card-text">Extremely low or high temperatures are bad for your battery.</p>\
                                                            </div>\
                                                        </div>');
            } else {
                $('#temperature_placeholder').html('<div class="card text-white bg-danger mb-3">\
                                                        <div class="card-header">Temperature</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + varDSTemperature + "°C" + '</h5>\
                                                                <p class="card-text">Extremely low or high temperatures are bad for your battery.</p>\
                                                            </div>\
                                                        </div>');
            }



            
            
            
            
            
            
            
            //Visibility Logic
            if (varDSVisibility >= 10) {
                $('#visibility_placeholder').html('<div class="card text-white bg-success mb-3">\
                                                    <div class="card-header">Visibility</div>\
                                                        <div class="card-body">\
                                                            <h5 class="card-title">' + varDSVisibility + 'km' + '</h5>\
                                                            <p class="card-text">Poor visibility will block the line of sight (LOS) to your drone.</p>\
                                                        </div>\
                                                    </div>');
            } else if (varDSVisibility < 10 && varDSVisibility > 5) {
                $('#visibility_placeholder').html('<div class="card text-white bg-warning mb-3">\
                                                        <div class="card-header">Visibility</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + varDSVisibility + 'km' + '</h5>\
                                                                <p class="card-text">Poor visibility will block the line of sight (LOS) to your drone.</p>\
                                                            </div>\
                                                        </div>');
            } else {
                $('#visibility_placeholder').html('<div class="card text-white bg-danger mb-3">\
                                                        <div class="card-header">Visibility</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + varDSVisibility + 'km' + '</h5>\
                                                                <p class="card-text">Poor visibility will block the line of sight (LOS) to your drone.</p>\
                                                            </div>\
                                                        </div>');
            }



            
            
            
            
            
                        
            //Nearest rain Logic
            if (varDSStormDistance >= 10) {
                $('#DSStormDistance_placeholder').html('<div class="card text-white bg-success mb-3">\
                                                    <div class="card-header">Nearest rainfall</div>\
                                                        <div class="card-body">\
                                                            <h5 class="card-title">' + varDSStormDistance + 'km' + '</h5>\
                                                            <p class="card-text">Nearby rain or winds may drift into your flight path.</p>\
                                                        </div>\
                                                    </div>');
            } else if (varDSStormDistance < 10 && varDSStormDistance > 5) {
                $('#DSStormDistance_placeholder').html('<div class="card text-white bg-warning mb-3">\
                                                        <div class="card-header">Nearest rainfall</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + varDSStormDistance + 'km' + '</h5>\
                                                                <p class="card-text">Nearby rain or winds may drift into your flight path.</p>\
                                                            </div>\
                                                        </div>');
            } else {
                $('#DSStormDistance_placeholder').html('<div class="card text-white bg-danger mb-3">\
                                                        <div class="card-header">Nearest rainfall</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + varDSStormDistance + 'km' + '</h5>\
                                                                <p class="card-text">Nearby rain or winds may drift into your flight path.</p>\
                                                            </div>\
                                                        </div>');
            }


            
            
            
            
            
            
            
            
            
                        
                        
            //Cloud coverage Logic
            var varCloudPercent = Math.round((varDSCloudCover * 100));
            if (varCloudPercent >= 60) {
                $('#DSCloudCover_placeholder').html('<div class="card text-white bg-danger mb-3">\
                                                    <div class="card-header">Cloud coverage</div>\
                                                        <div class="card-body">\
                                                            <h5 class="card-title">' + varCloudPercent + '%' + '</h5>\
                                                            <p class="card-text">Thick cloud coverage may affect drone visibility and signal.</p>\
                                                        </div>\
                                                    </div>');
            } else if (varCloudPercent < 60 && varCloudPercent > 40) {
                $('#DSCloudCover_placeholder').html('<div class="card text-white bg-warning mb-3">\
                                                        <div class="card-header">Cloud coverage</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + varCloudPercent + '%' + '</h5>\
                                                                <p class="card-text">Thick cloud coverage may affect drone visibility and signal.</p>\
                                                            </div>\
                                                        </div>');
            } else {
                $('#DSCloudCover_placeholder').html('<div class="card text-white bg-success mb-3">\
                                                        <div class="card-header">Cloud coverage</div>\
                                                            <div class="card-body">\
                                                                <h5 class="card-title">' + varCloudPercent + '%' + '</h5>\
                                                                <p class="card-text">Thick cloud coverage may affect drone visibility and signal.</p>\
                                                            </div>\
                                                        </div>');
            }


            
            
            
            
            
            
            



            //LOGIC ENDS HERE =================================================================================================================================================================== 

            

            $('#DSFutureRainfall_placeholder').html('<div class="card">\
                                                        <div class="card-header text-white bg-secondary">\
                                                            Future rainfall (millimeters per hour)\
                                                        </div>\
                                                        <div class="card-body bg-light">\
                                                            <canvas id="myChart" width="100" height="30"></canvas>\
                                                        </div>\
                                                    </div>');





            var ctx = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Now", "1hr", "2hrs", "3hrs", "4hrs", "5hrs", "6hrs", "7hrs", "8hrs", "9hrs", "10hrs", "11hrs", "12hrs"],
                    datasets: [{
                        label: 'Precipitation',
                        data: [varDS0, varDS1, varDS2, varDS3, varDS4, varDS5, varDS6, varDS7, varDS8, varDS9, varDS10, varDS11, varDS12],
                        backgroundColor: ['rgba(0, 123, 255, 0.8)'],
                        borderColor: ['rgba(0,104,216,1)'],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                max: 3
                            }
                        }]
                    },
                    //        elements: {
                    //           point: {
                    //              radius: 0
                    //          }
                    //      },
                    legend: {
                        display: false
                    }
                }
            });






        });
    });



}
