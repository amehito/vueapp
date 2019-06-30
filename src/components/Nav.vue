<template>
	<div>
		<nav class="app-nav">
			<router-link to="/mainpage">
				<div class="nav-item" @click="changeNavImg" >
					<div class="homeImg" :class="homeImgOn"></div>
				</div>
			</router-link>
			<router-link to="/card">
				<div class="nav-item" @click="changeNavImg" >
					<div class="cartImg" :class="cartImgOn">
						<span class="cart-counter" v-show="cartCounter > 0">{{ cartCounter }}</span>
					</div>
				</div>
			</router-link>
			<router-link to="/profile">
				<div class="nav-item" @click="changeNavImg" >
					<div class="profileImg" :class="profileImgOn"></div>
				</div>
			</router-link>	
			<router-link to="/VideosPage">
				<div class="nav-item" @click="changeNavImg" >
					<div class="profileImg" :class="profileImgOn"></div>
				</div>
			</router-link>
		</nav>
		
	</div>
</template>
<script>
	import mainpage from './mainpage.vue'
	import card    from './card.vue'
	import profile from './profile.vue'
	import VideosPage from './VideosPage.vue'
	export default{
		components:{
			mainpage,
			card,
			profile,
			VideosPage
		},
		data(){
			return {
				homeImgOn :'',
				cartImgOn : '',
				profileImgOn:''

			}
		},
		methods:{
			
			changeNavImg(){
				this.homeImgOn = '';
				this.cartImgOn = '';
				this.profileImgOn = '';
			},
			autoChangeCurrentImg() {
		      let currentPath = this.currentPath;
		      if (currentPath.includes('mainpage')) {
		        this.homeImgOn = 'homeImgOn';
		        this.cartImgOn = '';
		        this.profileImgOn = '';
		      } else if(currentPath.includes('card')){
		        this.homeImgOn = '';
		        this.cartImgOn = 'cartImgOn';
		        this.profileImgOn = '';
		      } else if(currentPath.includes('profile')) {
		        this.homeImgOn = '';
		        this.cartImgOn = '';
		        this.profileImgOn = 'profileImgOn';
		      } else {
		        this.homeImgOn = '';
		        this.cartImgOn = '';
		        this.profileImgOn = '';
		      }
		    }
		},
		mounted(){
			this.autoChangeCurrentImg();
		},
		updated(){
			this.autoChangeCurrentImg();
		},
		computed:{
			currentPath(){
				return this.$route.path;
			},
			cartCounter(){
				return this.$store.state.cartCounter;
				console.log("cartCounter"+cartCounter);
			}
		}

	}
</script>
<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.app-nav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #eee;
  font-size: 0;
  background-color: #fff;
  height: $NavHeight;
  z-index: 999;
}
.nav-item{
  height: 100%;
  display: inline-block;
  width: 25%;
  text-align: center;
}
.nav-item>div{
  display: inline-block;
  width: $NavHeight * 0.75;
  height: $NavHeight * 0.75;
  margin-top: $NavHeight * 0.125;
}
.homeImg{
  background-image: url('../../public/static/icon/home.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: $NavHeight * 0.75 * 3  $NavHeight * 0.75;
}
.homeImgOn{
  background-position: 100% 100%;
}
.cartImg{
  background-image: url('../../public/static/icon/cart.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: $NavHeight * 0.75 * 3  $NavHeight * 0.75;
}
.cartImgOn{
  background-position: 100% 100%;
}
.profileImg{
  background-image: url('../../public/static/icon/profile.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: $NavHeight * 0.75 * 3  $NavHeight * 0.75;
}
.profileImgOn{
  background-position: 100% 100%;
}

.cart-counter{
  position: absolute;
  width: 25px;
  height: 20px;
  top: 5px;
  line-height: 20px;
  border-radius: 40%;
  background-color: $mainRed;
  color: #fff;
  font-size: 10px;
}

</style>
