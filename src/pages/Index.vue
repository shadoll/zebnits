<template>
    <Layout>
        <div data-spy="scroll" data-target="#navbar-scroll">
            <div class="parallax-container">
                <parallax fixed :speed-factor="0.3">
                    <img src="../images/bg.jpg" />
                </parallax>
                <div class="parallax-content landing">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="logo fadeInUp" v-wow>
                                    <g-image
                                        src="~/images/logo_square_white.svg"
                                    />
                                </div>

                                <h1
                                    class="fadeInLeft"
                                    v-wow
                                    v-t="'main.title'"
                                />

                                <div
                                    class="landing-text fadeInUp"
                                    v-wow
                                    v-t="'main.desc'"
                                />

                                <div class="head-btn fadeInLeft" v-wow>
                                    <h2
                                        class="min_price"
                                        v-t="{
                                            path: 'main.price',
                                            args: { price: price },
                                        }"
                                    />
                                    <a
                                        href="#prices"
                                        class="btn-primary"
                                        v-t="'actions.calculate'"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <s-menu />
            <s-intro />
            <s-feature />
            <s-specifications />
            <s-type />
            <s-colors />
            <s-prices />
            <s-order />
            <s-contact />
        </div>
    </Layout>
</template>

<script>
    import "~/assets/main.scss";
    // import $ from "jquery";
    import Parallax from "vue-parallaxy";
    import sMenu from "~/components/sMenu";
    import sIntro from "~/components/sIntro";
    import sFeature from "~/components/sFeature";
    import sSpecifications from "~/components/sSpecifications";
    import sType from "~/components/sType";
    import sColors from "~/components/sColors";
    import sPrices from "~/components/sPrices";
    import sOrder from "~/components/sOrder";
    import sContact from "~/components/sContact";

    export default {
        components: {
            Parallax,
            sMenu,
            sIntro,
            sFeature,
            sSpecifications,
            sType,
            sColors,
            sPrices,
            sOrder,
            sContact,
        },
        data: () => ({
        }),
        metaInfo: {
            title: "Zebnits",
        },
        mounted() {
            window.$ = require("jquery");

        },
        methods: {
        },
        computed: {
            price() {
                return this.$store.state.minprice;
            },
        },
    };
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }

    .parallax-container {
        position: relative;
        height: 100vh;
    }
    .parallax-content {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
    }
</style>
