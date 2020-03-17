<template>
	<div class="city_body">

		<div class="city_index">
			<ul>
				<li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{item.index}}</li>

			</ul>
		</div>
		<div class="city_list">
			<Loading v-if="isloading" />
			<Scroller v-else ref="city_list">
				<div>
					<div class="city_hot ">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li v-for="item in hotList" :key="item.id" @tap='handleTocity(item.nm,item.id)'>{{item.nm}}</li>
						</ul>
					</div>

					<div class="city_sort" ref='city_sort'>
						<div v-for="item in cityList" :key="item.index" >
							<h2>{{item.index}}</h2>
							<ul>
								<li v-for="itemList in item.list" :key="itemList.id" @tap='handleTocity(itemList.nm,itemList.id)'>{{itemList.nm}}</li>

							</ul>
						</div>
					</div>
				</div>
			</Scroller>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'city',
		data() {
			return {
				cityList: [],
				hotList: [],
				isloading: true
			}
		},
		mounted() {
			
//			alert(localStorage.getItem('cityList'))
			//			 把存储出来的取出来
			var cityList = localStorage.getItem('cityList');	
			var hotList = localStorage.getItem('hotList');
			           
			if(cityList && hotList) {
				
				this.cityList = JSON.parse(cityList);
				this.hotList = JSON.parse(hotList);
				this.isloading=false
			} else {

				//http://39.97.33.178/api/cityList
				this.axios.get('/api/cityList').then((res) => {
					//           
					var msg = res.data.msg;
					if(msg === 'ok') {
						
						this.isloading = false;
						var cities = res.data.data.cities;

						var {
							cityList,
							hotList
						} = this.formatCity(cities);
						this.cityList = cityList;
						this.hotList = hotList;
						//本地存储
						localStorage.setItem('cityList',JSON.stringify(cityList))
					    localStorage.setItem('hotList ',JSON.stringify(hotList))
                          
					}
				})
			}
		},
		methods: {
			
			formatCity(cities) {
				var cityList = [];
				var hotList = [];
				for(var a = 0; a < cities.length; a++) {
					if(cities[a].isHot === 1) {
						hotList.push(cities[a]);
					}
				}
				for(var i = 0; i < cities.length; i++) {
					var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
					//					
					if(toCom(firstLetter)) { //新添加
						cityList.push({
							index: firstLetter,
							list: [{
								nm: cities[i].nm,
								id: cities[i].id
							}]

						})

					} else { //累加
						for(var j = 0; j < cityList.length; j++) {
							if(cityList[j].index === firstLetter) {
								cityList[j].list.push({
									nm: cities[i].nm,
									id: cities[i].id
								})
							}

						}

					}

				}
				cityList.sort((n1, n2) => {
					if(n1.index > n2.index) {
						return 1;
					} else if(n1.index < n2.index) {
						return -1;
					} else {
						return 0;
					}

				});

				function toCom(firstLetter) {
					//								
					for(var i = 0; i < cityList.length; i++) {
						if(cityList[i].index === firstLetter) {
							//							
							return false;
						}

					}

					return true;

				}
				//				console.log(cityList)
				//				console.log(hotList)
				return {
					cityList,
					hotList
				}
			},
			handleToIndex(index) {
				var h2 = this.$refs.city_sort.getElementsByTagName('h2');
				//				this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
				this.$refs.city_list.ToScrolltop(-h2[index].offsetTop)
			},
			//状态存储
			handleTocity(nm,id){
				this.$store.commit('city/CITY_INFO',{nm,id})
				//本地存储
				window.localStorage.setItem('nowNM',nm);
				window.localStorage.setItem('nowID',id);
				//路由跳转
				this.$router.push('/move/Noeplaying')
			}

		}

	}
</script>

<style scoped>
	@import '../../../public/css/commen.css';
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
		padding: 0 4px;
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
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
		visibility: hidden;
		height: 0;
	}
	
	.clearfix {
		zoom: 1;
	}
</style>