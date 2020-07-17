<template>
	<div>
		<div class="news_detail">
			<div class="news_detail_content">
				<h3 class="news_detail_content_h3">
					{{newsData.title}}
				</h3>
				<p class="news_detail_date">
					{{formateTimeStamp(newsData.updated_at)}}
				</p>
				<div class="new_detail_img">
					
					<img :src="renderUrl(newsData.cover)" v-if="newsData.cover" />
					<img src="../../assets/images/news.jpg" v-else />

				</div>
				<!-- <h3 class="news_detail_title">Could you introduce Smartpress for us </h3> -->
				<!-- <div class="news_detail_content_p" v-if="$store.state.locale =='zh'" v-html="newItem.describe">
					{{newItem.describe}}
				</div>-->
				<div class="news_detail_content_p"  v-html="newsData.content">
					{{newsData.content}}
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted(){
		this.getNewsInfo();
	},
	data(){
		return {
			newsData:{
				title: "",
				updated_at: "",
				cover: "",
				content: "",
			},
		}
	},
	methods: {
		renderUrl(imgUrl){
			let baseImgUrl = "";
			if(process.env.NODE_ENV == "development"){
				baseImgUrl="http://47.56.131.174"
			} else{
				baseImgUrl="";
			}
			return baseImgUrl + imgUrl;
		},
		getNewsInfo(){
			let languange = 1;
			if (this.$store.state.locale == "zh") {
				languange = 1
			} else {
				languange = 0
			}
			// this.$axios.$get(`/api/cms/v1/article/${this.$route.query.id}?lang=${languange}`).then(data=>{
			// 	return data;
			// }).then(data=>{
			// 	if(data.code == 0){
			// 		this.newsData = data.data;
			// 	} else{
					this.$axios.$get(`/api/cms/v1/article/0?lang=${languange}&slug=${this.$route.query.slug}`).then(dataSource=>{
						console.log(dataSource)
						if(dataSource.code == 0){
							this.newsData = dataSource.data;
						}
					})
				// }
			
			// })
		},
		formateTimeStamp(date){
			let fmt = 'yyyy-MM-dd hh:mm:ss';
			if(date){
					date = new Date(+date)
				if (/(y+)/.test(fmt)) {
					fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
				}
				let o = {
					'M+': date.getMonth() + 1,
					'd+': date.getDate(),
					'h+': date.getHours(),
					'm+': date.getMinutes(),
					's+': date.getSeconds()
				};
				for (let k in o) {
					if (new RegExp(`(${k})`).test(fmt)) {
						let str = o[k] + '';
						fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
					}
				}
				return fmt;
			} else{
				return "";
			}
		}
	},
	
}
</script>
<style lang="stylus" scoped>
@import '~assets/styles/mixins.styl'
@media screen and (min-width: 420px)
	.news_detail
		padding-top 55px
		padding-bottom 155px
		width 50%
		margin 0 auto 
		fontMedium()
		.news_detail_content
			.news_detail_content_h3
				color #11223F
				font-size 36px
				fontBold()
				text-align center
				margin-bottom 10px
			.news_detail_date
				font-size 16px
				color #FF7D00
				text-align center
			.new_detail_img
				width 100%
				margin 0 auto 10px
				img
					max-width 100%
					min-width 100%
					min-height 100%
					max-height 100%
					object-fit cover
				margin-top 32px
				margin-bottom 41px
			.news_detail_title
				fontMedium()
				font-size 28px
				color rgba(138,142,158,1)
				margin-bottom 10px
			.news_detail_content_p
				font-size 21px
				color #11223f
				line-height 30px
				// text-indent 2em


@media screen and (min-width: 320px) and (max-width: 414px)
	.news_detail
		padding 40px 5% 66px
		fontMedium()
		.news_detail_content
			.news_detail_content_h3
				color #11223f
				text-align center
				fontBold()
			.news_detail_date
				color #FF7D00
				font-size 12px
				margin 10px 0 20px
				text-align center
			.new_detail_img
				width 100%
				margin 0 auto 10px
				img
					max-width 100%
					min-width 100%
					min-height 100%
					max-height 100%
					object-fit cover
				
			.news_detail_content_p
				color #8A8E9E
				font-size 12px
				line-height 18px

				


</style>