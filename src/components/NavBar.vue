<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">My image bucket</a>
    <div v-if="isLoggedIn" class="right menu">
      <a class="ui item">Add image</a>
      <router-link class="ui item" to="/gallery">Gallery</router-link>
      <a class="ui item" @click="logout">Logout</a>
    </div>
    <div v-else class="right menu">
      <a class="ui item" @click="redirectLogin">Login</a>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavBar",
  methods: mapActions(["redirectLogin", "logout"]),
  computed: mapGetters(["isLoggedIn"])
};
</script>
<style scoped>
a {
  color: #156a68b3;
  font-weight: 700;
  font-size: 17px;
}
</style>