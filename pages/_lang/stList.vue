<template>
	<div class="sto_list">
		<div class="sto_list_wrap">
			<div class="sto_list_content">
				<div class="sto_list_content_left">
					<h3 class="sto_list_content_left_h3">{{$t('sto-list.list')}}</h3>
					<el-select v-model="sortValue" placeholder="请选择" @change="handleSortChange">
						<el-option
							v-for="item in sortOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<!-- <div v-for="(item,index) in selectTitle" :key="index">
						<h4 class="sto_list_content_left_h4">{{item.title}}</h4>
						<el-select v-bind:value="item.selectName" placeholder="请选择" @change="((val)=>{handleSelectChange(val, item.selectName)})">
							<el-option
								v-for="element in item.options"
								:key="element.value"
								:label="element.label"
								:value="element.value"
								>
							</el-option>
						</el-select>
					</div> -->
					<div>
						<h4 class="sto_list_content_left_h4">{{selectTitle[0] ? selectTitle[0].title: ""}}</h4>
						<el-select v-model="status" placeholder="请选择" @change="((val)=>{handleSelectChange(val, selectTitle[0].selectName)})">
							<el-option
								v-for="element in selectTitle[0].options"
								:key="element.value"
								:label="element.label"
								:value="element.value"
								>
							</el-option>
						</el-select>
					</div>
					<div>
						<h4 class="sto_list_content_left_h4">{{selectTitle[1]?selectTitle[1].title: ""}}</h4>
						<el-select v-model="category" placeholder="请选择" @change="((val)=>{handleSelectChange(val, selectTitle[1].selectName)})">
							<el-option
								v-for="element in selectTitle[1].options"
								:key="element.value"
								:label="element.label"
								:value="element.value"
								>
							</el-option>
						</el-select>
					</div>
					
					<div>
						<h4 class="sto_list_content_left_h4">{{selectTitle[2]?selectTitle[2].title: ""}}</h4>
						<el-select v-model="asset_class" placeholder="请选择" @change="((val)=>{handleSelectChange(val, selectTitle[2].selectName)})">
							<el-option
								v-for="element in selectTitle[2].options"
								:key="element.value"
								:label="element.label"
								:value="element.value"
								>
							</el-option>
						</el-select>
					</div>

					<div>
						<h4 class="sto_list_content_left_h4">{{selectTitle[3]?selectTitle[3].title: ""}}</h4>
						<el-select v-model="token_right" placeholder="请选择" @change="((val)=>{handleSelectChange(val, selectTitle[3].selectName)})">
							<el-option
								v-for="element in selectTitle[3].options"
								:key="element.value"
								:label="element.label"
								:value="element.value"
								>
							</el-option>
						</el-select>
					</div>

					<div>
						<h4 class="sto_list_content_left_h4">{{selectTitle[4]?selectTitle[4].title: ""}}</h4>
						<el-select v-model="country" placeholder="请选择" @change="((val)=>{handleSelectChange(val, selectTitle[4].selectName)})">
							<el-option
								v-for="element in selectTitle[4].options"
								:key="element.value"
								:label="element.label"
								:value="element.value"
								>
							</el-option>
						</el-select>
					</div>




					<div class="sto_list_content_left_slider_div">
						<h4 class="sto_list_content_left_h4">{{$t("sto-list.profile")}}</h4>
						<span class="sto_list_content_left_num">>{{profileValue}}%</span>
					</div>
    			<el-slider v-model="profileValue" :show-tooltip="false" @change="profileChange"></el-slider>
					<!-- <h4 class="sto_list_content_left_h4">Other</h4>

					<el-checkbox-group 
						v-model="checkedCities"
					>
						<p class="checkbox_p" v-for="city in cities" :label="city" :key="city">
							<el-checkbox >{{city}}</el-checkbox>
						</p>
					</el-checkbox-group> -->
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
			pageSize: 9,
			currentPage: 1,
			total:0,
			test: 99,
			stoList:[],
			checkedCities: ['上海', '北京'],
			cities: ['上海', '北京', '广州', '深圳'],
			status: "All",
			category: "All",
			asset_class: "All",
			token_right: "All",
			country: "All",
			sortOptions: [],
			sortOptionsZh: [{
					value: 'Date added asc',
					label: '添加日期升序'
				}, {
					value: 'Date added desc',
					label: '添加日期降序'
				}, {
					value: 'Profile % asc',
					label: '项目披露程度升序'
				}, {
					value: 'Profile % desc',
					label: '项目披露程度降序'
				}, {
					value: 'Start date',
					label: '开始日期'
				},{
					value: 'End date',
					label: '结束日期'
			}],
			sortOptionsEn: [{
					value: 'Date added asc',
					label: 'Date added asc'
				}, {
					value: 'Date added desc',
					label: 'Date added desc',
				}, {
					value: 'Profile % asc',
					label: 'Profile % asc',
				}, {
					value: 'Profile % desc',
					label: 'Profile % desc',
				}, {
					value: 'Start date',
					label: 'Start date',
				},{
					value: 'End date',
					label: 'End date',
			}],
			sortValue: 'Date added asc',
			selectTitleZh:[{
				title: "状态",
				selectName: "status",
				options: [{
						value: 'All',
						label: '所有状态'
					}, {
						value: 'Upcoming',
						label: '即将来临'
					}, {
						value: 'Main sale',
						label: '强销期'
					}, {
						value: 'Ended',
						label: '已结束'
					}, {
						value: 'Funded',
						label: '募资结束'
					},{
						value: 'TBA',
						label: '待定'
				}],
				},{
					title: "行业",
					selectName: "category",
					options: [{
								value: 'All',
								label: '全部行业'
							}, {
								value: 'Art',
								label: '艺术'
							}, {
								value: 'Banking',
								label: '银行'
							}, {
								value: 'E-commerce',
								label: '电子商务'
							}, {
								value: 'Energy',
								label: '能源'
							},{
								value: 'Finance',
								label: '金融'
							},{
								value: 'Gambling',
								label: '博彩'
							},{
								value: 'Healthcare',
								label: '卫生保健'
							}],
				},{
					title: "资产类型",
					selectName: "asset_class",
					options: [{
						value: 'All',
						label: '全部资产'
						},{
							value: 'Bonds',
							label: '债券'
						}, {
							value: 'Equity',
							label: '产权'
						}, {
							value: 'Fund',
							label: '基金'
						}, {
							value: 'Real Estate',
							label: '房地产'
						}, {
							value: 'REIT',
							label: '房地产信托'
						},{
							value: 'Stock',
							label: '股票'
					}],
				},{
					title: "代币权益",
					selectName: "token_right",
					options: [{
							value: 'All',
							label: '全部权益'
						}, {
							value: 'Equitable Interest',
							label: '衡平利息'
						}, {
							value: 'Equity Ownership',
							label: '股权'
						}, {
							value: 'Profit Share Right',
							label: '利润分享权'
						}, {
							value: 'Redemption Right',
							label: '赎回权'
						},{
							value: 'Voting Rights',
							label: '投票权'
						}],
				},{
					title: "成立国家",
					selectName: "country",
					options: [{
							value: 'All',
							label: '全部国家'
						}, {
							value: 'Bahamas',
							label: '巴哈马'
						}, {
							value: 'Brazil',
							label: '巴西'
						}, {
							value: 'Canada',
							label: '加拿大'
						}, {
							value: 'Cayman Islands',
							label: '开曼群岛'
						},{
							value: 'Denmark',
							label: '丹麦'
						},{
							value: 'Estonia',
							label: '爱沙尼亚'
						},{
							value: 'Finland',
							label: '芬兰'
						},{
							value: 'France',
							label: '法国'
					}],
			}],
			selectTitleEn:[{
					title: "Status",
					selectName: "status",
					options: [{
							value: 'All',
							label: 'All'
						}, {
							value: 'Upcoming',
							label: 'Upcoming'
						}, {
							value: 'Main sale',
							label: 'Main sale'
						}, {
							value: 'Ended',
							label: 'Ended'
						}, {
							value: 'Funded',
							label: 'Funded'
						},{
							value: 'TBA',
							label: 'TBA'
					}],
				},{
					title: "Industry",
					selectName: "category",
					options: [{
							value: 'All',
							label: 'All'
						}, {
							value: 'Art',
							label: 'Art'
						}, {
							value: 'Banking',
							label: 'Banking'
						}, {
							value: 'E-commerce',
							label: 'E-commerce'
						}, {
							value: 'Energy',
							label: 'Energy'
						},{
							value: 'Finance',
							label: 'Finance'
						},{
							value: 'Gambling',
							label: 'Gambling'
						},{
							value: 'Healthcare',
							label: 'Healthcare'
						}],
				},{
					title: "asset class",
					selectName: "asset_class",
					options: [{
						value: 'All',
						label: 'All'
						},{
							value: 'Bonds',
							label: 'Bonds'
						}, {
							value: 'Equity',
							label: 'Equity'
						}, {
							value: 'Fund',
							label: 'Fund'
						}, {
							value: 'Real Estate',
							label: 'Real Estate'
						}, {
							value: 'REIT',
							label: 'REIT'
						},{
							value: 'Stock',
							label: 'Stock'
					}],
				},{
					title: "Token rights",
					selectName: "token_right",
					options: [{
							value: 'All',
							label: 'All'
						}, {
							value: 'Equitable Interest',
							label: 'Equitable Interest'
						}, {
							value: 'Equity Ownership',
							label: 'Equity Ownership'
						}, {
							value: 'Profit Share Right',
							label: 'Profit Share Right'
						}, {
							value: 'Redemption Right',
							label: 'Redemption Right'
						},{
							value: 'Voting Rights',
							label: 'Voting Rights'
						}],

				},{
				title: "Country of incorporation",
				selectName: "country",
				options: [{
						value: 'All',
						label: 'All'
					}, {
						value: 'Bahamas',
						label: 'Bahamas'
					}, {
						value: 'Brazil',
						label: 'Brazil'
					}, {
						value: 'Canada',
						label: 'Canada'
					}, {
						value: 'Cayman Islands',
						label: 'Cayman Islands'
					},{
						value: 'Denmark',
						label: 'Denmark'
					},{
						value: 'Estonia',
						label: 'Estonia'
					},{
						value: 'Finland',
						label: 'Finland'
					},{
						value: 'France',
						label: 'France'
				}],

			}],
			selectTitle:[{
				title: "状态",
				selectName: "status",
				options: [{
						value: 'All',
						label: '所有状态'
					}, {
						value: 'Upcoming',
						label: '即将来临'
					}, {
						value: 'Main sale',
						label: '强销期'
					}, {
						value: 'Ended',
						label: '已结束'
					}, {
						value: 'Funded',
						label: '募资结束'
					},{
						value: 'TBA',
						label: '待定'
				}],
				},{
					title: "行业",
					selectName: "category",
					options: [{
								value: 'All',
								label: '全部行业'
							}, {
								value: 'Art',
								label: '艺术'
							}, {
								value: 'Banking',
								label: '银行'
							}, {
								value: 'E-commerce',
								label: '电子商务'
							}, {
								value: 'Energy',
								label: '能源'
							},{
								value: 'Finance',
								label: '金融'
							},{
								value: 'Gambling',
								label: '博彩'
							},{
								value: 'Healthcare',
								label: '卫生保健'
							}],
				},{
					title: "资产类型",
					selectName: "asset_class",
					options: [{
						value: 'All',
						label: '全部资产'
						},{
							value: 'Bonds',
							label: '债券'
						}, {
							value: 'Equity',
							label: '产权'
						}, {
							value: 'Fund',
							label: '基金'
						}, {
							value: 'Real Estate',
							label: '房地产'
						}, {
							value: 'REIT',
							label: '房地产信托'
						},{
							value: 'Stock',
							label: '股票'
					}],
				},{
					title: "代币权益",
					selectName: "token_right",
					options: [{
							value: 'All',
							label: '全部权益'
						}, {
							value: 'Equitable Interest',
							label: '衡平利息'
						}, {
							value: 'Equity Ownership',
							label: '股权'
						}, {
							value: 'Profit Share Right',
							label: '利润分享权'
						}, {
							value: 'Redemption Right',
							label: '赎回权'
						},{
							value: 'Voting Rights',
							label: '投票权'
						}],
				},{
					title: "成立国家",
					selectName: "country",
					options: [{
							value: 'All',
							label: '全部国家'
						}, {
							value: 'Bahamas',
							label: '巴哈马'
						}, {
							value: 'Brazil',
							label: '巴西'
						}, {
							value: 'Canada',
							label: '加拿大'
						}, {
							value: 'Cayman Islands',
							label: '开曼群岛'
						},{
							value: 'Denmark',
							label: '丹麦'
						},{
							value: 'Estonia',
							label: '爱沙尼亚'
						},{
							value: 'Finland',
							label: '芬兰'
						},{
							value: 'France',
							label: '法国'
					}],
			}],
			profileValue: 0,
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
		handleSortChange(){
			this.getList(this.currentPage)
		},
		handleSelectChange(value, params){
			this.$set(this.$data, params, value)
			this.getList(this.currentPage)
		},
		profileChange(value){
			this.getList(this.currentPage)
		},
		getList(currentPage){
			let params =`sort=&status=${this.status}
										&category=${this.category}
										&asset_class=${this.asset_class}
										&token_right=${this.token_right}
										&country=${this.country}
										&profile=${this.profileValue}&
										page=${currentPage}&limit=9`

			// http://47.244.223.4:8080/api/stos/get_list?sort=&status=TBA&category=All&asset_class=All&token_right=All&country=All&profile=20&page=${currentPage}&limit=9

			this.$axios.$get(`http://47.244.223.4:8080/api/stos/get_list?${params}`).then(data=>{
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
		fontMedium()
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