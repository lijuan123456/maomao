<template>
	<header id="header">
		<h1>{{title}}</h1>
	</header>
</template>

<script>
	export default{
		name:'headers',
		props:{
			title:{
				type:String,
				default:'我的电影院',
				
			}
		}
	}
</script>

<style scoped>
	#header{
		width: 100%;
		height: 50px;
		color: #FFFFFF;
		background: #E54847;
		border-bottom: 1px solid #E54847;position: relative;
		
		
	}
	#header h1{
		font-size: 18px;
		text-align: center;
		line-height: 50px;
		font-weight: normal;
		
	}
	#header i{
		position: absolute;
		left: 5px;
		top: 50%;
		margin-top: -13px;
		font-size: 20px;
		
		
	}
</style>