<template>
	<div>
	<Scroller >
	<div class="ciname_body">
	
		<!--<div >-->
			
	
			<ul v-for="item in cinemaList" :key="item.id">

				<li v-for="item in cinemaList" :key="item.id">
					<div class="div">
						<span>{{item.nm}}</span>
					
					<span class="q"><span class="price">{{item.sellPrice}}</span>22.5元起</span>
					</div>
					<div class="address">
						<span>{{item.addr}}</span>
						<span>{{item.distance}}</span>
					</div>
					<div class="card">
						<span class="bl">改签</span>
						<span class="bl">退</span>
						<span class="or">小吃</span>
						<span class="or">折扣卡</span>
					</div>
					<!--<div class="card">-->
					<!--<span class="b1" v-for="(itemCard,key) in item.tag" v-if="num===1" :class="key | classCard" :key="key">{{key | formatCard}}</span>-->

					<!--</div>-->
				</li>

			</ul>
				<!--</div>-->
		
	</div>
</Scroller>
</div>
</template>

<script>
	export default {
		name: 'cilist',
		data() {
			return {
				cinemaList: [],
				isloading:true,
				prevcityId:-1
			}
		},
		activated() {
			var cityId=this.$store.state.city.id;
			if(this.prevcityId===cityId){
				return
			}
		console.log(11)
			this.isloading=true;
			this.axios.get('/api/cinemaList?cityId='+cityId).then((res) => {
				console.log(res)
				var msg = res.data.msg;
				if(msg === 'ok') {
					this.cinemaList = res.data.data.cinemas;
					this.isloading=false;
					this.prevcityId=cityId;
				}
			})
		}
		//		filters: {
		//			formatCard(key) {
		//				var card = [
		//
		//					{
		//						key: 'allowRefund',
		//						value: "改签"
		//					},
		//					{
		//						key: 'endorse',
		//						value: "退"
		//					},
		//					{
		//						key: 'sell',
		//						value: "折扣卡"
		//					},
		//					{
		//						key: 'snack',
		//						value: "小吃"
		//					}
		//
		//				];
		//				for(var i = 0; i < card.length; i++) {
		//					if(card[i].key == key) {
		//						return card[i].value;
		//					}
		//				}
		//				return '';
		//			},
		//			classCard(key) {
		//				var card = [
		//
		//					{
		//						key: 'allowRefund',
		//						value: "bl"
		//					},
		//					{
		//						key: 'endorse',
		//						value: "bl"
		//					},
		//					{
		//						key: 'sell',
		//						value: "or"
		//					},
		//					{
		//						key: 'snack',
		//						value: "or"
		//					}
		//
		//				];
		//				for(var i = 0; i < card.length; i++) {
		//					if(card[i].key == key) {
		//						return card[i].value;
		//					}
		//				}
		//				return '';
		//			}
		//		}
	}
</script>

<style scoped>
.ciname_body {
		flex: 1;
		overflow: auto;
			
	}
	
	.ciname_body ul {
		padding: 20px;
	   
	}
	
	.ciname_body li {
		border-bottom: 1px solid#E6E6E6;
		margin-bottom: 20px;
	}
	
	.ciname_body div {
		margin-bottom: 10px;
	}
	
	.ciname_body .q {
		font-size: 11px;
		color: #f03d37;
	}
	
	.ciname_body .price {
		font-size: 18px;
	}
	
	.ciname_body .address {
		font-size: 13px;
		color: #666;
		width: 280px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.ciname_body .card {
		display: flex;
	}
	
	.ciname_body .card div {
		padding: 0 3px;
		height: 15px;
		line-height: 15px;
		border-radius: 2px;
		color: #f90;
		border: 1px solid #f90;
		font-size: 13px;
		margin-right: 5px;
	}
	
	.ciname_body .card .or {
		color: #FF9900;
		border: 1px solid #f90;
		padding: 2px 5px;
		border-radius: 5px;
		font-size: 10px;
		margin-right: 5px;
	}
	
	.ciname_body .card .bl {
		color: #589daf;
		border: 1px solid #589daf;
		padding: 2px 5px;
		border-radius: 5px;
		font-size: 10px;
		margin-right: 5px;
	}
	
</style>