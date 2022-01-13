import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let url = 'https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos';
const store = new Vuex.Store({
    state: {
        videos: []
    },
    getters: {},
    actions: {
        getVideos({ commit }) {
            axios.get(url)
                .then(response => {
                    commit('setVideos', response.data);
                });
        }
    },
    mutations: {
        setVideos(state, videos) {
            state.videos = videos;
        }
    }
});

export default store;