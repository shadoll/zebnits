<template>
    <div id="feature" class="fullscreen feature-bg">
        <div class="overlay">
            <div class="container">
                <b-row align-h="center">
                    <b-col md="10" sm="12" class="text-center feature-title">
                        <h2 v-t="'feature.title'" />
                        <p v-t="'feature.desc'" />
                    </b-col>
                </b-row>
                <b-row class="pt-5">
                    <b-col md="4" class="text-center">
                        <g-image
                            src="~/images/window1.jpg"
                            class="feature-img img-responsive fadeInLeft"
                            v-wow
                        />
                    </b-col>

                    <b-col md="8" class="feature-grid">
                        <b-col
                            sm="6"
                            class="feat-list fadeInUp"
                            v-wow
                            data-wow-delay="0.2s"
                            v-for="(item, key) in $t('feature.features')"
                            :key="key"
                        >
                            <mdicon :name="item.icon" size="50px" />
                            <div class="inner">
                                <h4 v-html="item.title" />
                                <p v-html="item.desc" />
                            </div>
                        </b-col>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #feature {
        .overlay {
            background-color: rgba(255, 255, 255, 0.8);
            padding: 50px 0;
        }

        h2 {
            margin: 15px 0 15px 0;
            font-size: 40px;
            font-weight: 300;
        }

        .feature-title p {
            font-size: 18px;
        }
    }

    #feature .inner {
        display: inline-block;
        width: 80%;
    }
    .feature-grid {
        display: flex;
        flex-wrap: wrap;
    }

    .feature-bg {
        background-image: url("../images/bg-wood.jpg");
        background-size: cover;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        .feature-img {
            margin-top: 0;
            margin-top: 30px;
        }
    }

    @media (max-width: 736px) {
        .feature-img {
            margin-top: 0;
        }
    }
</style>