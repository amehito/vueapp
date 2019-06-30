<template>
	<div>
		<VideoTop ></VideoTop>
		<VideoMain></VideoMain>
	</div>
</template>
<script>
	import VideoTop from './VideoTop.vue'
	import VideoMain from './VideoMain.vue'
	export default{
		components:{
			VideoMain,
			VideoTop,
		},


	}
</script>