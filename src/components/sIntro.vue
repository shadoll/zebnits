<template>
    <div id="intro">
        <div class="container">
            <b-row>
                <!-- /.intro image -->
                <b-col md="4" class="intro-pic slideInLeft" v-wow>
                    <g-image
                        class="img-responsive"
                        src="~/images/about_window.jpg"
                        fit="cover"
                    />
                </b-col>

                <!-- /.intro content -->
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