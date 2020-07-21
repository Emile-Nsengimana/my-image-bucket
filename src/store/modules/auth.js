import imgurApi from "../../api/imgur";
import qs from "qs";

const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};
const mutations = {
  setToken: (state, token) => (state.token = token),
};
const actions = {
  redirectLogin: () => imgurApi.login(),
  login: async(state, payload) => {
    // console.log('payload', payload);
    const { access_token } = qs.parse(payload.replace("#", ""));
    await imgurApi.getImages(access_token);
    // console.log("payload >>>", access_token);
  },
  logout: ({ commit }) => {
    commit("setToken", null);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
