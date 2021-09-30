<template>
    <div class="Master">
        <section>
            <Header />
        </section>

        <div class="container">
            <!-- <Content /> -->
            <component :is="componentTemplate" @navigate="navigte" />
        </div>

        <section>
            <Footer />
        </section>
    </div>
</template>

<script>
    import Dashboard from "../views/Pages/Dashboard.vue";
    import Header from "../components/Header.vue";
    import Content from "../components/Content.vue";
    import Footer from "../components/Footer.vue";
    import Register from "../views/Pages/Register.vue";
    var axios = require("axios");
    axios.defaults.withCredentials = true;
    import { mapGetters, mapActions, mapState } from "vuex";

    export default {
        name: "master",
        data: function() {
            return {
                componentToNavigate: "",
            };
        },
        methods: {
            ...mapActions(["setLogged"]),

            navigte: function(navigateTo) {
                this.componentToNavigate = navigateTo;
            },

            checkLogin: function() {
                var config = {
                    method: "get",
                    url: "http://localhost:3000/users/check",
                };
                let self = this;
                axios(config)
                    .then(function(response) {
                        let data = response.data;

                        if (data.user) {
                            self.setLogged(true);
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
        },

        components: {
            Header,
            Dashboard,
            Footer,
        },
        mounted() {
            this.checkLogin();
        },

        computed: {
            ...mapGetters(["isLoggedIn"]),
            componentTemplate: function() {
                if (this.componentToNavigate == "Dashboard") return Dashboard;
                else if (this.componentToNavigate == "Register") return Register;
                else if (this.componentToNavigate == "Content") return Content;
                else return Content;
            },
        },
    };
</script>

<style lang="scss">
    .Master {
        min-height: 50vh;
        & > .container {
            min-height: calc(100vh - 150px - 150px);
            display: flex;
            align-items: center;
        }
    }
</style>
