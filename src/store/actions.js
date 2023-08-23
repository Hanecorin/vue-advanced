import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((reponse) => {
        console.log(reponse.data);
        context.commit("SET_NEWS", reponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        console.log(data);
        commit("SET_ASK", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        console.log(data);
        commit("SET_JOBS", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
