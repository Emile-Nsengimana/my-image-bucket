<template>
  <div>
    <NavBar />
    <router-view class="ui container"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>