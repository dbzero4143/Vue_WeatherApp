<template>
  <div id="app">
    <h1>check the weather</h1>
    <p>
      <input
        type="text"
        v-model="vmodel"
        placeholder="City name(English)"
        @keyup.enter="inputvmodel"
      />
    </p>
    <button @click="inputvmodel">Search</button>
  </div>
</template>

<script>
import EventBus from "../EventBus/EventBus";
import axios from "axios";

export default {
  data() {
    return {
      vmodel: "",
      info: {
        name: null,
        min_temp: null,
        max_temp: null,
        clouds: null,
        weather: null
      }
    };
  },
  methods: {
    inputvmodel() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.vmodel}&appid=b0d4b965cd9f7029f15075afda9747cd`
        )
        .then(res => {
          this.info = {
            name: res.data.name,
            min_temp: (res.data.main.temp_min - 273.15).toFixed(1),
            max_temp: (res.data.main.temp_max - 273.15).toFixed(1),
            clouds: res.data.clouds,
            weather: res.data.weather[0].main
          };
          EventBus.$emit("send_vmodel", this.info);
          this.vmodel = "";
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
h1 {
  line-height: 20vh;
}

button {
  width: 100px;
  height: 4vh;
  background: #0575e6;
  color: white;

  border-radius: 40px / 40px;
  border: 0 none;
  outline-style: none;

  box-shadow: 0 8px 8px 0 #0575e6;
}

button:hover {
  transition: 0.8s;
  background: #99f2c8;
  color: #0575e6;
}

input {
  height: 2vh;
}

input:focus {
  outline: 0;
}
</style>