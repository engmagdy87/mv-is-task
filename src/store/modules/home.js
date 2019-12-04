import types from '../types';
import media from "../../assets/data/getMedia.json";

const state = {
  lang: "en",
  info: null,
  items: null,
  media: media.data,
  activeIndex: 3
};

const mutations = {
  [types.home.mutations.SET_ACTIVE_INDEX]: (
    currentState,
    payload
  ) => {
    currentState.activeIndex = payload;
  },
  [types.home.mutations.SET_LANGUAGE]: (
    currentState,
    payload
  ) => {
    currentState.lang = payload;
  },
  [types.home.mutations.SET_INFO]: (
    currentState,
    payload
  ) => {
    currentState.info = payload;
  },
  [types.home.mutations.SET_ITEMS]: (
    currentState,
    payload
  ) => {
    currentState.items = payload;
  }
};

const actions = {
  [types.home.actions.FETCH_INFO]: ({ commit }, payload) => {
    if (payload === "en")
      import("../../assets/data/getInfo-en.json").then(({ default: res }) => {
        commit(types.home.mutations.SET_INFO, res.data)

      });
    else
      import("../../assets/data/getInfo-es.json").then(({ default: res }) => {
        commit(types.home.mutations.SET_INFO, res.data)
      });
  },
  [types.home.actions.FETCH_ITEMS]: ({ commit }, payload) => {
    if (payload === "en")
      import("../../assets/data/getRelated-en.json").then(({ default: res }) => {
        commit(types.home.mutations.SET_ITEMS, res.data)

      });
    else
      import("../../assets/data/getRelated-es.json").then(({ default: res }) => {
        commit(types.home.mutations.SET_ITEMS, res.data)
      });
  }
};

export default {
  state,
  mutations,
  actions
};
