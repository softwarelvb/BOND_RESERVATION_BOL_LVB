import axios from "axios";

export default {
	doRegister(req) {
		return axios.post("register", req)
	},
	doLogin(req) {
		return axios.post("login", req)
	},
	doVerifyOTP(req){
		return axios.post('confirm/otp', req);
	},
	// onSavePaymentOrderForm(path,req){
	// 	return axios.post(`form/insert/${path}`, req)
	// }
	onSaveBondReservation(req){
		return axios.post('form/insert/payment/order', req)
	},
	onGetUserForm(path,req){
		return axios.post(`form/get/${path}`, req)
	},
	onDoCreateFormBond(req){
		return axios.post(`/register`, req)
	}

}