<template>
  <div>
    <Header></Header>
    <div class="video-list-container">
      <Video v-for="video in videos"
             :video="video"
             :key="video.id"
      ></Video>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Video from "../components/Video";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header: Header,
    Video: Video
  },
  data() {
    return {
      videos: []
    }
  },
  async mounted() {
    const response = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos");
    this.videos = response.data;
    console.log(this.videos)
  }
}
</script>

<style scoped>

.video-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 1600px;
  height: 1100px;
  padding-top: 80px;
}
</style>