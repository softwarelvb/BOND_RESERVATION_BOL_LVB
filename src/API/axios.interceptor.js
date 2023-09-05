import axios from "axios";
import store from "../stores/store";
// import jwt from "jsonwebtoken";

axios.defaults.baseURL = `${process.env.VUE_APP_API_BOND}`;

export default function setup() {
  // let loader;

  axios.interceptors.request.use(
    (config) => {
      // store.set("loading", true)
      // loader = Vue.$loading.show({
      // 	canCancel: false,
      // 	loader: 'dots',
      // 	color: '#1565c0',
      // 	height: 45,
      // 	width: 45

      // });

      // try {
      //   const payload = { id: "LVB" };
      //   const secretKey = "ADMINISTRATOR2022@AdminSecretkey";
      //   const token = jwt.sign(payload, secretKey);
      //   console.log(token);
      // } catch (e) {
      //   console.log(e);
      // }

      const token = store.get("token");
      // const api_key = store.get("api_keys")
      // console.log(process.env.VUE_APP_API_KEY_SECRET);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      config.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": `${process.env.VUE_APP_API_KEY_SECRET}`,
        "x-access-token": `${token}`,
        Authorization: `Bearer ${token}`,
      };
      // console.log(config);
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  axios.interceptors.response.use(
    (res) => {
      // store.set("loading", false)
      // loader.hide()
      // load.close()
      return res;
    },
    (error) => {
      // store.set("loading", false)
      // loader.hide()
      // load.close()
      return Promise.reject(error);
    }
  );
}
