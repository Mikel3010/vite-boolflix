import {reactive} from 'vue';

export const store = reactive({
    config:{
        urlMovie:'https://api.themoviedb.org/3/search/movie',
        urlTvShows:'https://api.themoviedb.org/3/search/tv',
        apiKey:'a3644f81328d71fdf3d6320a46c125d1',
        lang:'it-IT',
    },
    movies:[],
    tv:[],
    searchKey:'',
})