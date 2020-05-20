<template>
	<div>
		<div  class="detail_content_wrap">
			<!-- <div v-html="str"></div> -->
			<div  class="list_content_div"  @click="handleNewsDetail(newsItem.id)"  v-for="(newsItem, index)  in  newsData"  v-bind:key="index">
				<div  class="list_content_left">
					<img :src="newsItem.src"/>
				</div>
				<div  class="list_content_right">
					<!-- <p  class="list_content_right_top_p" v-if="$store.state.locale =='zh'">{{newsItem.title}}</p>
					<p  class="list_content_right_top_p" v-else>{{newsItem.title_en}}</p> -->
					<p  class="list_content_right_top_p" >{{newsItem.title}}</p>

					<!-- <p  class="list_list_content_right_middle_p">{{newsItem.describe}}</p> -->
					<p  class="list_content_right_bottom_p">{{newsItem.author}}</p>
				</div>
			</div>
		</div>
			<!-- layout="total,prev,  pager,  next" -->
		<el-pagination
			background
			layout="total,prev,  pager,  next"
			:total="total"
			:page-size="pageSize"
			:current-page.sync="currentPage"
			@current-change="pageChange"
		>
		</el-pagination>
	</div>
</template>

<script>
export default {
	
	mounted() {
		this.getNewList(1)

	},
	data(){
		return{
			pageSize: 8,
			currentPage: 1,
			total:0,
			dataSource: [],
			newsData: [],
		}
	},

	
  methods: {
		handleNewsDetail(index,src){
			if (this.$store.state.locale == "en") {
				this.$router.push({
					path: "/newsDetail",
					query:{id: index,src: src}
				})
			} else {
				this.$router.push({
					path: '/zh/newsDetail',
					query:{id: index,src: src}
				})
			}
		},
		getList(params){
			return this.$axios.$get(`http://47.244.223.4:8083/api/search?order=asc&count=100&type=${params}`).then(data=>{
				let arr = [];
				data.data.map((item,index) =>{
					item.src = require("../../assets/images/news.png");
					arr.push(item)
				})
				return arr
			})
		},
		getNewList(currentPage) {
			let language = "&q=option:en";
			if ( this.$store.state.locale == "zh") {
				language = "&q=option:ch";
			} else {
				language = "&q=option:en";
			}
			var params = `Securityin`;
			this.getList(params+ language,currentPage).then(data=>{
				let dataSource = data.filter(item=>{
					if (this.$store.state.locale == "zh") {
						return item.option == "ch"
					} else {
						return item.option == "en"
					}
				})
				this.total = dataSource.length;
				this.currentPage = currentPage;
				this.dataSource = dataSource;
				this.getPageData(1);
			})
		},
		getPageData(currentPage){
			let arr = [];
			this.currentPage = currentPage;
			this.dataSource.map((item,index)=>{
				if (index >= (currentPage-1) * this.pageSize && index <= (this.pageSize * currentPage)-1 ) {
					arr.push(item)
				}
			})
			this.newsData = arr;
		},
		pageChange(page) {
			this.currentPage = page;
			this.getPageData(page);
		},
	},
		
		
}
</script>
<style lang="stylus" scoped>
	@import '~assets/styles/mixins.styl'
	@media screen and (min-width: 430px)
		.detail_content_wrap
			center()
			display flex
			justify-content space-between
			flex-direction column
			align-items center
			padding 0 140px 80px
			.list_content_div:hover
				cursor pointer
				box-shadow 0px 5px 25px 0px rgba(39,172,224,.2)
			.list_content_div
				margin-top 60px
				display flex
				width 100%
				height 188px
				justify-content space-between
				align-items center
				.list_content_left
					display flex
					justify-content center
					align-items center
					width 42%
					height 100%
					overflow hidden
					border-radius 4px 0 0 4px
					img 
						max-width 100%
						min-width 100%
						max-height 100%
						min-height 100%
						object-fit cover
					img:hover
						transition all 0.6s
						transform scale(1.1)
						cursor pointer
				.list_content_right
					width 58%
					height 100%
					display flex
					padding 20px 10px 10px 20px
					justify-content space-between
					flex-direction column
					box-shadow 1px 0px 5px 0px #e9e5ef
					box-sizing border-box
					.list_content_right_top_p
						fontBold()
						font-size 16px
						font-weight 800
						color #11223F
						line-height 26px
						display -webkit-box
						-webkit-line-clamp 3
						overflow hidden
						text-overflow ellipsis
						-webkit-box-orient vertical
						margin-bottom 10px
					.list_content_right_middle_p
						fontMedium()
						font-size 12px
						font-weight 500
						color #304467
						line-height 22px
						overflow hidden
						white-space nowrap
						text-overflow ellipsis
					.list_content_right_bottom_p
						font-size 12px
						color #27ACE0
						line-height 32px
						fontMedium()
						margin-top 30px
	@media screen and (min-width: 320px) and (max-width: 425px)
		.detail_content_wrap
			.list_content_div
				display flex
				height 115px
				justify-content space-between
				padding 0 7px
				margin-top 20px
				.list_content_left
					width 42%
					height 100%
					border-radius 4px 0px 0 4px
					overflow hidden
					img 
						max-width 100%
						min-width 100%
						max-height 100%
						min-height 100%
						object-fit cover
				.list_content_right
					width 58%
					padding  15px 0 10px 15px
					box-shadow 1px 0px 5px 0px #e9e5ef
					height 100%
					box-sizing border-box
					display flex
					justify-content space-between
					flex-direction column
					.list_content_right_top_p
						fontBold()
						line-height 20px
						font-size 14px
						display -webkit-box
						-webkit-line-clamp 2
						overflow hidden
						text-overflow ellipsis
						-webkit-box-orient vertical
						color #11223f
					.list_content_right_bottom_p
						color #27ACE0
						font-size 12px
						margin-top 10px
						fontMedium()
</style>