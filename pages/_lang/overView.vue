
<template>
	<div class="over_view">
		<div class="detail-content_tab_div" style="margin-bottom: 10px" ref="mao">
			<a class="taga active" href="#history" @click="handleHistory($event)">Trade History</a>
			<a class="taga" href="#analysis"  @click="handleHistory($event)">Analysis</a>
			<a class="taga" href="#about"  @click="handleHistory($event)">About</a>
		</div>
		<div class="detail_tab_wrap">
			<div class="history" id="history">
				<h3 class="history_h3 hoverStyle">Trading History</h3>
				<el-table
					:data="pageDta"
					style="width: 100%">
					<el-table-column
						prop="logo"
						label=""
						>
						<template slot-scope="scope">
							<div class="div_img">
								<img :src="scope.row.logo"/>
							</div>
						</template>
					</el-table-column>
					<el-table-column
						prop="companyName"
						label="Company Name"
					>
						<template slot-scope="scope">
							<div class="link_a">
								<p>
									<a :href="scope.row.companyNameLink" target="_blank">{{scope.row.companyName}} 
										<i class="iconfont icon-lianjie" style="color: #27ACE0"></i>
									</a>
								</p>
								<p style="font-family:Montserrat-Light;">
									<a :href="scope.row.smallNmaeLink" target="_blank">{{scope.row.smallNmae}}
										<!-- <i class="iconfont icon-lianjie" style="color: #27ACE0"></i> -->
									</a>
								</p>
							</div>
						</template>
					</el-table-column>
					<el-table-column
						prop="marketCap"
						label="Market Cap">
					</el-table-column>

					<el-table-column
						prop="price"
						label="Price">
						<template slot-scope="scope">
							<div>
								<span :style="{'color':scope.row.change >0 ? '#01C0AA':scope.row.change == 0? '#2E384D':'#EE2E6B'}" >
									{{scope.row.price}}
								</span>

							</div>
						</template>
					</el-table-column>
					<el-table-column
						prop="change"
						label="Change%">
						<template slot-scope="scope">
							<div>
								<span :style="{'color':scope.row.change >0 ? '#01C0AA':scope.row.change == 0? '#2E384D':'#EE2E6B'}" >
								<i :class="scope.row.change >0 ? 'iconfont icon-shang':scope.row.change == 0? 'iconfont icon-zuoyou':'iconfont icon-xia'" ></i>
									{{Math.abs(scope.row.change)}}
								</span>
							</div>
						</template>
					</el-table-column>

					<el-table-column
						prop="volume"
						label="24hVolume">
					</el-table-column>
					<el-table-column
						prop="exchange"
						label="Exchange">
					</el-table-column>

					<el-table-column
						label="Price Trend">
						<template slot-scope="scope">
							<div class="price_change">
								<img :src="scope.row.src"/>
								<!-- {{scope.row.src}} -->
							</div>
						</template>
					</el-table-column>
				</el-table>
					<!-- layout="total,prev,  pager,  next" -->

				<el-pagination
					background
					layout="prev, pager,  next"
					:page-size="pageSize"
					:total="total"
					:current-page.sync="currentPage"
					@current-change="pageChange"
				>
				</el-pagination>
			</div>
			<progressContent />
			<visitList />

			<div class="fundraise" id="analysis">
				<h3 class="history_h3 hoverStyle">Fundraise Status</h3>
				<div class="fundraise_content">
					<div class="fundraise_content_left" style="border-right: 2px solid #EBEEFD">
						<h3 class="fundraise_title">Fundraise Information</h3>
						<div v-for="item in 8" :key="item" style="margin-right: 10%" :class="item==8 ?'fundraise_content_div paddingBottom': 'fundraise_content_div'" >
							<div class="fundraise_content_div_left">Total Raise</div>
							<div class="fundraise_content_div_right">Regulation D 506(c)-General
								Solicitation,Regulation S
								(International)
							</div>
						</div>
					</div>
					<div class="fundraise_content_right">
						<h3 class="fundraise_title" style="margin-left: 10%">Fundraise Information</h3>
						<div class="fundraise_content_div"  v-for="item in 8" :key="item" style="margin-left: 10%">
							<div class="fundraise_content_div_left">Total Raise</div>
							<div class="fundraise_content_div_right">Regulation D 506(c)-General
								Solicitation,Regulation S
								(International)
							</div>
						</div>

					</div>

				</div>
			</div>
			<div class="about" id="about">
				<h3 class="history_h3 hoverStyle">About</h3>
				<div class="about_content">
					<div class="about_content_left" style="border-right: 2px solid #EBEEFD; padding-right: 5%">
						<h3 class="about_content_title">Overview</h3>
						<p class="about_content_p">
													Detroit, one of the fastest growing major cities in America and best kept real estate secrets, is rich with history, and possesses a colorful cultural fabric. Despite being among the 15 largest metro areas in the US, Detroit drivers spend the least amount of time in traffic during peak periods. Beyond automotive innovation, Detroit is home to dozens of startup incubators, and is surging on Inc.’s list of top 50 cities to start a business*. Root for the Lions, Tigers, Pistons and Red Wings, or enjoy the outdoors with over 200 miles of hiking trails nearby, 9 state parks, and over 3200 miles of coastline to explore.
						</p>
						<p class="about_content_p" style="margin-top: 24px;">
							There’s something for everyone here, because Detroit is for everybody.
						</p>
					</div>
					<div class="about_content_right" style="padding-left: 5%">
						<h3 class="about_content_title">Overview</h3>
						<p class="about_content_p">
										Detroit, one of the fastest growing major cities in America and best kept real estate secrets, is rich with history, and possesses a colorful cultural fabric. Despite being among the 15 largest metro areas in the US, Detroit drivers spend the least amount of time in traffic during peak periods. Beyond automotive innovation, Detroit is home to dozens of startup incubators, and is surging on Inc.’s list of top 50 cities to start a business*. Root for the Lions, Tigers, Pistons and Red Wings, or enjoy the outdoors with over 200 miles of hiking trails nearby, 9 state parks, and over 3200 miles of coastline to explore.
						</p>
						<p class="about_content_p" style="margin-top: 24px;">
									There’s something for everyone here, because Detroit is for everybody.
						</p>
					</div>
				</div>
			</div>

			<div class="team">
				<h3 class="history_h3 hoverStyle">Team</h3>
				<div class="team_box">
					<div v-swiper:swiper="swiperOption">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item) in 8" :key="item">
								<div  class="team_swiper_div">
									<div class="team_swiper_div_top">
										<!-- <a href="#" target="_blank"> -->
										<img src="https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10QCGKHrdGD2LZzArsORaUuOTnAV3xDbG1vyFDu4utBG1J8VBe.png" />
										<!-- </a> -->
									</div>
									<p class="team_name">Greg Wales</p>
									<p class="team_position">Co-Founder & CEO</p>
									<div class="team_swiper_div_bottom">
										<div class="team_icon">in</div>
										<div class="team_icon">in</div>
										<div class="team_icon">in</div>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-button-next"></div>
						<div class="swiper-button-prev"></div>
					</div>
				</div>
			</div>

			<div class="team">
				<h3 class="history_h3 hoverStyle">Team</h3>
				<div class="team_box">
					<div v-swiper:teamSwiper="swiperOption">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item) in 8" :key="item">
								<div  class="team_swiper_div">
									<div class="team_swiper_div_top">
										<!-- <a href="#" target="_blank"> -->
										<img src="https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10QCGKHrdGD2LZzArsORaUuOTnAV3xDbG1vyFDu4utBG1J8VBe.png" />
										<!-- </a> -->
									</div>
									<p class="team_name">Greg Wales</p>
									<p class="team_position">Co-Founder & CEO</p>
									<div class="team_swiper_div_bottom">
										<div class="team_icon">in</div>
										<div class="team_icon">in</div>
										<div class="team_icon">in</div>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-button-next"></div>
						<div class="swiper-button-prev"></div>
					</div>
				</div>
			</div>
			<div class="pie">
				<h3 class="history_h3 hoverStyle">Advisors</h3>
				<div class="pie_content">
					<echartPie />
				</div>
			</div>
			<div class="funds">
				<h3 class="history_h3 hoverStyle">Use of Funds</h3>
				<div class="funds_content">
					<div class="funds_content_item">
						<div class="funds_content_left">
							<!-- <span class="funds_content_item_icon"></span> -->
							<i class="iconfont icon-wenjianjia" style="color:#217AF9;font-size: 40px;"></i>
							<span class="funds_content_item_title"> STO Info</span>
						</div>
						<div class="funds_content_right">
							<i class="iconfont icon-xiazai" style="font-size: 30px; color: #8A8E9E;"></i>
						</div>
					</div>
					<div class="funds_content_item">
						<div class="funds_content_left">
							<!-- <span class="funds_content_item_icon"></span> -->
							<i class="iconfont icon-wenjianjia" style="color:#217AF9;font-size: 40px;"></i>
							<span class="funds_content_item_title"> STO Info</span>
						</div>
						<div class="funds_content_right">
							<i class="iconfont icon-xiazai" style="font-size: 30px; color: #8A8E9E;"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			pageSize: 8,
			currentPage: 1,
			total:0,
			pageDta:[],
			swiperOption: {
				slidesPerView: 3,
				spaceBetween: 0,
				slidesPerGroup: 1,
				loop: true,
				loopFillGroupWithBlank: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
			tableData:[
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/tzero.png",
						"companyName":   "tZERO" ,
						"companyNameLink": "https://www.tzero.com/",
						"smallNmae": "TZROP",
						"smallNmaeLink": "https://www.tzero.com/",
						"marketCap": "$26,008,327.50",
						"price": "$1.25",
						"change": "0",
						"volume": "$4,051.00",
						"exchange": "tZERO",
						"priceSrc": "1.jpg"
				},
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/blockchaincapital.jpg",
						"companyName":   "Blockchain Capital" ,
						"companyNameLink": "http://www.blockchaincapital.com/",
						"smallNmae": "BCAP",
						"smallNmaeLink": "http://www.blockchaincapital.com/",
						"marketCap": "$9,057,297.27",
						"price": "$1.49",
						"change": "10.37",
						"volume": "$596.00",
						"exchange": "OpenFinance",
						"priceSrc": "2.jpg" 
				},
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/spice.jpg",
						"companyName":   "SPiCE VC" ,
						"companyNameLink": "https://spicevc.com",
						"smallNmae": "SPiCE",
						"smallNmaeLink": "https://spicevc.com",
						"marketCap": "$8,126,101.44",
						"price": "$0.96",
						"change": "0",
						"volume": "$132.48",
						"exchange": "OpenFinance",
						"priceSrc": "3.jpg"  
				},
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/lotto.jpg",
						"companyName":   "Lottery.com" ,
						"companyNameLink": "https://lottery.com/",
						"smallNmae": "LDCC",
						"smallNmaeLink": "https://lottery.com/",
						"marketCap": "$4,278,768.50",
						"price": "$0.10",
						"change": "0",
						"volume": "$567.00",
						"exchange": "OpenFinance",
						"priceSrc": "4.jpg" 
				}, {
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/mt-pelerin-icon.png",
						"companyName":   "Mt Pelerin" ,
						"companyNameLink": "https://www.mtpelerin.com/",
						"smallNmae": "MPS",
						"smallNmaeLink": "https://www.mtpelerin.com/",
						"marketCap": "	$1,580,000.00",
						"price": "$3.16",
						"change": "-11.98",
						"volume": "$338.06",
						"exchange": "Uniswap",
						"priceSrc": "5.jpg"  
				},
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/22x.png",
						"companyName":   "22X Fund" ,
						"companyNameLink": "https://www.22xfund.com",
						"smallNmae": "22X",
						"smallNmaeLink": "https://www.22xfund.com",
						"marketCap": "$1,543,370.40",
						"price": "$0.30",
						"change": "-40",
						"volume": "$30.00",
						"exchange": "OpenFinance",
						"priceSrc": "6.jpg" 
				},
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/protos.jpg",
						"companyName":   "Protos" ,
						"companyNameLink": "http://protosmanagement.com/",
						"smallNmae": "PRTS",
						"smallNmaeLink": "http://protosmanagement.com/",
						"marketCap": "$1,507,579.20",
						"price": "$0.45",
						"change": "0",
						"volume": "$20.25",
						"exchange": "OpenFinance",
						"priceSrc": "7.jpg" 
				},
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
						"companyName":   "16200 Fullerton Ave Detroit MI" ,
						"companyNameLink": "https://realt.co/product/16200-fullerton-ave-detroit-mi-48227/",
						"smallNmae": "RealT",
						"smallNmaeLink": "https://realt.co/product/16200-fullerton-ave-detroit-mi-48227/",
						"marketCap": "$650,370.00",
						"price": "$171.15",
						"change": "-0.83",
						"volume": "$1,000.78",
						"exchange": "Uniswap",
						"priceSrc": "8.jpg"  
				},
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
						"companyName":   "1002428 Appoline St" ,
						"companyNameLink": "https://realt.co/product",
						"smallNmae": "RealT",
						"smallNmaeLink": "https://realt.co/product",
						"marketCap": "$144,860.00",
						"price": "$1744.86",
						"change": "0.54",
						"volume": "$726.00",
						"exchange": "Uniswap",
						"priceSrc": "9.jpg"  
				},
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
						"companyName":   "9943 Marlowe Street, Detroit, MI" ,
						"companyNameLink": "https://realt.co/product",
						"smallNmae": "RealT",
						"smallNmaeLink": "https://realt.co/product",
						"marketCap": "$71,690.00",
						"price": "$71.69",
					"change": "2.68",
						"volume": "$0.00",
						"exchange": "Uniswap",
						"priceSrc": "10.jpg" 
				},
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
						"companyName":   "20200 Lesure St Detroit MI 48235" ,
						"companyNameLink": "https://realt.co/product",
						"smallNmae": "RealT",
						"smallNmaeLink": "https://realt.co/product",
					"marketCap": "$69,290.00",
						"price": "$69.29",
					"change": "0.55",
						"volume": "$208.92",
						"exchange": "Uniswap",
						"priceSrc": "11.jpg" 
				},
				{
						"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
						"companyName":   "9336 Patton St Detroit" ,
						"companyNameLink": "https://realt.co/product",
						"smallNmae": "RealT",
						"smallNmaeLink": "https://realt.co/product",
					"marketCap": "$62,950.00",
						"price": "$62.95",
					"change": "-1.5",
						"volume": "$126.37",
						"exchange": "Uniswap",
						"priceSrc": "12.jpg"  
				},
				{
					"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
					"companyName":   "942 Audubon Rd Detroit MI" ,
					"companyNameLink": "https://realt.co/product",
					"smallNmae": "RealT",
					"smallNmaeLink": "https://realt.co/product",
					"marketCap": "$59,122.50",
					"price": "$78.83",
					"change": "-1.67",
					"volume": "$0.00",
					"exchange": "Uniswap",
					"priceSrc": "13.jpg"
				}
			], 
		}
	},
	created(){
		
	},
	mounted(){
		this.getTableList(1)
		window.addEventListener('scroll',()=>{
			let scrollHeight= document.documentElement.scrollTop || document.body.scrollTop;
			let mao = this.$refs.mao;
			console.log(this.$refs.mao)
			if (scrollHeight > mao.offsetTop -400) {
				mao.setAttribute("class", "detail-content_tab_div detail-content_tab_div_active");
			} 
			if(scrollHeight < 900) {
				mao.setAttribute("class", "detail-content_tab_div");
			}
		})
	},
	methods:{
		handleHistory(event){
			console.log(event)
			let domArr = document.getElementsByClassName("taga");
			for (let index = 0; index < domArr.length; index++) {
				const element = domArr[index];
				if (element === event.target) {
					element.setAttribute("class", "active taga")
				} else{
					element.setAttribute("class", "taga")
				}
				
			}
		},
		getTableList(currentPage){
			let arr = [];
			this.tableData.map((item,index) =>{
				if (index >= (currentPage-1) * this.pageSize && index <= (this.pageSize * currentPage)-1 ) {
					item.src = require(`./../../assets/images/${item.priceSrc}`);
					arr.push(item)
				}
			})
			this.pageDta = arr;
			this.total = this.tableData.length;
		},
		pageChange(page) {
			this.currentPage = page;
			this.getTableList(page)
		},
	}
}
</script>

