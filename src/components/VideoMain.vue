<template>
 	<div>
 		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
	    <el-tab-pane label="亚洲" name="first">
	    	<ul>
	    		<li v-for="video in videos" class="videoItem" >
	    			<div @click="playVideo(video.videoUrl)">
	    				<VideoItem
						:imgUrl="video.imgUrl"
						:videoName="video.title"
						:videoUrl="video.videoUrl"
						
		    			></VideoItem>
		    			
	    			</div>
	    		</li>
	    	</ul>
	    </el-tab-pane>
	    <el-tab-pane label="国产" name="second">
	    	
	    </el-tab-pane>
	    <el-tab-pane label="欧美" name="third">
	    	
	    </el-tab-pane>
   		 <el-tab-pane label="动漫" name="fourth">
   		 	
   		 </el-tab-pane>
	 	</el-tabs>	 
		<div  v-show="videoVisivle" @click='closeVideo' class="videoDiv">
			<el-button icon='el-icon-close'></el-button>
			<video-Play :videoUrl='videoSrc' ref='videoChild' class='video'></video-Play>
		</div>

 	</div>
</template>
<script>
	import VideoItem from './VideoItem.vue'
	import videoPlay from './videoPlay'
	import myVideo from 'vue-video'

	export default{
		components:{
			VideoItem,
			videoPlay,
			myVideo,
		},
		data(){
			return {
				videoSrc:'',
				videoVisivle:false,
				videos:[],
				dialogVisible:true,
				video: {                 
					sources: [{                     
						src: 'static/001.mp4',                     
						type: 'video/mp4'}],                 
					options: {                     
						autoplay: true,                     
						volume: 0.6,                     
						poster: 'static/assets/imgs/goods/乳品.png'}
						
				}

			}
		},
		mounted(){
			this.axios.get('/static/data/videos.json')
		    .then(res => {
		      this.videos = [...res.data];
		      console.table(res.data);
		    })
		    .catch(() =>{
		      this.axios.get('http://127.0.0.1:8080/static/data/videos.json')
		      .then(res => {
		        this.videos = [...res.data];
		        console.table(res.data);
		      })
		    })
		},
		methods:{
			showDialog(){
				this.dialogVisible=true;
				console.log("ehe");
			},
			playVideo(videoUrl){
				console.log({videoUrl});
				this.videoSrc = ''; 	
				this.$refs.videoChild.changeVideoSource(videoUrl);	
				this.videoVisivle= true;
			},
			closeVideo(){
				this.videoVisivle = false;
			}
		}
	}
</script>
<style lang="scss" scoped>
.top-nav{
	width:100%;
}
.videoItem{
	list-style-type:none;
	float:left;
	display:block;	
}
.videoDiv{
	position:fixed;
	top:20%;
	width:100%;
}
.video{
	width:100%;
	position:absolute;
	
}
</style>