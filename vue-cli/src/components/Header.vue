<template>
  <div id="app">
    <h1>try check temperature</h1>
    <input type="text" v-model="vmodel" placeholder="City name">
    <button @click="inputvmodel">Search</button>
  </div>
</template>

<script>
import EventBus from '../EventBus/EventBus'
import axios from "axios"

export default {
  data(){
    return {
      vmodel:'',
      info: {
        name:null,
        timezone:null,
        min_temp:null,
        max_temp:null,
        clouds:null,
        weather:null
      },
    }
  },
  methods: {
    inputvmodel(){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.vmodel}&appid=b0d4b965cd9f7029f15075afda9747cd`)
      .then((res)=>{
        this.info ={
          name:res.data.name,
          timezone:res.data.timezone,
          min_temp:res.data.main.temp_min,
          max_temp:res.data.main.temp_max,
          clouds:res.data.clouds,
          weather:res.data.weather[0].main
        }
        EventBus.$emit('send_vmodel', this.info)
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>
h1{
  line-height: 30vh;
}
</style>