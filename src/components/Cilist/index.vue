<template>
<div class="ciname_body">
	<ul>
		
		<li>
		<div >
			<span >大地影院（朝阳龙湖店）</span>
			<span class="q">
				<span class="price">22.9</span>元起</span>	
		</div>
		<div class="address">
			<span>北京市朝阳区龙湖开发区3号</span>
			<span>1798.0km</span>
		</div>
		<div class="card">
			<span class="b1">改签</span>
			<span class="b1">退</span>
			<span class="or">小吃</span>
			<span class="or">折扣卡</span>
		</div>
		</li>
		<li>
		<div >
			<span >大地影院（朝阳龙湖店）</span>
			<span class="q">
				<span class="price">22.9</span>元起</span>	
		</div>
		<div class="address">
			<span>北京市朝阳区龙湖开发区3号</span>
			<span>1798.0km</span>
		</div>
		<div class="card">
			<span class="b1">改签</span>
			<span class="b1">退</span>
			<span class="or">小吃</span>
			<span class="or">折扣卡</span>
		</div>
		</li>
		<li>
		<div >
			<span >大地影院（朝阳龙湖店）</span>
			<span class="q">
				<span class="price">22.9</span>元起</span>	
		</div>
		<div class="address">
			<span>北京市朝阳区龙湖开发区3号</span>
			<span>1798.0km</span>
		</div>
		<div class="card">
			<span class="b1">改签</span>
			<span class="b1">退</span>
			<span class="or">小吃</span>
			<span class="or">折扣卡</span>
		</div>
		</li>
		<li>
		<div >
			<span >大地影院（朝阳龙湖店）</span>
			<span class="q">
				<span class="price">22.9</span>元起</span>	
		</div>
		<div class="address">
			<span >北京市朝阳区龙湖开发区3号</span>
			<span>1798.0km</span>
		</div>
		<div class="card">
			<span class="b1">改签</span>
			<span class="b1">退</span>
			<span class="or">小吃</span>
			<span class="or">折扣卡</span>
		</div>
		</li>
	</ul>
</div>
</template>

<script>
	export default{
		name:'cilist'
	}
</script>

<style scoped>

#content .ciname_body{
	flex: 1;

	overflow: auto;
}
.ciname_body ul{
	padding: 20px;
}
.ciname_body li{
	border-bottom: 1px solid#E6E6E6;
	margin-bottom: 20px;
}
.ciname_body div{
	margin-bottom: 10px;
}
.ciname_body .q{
	font-size: 11px;
	color: #f03d37;
}
.ciname_body .price{
	font-size: 18px;
}
.ciname_body .address{
	font-size: 13px;
	color: #666;
}
.ciname_body .card{
	display: flex;
}

.ciname_body .card div{
	padding: 0 3px;
	height: 15px;
	line-height: 15px;
	border-radius: 2px;
	color: #f90;
	border: 1px solid #f90;
	font-size: 13px;
	margin-right: 5px;
}
.ciname_body .card .or{
	color: #FF9900;
	border: 1px solid #f90;
	padding: 2px 5px;
	border-radius: 5px;
	font-size: 10px;
	margin-right: 5px;
}
.ciname_body .card .b1{
	color: #589daf;
	border: 1px solid #589daf;
	padding: 2px 5px;
	border-radius: 5px;
	font-size: 10px;
	margin-right: 5px;
}
</style>