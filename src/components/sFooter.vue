<template>
    <footer id="footer">
        <div class="container">
            <b-col sm="12" class="site-keywords" v-t="'keywords'" />
            <b-col sm="4" offset-sm="4">
                <div class="social text-center">
                    <ul>
                        <li>
                            <a
                                class="fadeInUp facebook"
                                href="https://www.facebook.com/zebnits/"
                                v-wow
                                data-wow-delay="0.2s"
                                ><i class="fa fa-facebook"></i
                            ></a>
                        </li>
                    </ul>
                </div>
                <div class="text-center fadeInUp" style="font-size: 14px" v-wow>
                    © {{ new Date().getFullYear() }} Zebnits |
                    <i18n path="develop.title" tag="span">
                        <template #url>
                            <a :href="$t('develop.url')" target="_blank">{{
                                $t("develop.developer")
                            }}</a>
                        </template>
                    </i18n>
                </div>
            </b-col>
        </div>
    </footer>
</template>

<script>
    export default {
        data: () => ({}),
        computed: {},
    };
</script>

<style lang="scss">
    $color: #8ca429;
    $orange: #dd9933;

    #footer {
        color: #fff;
        background-color: #222;
        padding: 50px 0 50px;
    }

    .site-keywords {
        font-size: 13px;
        color: #777;
        line-height: 20px;
        margin-bottom: 20px;
        text-align: center;
    }

    .social {
        ul {
            padding: 0;
            list-style: none;
        }

        li {
            display: inline-block;
            padding-right: 0.3em;
            padding-bottom: 0.3em;

            a {
                display: block;
                width: 40px;
                height: 40px;
                line-height: 40px;
                color: $color;
                transition: all 0.8s ease;
                border-radius: 50%;
                font-size: 22px;

                &:hover {
                    color: #fff;
                    background-color: $color;
                }

                i {
                    color: #fff;
                    margin: 0;
                }
            }

            .facebook {
                &:hover {
                    background-color: #3b5998;
                }
            }
        }
    }
</style>