<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'AppCard',
    components: {
        CountryFlag,

    },
    data() {
        return {
            urlImg: 'https://image.tmdb.org/t/p/w342',
        }
    },
    props: {
        info: Object
    },
    computed: {
        flagLang() {
            switch (this.info.original_language) {
                case 'en':
                    return 'gb';

                default:
                    return this.info.original_language
            }
        },
        vote() {
            return Math.ceil(this.info.vote_average / 2);
        }
    }
}
</script>
<template>
    <div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="this.urlImg + info.poster_path" alt="poster">
                </div>
                <div class="flip-card-back">
                    <div><country-flag :country='flagLang' size='small' /></div>
                    <h3>{{ info.title || info.name }}</h3>
                    <h4>{{ info.original_title || info.original_name }}</h4>
                    <div>
                        <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote" />
                        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - vote" />
                    </div>
                    <p>{{ info.overview }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.flip-card {
    background-color: transparent;
    width: 342px;
    height: 513px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
}


.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}


.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front img{
    width: 100%;
}

.flip-card-back{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.flip-card-front,.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    background-color: red;
    color: white;
    transform: rotateY(180deg);
}
</style>