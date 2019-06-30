<template>
	<div class="img"  >
		
			<img :src= "imgUrl" alt="" class="imgItem">
			<span >{{ videoName }}</span>	
		
		
	</div>
</template>
<script>
	export default{
		props:['videoName','imgUrl','videoUrl'],
		name:"VideoItem",
		methods:{
			toVideoPlay(){
				this.$emit("dialogVisible",true);

			},
			showDialog(){
				console.log('hehe');
				this.$emit("dialogVisible",true);
			}
		}

	}
</script>
<style lang="scss" scoped>
	.img{
		width:40%;
		height:25%;
		
		border-radius:4px;
	}
	.imgItem{
		width:100%;
		height:80%;
		border-radius:15%;
	}

</style>