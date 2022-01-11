<template>
  <div class="main-container">
    <Header></Header>
<!--    <h3 className="video-list-container">You are displaying video id of {{ $route.params.videoid }}</h3>-->
    <div id="video-payer">
      <iframe  :src="url"></iframe>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";

export default {
  name: "Watch",
  components: {
    Header: Header
  },
  methods: {
    getWatch() {
      for (let i = 0; i < this.videos.length; i++) {
        if (this.videos[i].id == this.$route.params.videoid) {
          let url = this.videos[i].videoAddress;
          url = url.replace('watch?v=', 'embed/')
          return url;
        }
      }
    }
  },
  data() {
    return {
      videos: [],
      url: null
    }
  },
  async mounted() {
    const response = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos");
    this.videos = response.data;
    console.log(this.videos);
    console.log(this.getWatch());
    this.url = this.getWatch();
  }
}
</script>

<style scoped>
.main-container {
  width: 1600px;
  height: 1100px;
}
#video-payer {
  text-align: center;
}
iframe {
  width: 1200px;
  height: 700px;
  margin-top: 80px;
}
</style>