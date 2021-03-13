<template>
    <div id="contact">
        <div
            class="contact contact-bg 0fullscreen"
        >
            <div class="overlay">
                <div class="container">
                    <b-row class="contact-row">
                        <b-col
                            sm="5" offset-sm="3" class="contact-left fadeInUp"
                            v-wow
                        >
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
    </div>
</template>