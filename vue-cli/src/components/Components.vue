<template>
    <div id="app">
        <article>
            <section v-if="this.resultdata">
                <h2>
                    <p><img src="../assets/city.png" alt="city" /> CityName</p>
                </h2>
                <h3>
                    <p>{{ this.resultdata.name }}</p>
                </h3>
            </section>

            <section v-if="this.resultdata">
                <h2>
                    <p><img src="../assets/hot.png" alt="city" /> Max_Temp</p>
                </h2>
                <h3>
                    <p>{{ this.resultdata.max_temp }}°C</p>
                </h3>
            </section>

            <section v-if="this.resultdata">
                <h2>
                    <p><img src="../assets/cold.png" alt="city" /> Min_Temp</p>
                </h2>
                <h3>
                    <p>{{ this.resultdata.min_temp }}°C</p>
                </h3>
            </section>

            <section v-if="this.resultdata">
                <h2>
                    <p>
                        <img src="../assets/clouds.png" alt="city" /> Clouds(%)
                    </p>
                </h2>
                <h3>
                    <p>{{ this.resultdata.clouds.all }}%</p>
                </h3>
            </section>

            <section v-if="this.resultdata">
                <h2>
                    <p><img src="../assets/star.png" alt="city" /> Today</p>
                </h2>
                <h3>
                    <p>{{ this.resultdata.weather }}</p>
                </h3>
            </section>
        </article>
    </div>
</template>

<script>
export default {
    computed: {
        resultdata() {
            return this.$store.getters.resultdata;
        }
    }
};
</script>

<style>
img {
    height: 3vh;
}

@media (min-width: 1281px) {
    article {
        display: table;
        height: 35vh;
        width: 100%;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

    section {
        display: table-cell;
        vertical-align: middle;
        height: 30vh;
        width: 200px;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
        line-height: 10vh;
    }
}

@media (min-width: 1025px) and (max-width: 1280px) {
    article {
        display: table;
        height: 35vh;
        width: 100%;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

    section {
        display: table-cell;
        vertical-align: middle;
        height: 30vh;
        width: 200px;
        margin-left: 1vh;
        margin-right: 1vh;
        margin-top: 4vh;
        margin-bottom: 4vh;
        line-height: 10vh;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    article {
        display: table;
        height: 35vh;
        width: 100%;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

    section {
        display: table-row;
        vertical-align: middle;
        height: 30vh;
        width: 100px;
        margin-left: 1vh;
        margin-right: 1vh;
        line-height: 10vh;
    }
}

@media (min-width: 481px) and (max-width: 767px) {
    article {
        display: table;
        height: 35vh;
        width: 100%;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

    section {
        height: 30vh;
        width: 50px;
        margin-left: 1vh;
        margin-right: 1vh;
        line-height: 10vh;
        display: table-row;
        vertical-align: middle;
    }
}

@media (min-width: 320px) and (max-width: 480px) {
    article {
        display: table;
        height: 35vh;
        width: 100%;
        margin-top: 2.5vh;
        margin-bottom: 2.5vh;
    }

    section {
        height: 30vh;
        width: 50px;
        margin-left: 1vh;
        margin-right: 1vh;
        line-height: 10vh;
        display: table-row;
        vertical-align: middle;
    }
}
</style>
