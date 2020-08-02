/* eslint-disable no-undef */
const { add, mul } = require("./js/mathUtils.js")
console.log(add(20, 30))
console.log(mul(20, 30))

import { name, age, height } from "./js/info"
console.log(name)
console.log(age)
console.log(height)

document.writeln('hhhh')
require("./css/normal.css")

require("./css/special.less")

import Vue from "vue"
import App from "./vue/App.vue"

new Vue({
	el: "#app",
	components: {
		App
	},
	template: "<App/>"

})


