<template>
	<div class="sto_list">
		<div class="sto_list_wrap">
			<div class="sto_list_content">
				<div class="sto_list_content_left">
					<h3 class="sto_list_content_left_h3">STO List</h3>
					<el-select v-model="sortValue" placeholder="请选择">
						<el-option
							v-for="item in sortOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<div v-for="(item,index) in selectTitle" :key="index">
						<h4 class="sto_list_content_left_h4">{{item.title}}</h4>
						<el-select v-model="value" placeholder="请选择" @change="handleSelectChange">
							<el-option
								v-for="element in item.options"
								:key="element.value"
								:label="element.label"
								:value="element.value"
								>
							</el-option>
						</el-select>
					</div>
					
					<div class="sto_list_content_left_slider_div">
						<h4 class="sto_list_content_left_h4">Profile</h4>
						<span class="sto_list_content_left_num">>{{value3}}%</span>
					</div>
    			<el-slider v-model="value3" :show-tooltip="false"></el-slider>
					<h4 class="sto_list_content_left_h4">Other</h4>

					<el-checkbox-group 
						v-model="checkedCities"
					>
						<p class="checkbox_p" v-for="city in cities" :label="city" :key="city">
							<el-checkbox >{{city}}</el-checkbox>
						</p>
					</el-checkbox-group>
				</div>
				<div class="sto_list_content_right">
					<div class="sto_list_content_right_div_box">
						<div class="sto_list_content_right_div" v-for="(item) in stoList" :key="item['token name']" @click="handleStoDetail(item)">
							<div class="sto_list_content_right_div_top">
								<img :src="item.cover" />
							</div>
							<div class="sto_list_content_right_div_bottom">
								<p class="p_one">
									<img :src="item.logo_urk" />
									<span class="p_one_span">{{item['token name']}}</span>
								</p>
								<p class="p_two">
									{{item.brief}}
								</p>
								<div class="p_three">
									<p class="p_three_p">
										<i class="iconfont icon-danxuankuang"/>
										<span> {{item.status}}</span>
									</p>
									<!-- <p class="p_three_p button_left">
										<i class="iconfont icon-time"/>
										<span>70 days left</span>
									</p> -->
								</div>
								<div class="bottom_bottom_div">
									<div class="bottom_bottom_div_one" >
										PROFILE
										<span class="bottom_bottom_div_one_span">
											{{item.profile}}
										</span>
									</div>
									<div class="bottom_bottom_div_one" v-for="(tag,index) in item['industry tags']" :key="index">
										{{tag}}
									</div>
								</div>
							</div>
						</div>
					</div>

						<el-pagination
							background
							layout="prev,  pager,  next"
							:total="total"
							:page-size="pageSize"
							:current-page.sync="currentPage"
							@current-change="pageChange"
						>
						</el-pagination>
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
			stoList:[],
			checkedCities: ['上海', '北京'],
			cities: ['上海', '北京', '广州', '深圳'],
			sortOptions: [],
			sortOptionsZh: [{
					value: 'date-asc',
					label: '添加日期升序'
				}, {
					value: 'date-desc',
					label: '添加日期降序'
				}, {
					value: 'profile-asc',
					label: '项目披露程度升序'
				}, {
					value: 'profile-desc',
					label: '项目披露程度降序'
				}, {
					value: 'start-date',
					label: '开始日期'
				},{
					value: 'end-date',
					label: '结束日期'
			}],
			sortOptionsEn: [{
					value: 'date-asc',
					label: 'date-asc'
				}, {
					value: 'date-desc',
					label: 'date-desc',
				}, {
					value: 'profile-asc',
					label: 'profile-asc',
				}, {
					value: 'profile-desc',
					label: 'profile-desc',
				}, {
					value: 'start-date',
					label: 'start-date',
				},{
					value: 'end-date',
					label: 'end-date',
			}],
			sortValue: 'date-asc',
			selectTitleZh:[{
				title: "状态",
				options: [{
						value: 'all',
						label: '所有状态'
					}, {
						value: 'upcoming',
						label: '即将来临'
					}, {
						value: 'sale',
						label: '强销期'
					}, {
						value: 'ended',
						label: '已结束'
					}, {
						value: 'funded',
						label: '募资结束'
					},{
						value: 'tba',
						label: '待定'
				}],
				},{
					title: "行业",
					options: [{
								value: 'all',
								label: '全部行业'
							}, {
								value: 'art',
								label: '艺术'
							}, {
								value: 'banking',
								label: '银行'
							}, {
								value: 'commerce',
								label: '电子商务'
							}, {
								value: 'energy',
								label: '能源'
							},{
								value: 'finance',
								label: '金融'
							},{
								value: 'gambling',
								label: '博彩'
							},{
								value: 'healthcare',
								label: '卫生保健'
							}],
				},{
					title: "资产类型",
					options: [{
						value: 'all',
						label: '全部资产'
					},{
							value: 'bonds',
							label: '债券'
						}, {
							value: 'equity',
							label: '产权'
						}, {
							value: 'fund',
							label: '基金'
						}, {
							value: 'real-estate',
							label: '房地产'
						}, {
							value: 'reit',
							label: '房地产信托'
						},{
							value: 'stock',
							label: '股票'
						}],
				},{
					title: "代币权益",
					options: [{
							value: 'all',
							label: '全部权益'
						}, {
							value: 'equitable',
							label: '衡平利息'
						}, {
							value: 'ownership',
							label: '股权'
						}, {
							value: 'profit',
							label: '利润分享权'
						}, {
							value: 'redemption',
							label: '赎回权'
						},{
							value: 'voting',
							label: '投票权'
						}],
				},{
					title: "成立国家",
					options: [{
							value: 'all',
							label: '全部国家'
						}, {
							value: 'bahamas',
							label: '巴哈马'
						}, {
							value: 'brazil',
							label: '巴西'
						}, {
							value: 'canada',
							label: '加拿大'
						}, {
							value: 'cayman',
							label: '开曼群岛'
						},{
							value: 'denmark',
							label: '丹麦'
						},{
							value: 'estonia',
							label: '爱沙尼亚'
						},{
							value: 'finland',
							label: '芬兰'
						},{
							value: 'france',
							label: '法国'
					}],
			}],
			selectTitleEn:[{
					title: "Status",
					options: [{
							value: 'all',
							label: 'all'
						}, {
							value: 'upcoming',
							label: 'upcoming'
						}, {
							value: 'sale',
							label: 'sale'
						}, {
							value: 'ended',
							label: 'ended'
						}, {
							value: 'funded',
							label: 'funded'
						},{
							value: 'tba',
							label: 'tba'
					}],
				},{
					title: "Industry",
					options: [{
							value: 'all',
							label: 'all'
						}, {
							value: 'art',
							label: 'art'
						}, {
							value: 'banking',
							label: 'banking'
						}, {
							value: 'commerce',
							label: 'commerce'
						}, {
							value: 'energy',
							label: 'energy'
						},{
							value: 'finance',
							label: 'finance'
						},{
							value: 'gambling',
							label: 'gambling'
						},{
							value: 'healthcare',
							label: 'healthcare'
						}],
				},{
					title: "asset class",
					options: [{
						value: 'all',
						label: 'all'
						},{
							value: 'bonds',
							label: 'bonds'
						}, {
							value: 'equity',
							label: 'equity'
						}, {
							value: 'fund',
							label: 'fund'
						}, {
							value: 'real-estate',
							label: 'real-estate'
						}, {
							value: 'reit',
							label: 'reit'
						},{
							value: 'stock',
							label: 'stock'
					}],
				},{
					title: "Token rights",
					options: [{
							value: 'all',
							label: 'all'
						}, {
							value: 'equitable',
							label: 'equitable'
						}, {
							value: 'ownership',
							label: 'ownership'
						}, {
							value: 'profit',
							label: 'profit'
						}, {
							value: 'redemption',
							label: 'redemption'
						},{
							value: 'voting',
							label: 'voting'
						}],

				},{
				title: "Country of incorporation",
				options: [{
						value: 'all',
						label: 'all'
					}, {
						value: 'bahamas',
						label: 'bahamas'
					}, {
						value: 'brazil',
						label: 'brazil'
					}, {
						value: 'canada',
						label: 'canada'
					}, {
						value: 'cayman',
						label: 'cayman'
					},{
						value: 'denmark',
						label: 'denmark'
					},{
						value: 'estonia',
						label: 'estonia'
					},{
						value: 'finland',
						label: 'finland'
					},{
						value: 'france',
						label: 'france'
				}],

			}],
			selectTitle:[],
			value3: 36,
		}
	},
	mounted(){
		this.getList(1)
		if (this.$store.state.locale === 'zh') {
			this.selectTitle = this.selectTitleZh;
			this.sortOptions = this.sortOptionsZh;
		} else if (this.$store.state.locale === 'en') {
			this.selectTitle = this.selectTitleEn;
			this.sortOptions = this.sortOptionsEn;
		}
		

	},
	methods:{
		handleSelectChange(value){
			console.log(value)
		},
		getList(currentPage){
			this.$axios.$get(`http://47.244.223.4:8080/api/stos/get_list?sort=&status=TBA&category=all&asset_class=all&token_right=all&country=all&profile=20&page=${currentPage}&limit=9`).then(data=>{
				console.log(data)
				this.stoList = data.data
				this.total = data.documentsAmount;
				this.currentPage = currentPage;

			})
		},
		handleStoDetail(item){
			if (this.$store.state.locale == "en") {
				this.$router.push({
					path: "/stoDetail",
					query:{projectName: item["token name"]}
				})
			} else {
				this.$router.push({
					path: '/zh/stoDetail',
					query:{projectName: item["token name"]}
				})
			}
		},
		pageChange(page) {
			this.currentPage = page;
			this.getList(page)
		},
	}
}
</script>
<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
	/deep/.el-input__inner
		border none
		color #343744
		font-size 14px
		border-radius 4px
	/deep/.el-select .el-input .el-select__caret
		color #343744
	/deep/.el-select
		width 100%
		box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
	/deep/.el-slider__button
		border 2px solid #343744
	/deep/.el-slider__bar
		background-color #343744
	/deep/.el-checkbox
		color #343744
	/deep/.el-checkbox__inner
		border 1px solid #343744
	/deep/.el-pagination
		margin  128px auto 0px 
	.sto_list
		width 100%
		background #FBFBFE
		.sto_list_wrap
			center()
			padding 48px 0 56px
			.sto_list_content
				display flex
				justify-content space-between
				.sto_list_content_left
					width 25%
					color #343744
					.sto_list_content_left_h3
						font-size 22px
						fontBold()
						margin-bottom 16px
					.sto_list_content_left_h4
						font-size 16px
						fontBold()
						margin 13px 0 4px
					.sto_list_content_left_slider_div
						display flex
						justify-content space-between
						.sto_list_content_left_num
							font-size 14px
							fontMedium()
							margin-top 13px
					.checkbox_p
						margin-bottom 6px
				.sto_list_content_right
					width 70%
					margin-left 5%
					fontMedium()
					.sto_list_content_right_div_box::after
						content ""
						width 32%
						// width 224px
						height 0
						display block
					.sto_list_content_right_div_box
						display flex
						flex-wrap wrap
						justify-content space-between
						.sto_list_content_right_div
							// width 224px
							width 32%
							cursor pointer
							margin-bottom 20px
							background rgba(255,255,255,1)
							border-radius 4px
							box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
							.sto_list_content_right_div_top
								width 100%
								height 96px
								border-radius 4px 4px 0 0 
								img
									min-height 100%
									max-height 100%
									min-width 100%
									max-width 100%
									object-fit cover
							.sto_list_content_right_div_bottom
								padding 18px 0 8px 13px
								.p_one
									color #343744
									font-size 14px
									fontBold()
									height 30px
									line-height 30px
									display flex
									img
										width 30px
										height 30px
									.p_one_span
										margin-left 10px
								.p_two
									margin-top 8px
									margin-bottom 10px
									font-size 12px
									color #343744
								.p_three
									display flex
									margin-bottom 5px
									.p_three_p
										color #8A8E9E
										font-size 12px
									.button_left
										margin-left 20px
								.bottom_bottom_div
									display flex
									flex-wrap wrap
									.bottom_bottom_div_one
										height 14px
										line-height 14px
										color #ffffff
										background #8A8E9E
										font-size 12px
										text-transform uppercase
										border-radius 5px
										margin-right 7px
										margin-bottom 5px
										padding 0 10px
										fontBold()
										display flex
										justify-content space-between
										.bottom_bottom_div_one_span
											background #27ACE0
											padding 0 15px
											border-radius 0px 5px  5px 0
											margin 0 -10px 0 10px
				
</style>