<template>
	<div id="main">
		<Header title="喵喵电影"></Header>
		<div id="content">
			<div class="movie_menu">
				<router-link class="city_name" tag='div' to='/move/city'>
					<span>北京</span><i class="icon-3"></i>

				</router-link>
				<div class="hot-swtich">
					<router-link class="hot_item s" tag='div' to='/move/nowplaying'>正在热映</router-link>
					<router-link class="hot_item" tag='div' to='/move/comingsoon'>即将上映</router-link>
				</div>
				<router-link class="search_entry" tag='div' to='/move/search'>
					<i class="icon-1"></i>
				</router-link>
			</div>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<TabBar></TabBar>

	</div>
</template>

<script>
	import Header from '@/components/Header'
	import TabBar from '@/components/TabBar'

	export default {
		name: 'move',
		components: {
			Header,
			TabBar
		}
	}
</script>

<style scoped>
	#content {
		flex: 1;
		overflow: auto;
		margin-bottom: 50px;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	/*s*/
	
	#content .movie_menu {
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #E6E6E6;
		display: flex;
		justify-content: space-between;
	}
	
	.movie_menu .city_name {
		margin-left: 20px;
		height: 100%;
		line-height: 45px;
	}
	
	.movie_menu .city_name .active {
		color: #ef4238;
		border-bottom: 2px solid #EF4238;
	}
	
	.movie_menu .city_name.router-link-active {
		color: #ef4238;
		border-bottom: 2px solid #EF4238;
	}
	
	.movie_menu .hot-swtich {
		display: flex;
		height: 100%;
		line-height: 45px;
	}
	
	.movie_menu .hot_item {
		font-size: 15px;
		color: #666666;
		width: 80px;
		text-align: center;
		margin: 0 12px;
		font-weight: 700;
	}
	
	.movie_menu .hot_item.router-link-active {
		color: #EF4238;
		border-bottom: 2px solid #EF4238;
	}
	
	.movie_menu .hot_item .active {
		color: #EF4238;
		border-bottom: 2px solid #EF4238;
	}
	
	.movie_menu .search_entry {
		margin-right: 20px;
		height: 100%;
		line-height: 45px;
	}
	
	.movie_menu .search_entry .active {
		color: #EF4238;
		border-bottom: 2px solid #EF4238;
	}
	
	.movie_menu .search_entry.router-link-active {
		color: #EF4238;
		border-bottom: 2px solid #EF4238;
	}
	
	.movie_menu .search_entry i {
		font-size: 24px;
		/*color: red;*/
	}
	
	.movie_menu .search_entry i.router-link-active {
		font-size: 24px;
		color: red;
	}
</style>