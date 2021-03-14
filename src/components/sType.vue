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

<style lang="scss" scoped>
    #type {
        padding: 30px 0 80px 0;
        background-color: #f6f6f6;

        ol {
            font-size: 20px;
        }

        ul {
            list-style: none;
            font-size: 20px;
        }

        li {
            margin: 20px 0;
        }

        h2 {
            margin: 15px 0 15px 0;
            font-size: 40px;
            font-weight: 300;
        }
    }
</style>