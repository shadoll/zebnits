<template>
    <div id="intro">
        <div class="container">
            <b-row>
                <b-col md="4" class="intro-pic slideInLeft" v-wow>
                    <g-image
                        class="img-responsive"
                        src="~/images/about_window.jpg"
                        fit="cover"
                    />
                </b-col>

                <b-col md="8" class="slideInRight" v-wow>
                    <h2 v-t="'intro.title'" />
                    <p
                        v-for="(text, key) in $t('intro.texts')"
                        :key="key"
                        v-html="text"
                    />
                    <ul>
                        <li
                            v-for="(list, key) in $t('intro.lists')"
                            :key="key"
                            v-html="list"
                        />
                    </ul>

                    <div class="btn-section">
                        <a
                            href="#feature"
                            class="btn-default"
                            v-t="'actions.feature'"
                        />
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #intro {
        padding: 100px 0 70px;
        background-color: #fff;
    }

    #intro h2 {
        font-size: 40px;
        font-weight: 300;
        margin: 15px 0 15px 0;
        text-align: center;
    }

    .intro-pic {
        margin-top: 20px;
    }

    #intro {
        padding: 30px 0 50px;
    }

    #intro p {
        text-align: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        .intro-pic {
            margin-top: 100px;
        }
    }

    @media (max-width: 767px) {
        #intro {
            padding: 70px 0 70px;
        }

        #intro h2 {
            font-weight: 150;
            text-align: center;
        }

        #intro p {
            text-align: center;
        }
    }

    @media (max-width: 568px) {
        #intro {
            padding-top: 50px;
        }
    }

    @media (max-width: 360px) {
        #intro h2 {
            font-size: 30px;
        }
    }
</style>