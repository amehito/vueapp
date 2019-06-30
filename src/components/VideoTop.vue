<template>
	<div >
		<el-input v-model="input" placeholder="请输入内容" class="searchInputShow" ></el-input>
		<el-button icon="el-icon-search" @click="inputShow" ></el-button>
	</div>
</template>
<script>
	export default{

		data(){
			return{
				input:'',
				isActive:false,
			}
		},
		methods:{
			inputShow(){
				this.isActive= true;
				console.log(isActive);
			}
		}
	}
</script>
<style lang="scss" scoped>
.top-nav{
	width:100%;
}
.searchInput{
	visibility:visible;

}
.searchInputShow{
	
	width:80%;
}

</style>