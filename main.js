import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.toast = function toast(_msg) {
	uni.showToast({
		icon: 'none',
		title: _msg
	})
}

Vue.prototype.makePhonecCall = function makePhonecCall(_phoneNumber) {
	uni.makePhoneCall({
		phoneNumber: _phoneNumber
	});
}

Vue.prototype.uniRouter = function uniRouter(_link) {
	console.log(_link)
	uni.navigateTo({
		url: _link,
		fail(error) {
			console.log(error)
		}
	})
}

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
