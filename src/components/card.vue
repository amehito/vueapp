<template>
	<div>
		<header>
			<h3>我的购物车</h3>
		</header>
		<div v-if="cartGoods.length>0">
			<ul>
				<li v-for="good in cartGoods">
					<cart-one-item 
					:itemId="good.id"
					:content="good.content"
					:price = "good.price"
					:imgUrl = "good.imgUrl"
					:title = "good.title"
					:count = "good.count"
					>
					</cart-one-item>
				</li>
			</ul>
		</div>

		<div v-if="cartGoods.length===0">
			<div>
				<h3>购物车中没有东西噢</h3>
			</div>
		</div>
	</div>
</template>
<script>
	import cartOneItem from './cartOneItem.vue'
	export default{
		data(){
			return{

			}
		},
		name:'card',
		components:{
			"cart-one-item":cartOneItem,
		},
		
		computed:{
			cartGoods(){
				return this.$store.state.cartGoods;
			}
		}
	}
</script>