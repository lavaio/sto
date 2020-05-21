<template>
	<div class="sto_detail">
		<div class="sto_detail_wrap">
			<div class="sto_detail_wrap_top">
				Follow us on 
				<a href="https://t.me/stoscope" target="_blank"> 
					<i class="iconfont icon-danxuankuang" style="color: #27ACE0"></i>
						Telegram
				</a>
				and
        <a href="https://twitter.com/sto_scope" target="_blank"> 
					<i class="iconfont icon-danxuankuang" style="color: #27ACE0"></i>
					Twitter
				</a>
			 </div>
		
			<div style="clear:both;"></div>
			<h3 class="sto_detail_wrap_h3">{{stoItem['token name']}} <span class="sto_detail_wrap_h3_span">{{stoItem['token name']}}</span></h3>
			<div class="sto_detail_wrap_small_title">Connecting the dots of urban mobility.</div>
			<div class="sto_detail_content_box">
				<!-- 左侧 -->
				<div class="sto_detail_content_left">
					<div class="sto_detail_content_left_top">
						<div class="sto_detail_content_left_img_div">
							<img :src="stoItem['logo_urk']" />
						</div>
						<div class="sto_detail_content_left_top_right">
							<div class="sto_detail_content_left_right_one">
								<i class="iconfont icon-danxuankuang" style="color: #27ACE0"></i>
								<a href="">Mainsale</a>
							</div>
							<!-- <div class="sto_detail_content_left_right_two">
								69 days left
							</div> -->
							<div class="sto_detail_content_tag_box">
								<div class="box_div">
									<a href="">
										PROFILE 
										<span>{{stoItem.profile}}</span>
									</a>
								</div>
								<div class="box_div" v-for="(tag,index) in stoItem['industry tags']"  :key="index">
									<a href="javascript:;">	{{tag}} </a>
								</div>
							</div>
						</div>
					</div>
					<!-- <a class=sto_detail_content_left_website>Visit Website</a>
					<a class=sto_detail_content_left_invest>Invest Now</a> -->
					<!-- <div class="sto_detail_content_left_links">
						<div class="sto_detail_content_left_links_left">
							<b>+</b> Watchlist
						</div>
						<div class="sto_detail_content_left_links_right">
							Whitepaper
						</div>
					</div> -->
					<div class="sto_detail_content_left_icon">
							<a href="javascript:;"> <i class="iconfont icon-tuite" style="color: #B4B6BF;  font-size:24px;"></i> </a>
							<a href="javascript:;"> <i class="iconfont icon-reddit1" style="color: #B4B6BF;  font-size:24px;"></i> </a>
							<a href="javascript:;"> <i class="iconfont icon--telegram" style="color: #B4B6BF;  font-size:24px;"></i> </a>
					</div>
					<div class="sto_detail_content_left_invest_title">
						{{$t("sto-detail.interest-rank")}}
						<i class="iconfont icon-wenhao" style="color: #B4B6BF;font-size: 22px"></i>
					</div>
					<div class="sto_detail_content_left_invest_content">
						<div class="invest_content_item">
							<h3 class="invest_content_item_title">Rank</h3>
							<div class="invest_content_item_content invest_content_item_content_bg">
								{{stoItem.interests && stoItem.interests.length? stoItem.interests[0].Rank : ""}}
							</div>
						</div>
						<div class="invest_content_item">
							<h3 class="invest_content_item_title">24H</h3>
							<div class="invest_content_item_content">
								{{stoItem.interests && stoItem.interests.length? stoItem.interests[0].OneDay : ""}}
							</div>
						</div>
						<div class="invest_content_item">
							<h3 class="invest_content_item_title">7D</h3>
							<div class="invest_content_item_content">
								{{stoItem.interests && stoItem.interests.length? stoItem.interests[0].OneWeek : ""}}
								</div>
						</div>
						<div class="invest_content_item">
							<h3 class="invest_content_item_title">1M</h3>
							<div class="invest_content_item_content">
								{{stoItem.interests && stoItem.interests.length? stoItem.interests[0].OneMonth : ""}}
							</div>
						</div>
					</div>
					<div class="sto_detail_content_left_list_box">
						<a href="#milestones">
							<div class="sto_detail_content_left_list" @click="((e)=>{handleList(e, 'describe')})">{{$t("sto-detail.describe")}}</div>
						</a>
						<a href="#details">
							<div class="sto_detail_content_left_list" @click="((e)=>{handleList(e, 'details')})">{{$t("sto-detail.token-details")}}</div>
						</a>
						<a href="#milestones">
							<div class="sto_detail_content_left_list" @click="((e)=>{handleList(e, 'describe')})">{{$t("sto-detail.milestones")}}</div>
						</a>
						<a href="#team">
							<div class="sto_detail_content_left_list" @click="((e)=>{handleList(e, 'describe')})">{{$t("sto-detail.team-member")}}</div>
						</a>
					</div>

				</div>

				<div class="sto_detail_content_right">
					<p class="right_title">{{$t("sto-detail.describe")}}</p>
					<p class="right_describe" id="description">
						{{stoItem.description}}
						<!-- VMC is a blockchain based open mobility platform, developed to host various mobility service providers into a single digital space. The company is building a one-stop shop decentralized solution for a trillion dollar mobility market, which enables developers and mobility service providers to build dApps that offer services for ride/vehicle sharing, public transport and more. -->
					</p>
					<!-- <a href="#" class="right_link_a">read more</a> -->


					<!-- <div class="play_button">
						<i class="iconfont icon-bofang"></i>Video
					</div> -->
					<!-- <div class="video_style"></div> -->

					<!-- <p class="right_title">General information</p> -->

					<!-- <div class="list_div">
						<div class="list_div_left">
							Private sale
							<span class="right_circle red_before_color">Ended</span>
						</div>
						<div class="list_div_right">
							<div class="list_div_right_one grey_color">March 15, 2019 </div>
							<div class="list_div_right_one grey_color">July 15, 2019</div>
						</div>
					</div>
					<div class="list_div">
						<div class="list_div_left">
							Private sale
							<span class="right_circle green_before_color">Ended</span>
						</div>
						<div class="list_div_right">
							<div class="list_div_right_one">March 15, 2019 </div>
							<div class="list_div_right_one">July 15, 2019</div>
						</div>
					</div>
					<div class="list_div">
						<div class="list_div_left">
							Country of origin: 
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item two_line_style">Netherlands </div>
						</div>
					</div> -->

					<p class="right_title">{{$t("sto-detail.legal")}}</p>
					
					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.company-name")}}
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">{{stoItem['Company name']}} </div>
						</div>
					</div>


					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.company-incorporation")}}
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item two_line_style">{{stoItem['Country of incorporation']}} </div>
						</div>
					</div>

					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.company-address")}}
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								<i class="iconfont icon-coordinates_fill" />
								{{stoItem['Company address']}}
							</div>
						</div>
					</div>
					


					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.whitelist")}}

						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								<i v-if="stoItem.WhiteList" class="iconfont icon-checkmark" />
								Required </div>
						</div>
					</div>

					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.kyc")}}

						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								<i v-if="stoItem.KYC" class="iconfont icon-checkmark" />
								Required </div>
						</div>
					</div>
