<template>
    <div id="contact" class="contact-bg">
        <div class="overlay">
            <div class="container">
                <b-row align-v="center" align-h="center">
                    <b-col sm="5" class="fadeInUp" v-wow>
                        <h2 v-t="'contact.title'" />

                        <ul class="ul-address">
                            <li>
                                <mdicon
                                    name="mdiMapMarkerOutline"
                                    color="#8ca429"
                                    size="30px"
                                />
                                <i class="pe-7s-map-marker"></i
                                ><a
                                    rel="noopener"
                                    target="_blank"
                                    href="https://www.google.com/maps/place/Індустріальна+вулиця,+Чернігів,+Чернігівська+область,+Україна"
                                    >Чернигов, ул. Индустриальная 11</a
                                >
                            </li>
                            <li>
                                <mdicon
                                    name="mdiCellphone"
                                    color="#8ca429"
                                    size="30px"
                                />
                                <a href="tel:+380635708184"
                                    >+380 63 570-81-84</a
                                >
                            </li>
                            <li>
                                <mdicon
                                    name="mdiEmailOutline"
                                    color="#8ca429"
                                    size="30px"
                                />
                                <a href="mailto:info@zebnits.com"
                                    >info@zebnits.com</a
                                >
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $color: #8ca429;
    $orange: #dd9933;

    #contact {
        width: 100%;
        min-height: 100%;

        h2 {
            color: white;
        }

        .overlay {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
    .row {
        min-height: 400px;
    }
    .contact-bg {
        background-image: url("../images/bg-contacts.jpg");
    }

    .ul-address {
        a {
            font-weight: normal;

            &:hover {
                color: white;
            }
        }

        li {
            padding-right: 20px;
            margin-bottom: 8px;
            list-style: none;
            color: white;

            .mdi {
                margin-left: 15px;
                position: absolute;
                left: 0;
                color: $color;
            }
        }
    }
</style>
