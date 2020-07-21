import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import AuthHandler from "./components/AuthHandler.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // { path: "/", component: App },
    { path: "/oauth2/callback", component: AuthHandler },
  ],
  mode: "history",
});
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
