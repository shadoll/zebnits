<template>
    <div id="specifications">
        <div class="container">
            <b-row align-h="center">
                <b-col md="10" sm="12" class="text-center">
                    <h2 v-t="'specifications.title'" />
                    <p v-t="'specifications.desc'" />
                </b-col>
            </b-row>
            <b-row class="row row-feat">
                <b-col md="6" class="fadeInLeft" v-wow>
                    <b-col md="12"
                        class="feat-list"
                        v-for="(spec, key) in $t('specifications.specs')"
                        :key="key"
                    >
                        <div
                            class="inner fadeInLeft"
                            data-wow-delay="0.2s"
                            v-wow
                        >
                            <h4 v-html="spec.title" />
                            <p v-html="spec.desc" />
                        </div>
                    </b-col>

                    <b-col sm="12" class="feat-list">
                        <div class="btn-section">
                            <a
                                href="#order"
                                class="btn-default"
                                v-t="'actions.order'"
                            />
                        </div>
                    </b-col>
                </b-col>
                <b-col md="6" class="feature-2-pic fadeInRight" v-wow>
                    <g-image
                        src="~/images/material_window.jpg"
                        class="img-responsive"
                    />
                </b-col>
            </b-row>
        </div>
    </div>
</template>