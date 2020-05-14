<template>
	<div class="sto_list">
		<div class="sto_list_wrap">
			<div class="sto_list_content">
				<div class="sto_list_content_left">
					<h3 class="sto_list_content_left_h3">STO List</h3>
					<el-select v-model="value" placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<div v-for="(item,index) in selectTitle" :key="index">
						<h4 class="sto_list_content_left_h4">{{item.title}}</h4>
						<el-select v-model="value" placeholder="请选择">
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
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
						<div class="sto_list_content_right_div" v-for="item in 8" :key="item" @click="handleStoDetail()">
							<div class="sto_list_content_right_div_top"></div>
							<div class="sto_list_content_right_div_bottom">
								<p class="p_one">
									<!-- <i class="iconfont icon-exchange"/> -->
									<img src="https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y101xwFBMsM6z2AKUhdqdHSlOyuK2bl3QdxEboDRduiHY8Yy3uticS.png" />
									<span class="p_one_span">VMC</span>
								</p>
								<p class="p_two">
									connecting the dots of urban mobility
								</p>
								<div class="p_three">
									<p class="p_three_p">
										<i class="iconfont icon-danxuankuang"/>
										<span> Main sale</span>
									</p>
									<p class="p_three_p button_left">
										<i class="iconfont icon-time"/>
										<span>70 days left</span>
									</p>
								</div>
								<div class="bottom_bottom_div">
									<div class="bottom_bottom_div_one" >
										PROFILE
										<span class="bottom_bottom_div_one_span">
											77%
										</span>
									</div>
									<div class="bottom_bottom_div_one">INFRASTRUCTURE</div>
									<div class="bottom_bottom_div_one">SERVICES</div>

								</div>
							</div>
						</div>
					</div>
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
			checkedCities: ['上海', '北京'],
			cities: ['上海', '北京', '广州', '深圳'],
			options: [{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],
			value: '选项1',
			
			selectTitle:[{
					title: "Status"
			},{
					title: "Industry"
			},{
					title: "sset class"
			},{
					title: "Token rights"
			},{
					title: "Country of incorporation"
			},],
			value3: 36,
 
		}
	},
	methods:{
		handleStoDetail(){
			if (this.$store.state.locale == "en") {
				this.$router.push({
					path: "/stoDetail",
					// query:{id: index}
				})
			} else {
				this.$router.push({
					path: '/zh/stoDetail',
					// query:{id: index}
				})
			}
		},
		pageChange(page) {
			this.currentPage = page;
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
					.sto_list_content_right_div_box
						display flex
						flex-wrap wrap
						justify-content space-between
						.sto_list_content_right_div
							width 224px
							cursor pointer
							margin-bottom 20px
							background rgba(255,255,255,1)
							border-radius 4px
							box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
							.sto_list_content_right_div_top
								width 100%
								height 96px
								background #8A8E9E 
								border-radius 4px 4px 0 0 
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
										border-radius 50%
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
										text-transform uppercas
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