<!-- 
					<div class="list_div">
						<div class="list_div_left">
							AML: 
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								<i class="iconfont icon-checkmark" />
								Required </div>
						</div>
					</div> -->
					<p class="right_title">{{$t("sto-detail.asset")}}</p>

					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.token-rights")}}
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								{{stoItem['token right']}}
							</div>
						</div>
					</div>

					<p class="right_title">{{$t("sto-detail.token-details")}}</p>

					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.symbol")}}
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								{{stoItem['Symbol']}}
							</div>
						</div>
					</div>

					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.available-for-sale")}}
							
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								{{stoItem['Available for sale']}}
							</div>
						</div>
					</div>

					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.total-supply-tokens")}}
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								{{stoItem['Total supply tokens']}}
							</div>
						</div>
					</div>
					<p class="right_title" id="details">Token details</p>

					<!-- <div class="list_div">
						<div class="list_div_left">
							Presale Price:
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								1 VMC-ST = €0.14 - €0.16
							</div>
						</div>
					</div> -->

					<!-- <div class="list_div">
						<div class="list_div_left">
							Sto Price:
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								Option A: For Placement of 1,000–2,000 EUR — 10%
							</div>
							<div class="list_div_right_item">Option B: For Placement of 2,001–4,000 EUR — 20%</div>
							<div class="list_div_right_item">Option C: For Placement of 4,001–6,000 EUR — 30%</div>
							<div class="list_div_right_item">Option D: For Placement over 6,001 EUR — Negotiable</div>
						</div>
					</div> -->

					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.min-goal")}}
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								{{stoItem['Minimum goal']}}
							</div>
						</div>
					</div>

					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.fund-goal")}}
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								{{stoItem['Fundraising goal']}}
							</div>
						</div>
					</div>


					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.min-invest")}}
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								{{stoItem['Min investment']}}
							</div>
						</div>
					</div>

					<div class="list_div">
						<div class="list_div_left">
							{{$t("sto-detail.bonuses")}}
						</div>
						<div class="list_div_right">
							<div class="list_div_right_item">
								{{stoItem['Bonuses']}}
							</div>
						</div>
					</div>





					<!-- <p class="right_title">Additional links</p>
					<div class="additional_links">Instagram <i class="iconfont icon-zhuanfa" style="font-size: 30px"> </i></div>
					<div class="additional_links">Instagram <i class="iconfont icon-zhuanfa" style="font-size: 30px"> </i></div> -->
					<p class="right_title" id="milestones">{{$t("sto-detail.milestones")}}</p>
					<div class="time_line">
						<div class="time_line_left">
							<div class="time_line_circle second_circle"></div>
						</div>
						<div class="time_line_right">
							<p class="time_line_title">Q3 2017</p>
							<p class="time_line_describe">Build the team</p>
							<p class="time_line_describe">Write the first release of the white paper</p>
						</div>
					</div>
					<div class="time_line">
						<div class="time_line_left">
							<div class="time_line_circle second_circle"></div>
						</div>
						<div class="time_line_right">
							<p class="time_line_title">Q4 2017</p>
							<p class="time_line_describe">Partnership with one of Europe’s leading public transport companies</p>
							<p class="time_line_describe">Start development platform</p>
						</div>
					</div>
					<div class="time_line">  
						<div class="time_line_left">
							<div class="time_line_circle"></div>
						</div>
						<div class="time_line_right">
							<p class="time_line_title">Q1 2018</p>
							<p class="time_line_describe">Partnership with one of Europe’s leading public transport companies</p>
						</div>
					</div>

					<div class="button_div"><span style="box-shadow: none;" class="buttonStyle">View 7 more items</span></div>
					
					<p class="right_title" id="team">{{$t("sto-detail.team-member")}}</p>
					<div class="team">
						<div class="team_item" v-for="(team,index) in stoItem['team members']" :key="index"> 
							<div class="team_item_img">
								<img :src="team['ImgURL']" alt="team">
							</div> 
							<div class="team_item_info"> 
								<div class="team_item_name">{{team['Name']}}</div> 
								<div class="team_item_post">{{team['Post']}}</div> 
								<!-- <div class="team_item_soc">{{team['Soc']}}</div>  -->
							</div> 
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
			stoItem: {},
		}
	},
	mounted(){
		console.log(this.$route.query.projectName)
		this.getStoDetail()
	},
	methods:{
		getStoDetail(){
			this.$axios.$get(`http://47.244.223.4:8080/api/sto/${this.$route.query.projectName}`).then(data=>{
			// this.$axios.$get(`http://47.244.223.4:8080/api/sto/7Pass`).then(data=>{
				let arr = [];
			
				this.stoItem = data.data
			})
		},
		handleList(e,path){
			let arr = document.getElementsByClassName("sto_detail_content_left_list");
			for (let index = 0; index < arr.length; index++) {
				const element = arr[index];
				if(element === e.target ){
					element.setAttribute("class", "sto_detail_content_left_list active_color");
				} else{
					element.setAttribute("class", "sto_detail_content_left_list");
				}
			}
			// if (this.$store.state.locale === 'zh') {
			// 	this.$router.push(`/zh/market#contact`)
			// } else {
			// 	this.$router.push(`/en/market#contact`)
			// }
		}
	}
}
</script>
<style lang="stylus"  scoped>
	@import '~assets/styles/mixins.styl'
	.sto_detail
		width 100%
		background #FBFBFE
		padding-bottom 136px
		.sto_detail_wrap
			center()
			.sto_detail_wrap_top
				fontMedium()
				font-size 12px
				color #343744
				float right
				margin-top 12px 
				margin-bottom 18px
				a
					color #27ACE0
			.sto_detail_wrap_h3
				color #343744
				fontBold()
				font-size 22px
				.sto_detail_wrap_h3_span
					color #8A8E9E
			.sto_detail_wrap_small_title
				color #343744
				font-size 14px
				fontMedium()
				margin-bottom 20px
			.sto_detail_content_box
				display flex
				justify-content space-between
				.sto_detail_content_left
					width 30%
					padding-right 24px
					// height 700px
					.sto_detail_content_left_top
						display flex
						background #ffffff
						border-radius 8px
						padding 10px 0
						.sto_detail_content_left_img_div
							width 100px
							height 100px
							justify-content center
							align-items center
							display flex
							margin-right 10px
							img
								max-height 80%
								min-height 80%
								max-width 80%
								min-width 80%
								object-fit contain
						.sto_detail_content_left_top_right
							width 60%
							.sto_detail_content_left_right_one
								a
									text-decoration none 
									color #343744
									font-size 12px
									fontMedium()
							.sto_detail_content_left_right_two
								color #8A8E9E
								font-size 12px
								fontMedium()
								margin-bottom 5px
						.sto_detail_content_tag_box
							display flex
							flex-wrap  wrap
							.box_div
								width 100%
								a
									color #ffffff
									padding 0px 5px
									fontBold()
									border-radius 3px
									font-size 12px
									text-transform uppercase
									text-decoration none
									background-color #8A8E9E
									span
										background-color #27ACE0
										color #ffffff
										margin 0 -5px 0 5px
										border-radius 0 3px 3px 0
										padding 0 5px
					.sto_detail_content_left_website
						width 100%
						color #ffffff
						background #27ACE0
						border-radius 4px
						font-size 14px
						fontMedium()
						display inline-block
						line-height 36px
						text-align center
						margin 10px 0 16px
					.sto_detail_content_left_invest
						width 100%
						color #ffffff
						background #2F3F56
						border-radius 4px
						font-size 14px
						fontMedium()
						display inline-block
						line-height 36px
						text-align center
						margin-bottom 16px
					.sto_detail_content_left_links
						display flex
						justify-content space-between
						margin-bottom 10px
						width 100%
						height 32px
						line-height 32px
						margin-top 5px
						font-size 12px
						fontMedium()
						.sto_detail_content_left_links_left
							width 48%
							height 100%
							border 1px solid #01C0AA
							color #01C0AA
							border-radius 4px
							text-align center
						.sto_detail_content_left_links_right
							width 48%
							height 100%
							border 1px solid #EE2E6B
							color #EE2E6B
							border-radius 4px
							text-align center
					.sto_detail_content_left_icon
						flex-wrap wrap
						display flex
						margin-bottom 15px
						justify-content center
						a
							margin 16px 4px 0
							diplay inline-block
					.sto_detail_content_left_invest_title
						font-size 14px
						color #343744
						text-align center
						margin 16px 0 7px 
						fontMedium()
						display flex
						justify-content center
						align-items center
					.sto_detail_content_left_invest_content
						display flex
						justify-content space-between
						.invest_content_item
							width 20%
							.invest_content_item_title
								font-size 14px
								color #8A8E9E
								text-align center
								margin-bottom 5px
								fontMedium()
							.invest_content_item_content
								border-radius 4px
								min-width 50px
								height 26px
								line-height 26px
								font-size 12px
								text-align center
								background #ffffff
								color #EE2E6B
								fontMedium()
								box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
							.invest_content_item_content_bg
								background #192532
								color #ffffff

					.sto_detail_content_left_list_box
						margin-top 16px
						.sto_detail_content_left_list
							margin-bottom 10px
							background #ffffff
							color #343744
							border-left 1px solid #343744
							font-size 14px
							height 36px
							line-height 36px
							box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
							padding-left 15px
							border-radius 0 4px 4px 0
							fontMedium()
						.active_color
							color #27ACE0
							border-left 1px solid #27ACE0
				.sto_detail_content_right
					width 70%
					padding 0 24px 32px 
					background #fff
					border-radius 8px
					.right_title
						font-size 18px
						color #343744
						fontBold()
						margin 32px 0 16px
					.right_describe
						color #343744
						font-size 14px
						fontMedium()
						line-height 18px
					.right_link_a
						color #27ACE0
						font-size 14px
						text-decoration none
						fontMedium()
					.play_button
						color #343744
						font-size 12px
						fontBold()
						text-align center
						margin 32px 0 16px
					.video_style
						width 80%
						margin 0 auto
						height 308px
						background skyblue
					.list_div
						display flex
						border-bottom 2px solid #EBEEFD
						fontMedium()
						padding 10px 0 10px
						color #343744
						.list_div_left
							min-width 250px
							.right_circle::before
								content ""
								width 10px
								height 10px
								border-radius 50%
								display inline-block
							.red_before_color::before
								background #EF3D77
							.green_before_color::before
								background #01C0AA
						.list_div_right
							font-size 14px
							fontMedium()
							.list_div_right_one
								color #343744

							.list_div_right_one::before
								content ""
								width 5px
								height 5px
								border-radius 50%
								background #343744
								display inline-block
								margin-bottom 3px
								margin-right 10px
							.grey_color
								color #8A8E9E
							.grey_color::before	
								background #8A8E9E
							.two_line_style::before
								content ""
								width 15px
								height 10px
								border-top 2px solid #343744
								border-bottom 2px solid #AA1A27
								background #ffffff
								display inline-block
								margin-right 3px





								


					





					.additional_links
						color #27ACE0
						font-size 14px
						fontMedium()
						padding-bottom 5px
						border-bottom 2px solid #EBEEFD
					.time_line
						display flex
						.time_line_left
							width 20px
							overflow hidden
							display flex
							justify-content space-between
							flex-direction column
							.time_line_circle
								width 7px
								height 7px
								background #27ACE0
								border-radius 50%
							.second_circle
								position relative
							.second_circle::before,	.second_circle::after
								width 1px
								height 230px
								background #27ACE0
								display inline-block
								content ""
								left 3px
								position absolute
							.second_circle::before
								bottom 0
							.second_circle::after
								top 0
						.time_line_right
							fontMedium()
							display flex
							justify-content space-between
							flex-direction column
							margin-top -5px
							margin-bottom 15px
							.marginBottom
								margin-bottom 15px
							.time_line_title
								font-size 16px
								color #27ACE0
								fontBold()
								margin-bottom 10px
							.time_line_describe
								fontMdium()
								font-size 14px
								color #8A8E9E
								margin-bottom 10px

					.button_div
						text-align center
						margin-top 24px
					.team
						display flex
						justify-content space-between
						flex-wrap wrap
						.team_item
							width 50%
							border-bottom 2px solid #EBEEFD
							padding-bottom 15px
							padding-top 15px
							display flex
							.team_item_img
								width 72px
								height 72px
								border-radius 50%
								overflow hidden
								margin-right 10px
								img
									margin-right 10px
									min-width 100%
									min-height 100%
									max-width 100%
									max-height 100%
									object-fit cover
							.team_item_info
								flex-direction column
								display flex
								fontMedium()
								width calc(100% - 100px)
								justify-content space-between
								.team_item_name
									color #343744
									fontMedium()
								.team_item_post
									color #8A8E9E
								.team_item_soc
									width 18px
									height 18px
									background #27ACE0
									color #ffffff
									display flex
									justify-content center
									align-items cenetr
									border-radius 50%
									font-size 12px
									



			.hoverStyle::before, .hoverStyle::after
				margin-bottom 4px
</style>