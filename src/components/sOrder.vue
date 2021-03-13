<template>
    <div id="order">
        <div class="container" v-if="!send">
            <b-row align-h="center">
                <b-col sm="10" class="text-center">
                    <h2 class="fadeInLeft" v-wow v-t="'order.title'" />
                    <p class="fadeInRight" v-wow v-t="'order.desc'" />
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col sm="10">
                    <b-form-group>
                        <b-input-group size="lg" class="fadeInUp" v-wow>
                            <template #prepend>
                                <b-input-group-text
                                    ><i class="fa fa-user"></i
                                ></b-input-group-text>
                            </template>
                            <b-form-input
                                v-model="name"
                                :placeholder="$t('order.name')"
                                required
                                :state="nameState"
                                trim
                                aria-describedby="input-live-feedback"
                            />
                            <b-form-invalid-feedback
                                v-html="$t('order.name_invalid')"
                            />
                        </b-input-group>

                        <b-input-group size="lg" class="fadeInUp mt-3" v-wow>
                            <b-input-group-text
                                ><i class="fa fa-phone"></i
                            ></b-input-group-text>
                            <b-form-input
                                v-model="phone"
                                type="tel"
                                placeholder="(___)___ __ __"
                                required
                                :state="phoneState"
                                trim
                                aria-describedby="input-live-feedback"
                                v-cleave="{
                                    numericOnly: true,
                                    blocks: [0, 3, 0, 3, 2, 2],
                                    delimiters: ['(', ')', ' ', '-', '-'],
                                }"
                            />
                            <b-form-invalid-feedback
                                v-html="$t('order.phone_invalid')"
                            />
                        </b-input-group>

                        <b-input-group size="lg" class="fadeInUp mt-3" v-wow>
                            <b-input-group-text
                                ><i class="fa fa-at"></i
                            ></b-input-group-text>
                            <b-form-input
                                v-model="email"
                                type="email"
                                :placeholder="$t('order.email')"
                                required
                                :state="emailState"
                                trim
                                aria-describedby="input-live-feedback"
                            />
                            <b-form-invalid-feedback
                                v-html="$t('order.email_invalid')"
                            />
                        </b-input-group>
                    </b-form-group>

                    <b-form-group size="lg" class="fadeInUp" v-wow>
                        <b-form-textarea
                            v-model="order"
                            rows="2"
                            max-rows="8"
                            plaintext
                        ></b-form-textarea>
                    </b-form-group>

                    <b-form-group size="lg" class="fadeInUp" v-wow>
                        <b-form-textarea
                            v-model="message"
                            :state="message.length >= 10"
                            :placeholder="$t('order.describe')"
                            rows="3"
                        ></b-form-textarea>
                        <div :v-html="order" />
                    </b-form-group>

                    <b-container fluid="sm" class="pt-3">
                        <b-row align-h="center">
                            <b-col sm="4" class="fadeInUp" v-wow>
                                <b-button
                                    pill
                                    class="btn-primary"
                                    v-t="'actions.order'"
                                />
                            </b-col>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>
        </div>
        <div class="container" v-if="send">
            <b-row align-h="center">
                <b-col sm="10" class="text-center">
                    <h2 class="fadeInLeft" v-wow v-t="'send.title'" />
                    <p class="fadeInRight" v-wow v-t="'send.desc'" />
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import Cleave from "cleave.js";

    export default {
        data() {
            return {
                name: "",
                phone: "",
                email: "",
                message: "",
                referer: "",
                send: false,
            };
        },
        mounted() {
            this.referer = this.$route.query;
        },
        created() {},
        methods: {},
        computed: {
            nameState() {
                return this.name.length > 2 ? true : false;
            },
            phoneState() {
                return null;
            },
            emailState() {
                return null;
            },
            order() {
                return this.$store.state.order;
            },
        },
        directives: {
            cleave: {
                inserted: (el, binding) => {
                    el.cleave = new Cleave(el, binding.value || {});
                },
                update: (el) => {
                    const event = new Event("input", { bubbles: true });
                    setTimeout(function () {
                        el.value = el.cleave.properties.result;
                        el.dispatchEvent(event);
                    }, 100);
                },
            },
        },
    };
</script>