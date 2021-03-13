<template>
    <div id="prices">
        <div class="container">
            <b-row align-h="center">
                <b-col md="10" sm="12" class="text-center feature-title">
                    <h2 class="wow fadeInLeft" v-t="'prices.title'" />
                    <div
                        class="title-line fadeInRight"
                        v-wow
                        v-t="prices.desc"
                    />
                </b-col>
            </b-row>
            <b-row class="row package-option">
                <b-col sm="12">
                    <label
                        v-html="
                            $t('prices.window-type') +
                            ': <strong>' +
                            typeDescription +
                            '</strong>'
                        "
                    ></label>
                </b-col>
                <b-col sm="12" class="text-center window-type">
                    <div class="inner">
                        <div
                            v-for="(item, key) in types"
                            :key="key"
                            @click="selectWindowType(key)"
                        >
                            <g-image
                                v-wow
                                class="fadeInUp"
                                :class="selectedWindow(key)"
                                :src="$func.getImg(item.image)"
                            />
                        </div>
                    </div>
                </b-col>
                <b-container fluid="sm">
                    <b-row>
                        <b-col sm="12" md="6">
                            <b-form-group :label="$t('prices.window-width')">
                                <b-input-group
                                    size="lg"
                                    :append="$t('prices.unit')"
                                    class="fadeInUp"
                                    v-wow
                                >
                                    <template #prepend>
                                        <b-input-group-text
                                            ><i class="fa fa-arrows-h"></i
                                        ></b-input-group-text>
                                    </template>
                                    <b-form-input
                                        type="text"
                                        :placeholder="$t('prices.window-width')"
                                        v-model="activeWindow.width"
                                    />
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col sm="12" md="6">
                            <b-form-group :label="$t('prices.window-height')">
                                <b-input-group
                                    size="lg"
                                    :append="$t('prices.unit')"
                                    class="fadeInUp"
                                    v-wow
                                >
                                    <template #prepend>
                                        <b-input-group-text
                                            ><i class="fa fa-arrows-v"></i
                                        ></b-input-group-text>
                                    </template>
                                    <b-form-input
                                        type="text"
                                        :placeholder="
                                            $t('prices.window-height')
                                        "
                                        v-model="activeWindow.height"
                                    />
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container fluid="sm">
                    <b-row>
                        <b-col sm="12" md="4">
                            <b-form-group :label="$t('prices.window-material')">
                                <b-form-select
                                    size="lg"
                                    v-model="activeWindow.material"
                                    :options="$t('materials')"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col sm="12" md="4">
                            <b-form-group :label="$t('prices.window-girder')">
                                <b-form-select
                                    size="lg"
                                    v-model="activeWindow.girder"
                                    :options="$t('girder')"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col sm="12" md="4">
                            <b-form-group :label="$t('prices.window-paint')">
                                <b-form-select
                                    size="lg"
                                    v-model="activeWindow.paint"
                                    :options="$t('paint')"
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container fluid="sm" class="pt-3">
                    <b-row>
                        <b-col sm="12" class="text-center">
                            <b-form-checkbox
                                switch
                                size="lg"
                                v-model="activeWindow.sill"
                            >
                                {{
                                    $t("prices.window-sill") +
                                    " " +
                                    $t("prices.window-sill-depth")
                                }}
                            </b-form-checkbox>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="12" md="4">
                            <b-form-group
                                :label="$t('prices.window-sill-width')"
                            >
                                <b-input-group
                                    :append="$t('prices.unit')"
                                    class="fadeInUp"
                                    v-wow
                                >
                                    <template #prepend>
                                        <b-input-group-text
                                            ><i class="fa fa-arrows-h"></i
                                        ></b-input-group-text>
                                    </template>
                                    <b-form-input
                                        type="text"
                                        v-model="activeWindow.sillWidth"
                                        :placeholder="
                                            $t('prices.window-sill-width')
                                        "
                                    />
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col sm="12" md="4">
                            <b-form-group
                                :label="$t('prices.window-sill-height')"
                            >
                                <b-input-group
                                    :append="$t('prices.unit')"
                                    class="fadeInUp"
                                    v-wow
                                >
                                    <template #prepend>
                                        <b-input-group-text
                                            ><i class="fa fa-arrows-v"></i
                                        ></b-input-group-text>
                                    </template>
                                    <b-form-input
                                        v-model="activeWindow.sillHeight"
                                        :placeholder="
                                            $t('prices.window-sill-height')
                                        "
                                    />
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col sm="12" md="4">
                            <b-form-group
                                :label="$t('prices.window-sill-material')"
                            >
                                <b-form-select
                                    size="lg"
                                    v-model="activeWindow.sillMaterial"
                                    :options="$t('materials')"
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container fluid="sm" class="pt-3">
                    <b-row>
                        <b-col sm="12" class="text-center">
                            <b-form-checkbox
                                switch
                                size="lg"
                                v-model="activeWindow.install"
                            >
                                {{ $t("prices.window-install") }}
                            </b-form-checkbox>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container fluid="sm" class="pt-3">
                    <b-row align-h="center">
                        <b-col sm="4" class="price">
                            <span>{{ price }}</span> ₴ (грн)
                        </b-col>
                        <b-col sm="4" class="price">
                            <b-button
                                pill
                                class="btn-primary"
                                v-html="orderButtonTitle"
                                @click="order"
                            />
                        </b-col>
                    </b-row>
                </b-container>
            </b-row>
        </div>
    </div>
