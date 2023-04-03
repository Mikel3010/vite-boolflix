<script>
import CountryFlag from 'vue-country-flag-next'
export default{
    name:'AppCard',
    components:{
        CountryFlag,

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
    }
}
</script>
<template>
    <div>
        <h3>{{ info.title || info.name }}</h3>
        <h4>{{ info.original_title || info.original_name }}</h4>
        <country-flag :country='flagLang' size='small'/>
        <div>{{ info.vote_average }}</div>
    </div>
</template>
<style lang="scss" scoped></style>