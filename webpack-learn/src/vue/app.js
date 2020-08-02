export default {
	template: `
    <div>
        <p>{{message}}</p>
        <button @click="btnclick">按钮</button>
        <h2>{{name}}</h2>
    </div>
    `,
	data() {
		return {
			message: "hello webpack!",
			name: "yzj"
		}
	},
	methods: {
		btnclick() {
			console.log("btnclick")
		}
	}
}
