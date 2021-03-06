import axios from "axios";

export const auth = {
  state: {
    token: "",
    user: {}
  },
  getters: {
    isAuthenticated: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    }
  },
  actions: {
    login({ commit, dispatch }, { token, user }) {
      commit("setToken", token);
      commit("setUser", user);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    logout({ commit, dispatch }) {
      commit("resetAll", "");
      delete axios.defaults.headers.common["Authorization"];
    },
    changePassword: ({ commit, dispatch }, token) => {
      commit("updateToken", token);
    },
    updateUser: ({ commit, dispatch }, user) => {
      commit("updateUser", user);
    }
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    updateToken: (state, token) => {
      state.token = token;
    },
    updateUser: (state, user) => {
      state.user = user;
    },
    resetAll: state => {
      (state.token = ""), (state.user = {});
    }
  }
};
