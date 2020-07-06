import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import store from "@/vuex/store.js";

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    store
}).$mount("#app");
