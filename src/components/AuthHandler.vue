<template>
  <Spinner />
</template>
<script>
import { mapActions } from "vuex";
import Spinner from "@/components/Spinner";

export default {
  name: "AuthHandler",
  methods: mapActions(["login"]),
  created() {
    this.login(window.location.hash);
  },
  components: {
    Spinner
  }
};
</script>
<style scoped>
a {
  color: #156a68b3;
}
</style>