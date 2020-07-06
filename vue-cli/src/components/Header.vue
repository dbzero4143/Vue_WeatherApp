<template>
    <div id="app">
        <h1>check the weather</h1>
        <p>
            <input
                type="text"
                v-model="vmodel"
                placeholder="City name(English)"
                @keyup.enter="inputvmodel"
                @keypress="pressvmodel"
            />
        </p>
        <div v-if="this.isactive" class="div">
            <ul class="ul">
                <li class="li">
                    <h5>call</h5>
                </li>
                <li class="li">
                    <h5>cool</h5>
                </li>
            </ul>
        </div>

        <button @click="inputvmodel">Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vmodel: "",
            isactive: false,
            vmodel_first_substr: ""
        };
    },
    methods: {
        inputvmodel() {
            this.isactive = false;
            console.log("input" + this.vmodel);
            this.$store.dispatch("apiload", {
                vmodel: this.vmodel
            });
        },
        pressvmodel() {
            console.log("프레스");
            console.log(this.vmodel);
            this.isactive = true;
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

button {
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

.div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul {
    border: 1px solid #eeeeee;
    height: 120px;
    margin: 0px;
    padding: 0px;
    overflow: auto;
    width: 173px;
    background-color: white;
    color: black;
}

li {
    list-style: none;
    text-align: left;
    padding: 2px 2px;
    cursor: pointer;
}

li:hover {
    background-color: silver;
    color: white;
}
</style>
