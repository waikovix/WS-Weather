// General functions
// function to send request to the openwetaher server and return data from the server.
// Input : Pleven
// Output: json file
import axios from 'axios'

export function getData(city)
{

  axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=ca0cb90ffc6a9c1122fab4756e2f6fe5')
    .then(function (response) {

     let  data = response;
      return data;
     console.log(data);


    })
    .catch(function (error) {
      console.log(error);
    });


}
