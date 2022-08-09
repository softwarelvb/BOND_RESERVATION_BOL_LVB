// import Vue from "vue";
export default {
	methods: {
		// isLoading(v) {
		// 	Vue.$loading.show({
		// 		// Pass props by their camelCased names
		// 		canCancel: false, // default false
		// 		color: '#1565c0',
		// 		loader: 'Dots',
		// 		width: 45,
		// 		height: 45,
		// 		backgroundColor: '#ffffff',
		// 		opacity: 0.5,
		// 		zIndex: 999,
		// 	});

		// },
		// isEndLoading() {

		// 	Vue.$loading.cancel()

		// },
		format_money: (data) => {
			var x = Number(data || 0);
			let v = parseFloat(x)
				.toFixed(2)
				.replace(/\d(?=(\d{3})+\.)/g, "$&.");
			if (v) {
				let s = v.toString().split(".");
				let last = s[s.length - 1];
				let frist = s.slice(0, s.length - 1);
				let final = frist.join(".")
				return final + "," + last
			} else {
				return v
			}
		},
		convertDate(v) {
			if (v) {
				let s = v.split("-");
				s = s[2] + "-" + s[1] + "-" + s[0]
				return s.toString()
			} else {
				return v;
			}
		},
		getDate(v) {
			let x = v.split('T');
			return x[0];
		},

		getNow() {
			const today = new Date();
			const date =
				today.getDate().toString().padStart(2, "0") +
				"/" +
				(today.getMonth() + 1).toString().padStart(2, "0") +
				"/" +
				today.getFullYear();
			this.timestamp = date;
		},
		laoNumberString(n) {
			let leveltext = ["", "ສິບ", "ຮ້ອຍ", "ພັນ", "ໝື່ນ", "ແສນ"];
			let numtext = [
				"",
				"ໜຶ່ງ",
				"ສອງ",
				"ສາມ",
				"ສີ່",
				"ຫ້າ",
				"ຫົກ",
				"ເຈັດ",
				"ແປດ",
				"ເກົ້າ"
			];

			let res = "";

			let num = n + "";
			let et = false;
			for (let i = 0; i < num.length; i++) {
				let val = parseInt(num.substr(i, 1));
				let pos = num.length - i - 1;
				if (val > 0) {
					if (val === 1 && pos % leveltext.length === 1) {
						res += "ສິບ";
					} else if (val === 2 && pos % leveltext.length === 1) {
						res += "ຊາວ";
					} else if (val === 1 && pos % leveltext.length === 0 && et) {
						res += "ເອັດ";
					} else {
						res += numtext[val] + leveltext[pos % leveltext.length];
						et = false;
					}
				}
				if (pos % leveltext.length === 0 && pos > 0) {
					res += "ລ້ານ";
				}
				if (val !== 0 && pos % leveltext.length === 1) {
					et = true;
				}
			}
			return res ? res : "-";
		},
	}
}