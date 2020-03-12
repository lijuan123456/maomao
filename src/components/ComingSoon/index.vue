<template>
	<div id="content">
		
	
	<div class="movie_body">
	<ul>
		<li>
		 <div class="pic_show"><img src="/images/tu1.jpg"/></div>
		 <div class="info_list">
		 	<h2>大点音</h2>
		    <p>观众评分 <span>9.2</span>  </p>
		    <p>主演：程江、大海、孙悦</p>
		    <p>几天55家电影放映607场</p>
		    
		 </div>
		 <div class="btn_pre">预售</div>
		</li>
		<li>
		 <div class="pic_show"><img src="/images/tu2.jpg"/></div>
		 <div class="info_list">
		 	<h2>米物质层</h2>
		    <p>观众评分 <span>8.9</span>  </p>
		    <p>主演：汤姆.哈迪 、李连杰、成龙</p>
		    <p>几天57家电影放映445场</p>
		 </div>
		 <div class="btn_pre">预售</div>
		</li>
		<li>
		 <div class="pic_show"><img src="/images/tu1.jpg"/></div>
		 <div class="info_list">
		 	<h2>大点音</h2>
		    <p>观众评分 <span>9.2</span>  </p>
		    <p>主演：程江、大海、孙悦</p>
		    <p>几天55家电影放映607场</p>
		 </div>
		 <div class="btn_pre">预售</div>
		</li>
		<li>
		 <div class="pic_show"><img src="/images/tu2.jpg"/></div>
		 <div class="info_list">
		 	<h2>米物质层</h2>
		    <p>观众评分 <span>8.9</span>  </p>
		    <p>主演：汤姆.哈迪 、李连杰、成龙</p>
		    <p>几天57家电影放映445场</p>
		 </div>
		 <div class="btn_pre">预售</div>
		</li>
		<li>
		 <div class="pic_show"><img src="/images/tu1.jpg"/></div>
		 <div class="info_list">
		 	<h2>大点音</h2>
		    <p>观众评分 <span>9.2</span>  </p>
		    <p>主演：程江、大海、孙悦</p>
		    <p>几天55家电影放映607场</p>
		 </div>
		 <div class="btn_pre">预售</div>
		</li>
		<li>
		 <div class="pic_show"><img src="/images/tu2.jpg"/></div>
		 <div class="info_list">
		 	<h2>米物质层</h2>
		    <p>观众评分 <span>8.9</span>  </p>
		    <p>主演：汤姆.哈迪 、李连杰、成龙</p>
		    <p>几天57家电影放映445场</p>
		    
		 </div>
		 <div class="btn_pre">预售</div>
		</li>
	</ul>
	
	</div>
	</div>
</template>

<script>
	export default{
		name:'comingsoon'
	}
</script>

<style scoped>
	#content .movie_body{
		flex: 1;
		overflow: auto;
	}
	.movie_body ul{
		margin: 0 12px;
		overflow: hidden;
		
		
	}
	
	.movie_body ul li{
		margin-top: 12px;
		display: flex;
		align-items: center;
		border-bottom: 1px #e6e6e6 solid;
		padding-bottom:10px ;
	}
	.movie_body .pic_show{
		width:64px;
		height: 90px;
	}
	.movie_body .pic_show img{
		width: 100%;
	}
	.movie_body .info_list{
		margin-left: 10px;
		flex: 1;
		position: relative;
	}
	
	.movie_body .info_list h2{
		font-size: 17px;
		line-height: 24px;
		width: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.movie_body .info_list p{
		font-size: 13px;
		color: #666;
		line-height: 22px;
		width: 200px;
		overflow: hidden;
		white-space:nowrap ;
		text-overflow: ellipsis;
	}
	.movie_body .info_list .grade{
		font-weight: 700;
		color: #faaf00;
		font-size: 15px;
	}
	.movie_body .info_list img{
		width: 50px;
		position: absolute;
		right:10px;
		top: 15px;
	}
	
	 .movie_body .btn_pre{
		width: 47px;
		height: 27px;
		line-height: 28px;
		text-align: center;
		background-color: #3C9FE6;
		color: #fff;
		border-radius:4px;
		font-size: 12px;
		cursor: pointer;
		
	}
	
</style>