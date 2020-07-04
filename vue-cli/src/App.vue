<template>
    <div id="app">
        <Header id="header"></Header>
        <Components id="components"></Components>
        <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Components from "./components/Components.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Components,
        Footer
    }
};
</script>

<style>
#app {
    font-family: "Amatic SC", cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 1281px) {
    #header {
        height: 50vh;
        width: 100%;
        background: #00f260; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            to bottom,
            #0575e6,
            #00f260
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to bottom,
            #0575e6,
            #00f260
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: white;
    }
    #components {
        height: 40vh;
        width: 100%;
        background-color: white;
    }
    #footer {
        height: 10vh;
        width: 100%;
        background-color: #d2d7d0;
    }
}

@media (min-width: 1025px) and (max-width: 1280px) {
    #header {
        height: 50vh;
        width: 100%;
        background: #00f260; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            to bottom,
            #0575e6,
            #00f260
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to bottom,
            #0575e6,
            #00f260
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: white;
    }
    #components {
        height: 40vh;
        width: 100%;
        background-color: white;
    }
    #footer {
        height: 10vh;
        width: 100%;
        background-color: #d2d7d0;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    #header {
        height: 50vh;
        width: 100%;
        background: #00f260; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            to bottom,
            #0575e6,
            #00f260
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to bottom,
            #0575e6,
            #00f260
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: white;
    }
    #components {
        height: 40vh;
        width: 100%;
        background-color: white;
        overflow-y: scroll;
    }
    #footer {
        height: 10vh;
        width: 100%;
        background-color: #d2d7d0;
    }
}

@media (min-width: 481px) and (max-width: 767px) {
    #header {
        height: 50vh;
        width: 100%;
        background: #00f260; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            to bottom,
            #0575e6,
            #00f260
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to bottom,
            #0575e6,
            #00f260
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: white;
    }
    #components {
        height: 40vh;
        width: 100%;
        background-color: white;
        overflow-y: scroll;
    }
    #footer {
        height: 10vh;
        width: 100%;
        background-color: #d2d7d0;
    }
}

@media (max-width: 480px) {
    #header {
        height: 50vh;
        width: 100%;
        background: #00f260; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            to bottom,
            #0575e6,
            #00f260
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to bottom,
            #0575e6,
            #00f260
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: white;
    }
    #components {
        height: 40vh;
        width: 100%;
        background-color: white;
        overflow-y: scroll;
    }
    #footer {
        height: 10vh;
        width: 100%;
        background-color: #d2d7d0;
    }
}
</style>
