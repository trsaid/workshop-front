<template>
    <div class="carousel">
        <div class="carousel-item card" v-for="account in accounts" :key="account.id">
            <h5 class="title">{{ account.libelle }}</h5>
            <div class="description_logo">
                <a href="" class="logoKey left"></a>
                <!-- <div class="row" > -->
                <label for="password" class="col s9 label">Mot de passe:</label>
                <div class="input-field col s9 right">
                    <i class="material-icons prefix  right" @click="isVisible">visibility</i>
                    <input id="icon_prefix" type="text" class="validate" placeholder="**********" :value="account.password" />
                </div>
                <!-- </div> -->
            </div>
            <label for="modif" class="col s9 label right">Prochaine modification:</label>
            <div class="input-field col s9 right">
                <input id="date" type="text" placeholder="dd/mm/yyyy" :value="this.formatDate(account.updatedAt)" readonly/>

                <label for="activity" class="col s9 activity label">Activity:</label>
            </div>
        </div>

        <!-- <div class="carousel-item  card" href="#two!"></div>
        <div class="carousel-item  card" href="#three!"></div>
        <div class="carousel-item  card" href="#four!"></div>
        <div class="carousel-item  card" href="#five!"></div> -->

        <!-- <div class="carousel">
                <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
                <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
                <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
                <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
                <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
            </div> -->
    </div>
</template>

<script>
    var axios = require("axios");
    axios.defaults.withCredentials = true;
    // document.addEventListener("DOMContentLoaded", function() {
    //     var elems = document.querySelectorAll(".carousel");
    //     M.Carousel.init(elems);
    // });

    $(document).ready(function() {
        $(".carousel").carousel();
    });

    export default {
        name: "c-Carousel",

        data() {
            return {
                title: "Netflix",
                accounts: [],
            };
        },
        mounted() {
            var config = {
                method: "get",
                url: "http://localhost:3000/passwords/list",
            };
            let self = this;

            axios(config)
                .then(function(response) {
                    let data = response.data;
                    self.accounts = data;

                    console.log(data);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        methods: {
            formatDate(date) {
                var updated_date = new Date(date);

                return updated_date.toLocaleDateString("fr-FR");
            },
        },
        computed: {
            isVisible() {
                // document.querySelector("#icon_prefix").type = "text";
            },
        },
    };
</script>

<style lang="scss">
    .carousel {
        .carousel-item {
            // width: 400px;
            // height: 380px;
            // cursor: pointer;
            .title {
                color: #2429a4;
                font-weight: bold;
            }

            &.card {
                cursor: pointer;
                width: 347px;
                height: 277px;
                // background: rgba(36, 41, 164, 0.6);
                border: solid 2px;
                box-sizing: border-box;
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
                color: grey;
                padding: 0px 15px 15px 15px;
            }
            .description_logo {
                margin-top: 10px;
            }

            .logoKey {
                background: url("../assets/netflix.png") no-repeat;
                width: 68px;
                height: 90px;
                background-size: cover;
            }
            .label {
                color: #2429a4;
                font-weight: bold;
                text-decoration: underline;
                font-size: small;
            }

            .input-field {
                .prefix {
                    margin-left: 175px;
                    color: #2429a4;
                }
                .validate {
                    background-color: #c4c4c4;
                }
                .activity {
                    display: contents;
                }
            }
        }
    }
</style>
