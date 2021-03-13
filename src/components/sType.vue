<template>
    <div id="type">
        <div class="container">
            <b-row align-h="center">
                <b-col sm="10" class="text-center">
                    <h2 class="fadeInRight" v-wow v-t="'type.title'" />
                    <p v-t="'type.desc'" />
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" class="fadeIn">
                    <g-image
                        src="~/images/open_type.png"
                        class="img-responsive"
                    />
                </b-col>
                <b-col sm="4" class="fadeInRight" v-wow>
                    <ol>
                        <li
                            v-for="(item, key) in $t('type.list')"
                            :key="key"
                            v-html="item"
                        />
                    </ol>
                </b-col>
            </b-row>
        </div>
    </div>
</template>