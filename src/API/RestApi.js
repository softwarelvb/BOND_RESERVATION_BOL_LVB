import axios from "axios";

export default {
	doRegister(req) {
		return axios.post("register", req)
	},
	doLogin(req) {
		return axios.post("login", req)
	}
}