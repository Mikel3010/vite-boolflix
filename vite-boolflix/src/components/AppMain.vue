<script>
import {store} from '../store';
import axios from 'axios'
import AppCard from './AppCard.vue';
export default{
  name: 'AppMain',
  components:{
    AppCard,
  },
  data(){
    return{
      store
    }
  },
  methods:{
    search(){
      console.log('fai ricerca');
      console.log(this.searchKey);
      axios.get(this.store.config.urlMovie,{
        params:{
          api_key: this.store.config.apiKey,
          language: this.store.config.lang,
          query: this.store.searchKey
        }
      }).then((response)=>{
        console.log(response);
        this.store.movies = response.data.results;
      })
      axios.get(this.store.config.urlTvShows,{
        params:{
          api_key: this.store.config.apiKey,
          language: this.store.config.lang,
          query: this.store.searchKey
        }
      }).then((response)=>{
        console.log(response);
        this.store.tv = response.data.results;
      })
    }
  }
}
</script>
<template>
  <div class="container">
    <input type="text" placeholder="Cerca Film" v-model="store.searchKey">
    <button @click="search">Search</button>
  </div>
  <h2>Movie</h2>
  <div>
    <ul>
        <li v-for="movie in store.movies">
            <AppCard :info="movie"></AppCard>
        </li>
    </ul>
  </div>
  <h2>Tv Show</h2>
  <div>
    <ul>
        <li v-for="tvShow in store.tv">
            <AppCard :info="tvShow"></AppCard>
        </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
li{
    list-style: none;
    margin-bottom: 30px;
}
h2{
    color: red;
    text-align: center;
}
.container{
    text-align: center;
}
input{
    padding: 5px 30px;
    margin-right: 30px;
}
button{
    padding: 5px 20px;
}
</style>