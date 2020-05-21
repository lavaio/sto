<template>
	<div class="news_list">
		<div class="head">
			<div class="head_wrap">
			</div>
			<!-- <p class="detail_head_p">{{$t("news.head-title")}} </p> -->
			<!-- <p class="detail_head_p">Infomation from Lava!</p> -->
		</div>
		<div  class="list_content">
			<News/>
				<!-- <el-tabs  v-model="activeName"  @tab-click="handleClick">
					<el-tab-pane :label="$t('news.all')"  name="all">
						<News :type="type"/>
					</el-tab-pane>
					<el-tab-pane  :label="$t('news.news')"  name="news">
						<News :type="type"/>
					</el-tab-pane>
					<el-tab-pane  :label="$t('news.notice')"  name="announcement">
						<News :type="type"/>
					</el-tab-pane>
					<el-tab-pane  :label="$t('news.events')"  name="events">
						<div class="events">
							<p> No Data</p>
						</div>
					</el-tab-pane>
				</el-tabs> -->
		</div>
	</div>
</template>
<script>
	import News from './news'

  export default {
		components:{
			News
		},
    data() {
			return {
				activeName: 'all',
				pageSize: 8,
				currentPage: 1,
				total:0,
				type: "ALL",
				dataSource:[
				]
      };
		},
	
    methods: {
      handleClick(tab, event) {
				let obj = {
						"ALL": "ALL",
						"NEWS": "News",
						"NOTICE": "Announcement",
						"EVENTS": "Events",

				}
				this.type = obj[tab.label]
			}
		},
  };
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins.styl'
@media screen and (min-width: 430px)
	.news_list
		.head
			height 400px
			display flex
			background url('../../assets/images/detail_banner.jpg') no-repeat 
			background-size cover
			background-position center
			align-items center
			flex-direction column
			padding-top 40px
			.detail_head_p
				fontBold()
				width 80%
				font-size 48px
				font-weight bold
				color white
				line-height 60px
				letter-spacing 1px
				text-align center
				margin-bottom 90px
			.head_wrap
				position absolute
				z-index -1
				height 370px
				width 390px
				top 0px
		.list_content
			width 100%
			min-height calc(100vh - 480px)
			padding-bottom 60px
			.events
				background-size cover
				background-image url('../../assets/images/no-data.png')
				background-repeat no-repeat 
				width 100%
				height 300px
				background-position center
				background-size 300px
				text-align center
				p 
					padding-top 100px
	


@media screen and (min-width: 320px) and (max-width: 425px)
	.news_list
		.head
			height 375px
			display flex
			// background-color #23242c
			align-items center
			flex-direction column
			position relative
			z-index 10
			padding-top 60px
			background url('../../assets/images/detail_banner.jpg') no-repeat 
			background-size cover
			background-position center 
			.detail_head_p
				fontBold()
				width 80%
				font-size 20px
				font-weight bold
				color white
				line-height 30px
				letter-spacing 1px
				text-align center
			.head_wrap
				// background url('../../assets/images/detail_banner.jpg') no-repeat 
				// background-size cover
				// background-position center 
				position absolute
				z-index -1
				height 220px
				width 230px
				top 115px
		.list_content
			padding 14px 4% 66px
		.events
				background-size cover
				background-image url('../../assets/images/no-data.png')
				background-repeat no-repeat 
				width 100%
				height 300px
				background-position center
				background-size 300px
				text-align center
				p 
					padding-top 100px
			



</style>


