<template>
	<div>
		<div class="news_detail">
			<div class="news_detail_content">
				<h3 v-if="$store.state.locale =='zh'" class="news_detail_content_h3">
					{{newsData.title}}
				</h3>
				<h3 v-else class="news_detail_content_h3">
					{{newsData.title_en}}
				</h3>
				<p  v-if="$store.state.locale == 'zh'" class="news_detail_date">
					{{newsData.updated_at }}
				</p>
				<p  v-else class="news_detail_date">
					{{newsData.updated_at }}
				</p>
				<div class="new_detail_img">
					<img :src="newsData.cover" />
				</div>
				<!-- <h3 class="news_detail_title">Could you introduce Smartpress for us </h3> -->
				<!-- <div class="news_detail_content_p" v-if="$store.state.locale =='zh'" v-html="newItem.describe">
					{{newItem.describe}}
				</div>
				<div class="news_detail_content_p"  v-else v-html="newItem.describe_en">
					{{newItem.describe_en}}
				</div> -->


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
		// this.getNewList()
		this.getNewsInfo();
	},
	methods: {
		getNewsInfo(){
			this.$axios.$get(`http://47.56.131.174/api/cms/v1/article/${this.$route.query.id}`).then(data=>{
				console.log(data)
				this.newsData = data.data;
			})
		},
		getNewList() {
			let params = "Securityin";
			this.$axios.$get(`https://securityin.com/api/content?type=${params}&id=${this.$route.query.id}`).then(data=>{
				let arr = [];
				data.data.map((item,index) =>{
					item.src = this.$route.query.src
					arr.push(item);
				})
				return arr
			}).then(dataSource=>{
				if (dataSource[0].identity) {
					let identity = dataSource[0].identity;
					let languange = "en";
					if (this.$store.state.locale == "zh") {
						languange = "ch"
					} else {
						languange = "en"
					}
					this.$axios.$get(`http://47.244.223.4:8083/api/search?type=${params}&q=%2Boption:${languange} %2Bidentity:"${identity}"`).then(data=>{
						this.newsData = data.data;
					})
				} else {
						this.newsData = dataSource;
				}
			})
		},
	},
	data(){
		return {
			newsData:[],
			news: {},
			dataSource:[
				]
		}
	}
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
				text-indent 2em


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