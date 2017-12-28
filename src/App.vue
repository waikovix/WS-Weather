<template>
  <md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">WS Weather</span>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <md-field>
        <label>Type here!</label>
        <md-input v-model="city" @keyup.enter = getWeather></md-input>
        <span class="md-helper-text">Helper text</span>
      </md-field>
      <md-card>
        <md-card-header>
          <div class="md-title" >{{weather.name}}</div>
        </md-card-header>

        <md-card-content  v-if="weather.length != 0">
        <h1>Current weather: {{weather.weather['0'].description}}</h1>
          <h1> tempreture: {{ weather.main['temp'] }} C</h1>
          <h1>Wind speed:{{weather.wind['speed']}}</h1>
          <h1>Min.temp: {{weather.main['temp_min']}}C</h1>
          <h1>Max.temp: {{weather.main['temp_max']}}C</h1>
        </md-card-content>
      </md-card>
    </md-app-content>
  </md-app>
</template>

<script>
  import axios from 'axios'
   export default {
  name: 'appp',
    data:() => ({
      menuVisible:false,
      city:'',
      weather:''
    }),
    methods:{
      getWeather()
      {
        //sending ajax request to the server and get the data
        //Input:Pleven
        //Output:JSON
        var app = this;
        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&units=metric&appid=ca0cb90ffc6a9c1122fab4756e2f6fe5').then(function(response){
         app.weather = response.data;
         console.log(app.weather);
        }).catch(function(err){
          window.alert("City not found.Please try again");
          app.city = '';
        })


      }
    }

}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
