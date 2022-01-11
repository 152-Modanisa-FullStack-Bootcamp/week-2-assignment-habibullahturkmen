<template>
  <div class="main-container">
    <Header></Header>
    <!-- Video 3 and 6 does not support embed, so I printed the youtube address on the screen instead -->
    <h3 v-if="$route.params.videoid == 3">Go to {{ this.videos[2].videoAddress }}</h3>
    <h3 v-else-if="$route.params.videoid == 6">Go to {{ this.videos[5].videoAddress }}</h3>
    <!--  Other than video 3 and 6 will be embedded in this page because they support "embed".  -->
    <div v-else id="video-payer">
      <iframe :src="url"></iframe>
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
        if (this.videos[i].id === Number(this.$route.params.videoid)) {
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
  text-align: center;
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