import qs from "qs";
import axios from "axios";

const BASE_URL = "https://api.imgur.com";
// const CLIENT_ID = process.env.VUE_APP_CLIENT_ID

export default {
  login: () => {
    const queryString = {
      client_id: "30b105590c34415",
      response_type: "token",
    };
    window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  },
  getImages: (token) => {
    return axios.get(`${BASE_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
