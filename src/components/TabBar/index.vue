<template>
	<footer id="footer">
		<div id="content">
			<ul>
				<router-link tag="li" to="/move">
					<i class="icon-3"></i>
					<p>电影</p>
				</router-link>
				<router-link tag="li" to="/cinema">
					<i class="icon-film"></i>
					<p>影院</p>
				</router-link>
				<router-link tag="li" to="/mine">
					<i class="icon-2"></i>
					<p>我的</p>
				</router-link>

			</ul>
		</div>
	</footer>
</template>
 
<script>
	export default {
		name: 'TabBar'
	}
</script>

<style scoped>
	#footer{
		width: 100%;
		height: 50px;
		background:white;
		
		border-top: 2px solid #ebe8e3;
		position: fixed;
		left: 0;
		bottom: 0;
		/*z-index: 234;*/
	}
   #footer ul{
   	display: flex;
   	text-align: center;
   	height: 50px;
   	align-items: center;

   }
   #footer ul li{
   	flex: 1;
   	height: 40px;
   }
   #footer ul li.active{
   	color: #f04d37;
   	
   }
   #footer ul li.router-like-active{
   	color:#f04d37 ;
   }
   #footer ul i{
   	font-size: 20px;
   }
    #footer ul p{
    	font-size: 12px;
    	line-height: 18px;
    	
    }
    
</style>