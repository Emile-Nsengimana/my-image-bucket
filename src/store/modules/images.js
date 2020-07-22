import imgurApi from "@/api/imgur";

const state = {
  images: [],
};
const getters = {
  allImages: (state) => state.images,
};
const mutations = {
  setImages: (state, images) => (state.images = images),
};
const actions = {
  fetchImages: async ({ commit, rootState }) => {
    const images = await imgurApi.getImages(rootState.auth.token);
    commit('setImages', images.data.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
