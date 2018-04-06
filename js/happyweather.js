const TempUnitC = "&deg;C";
const TempUnitF = "&deg;F";
//Large Background images url:
const bgImage = {
  clearNight : "https://static.pexels.com/photos/33609/delicate-arch-sunset-rock-formation.jpg",
  cloudyNight : "https://static.pexels.com/photos/416920/pexels-photo-416920.jpeg",
  clearDay : "https://static.pexels.com/photos/490411/pexels-photo-490411.jpeg",
  cloudyDay : "https://static.pexels.com/photos/325185/pexels-photo-325185.jpeg",
  rainy : "https://static.pexels.com/photos/235795/pexels-photo-235795.jpeg",
  snowy : "https://static.pexels.com/photos/269013/pexels-photo-269013.jpeg",
  thunder : "https://static.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg"
}
// Weather animated svg icons curtesy of acharts.com
const weatherIcon = {
  day : {
    clear : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/day.svg",
    fewClouds : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-day-1.svg",
    lightClouds : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-day-2.svg",
    medClouds : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-day-3.svg",
    heavyClouds : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy.svg",
    lightRain : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-2.svg",
    medRain : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-1.svg",
    heavyRain : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-3.svg",
    drizzle : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-7.svg",
    lightSnow : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/snowy-2.svg",
    medSnow : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/snowy-1.svg",
    heavySnow : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/snowy-3.svg",
    thunder : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/thunder.svg"
  },
  night : {
    clear : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/night.svg",
    fewClouds : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-night-1.svg",
    lightClouds : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-night-2.svg",
    medClouds : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-night-3.svg",
    heavyClouds : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy.svg",
    lightRain : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-4.svg",
    medRain : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-5.svg",
    heavyRain : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-6.svg",
    drizzle : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-7.svg",
    lightSnow : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/snowy-4.svg",
    medSnow : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/snowy-5.svg",
    heavySnow : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/snowy-6.svg",
    thunder : "https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/thunder.svg"
  }
}
