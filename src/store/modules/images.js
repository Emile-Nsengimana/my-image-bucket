const state = {
  images: [],
};
const getters = {
  getImages: (state) => state.images,
};
const mutations = {
  setImages: (state, images) => (state.images = images),
};
const actions = {
  updateImages: ({ commit }) => {
    commit("setImages");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
