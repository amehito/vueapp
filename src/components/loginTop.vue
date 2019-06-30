<template>
	<div>
		<div class="container">
			<div class="left">
				<img src="../assets/logo.png" alt="" >
			</div>
			<div class="right">
				<div class="name">{{ name }}</div>
				<div class="idNumber">{{ idNumber }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"loginTop",
		props:['name','idNumber'],

	}
</script>
<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.container{
	height:30%;
	width:100%;
	background:#000000;
}

.left >img{
	width:100px;
	height:100px;
	left:100px;
	border-radius:5%;
	border:1px solid #ffffff;
	position:absolute;
	
	float:left;
}
.left{
	width:30%;
	float:left;
}
.right{
	float:left;
	width:70%;
}
.name{
	height:50%;
	
}
.idNumber{
	height:50%;
}

</style>