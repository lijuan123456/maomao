<template>
	<div class="city_body">
		<div class="city_list">
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li>上海</li>
					<li>北京</li>
					<li>河北</li>
					<li>天津</li>
					<li>山东</li>
					<li>河南</li>
				</ul>
			</div>
			<div class="city_sort">
				<div>
					<h2>A</h2>
					<ul>
						<li>阿拉善</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>B</h2>
					<ul>
						<li>北京</li>
						<li>海淀</li>
						<li>朝阳</li>
						<li>崇文</li>
					</ul>
				</div>
				<div>
					<h2>C</h2>
					<ul>
						<li>阿拉善</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>D</h2>
					<ul>
						<li>北京</li>
						<li>海淀</li>
						<li>朝阳</li>
						<li>崇文</li>
					</ul>
				</div>

				<div>
					<h2>A</h2>
					<ul>
						<li>阿拉善</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>B</h2>
					<ul>
						<li>北京</li>
						<li>海淀</li>
						<li>朝阳</li>
						<li>崇文</li>
					</ul>
				</div>
				<div>
					<h2>E</h2>
					<ul>
						<li>阿拉善</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>

			</div>

		</div>
		<div class="city_index">
			<ul>
				<li>A</li>
				<li>B</li>
				<li>C</li>
				<li>D</li>
				<li>E</li>
			</ul>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'city'
	}
</script>

<style scoped>
	#content .city_body {
		margin-top: 45px;
		display: flex;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
	}
	
	.city_body .city_list {
		flex: 1;
		overflow: auto;
		background: #fff5f0;
	}
	
	.city_body .city_list::-webkit-scrollbar {
		background-color: transparent;
		width: 0;
	}
	
	.city_body .city_hot {
		margin-top: 20px;
	}
	
	.city_body .city_hot h2 {
		padding-left: 15px;
		line-height: 30px;
		font-size: 14px;
		background: #f0f0f0;
		font-weight: normal;
	}
	/*s*/
	
	.city_body .city_hot ul li {
		float: left;
		background: #FFF5F0;
		width: 29%;
		height: 33px;
		margin-top: 15px;
		margin-left: 3%;
		padding:0 4px;
		
		border: 1px solid #E6E6E6;
		border-radius: 3px;
		line-height: 33px;
		text-align: center;
		box-sizing: border-box;
	}
	
	.city_body .city_sort div {
		margin-top: 10px;
	}
	
	.city_body .city_sort h2 {
		padding-left: 15px;
		line-height: 30px;
		font-size: 14px;
		background: #F0F0F0;
		font-weight: normal;
	}
	
	.city_body .city_sort ul {
		padding-left: 10px;
		margin-top: 10px;
	}
	
	.city_body .city_sort ul li {
		line-height: 30px;
	}
	/*s*/
	
	.city_body .city_index {
		width: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		border-left: 1px solid #e6e6e6;
	}
</style>