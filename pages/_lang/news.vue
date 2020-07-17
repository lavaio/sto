<template>
	<div>
		<div  class="detail_content_wrap">
			<!-- <div v-html="str"></div> -->
			<div  class="list_content_div"  @click="handleNewsDetail(newsItem.id)"  v-for="(newsItem, index)  in  newsData"  v-bind:key="index">
				<div  class="list_content_left">
					<img :src="renderUrl(newsItem.cover)" />
				</div>
				<div  class="list_content_right">
					<!-- <p  class="list_content_right_top_p" v-if="$store.state.locale =='zh'">{{newsItem.title}}</p>
					<p  class="list_content_right_top_p" v-else>{{newsItem.title_en}}</p> -->

					<p  class="list_content_right_top_p" >{{newsItem.title}}</p>
<!-- font-family: Montserrat-Medium; -->
					<!-- <p  class="list_list_content_right_middle_p">{{newsItem.tags}}</p> -->
					<p  class="list_content_right_bottom_p">{{formateTimeStamp(newsItem.created_at)}}</p>
				</div>
			</div>
		</div>
			<!-- layout="total,prev,  pager,  next" -->
		<el-pagination
			background
			layout="prev,  pager,  next"
			:page-size="pageSize"
			:total="total"
			:current-page.sync="currentPage"
			@current-change="pageChange"
		>
		</el-pagination>
	</div>
</template>

<script>
export default {
	
	mounted() {
		// this.getNewList(1)
		this.getList(1)

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
		},
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
		renderUrl(imgUrl){
			let baseImgUrl = "";
			if(process.env.NODE_ENV == "development"){
				baseImgUrl="http://47.56.131.174"
			} else{
				baseImgUrl="";
			}
			return baseImgUrl + imgUrl;
		},
		getList(currentPage){
			let lang = 1;
			if (this.$store.state.locale === 'zh') {
				lang = 1;
			} else if (this.$store.state.locale === 'en') {
				lang = 0;
			}
			let params = `
				&limit=9
				&lang=${lang}
				&page=${currentPage}
			`
			return this.$axios.$get(`/api/cms/v1/articles?status=1${params}`).then(data=>{
				this.total = data.data.total;
				this.newsData = data.data.items;
			})
		},
		// getList(params){
		// 	// return this.$axios.$get(`https://securityin.com/api/contents?type=Securityin&order=desc&count=500`).then(data=>{
		// 		console.log(data)
		// 		let arr = [];
		// 		data.data.map((item,index) =>{
		// 			item.src = require("../../assets/images/news.jpg");
		// 			arr.push(item)
		// 		})
		// 		return arr
		// 	})
		// },
		pageChange(page) {
			this.currentPage = page;
			this.getPageData(page);
		},
	},
}
</script>
<style lang="stylus" scoped>
	/deep/.el-pagination
		margin-top 0
		margin-bottom 40px
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