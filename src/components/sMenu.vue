<template>
    <!-- <div id="menu"> -->
    <b-navbar toggleable="lg" type="dark" sticky>
        <b-navbar-brand href="#"
            ><g-image src="~/images/logo_white.svg" width="150"
        /></b-navbar-brand>
        <!-- <nav class="navbar-wrapper navbar-default"> -->
        <!-- <div class="container"> -->
        <!-- <div class="navbar-header">
                    <button
                        type="button"
                        class="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-backyard"
                    >
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div> -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item
                    v-for="(val, key) in $t('menu')"
                    :key="key"
                    :href="val.url"
                    v-html="val.title"
                    class="nav-link"
                />
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

<style scoped>
    .navbar {
        background-color: #8ca429;
    }
    .navbar-nav .nav-link {
        color: #fff;
    }
</style>