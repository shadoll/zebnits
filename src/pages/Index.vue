<template>
    <Layout>
        <div data-spy="scroll" data-target="#navbar-scroll">
            <div class="parallax-container fullscreen">
                <div class="parallax-content landing">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="logo fadeInUp" v-wow>
                                    <g-image
                                        src="~/images/logo_square_white.svg"
                                        width="125"
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
                                    data-wow-delay="0.2s"
                                    v-t="'main.desc'"
                                />

                                <div
                                    class="head-btn fadeInLeft"
                                    v-wow
                                    data-wow-delay="0.5s"
                                >
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
        data: () => ({}),
        metaInfo: {
            title: "Zebnits",
        },
        updated() {
            window.scrollTo(0, 1);
            window.scrollTo(0, -1);
        },
        methods: {},
        computed: {
            price() {
                return this.$store.state.minprice;
            },
        },
    };
</script>

<style lang="scss" scoped>
    #app .btn-primary {
        margin: 0 20px;
        text-transform: uppercase;
    }
</style>

<style lang="scss">
    .logo {
        margin: 100px 0 40px 0;

        img {
            width: auto;
            height: 100%;
        }
    }

    .landing h1 {
        font-size: 56px;
        font-weight: 300;
        color: #fff;
        margin: 30px 0 30px 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    }

    .landing p,
    .landing h2 {
        color: #fff;
    }

    .landing-text {
        margin-bottom: 20px;
        font-size: 17px !important;
    }

    .head-btn {
        margin-bottom: 150px;
        display: flex;
        align-items: center;

        h2 {
            padding: 0;
            margin: 5px 0 0;
        }
    }

    .home-links a {
        margin-right: 1rem;
    }

    .parallax-container {
        background-image: url("../images/bg.jpg");
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

    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        .logo {
            margin: 100px 0 30px 0;
        }

        .landing h1 {
            margin: 60px 0 60px 0;
        }

        .landing-text {
            margin: 60px 0 40px 0;
        }
        .head-btn {
            margin: 50px 0 100px;
        }
    }

    @media (max-width: 767px) {
        .logo {
            margin: 40px 0 30px 0;
        }
        .head-btn {
            margin: 30px 0 80px;
        }
    }

    @media (max-width: 667px) {
        .logo {
            margin: 30px 0 30px 0;
        }
        .landing h1 {
            font-size: 50px;
            margin: 10px 0 25px 0;
        }

        .landing-text {
            margin-top: 20px;
        }
    }

    @media (max-width: 568px) {
        .logo {
            margin: 15px 0;
            height: 15vh;
        }
        .landing h1 {
            font-size: 40px;
            margin: 20px 0 10px 0;
        }

        .landing-text p {
            font-size: 16px !important;
        }
    }

    @media (max-width: 320px) {
        .logo {
            margin: 30px 0 20px 0;
        }
        .landing h1 {
            margin: 20px 0 35px 0;
        }
    }
</style>
