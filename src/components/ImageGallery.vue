<template>
  <div>
    <div v-if="isLoggedIn" class="ui link cards">
      <div v-for="image in allImages" :key="image.id" class="card">
        <div class="image">
          <img :src="image.link" />
        </div>
        <div class="extra content">
          <span class="right floated">Uploaded 2 days ago</span>
          <span>
            <i class="eye icon"></i>
            {{image.views}} views
          </span>
        </div>
      </div>
    </div>
    <div class="img-md" v-else>
      <img src="../asset/img/login-pl.svg" />
      Please login to continue
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageGallery",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
};
</script>
<style scoped>
.card {
  height: 50vh;
}
.image {
  height: 85% !important;
}

.image img {
  height: 100% !important;
  width: 100% !important;
  object-fit: contain;
}

.img-md {
  width: 30vw;
  margin: 70px auto;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
.img-md img {
  width: 100%;
  height: 80%;
  object-fit: contain;
}
</style>