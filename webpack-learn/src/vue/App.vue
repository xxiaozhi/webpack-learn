<template>
  <div>
        <p class="title">{{message}}</p>
        <button @click="btnclick">按钮</button>
        <h2>{{name}}</h2>
        <Cpn/>
    </div>
</template>

<script>
import Cpn from "./Cpn"
export default {
	name:"App",
	components:{
		Cpn
	},
	data(){
		return{
			message:"hello webpack!",
			name:"yzj"
		}
	},
	methods:{
		btnclick(){
			console.log("btnclick")
		}
	}
}
</script>

<style>
.title{
    color:green
}
</style>