<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
	/deep/.el-table--enable-row-hover .el-table__body tr:hover 
		.link_a
			p
				a
					text-decoration underline
					color #2e384d
	/deep/.el-tabs__nav
		margin unset
		margin-left 100px
		// marginLeft()
	/deep/.el-tabs__header
		margin-top 0px
		margin 0px
		height 70px
		box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	.swiper-button-prev:after, .swiper-button-next:after{
		font-size: 16px;
	}
	.swiper-container {
		width: 100%;
		height: 100%;
		padding-bottom: 90px;
		padding-top: 20px;
	}
	@media screen and (min-width: 1500px)
		.swiper-button-prev{
			left: $maxSwiper;
		}
		.swiper-button-next{
			right: $maxSwiper;
		}
	@media screen and (max-width: 1500px)
		.swiper-button-next{
			right: $minSwiper;
		}
		.swiper-button-prev{
			left: $minSwiper;
		}
	.swiper-button-prev, .swiper-button-next{
		top: unset;
		bottom: 0;
		background:linear-gradient(90deg,rgba(40,170,226,1) 0%,rgba(49,205,186,1) 100%);
		width: 32px;
		height: 32px;
		color: white;
		border-radius:4px;
		outline: unset;
	}
	

.over_view
	background #ffffff
	.detail-content_tab_div_active
		position fixed
		top 70px
		z-index 1000
		width 100%
	.detail-content_tab_div
		background #F9FBFF
		height 48px
		line-height 48px
		// box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
		box-shadow 0 4px 5px -3px rgba(24,98,204,0.09)
		// bannerPaddingLeft()
		padding-left 100px
		.active
			border-bottom 2px solid #27ACE0
		a	
			color #343744
			fontMedium()
			margin-right 25px
			text-decoration none
			font-size 14px
			padding-bottom 10px
	.detail_tab_wrap
		center()
		padding 0 0 128px
		a
			color #2E384D
			text-decoration none
		.hoverStyle::before, .hoverStyle::after
			margin-bottom 4px
		.history
			.div_img
				width 50px
				height 50px
				img
					min-height 100%
					max-height 100%
					min-width 100%
					max-width 100%
					object-fit cover
				.price_change
					width 100px
					img
						min-height 100%
						max-height 100%
						min-width 100%
						max-width 100%
						object-fit cover
		.fundraise
			.fundraise_content
				padding 32px 23px 0
				box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
				border-radius 4px
				display flex
				justify-content space-between
				.fundraise_content_left, .fundraise_content_right
					width 50%
				.fundraise_title
					font-size 14px
					color #2E384D
					fontMedium()
					margin-bottom 28px
	
				.fundraise_content_div
					display flex
					justify-content space-between
					padding 10px 0
					border-top 2px solid #EBEEFD
					color #2E384D
					font-size 14px
					.fundraise_content_div_left
						width 40%
						fontMedium()
					.fundraise_content_div_right
						width 60%
				.paddingBottom
					padding-bottom 30px


		.about
			.about_content
				display flex
				justify-content space-between
				box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
				border-radius 4px
				padding 32px 23px 0
				.about_content_title
					font-size 16px
					color #2E384D
					margin-bottom 39px
				.about_content_p
					color #2E384D
					font-size 14px
					line-height 18px
					fontMedium()
				.about_content_left,.about_content_right
					width 50%
					padding-bottom 50px
		.team
			.team_swiper_div
				width 90%
				// width 300px
				// box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
				box-shadow 0px 8px 20px 0px rgba(24,98,204,0.09)
				border-radius 4px
				height 350px
				padding 35px 70px
				margin-bottom 30px
				margin-top 12px
				.team_swiper_div_top
					margin 0 auto
					margin-bottom 30px
					img
						min-height 100%
						min-width  100%
						max-height 100%
						max-width  100%
						object-fit cover
						border-radius 50%
				.team_name
					color #2E384D
					font-size 16px
					fontMedium()
					text-align center
				.team_position
					color #2E384D
					font-size 12px
					margin-top 10px
					text-align center
					fontMedium()
					margin-bottom 30px
				.team_swiper_div_top
					width 150px
					height 150px
					border-radius 50%
				.team_swiper_div_bottom
					display flex
					justify-content space-between
					.team_icon
						width 24px
						height 24px
						border-radius 50%
						background #0B66C1
						color #fff
						display flex
						justify-content center
						align-items center


		.pie
			.pie_content
				width 100%
				height 400px
		.funds
			.funds_content
				width 100%
				display flex
				justify-content space-between
				.funds_content_item
					width 48%
					height 96px
					background rgba(255,255,255,1)
					box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
					border-radius 4px
					display flex
					justify-content space-between
					align-items center
					padding 0 32px
					.funds_content_left
						justify-content center
						align-items center
						display flex
						.funds_content_item_icon
							width 50px
							height 64px
							display inline-block
							background #3E7DEB
						.funds_content_item_title
							font-size 16px
							color #343744
							fontMedium()
							margin-left 15px
</style>