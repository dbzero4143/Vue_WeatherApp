<template>
  <div id="app">
    <Header id="header"></Header>
    <Components id="components"></Components>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Components from './components/Components.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Components,
    Footer
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 1281px){
  #header{
    height:50vh;
    width:100%;
    background-color: coral;
  }
  #components{
    height:40vh;
    width:100%;
    background-color: darkgoldenrod;
  }
  #footer {
    height:10vh;
    width:100%;
    background-color: burlywood;
  }

  
}

@media (min-width: 1025px) and (max-width: 1280px) {
  #header{
    height:50vh;
    width:100%;
    background-color: coral;
  }
  #components{
    height:40vh;
    width:100%;
    background-color: darkgoldenrod;
  }
  #footer {
    height:10vh;
    width:100%;
    background-color: burlywood;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  #header{
    height:40vh;
    width:100%;
    background-color: coral;
  }
  #components{
    height:50vh;
    width:100%;
    background-color: darkgoldenrod;
  }
  #footer {
    height:10vh;
    width:100%;
    background-color: burlywood;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  #header{
    height:40vh;
    width:100%;
    background-color: coral;
  }
  #components{
    height:50vh;
    width:100%;
    background-color: darkgoldenrod;
  }
  #footer {
    height:10vh;
    width:100%;
    background-color: burlywood;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  #header{
    height:40vh;
    width:100%;
    background-color: coral;
  }
  #components{
    height:50vh;
    width:100%;
    background-color: darkgoldenrod;
  }
  #footer {
    height:10vh;
    width:100%;
    background-color: burlywood;
  }
}

</style>
