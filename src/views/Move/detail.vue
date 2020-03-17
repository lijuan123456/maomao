<template>
	
		
	
	<div id="detailcontrainer" class="slide_enter_active">
		<Header id="header" title="电影详情">
			<i class="icon-1" @touchstart="handleToback"></i>
		</Header>
		<Loading v-if='isloading' />
		<div id="content" class="contentDetail" v-else>
			<div class="detail_list">

				<div class="detail_list_bg" :style="{'background-image' :'url('+detailMovie.img.replace(/w\.h/,'148.208')+')'}"></div>
				<div class="detail_list_fiter"></div>
				<div class="detail_list_content">
					<div class="detail_list_img">
						<img :src="detailMovie.img | setWH('148.208')" />
					</div>
					<div class="detail_list_info">
						<h2>{{detailMovie.nm}}</h2>
						<p>{{detailMovie.enm}}</p>
						<p>{{detailMovie.scoreLabel}}</p>
						<p>剧情:{{detailMovie.cat}}</p>
						<p>{{detailMovie.src}}、{{detailMovie.dur}}分钟</p>
						<p>{{detailMovie.pubDesc}}</p>
					</div>
				</div>
			</div>
			<div class="detail_intro">
				<p>{{detailMovie.dra}}</p>
			</div>
			<!--<div class="detail_palyer swiper-container" ref="detail_palyer">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" v-for="(item,index)in detailMovie.photos" :key='index'>
						<div>
							<img :src="item | setWH('140.127')" />
						</div>
						<p>张胜男</p>
						<p>刘恺威</p>
					</li>
					
				</ul>
			</div>-->
			<div class="video">
				<h2 class="video_name">{{detailMovie.videoName}}</h2>

				<video width="100%" height="240" controls :poster="detailMovie.videoImg">
					<source :src="detailMovie.dv" type="video/mp4">
					<source :src="detailMovie.videourl" type="video/mp4">

				</video>
			</div>
		</div>
	</div>

</template>

<script>
	import Header from '@/components/Header'
	export default {
		name: 'detail',
		data() {
			return {
				detailMovie: {},
				isloading: true
			}
		},
		components: {
			Header
		},
		props: ['moveId'],
		methods: {
			handleToback() {
				this.$router.back()
			}

		},
		mounted() {
			//			console.log(this.moveId)
			this.axios.get('/api/detailmovie?movieId=' + this.moveId).then((res) => {
				console.log(res)
				var msg = res.data.msg;
				if(msg === 'ok') {
					//					setTimeout(()=>{
					this.isloading = false;
					//					},1000)
					this.detailMovie = res.data.data.detailMovie;

					//					this.$nextTick(()=>{
					//						new Swiper(this.$refs.detail_palyer,{
					//							slidesPerView:'auto',
					//							freeMode:true,
					//							freeModeSticky:true
					//						})
					//					})
					//	
				}
			})
		}
	}
</script>

<style scoped>
	#detailcontrainer {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		min-height: 100%;
		background: white;
	}
	
	#detailcontrainer.slide_enter_active {
		animation: .3s slideMovee;
	}
	
	@keyframes slideMovee {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}
	}
	
	#content .contentDetail {
		display: block;
		margin-bottom: 0;
	}
	
	#content .detail_list {
		height: 200px;
		width: 100%;
		position: relative;
		overflow: hidden;
	}
	
	
	.detail_list .detail_list_bg {
		width: 100%;
		height: 100%;
		/*background: url(../../../public/images/tu1.jpg)0.4%;*/
		filter: blur(20px);
		background-size:cover ;
		position: absolute;
		left: 0;
		top: 0;
	}
	/*s*/
	
	.detail_list .detail_list_fiter {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #40454d;
		opacity: .55;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}
	
	.detail_list .detail_list_content {
		display: flex;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
	}
	
	.detail_list .detail_list_img {
		width: 100px;
		height: 150px;
		border: solid 1px #F0F2f3;
		margin: 20px;
	}
	
	.detail_list .detail_list_img img {
		width: 100%;
		height: 100%;
	}
	
	.detail_list .detail_list_info {
		margin-top: 20px;
	}
	
	.detail_list .detail_list_info h2 {
		font-size: 20px;
		color: white;
		font-weight: normal;
		line-height: 40px;
	}
	
	.detail_list .detail_list_info p {
		color: white;
		line-height: 20px;
		font-size: 14px;
		color: #CCCCCC;
	}
	
	#content .detail_intro {
		padding: 10px;
	}
	
	#content .detail_palyer {
		margin: 20px;
	}
	
	.detail_palyer .swiper-slide {
		width: 70px;
		margin-right: 20px;
		text-align: center;
		line-height: 40px;
	}
	
	.detail_palyer .swiper-slide img {
		width: 100%;
		margin-bottom: 5px;
	}
	
	.detail_palyer .swiper-slide p:nth-of-type(2) {
		color: #999999;
	}
	
	.video_name {
		font-size: 18px;
		border-bottom: 1px solid #CCCCCC;
		/*border-top:1px solid #CCCCCC ;*/
		line-height: 40px;
	}
	
	.video {
		margin: 0 16px;
	}
</style>