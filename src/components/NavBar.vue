<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">My image bucket</a>
    <div class="right menu">
      <a class="ui item" @click="redirectLogin">Login</a>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "NavBar",
  methods: mapActions(["redirectLogin"])
};
</script>
<style scoped>
a {
  color: #156a68b3;
}
</style>