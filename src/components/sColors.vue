<template>
    <div id="colors" class="fullscreen colors-bg">
        <div class="overlay">
            <div class="container">
                <b-row align-h="center" class="pt-5">
                    <b-col md="8" sm="12" class="text-center">
                        <h2 class="fadeInRight" v-wow v-t="'colors.title'" />
                        <p
                            class="colors-text fadeInLeft"
                            v-wow
                            v-t="'colors.desc'"
                        />
                    </b-col>
                </b-row>
                <b-row class="pt-5">
                    <b-col sm="12" class="text-center colors">
                        <g-image
                            src="~/images/colors/1394075459069_default.jpg"
                            class="fadeInUp"
                            data-wow-delay="0.1s"
                            v-wow
                        />
                        <g-image
                            src="~/images/colors/1394075488377_default.jpg"
                            class="fadeInUp"
                            v-wow
                            data-wow-delay="0.2s"
                        />
                        <g-image
                            src="~/images/colors/1394075495515_default.jpg"
                            class="fadeInUp"
                            v-wow
                            data-wow-delay="0.3s"
                        />
                        <g-image
                            src="~/images/colors/1394075264042_default.jpg"
                            class="fadeInUp"
                            v-wow
                            data-wow-delay="0.4s"
                        />
                        <g-image
                            src="~/images/colors/1394075522052_bulletin.jpg"
                            class="fadeInUp"
                            v-wow
                            data-wow-delay="0.5s"
                        />
                        <g-image
                            src="~/images/colors/1394075525979_bulletin.jpg"
                            class="wow fadeInUp"
                            data-wow-delay="0.6s"
                        />
                        <g-image
                            src="~/images/colors/1394075529927_bulletin.jpg"
                            class="fadeInUp"
                            v-wow
                            data-wow-delay="0.7s"
                        />
                        <g-image
                            src="~/images/colors/1394075533849_bulletin.jpg"
                            class="fadeInUp"
                            v-wow
                            data-wow-delay="0.8s"
                        />
                        <g-image
                            src="~/images/colors/1394075539664_bulletin.jpg"
                            class="fadeInUp"
                            v-wow
                            data-wow-delay="0.9s"
                        />
                        <g-image
                            src="~/images/colors/1394075546987_default.jpg"
                            class="fadeInUp"
                            v-wow
                            data-wow-delay="1.0s"
                        />
                        <g-image
                            src="~/images/colors/1428669220316_default.jpg"
                            class="fadeInUp"
                            v-wow
                            data-wow-delay="1.1s"
                        />
                        <g-image
                            src="~/images/colors/1428669266937_default.jpg"
                            class="fadeInUp"
                            v-wow
                            data-wow-delay="1.2s"
                        />
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #colors {
        h2 {
            margin: 15px 0 15px 0;
            font-size: 40px;
            font-weight: 300;
        }

        .container {
            padding-bottom: 50px;
        }
    }
    .container {
        color: white;
    }
    .colors-bg {
        background-image: url("../images/color.jpg");
        background-size: cover;
    }

    .colors {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        img {
            height: 80px;
            width: auto;
            margin: 10px;
        }
    }
</style>