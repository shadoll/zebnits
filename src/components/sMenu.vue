<template>
    <!-- <div id="menu"> -->
    <b-navbar toggleable="lg" type="dark" sticky>
        <b-navbar-brand href="#"
            ><g-image src="~/images/logo_white.svg" width="150"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item
                    v-for="(val, key) in $t('menu')"
                    :key="key"
                    :href="val.url"
                    class="nav-link"
                >
                    {{ val.title }}
                </b-nav-item>
            </b-navbar-nav>

            <!-- <div
                    id="navbar-scroll"
                    class="collapse navbar-collapse navbar-backyard navbar-right"
                >
                    <ul class="nav navbar-nav">
                        <li v-for="(val, key) in $t('menu')" :key="key">
                            <a :href="val.url" v-html="val.title" />
                        </li>
                    </ul>
                </div> -->
        </b-collapse>
        <!-- </div> -->
    </b-navbar>
    <!-- </div> -->
</template>

<script>
    export default {
    };
</script>

<style scoped>
    .navbar {
        background-color: #8ca429;
    }
    .navbar-nav .nav-link {
        color: #fff;
    }
    .navbar-nav a.nav-link {
        color: #fff !important;
        font-weight: 300 !important;
    }
    .navbar-toggler {
        border-color: transparent;
    }
</style>