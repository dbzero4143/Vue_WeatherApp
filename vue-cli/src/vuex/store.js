import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        info: {
            name: null,
            min_temp: null,
            max_temp: null,
            clouds: null,
            weather: null
        }
    },

    mutations: {
        updatedata(state, payload) {
            console.log("muta" + payload.data.name);
            state.info = {
                name: payload.data.name,
                min_temp: (payload.data.main.temp_min - 273.15).toFixed(1),
                max_temp: (payload.data.main.temp_max - 273.15).toFixed(1),
                clouds: payload.data.clouds,
                weather: payload.data.weather[0].main
            };
        }
    },

    actions: {
        apiload(context, payload) {
            console.log("action " + payload.vmodel);
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${payload.vmodel}&appid=b0d4b965cd9f7029f15075afda9747cd`
                )
                .then((res) => {
                    context.commit("updatedata", res);
                });
        }
    },

    getters: {
        resultdata: (state) => {
            return state.info;
        }
    }
});
