<template>
	<div>
		
	 <div >         
		 <div class="container">             
	 		<my-video :sources="video.sources" :options="video.options"></my-video>
		 </div>     
	 </div> 
	</div>
</template>
<script>
	import loginTop from "./loginTop.vue"
	import myVideo from 'vue-video'
	export default{
		name:"profile",	
		components:{
			loginTop,
			myVideo,
		},
		data(){
			return{
				videoSrc:'static/005.mp4',
				video: {                 
					sources: [{                     
						src: 'static/005.mp4',                     
						type: 'video/mp4'}],                 
					options: {                     
						autoplay: true,                     
						volume: 0.6,                     
						poster: 'static/assets/imgs/goods/乳品.png'}
						
				}
			}
		},
		
		methods:{
			playVideo(){
	            var vdo = document.getElementById("videoPlay");
	            vdo.play();
      	  }
		}
	}
</script>