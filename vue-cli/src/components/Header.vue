<template>
  <div id="app">
    <h1>check the weather</h1>
    <div v-if="this.recentword">
      <button
        class="recent"
        v-for="item in this.recentword"
        :key="item"
        @click="loadrecent(item)"
      >{{ item }}</button>
    </div>
    <p>
      <input
        type="text"
        v-model="vmodel"
        placeholder="City name(English)"
        @keyup.enter="inputvmodel"
      />
    </p>

    <button class="inputBtn" @click="inputvmodel">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vmodel: "",
      isActive: false,
      recentword: []
    };
  },
  methods: {
    inputvmodel() {
      if (this.recentword.length < 3) {
        this.$store.dispatch("apiload", {
          vmodel: this.vmodel
        });
        this.recentword.push(this.vmodel);
      } else if (this.recentword.length >= 2) {
        alert("퇴장");
        return 0;
      }
      this.vmodel = "";
    },
    loadrecent(clickvalue) {
      this.$store.dispatch("apirecentload", {
        clickvalue: clickvalue
      });
      this.vmodel = "";
    }
  },
  computed: {
    resultdata() {
      return this.$store.getters.resultdata;
    }
  }
};
</script>

<style>
p {
  margin-bottom: 0px;
}
h1 {
  line-height: 20vh;
}

.inputBtn {
  width: 100px;
  height: 4vh;
  background: #0575e6;
  color: white;
  margin-top: 20px;

  border-radius: 40px / 40px;
  border: 0 none;
  outline-style: none;

  box-shadow: 0 8px 8px 0 #0575e6;
}

.inputBtn:hover {
  transition: 0.8s;
  background: #99f2c8;
  color: #0575e6;
}

.recent {
  width: 100px;
  height: 3vh;
  background: #a29a92;
  color: white;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;

  border-radius: 40px / 40px;
  border: 0 none;
  outline-style: none;
  box-shadow: 0 4px 4px 0 #6f6964;
}

.recent:hover {
  transition: 0.5s;
  background: white;
  color: #a29a92;
}

input {
  height: 2vh;
}

input:focus {
  outline: 0;
}
</style>
