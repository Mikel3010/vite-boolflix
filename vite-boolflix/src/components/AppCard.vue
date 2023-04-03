<script>
import CountryFlag from 'vue-country-flag-next'
export default{
    name:'AppCard1',
    components:{
        CountryFlag,

    },
    data(){
        return{
            urlImg:'https://image.tmdb.org/t/p/w342',
        }
    },
    props:{
        info: Object
    },
    computed:{
        flagLang(){
            switch(this.info.original_language){
                case 'en':
                return 'gb';
                
                default:
                return this.info.original_language
            }
        },
        vote(){
            return Math.ceil(this.info.vote_average /2);
        }
    }
}
</script>
<template>
    <div>
        <div>
            <img :src="this.urlImg + info.poster_path" alt="">
        </div>
        <h3>{{ info.title || info.name }}</h3>
        <h4>{{ info.original_title || info.original_name }}</h4>
        <country-flag :country='flagLang' size='small'/>
        <div>{{ vote }}</div>
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote"/>
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-vote"/>
    </div>
</template>
<style lang="scss" scoped></style>