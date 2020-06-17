<template>
  <div id="app">
      <p v-if="this.boolean">{{this.info.name}}</p>
      <p v-if="this.boolean">{{this.info.timezone}}</p>
      <p v-if="this.boolean">{{this.info.min_temp}}</p>
      <p v-if="this.boolean">{{this.info.max_temp}}</p>
      <p v-if="this.boolean">{{this.info.clouds.all}}</p>
      <p v-if="this.boolean">{{this.info.weather}}</p>
  </div>
</template>

<script>
import EventBus from '../EventBus/EventBus'

export default {
  data(){
    return {
      info:{
        name:null,
        timezone:null,
        min_temp:null,
        max_temp:null,
        clouds:null,
        weather:null
      },
      boolean: false
    }
  },
  created(){
    EventBus.$on('send_vmodel', (param)=>{
          this.info = param
          this.boolean = true
      })
  },
  methods:{
    
  }
}
</script>

<style>

</style>