<template>
  <div>
    <Header></Header>
    <div class="video-list-container">
      <FavoriteVideo v-for="video in getFavorites"
             :video="video"
             :key="video.id"
      ></FavoriteVideo>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import FavoriteVideo from "../components/FavoriteVideo";

export default {
  name: "Favorite",
  components: {
    Header: Header,
    FavoriteVideo: FavoriteVideo
  },
  computed: {
    getFavorites() {
      return this.$store.state.videos.filter(n => n.favorite === true);
    }
  },
  mounted() {
    this.$store.dispatch("getVideos");
  }
}
</script>

<style scoped>
.video-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  width: 1600px;
  height: 1100px;
  padding-top: 80px;
  padding-left: 250px;
}
</style>