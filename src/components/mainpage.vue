<template>
	<div class="home">
		
		<div class="home-main">
			<transition-group enter-active-class="slideInRight">
       		 <ul class="goods animated" :key="animatedCurrentKey">
        	  <li v-for="item in goods" class="one-com" v-show="isCurrent(item.kind)">
         	   <one-commodity
              :imgUrl="item.img"
              :title="item.title"
              :content="item.content"
              :price="item.price"
              :count = 0
              :itemId = "item.id"
          	   ></one-commodity>
       		   </li>
    	    </ul>
	        <div :key="'0' + animatedCurrentKey">
	          <p class="no-more-goods">没有更多商品啦，敬请期待!!!</p>
	        </div>
	      </transition-group>
		</div>

		<el-dialog
			title = "提示"
			:visible.sync="dialogVisible"
			width="30%"
		>
			<p>hello 你好啊</p>
			<el-button @click = "dialogVisible = false">取消</el-button>
			<el-button type = "primary" @click = "dialogVisible=false">好的</el-button>
		</el-dialog>
		
		
	</div>
</template>
<script >
	import oneCommodity from './pageOneCommodity.vue'
	import buttomMenu from './buttomMenus.vue'
	export default{
		name:'mainpage',

		components:{
			oneCommodity,
			
			buttomMenu,
		},
		data(){
			var UA = navigator.userAgent;
		    var ipad = !!(UA.match(/(iPad).*OS\s([\d_]+)/)),
		        isIphone = !!(!ipad && UA.match(/(iPhone\sOS)\s([\d_]+)/)),
		        isAndroid = !!(UA.match(/(Android)\s+([\d.]+)/)),
		        isPC = !(isIphone || isAndroid || ipad);
			return{
				dialogVisible:isPC,
				goods:[]
			}
		},
		computed: {
		    animatedCurrentKey () {
		      return this.$store.state.GoodsCurrentSelKind;
		    }
		 },
		methods:{
			isCurrent (itemKind) {
			      let currentKind = this.$store.state.GoodsCurrentSelKind;
			      if (currentKind === 0) {
			        //0表示全部商品
			        return true;
			      } else {
			        return itemKind === currentKind;
			      }
			    },
		},
		mounted(){
			this.axios.get('/static/data/github-goods.json')
		    .then(res => {
		      this.goods = [...res.data];
		    })
		    .catch(() =>{
		      this.axios.get('http://127.0.0.1:8080/static/data/goods.json')
		      .then(res => {
		        this.goods = [...res.data];
		        console.log("111");
		      })
		    })
		}
	}
</script>
<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.home{
  width: 100%;
  padding-bottom: $NavHeight + 5px;
  padding-top: $HomeHeaderHeight;
}
.home-main{
  width: 100%;
  overflow-x: hidden;
}
.goods{
  width: 100%;
  list-style: none;
  padding: 0;
}
.goods>li{
  width: 100%;
}
.no-more-goods{
  height: 40px;
  line-height: 40px;
}
.slideInRight{
  animation-duration: 0.25s;
}
</style>