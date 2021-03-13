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
