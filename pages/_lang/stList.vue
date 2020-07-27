<template>
	<div class="sto_list">
		<div class="sto_list_wrap">
			<div class="sto_list_content">
				<div class="sto_list_content_left">
					<h3 class="sto_list_content_left_h3">{{$t('sto-list.list')}}</h3>
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
    			<el-slider v-model="profileValue" :show-tooltip="false" :max="99" @change="profileChange"></el-slider>
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
						<div class="sto_list_content_right_div" v-for="(item) in stoList" :key="item['projectID']" @click="handleStoDetail(item)">
							<div class="sto_list_content_right_div_top">
								<img :src="item.Cover" />
							</div>
							<div class="sto_list_content_right_div_bottom">
								<p class="p_one">
									<img :src="item.Logo"/>
									<span class="p_one_span">{{item['ProjectName']}}</span>
								</p>
								<p class="p_two">
									{{item.Brief}}
								</p>
								<div class="p_three">
									<p class="p_three_p">
										<i class="iconfont icon-danxuankuang"/>
										<!-- <span> {{item.status}}</span> -->
										<span v-if="$store.state.locale =='zh'"> {{statusZh[item.Status]}}</span>
										<span v-else> {{statusEn[item.Status]}}</span>
									</p>
									<!-- <p class="p_three_p button_left">
										<i class="iconfont icon-time"/>
										<span>70 days left</span>
									</p> -->
								</div>
								<div class="bottom_bottom_div">
									<div class="bottom_bottom_div_one" >
										PROFILE
										<span v-if="item.Profile" class="bottom_bottom_div_one_span">
											{{item.Profile}}%
										</span>
										<span v-else>
											{{item.Profile}}
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
						value: 2,
						label: '即将来临'
					}, {
						value: 3,
						label: '强销期'
					}, {
						value: 4,
						label: '已结束'
					}, {
						value: 5,
						label: '募资结束'
					},{
						value: 1,
						label: '待定'
				}],
				},{
					title: "行业",
					selectName: "category",
					options: [{
								value: 'All',
								label: '全部行业'
							}, {
								value: 1,
								label: '艺术'
							}, {
								value: 2,
								label: '银行'
							}, {
								value: 4,
								label: '区块链'
							},
							 {
								value: 8,
								label: '电子商务'
							}, {
								value: 16,
								label: '能源'
							},{
								value: 32,
								label: '金融'
							},{
								value: 64,
								label: '博彩'
							},{
								value: 128,
								label: '卫生保健'
							},
							 {
								value: 256,
								label: '工业'
							},
							 {
								value: 512,
								label: '基础设施'
							},
							 {
								value: 1024,
								label: '投资'
							},
							 {
								value: 2048,
								label: '媒体'
							},
							 {
								value: 4096,
								label: '房地产'
							},
							 {
								value: 8192,
								label: '服务'
							},
							 {
								value: 16384,
								label: '软件'
							},{
								value: 32768,
								label: '运动'
							},
							 {
								value: 65536,
								label: '科技'
							},
						],
				},{
					title: "资产类型",
					selectName: "asset_class",
					options: [{
						value: 'All',
						label: '全部资产'
						},{
							value: 6,
							label: '债券'
						}, {
							value: 1,
							label: '产权'
						}, {
							value: 2,
							label: '基金'
						}, {
							value: 3,
							label: '房地产'
						}, {
							value: 4,
							label: '房地产信托'
						},{
							value: 5,
							label: '股票'
					}],
				},{
					title: "代币权益",
					selectName: "token_right",
					options: [{
							value: 'All',
							label: '全部权益'
						}, 
						{
							value: 1,
							label: '股息'
						},{
							value: 2,
							label: '衡平利息'
						}, {
							value: 3,
							label: '股权'
						},
						 {
							value: 4,
							label: '利润分享权'
						}, {
							value: 5,
							label: '赎回权'
						},{
							value: 6,
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
							value: 'CaymanIslands',
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
					},
					{
							value: 'Germany',
							label: '德国'
					},
					{
							value: 'Gibraltar',
							label: '直布罗陀'
					},
					{
							value: 'Liechtenstein',
							label: '列支敦士登'
					},{
							value: 'Lithuania',
							label: '立陶宛'
					},{
							value: 'Malta',
							label: '马耳他'
					},{
							value: 'Mauritius',
							label: '毛里求斯'
					},{
							value: 'Netherlands',
							label: '荷兰'
					},{
							value: 'Panama',
							label: '巴拿马'
					},{
							value: 'PuertoRico',
							label: '波多黎各'
					},{
							value: 'Singapore',
							label: '新加坡'
					},{
							value: 'Spain',
							label: '西班牙'
					},{
							value: 'Switzerland',
							label: '瑞士'
					},{
							value: 'UnitedKingdom',
							label: '英国'
					},{
							value: 'UnitedStates',
							label: '美国'
					}
				],
			}],
			selectTitleEn:[{
					title: "Status",
					selectName: "status",
					options: [{
							value: 'All',
							label: 'All'
						}, {
							value: 2,
							label: 'Upcoming'
						}, {
							value: 3,
							label: 'Main sale'
						}, {
							value: 4,
							label: 'Ended'
						}, {
							value: 5,
							label: 'Funded'
						},{
							value: 1,
							label: 'TBA'
					}],
				},{
					title: "Industry",
					selectName: "category",
					options: [{
							value: 'All',
							label: 'All'
						}, {
							value: 1,
							label: 'Art'
						}, {
							value: 2,
							label: 'Banking'
						}, {
								value: 4,
								label: 'Blockchain'
						},{
							value: 8,
							label: 'E-commerce'
						}, {
							value: 16,
							label: 'Energy'
						},{
							value: 32,
							label: 'Finance'
						},{
							value: 64,
							label: 'Gambling'
						},{
							value: 128,
							label: 'Healthcare'
						},
							 {
								value: 256,
								label: 'Industrials'
							},
							 {
								value: 512,
								label: 'Infrastructure'
							},
							 {
								value: 1024,
								label: 'Investing'
							},
							 {
								value: 2048,
								label: 'Media'
							},
							 {
								value: 4096,
								label: 'Real Estate'
							},
							 {
								value: 8192,
								label: 'Services'
							},
							 {
								value: 16384,
								label: 'Software'
							},
							 {
								value: 32768,
								label: 'Sports'
							},
							 {
								value: 65536,
								label: 'Technology'
							},
					],
				},{
					title: "asset class",
					selectName: "asset_class",
					options: [{
						value: 'All',
						label: 'All'
						},{
							value: 6,
							label: 'Bonds'
						}, {
							value: 1,
							label: 'Equity'
						}, {
							value: 2,
							label: 'Fund'
						}, {
							value: 3,
							label: 'Real Estate'
						}, {
							value: 4,
							label: 'REIT'
						},{
							value: 5,
							label: 'Stock'
					}],
				},{
					title: "Token rights",
					selectName: "token_right",
					options: [{
							value: 'All',
							label: 'All'
						}, 
						{
							value: 1,
							label: 'Dividends'
						},{
							value: 2,
							label: 'Equitable Interest'
						}, {
							value: 3,
							label: 'Equity Ownership'
						},
					 {
							value: 4,
							label: 'Profit Share Right'
						}, {
							value: 5,
							label: 'Redemption Right'
						},{
							value: 6,
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
						value: 'CaymanIslands',
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
				},
				{
							value: 'Germany',
							label: 'Germany'
					},{
							value: 'Gibraltar',
							label: 'Gibraltar'
					},{
							value: 'Liechtenstein',
							label: 'Liechtenstein'
					},{
							value: 'Lithuania',
							label: 'Lithuania'
					},{
							value: 'Malta',
							label: 'Malta'
					},{
							value: 'Mauritius',
							label: 'Mauritius'
					},{
							value: 'Netherlands',
							label: 'Netherlands'
					},{
							value: 'Panama',
							label: 'Panama'
					},{
							value: 'PuertoRico',
							label: 'Puerto Rico'
					},{
							value: 'Singapore',
							label: 'Singapore'
					},{
							value: 'Spain',
							label: 'Spain'
					},{
							value: 'Switzerland',
							label: 'Switzerland'
					},{
							value: 'UnitedKingdom',
							label: 'United Kingdom'
					},{
						value: "UnitedStates",
						label: "United States",
					}
				],

			}],
			selectTitle:[{
				title: "状态",
				selectName: "status",
				options: [{
						value: 'All',
						label: '所有状态'
					}, {
						value: 2,
						label: '即将来临'
					}, {
						value: 3,
						label: '强销期'
					}, {
						value: 4,
						label: '已结束'
					}, {
						value: 5,
						label: '募资结束'
					},{
						value: 1,
						label: '待定'
				}],
				},{
					title: "行业",
					selectName: "category",
					options: [{
								value: 'All',
								label: '全部行业'
							}, {
								value: 1,
								label: '艺术'
							}, {
								value: 2,
								label: '银行'
							}, 
							{
								value: 4,
								label: '区块链'
						},{
								value: 8,
								label: '电子商务'
							}, {
								value: 16,
								label: '能源'
							},{
								value: 32,
								label: '金融'
							},{
								value: 64,
								label: '博彩'
							},{
								value: 128,
								label: '卫生保健'
							},
							{
								value: 256,
								label: '工业'
							},
							 {
								value: 512,
								label: '基础设施'
							},
							 {
								value: 1024,
								label: '投资'
							},
							 {
								value: 2048,
								label: '媒体'
							},
							 {
								value: 4096,
								label: '房地产'
							},
							 {
								value: 8192,
								label: '服务'
							},
							 {
								value: 16384,
								label: '软件'
							},
							 {
								value: 32768,
								label: '运动'
							},
							 {
								value: 65536,
								label: '科技'
							}]
				},{
					title: "资产类型",
					selectName: "asset_class",
					options: [{
						value: 'All',
						label: '全部资产'
						},{
							value: 6,
							label: '债券'
						}, {
							value: 1,
							label: '产权'
						}, {
							value: 2,
							label: '基金'
						}, {
							value: 3,
							label: '房地产'
						}, {
							value: 4,
							label: '房地产信托'
						},{
							value: 5,
							label: '股票'
					}],
				},{
					title: "代币权益",
					selectName: "token_right",
					options: [{
							value: 'All',
							label: '全部权益'
						}, 
						{
							value: 1,
							label: '股息'
						},{
							value: 2,
							label: '衡平利息'
						}, {
							value: 3,
							label: '股权'
						}, {
							value: 4,
							label: '利润分享权'
						}, {
							value: 5,
							label: '赎回权'
						},{
							value: 6,
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
							value: 'CaymanIslands',
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
					},
					{
							value: 'Germany',
							label: '德国'
					},
					{
							value: 'Gibraltar',
							label: '直布罗陀'
					},
					{
							value: 'Liechtenstein',
							label: '列支敦士登'
					},{
							value: 'Lithuania',
							label: '立陶宛'
					},{
							value: 'Malta',
							label: '马耳他'
					},{
							value: 'Mauritius',
							label: '毛里求斯'
					},{
							value: 'Netherlands',
							label: '荷兰'
					},{
							value: 'Panama',
							label: '巴拿马'
					},{
							value: 'PuertoRico',
							label: '波多黎各'
					},{
							value: 'Singapore',
							label: '新加坡'
					},{
							value: 'Spain',
							label: '西班牙'
					},{
							value: 'Switzerland',
							label: '瑞士'
					},{
							value: 'UnitedKingdom',
							label: '英国'
					},{
						value: 'UnitedStates',
						label: '美国'
					}],
			}],
			profileValue: "All",
			statusZh:{
				2: '即将来临',
				3: '强销期',
				4: '已结束',
				5: '募资结束',
				1: '待定',
			},
			statusEn:{
				2: 'Upcoming',
				3: 'Main sale',
				4: 'Ended',
				5: 'Funded',
				1: 'TBA',
			}
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
			let language = 0;
			if (this.$store.state.locale === 'zh') {
				language = 0;
			} else if (this.$store.state.locale === 'en') {
				language = 1;
			}
			// sort=&status=${this.status}
			let params =`
				status=${this.status}
				&category=${this.category}
				&asset=${this.asset_class}
				&token_right=${this.token_right}
				&country=${this.country}
				&profile=${this.profileValue}
				&language=${language}
				&page=${currentPage}&limit=9`

			// this.$axios.$get(`https://securityin.com/api/stos/get_list?${params}`).then(data=>{
			this.$customeCode.$get(`/api/stoserver/v2/stos/get_list?${params}`).then(data=>{
			// this.$customeCode.$get(`https://securityin.com/api/stoserver/v2/admin/backend/list?page=1&limit=20`).then(data=>{
				this.stoList = data.data
				this.total = data.count;
				this.currentPage = currentPage;
			}).catch((err)=>{
				console.log(err)
			})
		},
		handleStoDetail(item){
			console.log(item)
			if (this.$store.state.locale == "en") {
				this.$router.push({
					path: "/en/stoDetail",
					query:{
						projectName: item["ProjectName"],
						projectID: item["ProjectID"]
					}
				})
			} else {
				this.$router.push({
					path: '/zh/stoDetail',
					query:{
						projectName: item["ProjectName"],
						projectID: item["ProjectID"],
					}
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
		background #F9FBFF
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
										// 这里待定，需要
										font-size 12px
								.p_two
									margin-top 8px
									margin-bottom 10px
									font-size 12px
									color #343744
									overflow hidden
									text-overflow ellipsis
									display -webkit-box
									-webkit-line-clamp 2
									-webkit-box-orient vertical
									height 33px
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