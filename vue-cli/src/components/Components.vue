<template>
  <div id="app">
      components
      {{this.info}}
      {{this.err}}
      <button @click="getApi">click</button>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data(){
    return {
      info: {
        timezone:null,
        temp:null,
        clouds:null,
        weather:null
      },
      err: null
    }
  },
  methods:{
    getApi(){
      axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=b0d4b965cd9f7029f15075afda9747cd")
      .then((res)=>{
        this.info ={
          timezone:res.data.timezone,
          temp:res.data.current.temp,
          clouds:res.data.current.clouds,
          weather:res.data.current.weather[0].description
        } 
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>