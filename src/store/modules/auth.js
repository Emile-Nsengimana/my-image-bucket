import imgurApi from "../../api/imgur";
import qs from "qs";
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('access_token'),
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};
const mutations = {
  setToken: (state, token) => (state.token = token),
};
const actions = {
  redirectLogin: () => imgurApi.login(),
  login: async ({ commit }, payload) => {
    const { access_token } = qs.parse(payload.replace("#", ""));
    commit("setToken", access_token);
    window.localStorage.setItem("access_token", access_token);
    router.push('/');
  },
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("access_token");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
