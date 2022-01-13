<template>
  <div class="main-container">
    <Header></Header>
    <h2>The ID for this video is {{ this.$route.query.id }}</h2>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Watch",
  components: {
    Header: Header
  },
  data() {
    return {
      url: null
    }
  },
  computed: {
    videos() {
      return this.$store.state.videos
    }
  },
  mounted() {
    this.$store.dispatch("getVideos");
  }
}
</script>

<style scoped>
.main-container {
  width: 1600px;
  height: 1100px;
  text-align: center;
}

h4 {
  margin-top: 30px;
}
</style>