</template>

<script>
    import prices from "~/data/prices.json";
    import types from "~/data/types.json";

    export default {
        data() {
            return {
                prices,
                types,
                activeWindow: {
                    type: "type11",
                    height: 1000,
                    width: 1000,
                    material: "pine",
                    girder: "timber1",
                    paint: "one",
                    sill: false,
                    sillHeight: 400,
                    sillWidth: 1000,
                    sillMaterial: "pine",
                    install: false,
                },
            };
        },
        created() {
            localStorage.removeItem("order");
            this.minPrice();
        },
        methods: {
            selectWindowType: function (type) {
                this.activeWindow.type = type;
            },
            selectedWindow: function (type) {
                return this.activeWindow.type == type ? "active" : "";
            },
            minPrice() {
                this.$store.commit("minPrice", this.prices.base_price);
            },
            order: function () {
                var order_message =
                    this.$t("prices.window-type") +
                    ": " +
                    this.typeDescription +
                    "\n" +
                    this.$t("prices.window-size") +
                    ": " +
                    this.$t("prices.window-width") +
                    " — " +
                    this.activeWindow.width +
                    " " +
                    this.$t("prices.unit") +
                    ", " +
                    this.$t("prices.window-height") +
                    " — " +
                    this.activeWindow.height +
                    " " +
                    this.$t("prices.unit") +
                    "\n" +
                    this.$t("prices.window-material") +
                    ": " +
                    this.$t("materials." + this.activeWindow.material + ".text") +
                    "\n" +
                    this.$t("prices.window-girder") +
                    ": " +
                    this.$t("girder." + this.activeWindow.girder + ".text") +
                    "\n" +
                    this.$t("prices.window-paint") +
                    ": " +
                    this.$t("paint." + this.activeWindow.paint + ".text");

                if (this.activeWindow.sill) {
                    order_message +=
                        "\n\n" +
                        this.$t("prices.window-sill") +
                        " " +
                        this.$t("prices.window-sill-depth") +
                        "\n" +
                        this.$t("prices.window-size") +
                        ": " +
                        this.$t("prices.window-sill-width") +
                        " — " +
                        this.activeWindow.sillWidth +
                        " " +
                        this.$t("prices.unit") +
                        ", " +
                        this.$t("prices.window-sill-height") +
                        " — " +
                        this.activeWindow.sillHeight +
                        " " +
                        this.$t("prices.unit") +
                        "\n" +
                        this.$t("prices.window-sill-material") +
                        ": " +
                        this.$t(
                            "materials." + this.activeWindow.sillMaterial + ".text"
                        );
                }
                if (this.activeWindow.install) {
                    order_message += "\n\n" + this.$t("prices.window-install");
                }

                if (this.$store.state.order == "") {
                    this.$store.commit("setOrder", order_message);
                } else {
                    this.$store.commit(
                        "setOrder",
                        this.$store.state.order + "\n---\n" + order_message
                    );
                }
            },
        },
        computed: {
            typeDescription() {
                return this.types[this.activeWindow.type].description;
            },
            orderButtonTitle() {
                if (this.$store.state.order == "") {
                    return this.$t("actions.order");
                } else {
                    return this.$t("actions.order_add");
                }
            },
            price() {
                let basePrice = this.prices.base_price;
                let areaRate =
                    (this.activeWindow.height * this.activeWindow.width) / 1000000;
                let typeRate = this.types[this.activeWindow.type].price_rate;
                let materialRate = this.prices.material[this.activeWindow.material]
                    .price_rate;
                let girderRate = this.prices.girder[this.activeWindow.girder]
                    .price_rate;
                let paintRate = this.prices.paint[this.activeWindow.paint]
                    .price_rate;

                let windowPrice = Math.round(
                    basePrice *
                        areaRate *
                        typeRate *
                        materialRate *
                        girderRate *
                        paintRate
                );

                let sillBasePrice = this.prices.sill_base_price;
                let sillAreaRate =
                    (this.activeWindow.sillHeight * this.activeWindow.sillWidth) /
                    1000000;
                let sillMaterialRate = this.prices.material[
                    this.activeWindow.sillMaterial
                ].price_rate;

                let sillPrice = this.activeWindow.sill
                    ? Math.round(sillBasePrice * sillAreaRate * sillMaterialRate)
                    : 0;

                let installPrice = this.activeWindow.install
                    ? Math.round(
                          (windowPrice + sillPrice) * this.prices.install.price_rate
                      )
                    : 0;

                return windowPrice + sillPrice + installPrice;
            },
        },
    };
</script>

<style>
</style>
