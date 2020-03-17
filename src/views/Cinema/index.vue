<template>
	<div id="cin ">
		<Header title="喵喵影院"></Header>
		<div id="content">
			<div class="cinema-menu">
				<div class="city_switch">全程 <i class="icon-3"></i></div>
				<div class="city_switch">品牌<i class="icon-3"></i></div>
				<div class="city_switch">特色 <i class="icon-3"></i></div>
			</div>
			<Cilist></Cilist>
		</div>
	<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from '@/components/Header'
	import TabBar from '@/components/TabBar'
	import Cilist from '@/components/Cilist'
	export default{
		name:'Cinema',
		components:{
			Header,
			TabBar,
			Cilist 
		}
	}
</script>

<style scoped>
	#content{
		#content {
		flex: 1;
		overflow: auto;
		margin-bottom: 50px;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	}
	.cinema-menu{
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #E6E6E6; 
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: white;
	}
</style>