import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import AuthHandler from "./components/AuthHandler.vue";
import ImageGallery from '@/components/ImageGallery';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/oauth2/callback", component: AuthHandler },
    { path: "/gallery", component: ImageGallery },
  ],
  mode: "history",
});
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
