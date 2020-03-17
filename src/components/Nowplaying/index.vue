<template>
<Loading v-if="isloading"></Loading>
	<Scroller v-else :handleToscroll="handleToscroll" :handleTotouchend="handleTotouchend">
		
			
	
		<div class="movie_body" ref="movies_body">
			<ul>

				<li class="pullDown">{{pullDownMsg}}</li>
				<li v-for="item in movieList" :key="item.id">
					<div class="pic_show" @tap="handleToDetail(item.id)"><img :src="item.img | setWH('128.180')" /></div>
					<div class="info_list">
						<h2 @tap="handleToDetail(item.id)">{{item.nm}} <img v-if="item.version" src="@/assets/3d.jpg"/></h2>
						<p>观众评分 <span>{{item.sc}}</span> </p>
						<p>主演：{{item.star}}</p>
						<!--<p>{{item.showInfo}}</p>-->
						<p>几天55家电影放映{{item.wish}}场</p>

					</div>
					<div class="btn_mall">购买</div>
				</li>

			</ul>
	
		</div>
	</Scroller>
</template>

<script>
	//	import Bscroll from 'better-scroll';
	export default {
		name: 'nowplaying',
		data() {
			return {
				movieList: [],
				pullDownMsg: '',
				isloading:true,
				prevcityId:-1

			}
		},
		activated() {
			
			var cityId=this.$store.state.city.id;
			if(this.prevcityId===cityId){
				return
			}
			this.isloading=true;
			this.axios.get('/api/movieOnInfoList?cityId='+cityId).then((res) => {

				var msg = res.data.msg;
				if(msg === 'ok') {
					
					this.movieList = res.data.data.movieList;
					this.isloading=false;
					this.prevcityId=cityId;
                   //this.$nextTick(()=>{}

				}
			})
		},
		methods: {
			handleToDetail(moveId) {
                this.$router.push('/move/detail/1/'+moveId)
             
			},
			handleToscroll(pos) {
				if(pos.y > 30) {

					this.pullDownMsg = '正在更新中'

				}
			},
			handleTotouchend(pos) {
				
				if(pos.y > 30) {
					this.axios.get('/api/movieOnInfoList?cityId=10').then((res) => {
						
						var msg = res.data.msg;
						if(msg === 'ok') {
							this.pullDownMsg = '更新成功';

							setTimeout(() => {
								this.movieList = res.data.data.movieList;
								this.pullDownMsg = '';

							}, 1000)

						}
					})

				}
			}
		}
	}
</script>

<style scoped>
	
	#content .movie_body {
		flex: 1;
		overflow: auto;
		
	}
	
	.movie_body ul {
		margin: 0px 12px;
		overflow: hidden;
	}
	
	.movie_body ul li {
		margin-top: 12px;
		display: flex;
		align-items: center;
		border-bottom: 1px #e6e6e6 solid;
		padding-bottom: 10px;
	}
	
	.movie_body .pic_show {
		width: 64px;
		height: 90px;
	}
	
	.movie_body .pic_show img {
		width: 100%;
	}
	
	.movie_body .info_list {
		margin-left: 10px;
		flex: 1;
		position: relative;
	}
	
	.movie_body .info_list h2 {
		font-size: 17px;
		line-height: 24px;
		width: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.movie_body .info_list h2 img {
		width: 50px;
		height: 20px;
		margin-top: -10px;
		background: #4FA7E7;
	}
	
	.movie_body .info_list p {
		font-size: 13px;
		color: #666;
		line-height: 22px;
		width: 200px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.movie_body .info_list .grade {
		font-weight: 700;
		color: #faaf00;
		font-size: 15px;
	}
	
	.movie_body .info_list img {
		width: 50px;
		position: absolute;
		right: 10px;
		top: 15px;
	}
	
	.movie_body .btn_mall,
	.movie_body.btn_pre {
		width: 47px;
		height: 27px;
		line-height: 28px;
		text-align: center;
		background-color: #ef03d37;
		color: #fff;
		border-radius: 4px;
		font-size: 12px;
		cursor: pointer;
		background: #EF4238;
	}
	
	.movie_body .btn_mall .movie_body.btn_pre {
		background-color: #3c9fe6;
	}
	
	.movie_body .pullDown {
		padding: 0;
		margin: 0;
		border: none;
	}
</style>