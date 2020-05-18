<template>
	<div>
		<div class="detail_banner">
			<div class="detail_banner_wrap">
				<h3 class="detail_banner_h3">LAEST</h3>
				<h3 class="detail_banner_h4">La Estancia Holdings, Ltd</h3>
				<div class="detail_baner_title_box"> 
					<div>
						<div class="detail_title_name">Price</div>
						<div class="detail_title_data">$64.99 <span class="detail_title_span">USD (0.15%)</span></div>
					</div>

					<div>
						<div class="detail_title_name">24h Volume</div>
						<div class="detail_title_data">0</div>
					</div>

					<div>
						<div class="detail_title_name">Market Cap</div>
						<div class="detail_title_data">$64.99</div>
					</div>

					<div>
						<div class="detail_title_name">Last Trade</div>
						<div class="detail_title_data">April 26, 2020</div>
					</div>

				</div>
				<div class="detail_baner_image_box">
					<div class="detail_banner_image_box_left">
						<img src="https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10sGVMy2d64Om7MKW5kDAs6ehwtSNA2n263heeh46HMrjXuvsQ6u.png" />
					</div>
					<div class="detail_banner_image_box_right">
						<bannerContent />
						<!-- <echartLine /> -->
					</div>

				</div>
				<p class="detail_banner_button_p">
					<span class="detail_banner_button blue_button">Real Estate</span>
					<span class="detail_banner_button blue_button">Live</span>
					<span class="detail_banner_button blue_button">Lp Fund Interest</span>
					<span class="detail_banner_button blue_button">US Accredited</span>
					<span class="detail_banner_button yellow_button">Featured</span>
				</p>
			</div>
		</div>
		
		<!-- @tab-click="handleClick" -->
		<div class="detail_tab_box" ref="detail_tab">
			<div class="detail_tab">
				<div @click="cur=0" class="detail_tab_item" :class="{active_tab:cur==0}" >overview</div>
				<div @click="cur=1" class="detail_tab_item" :class="{active_tab:cur==1}" >analysis</div>
				<div @click="cur=2" class="detail_tab_item" :class="{active_tab:cur==2}" >discussion</div>
				<div @click="cur=3" class="detail_tab_item" :class="{active_tab:cur==3}" >webinar</div>
			</div>
			<div class="icon_box">
				<a href="#"><i class="iconfont icon-zhuanfa"  style="color:#27ACE0;font-size: 35px;"></i></a>
				<a href="#"><i class="iconfont icon-shoucang" style="color:#27ACE0;font-size: 35px;"></i></a>
			</div>
		</div>
		<div class="detail_tab_content" v-show="cur==0">
			<overView />
		</div>
		<div v-show="cur==1">analysis</div>
		<div v-show="cur==2">discussion</div>
		<div v-show="cur==3">webinar</div>

				<!-- <el-tabs  v-model="activeName" >
					<el-tab-pane label="Overview"  name="overview">
						
					</el-tab-pane>
					<el-tab-pane  Analysis="Analysis"  name="analysis">
						klklkl
					</el-tab-pane>
					<el-tab-pane  label="Discussion"  name="discussion">
						klklkl
					</el-tab-pane>
					<el-tab-pane  label="Webinar"  name="webinar">
						<p> No Data</p>
					</el-tab-pane>
				</el-tabs> -->
		
	</div>
</template>
<script>
import echartLine from "./../echartLine"
import echartPie from "./../echartPie"
import bannerContent from "./../bannerContent"
import progressContent from "./../progressContent"
import visitList from "./../visitList.vue"
import overView from './../overView.vue'

export default {
	components:{
		echartLine,
		echartPie,
		bannerContent,
		progressContent,
		visitList,
		overView
	},
	data(){
		return{
			activeName: 'overview',
			cur: 0
		}
	},
	created(){
		
	},
	mounted(){
		window.addEventListener('scroll',()=>{
			let scrollHeight= document.documentElement.scrollTop || document.body.scrollTop;
			let detail_tab = this.$refs.detail_tab;
			console.log(this.$refs.mao)
			if (scrollHeight > detail_tab.offsetTop -300) {
				detail_tab.setAttribute("class", "detail_tab_active detail_tab_box");
			} 
			if(scrollHeight < 900) {
				detail_tab.setAttribute("class", "detail_tab_box");
			}
		})
	},
	methods: {
		
	}
}
</script>
<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
	.detail_banner
		width 100%
		background #FBFBFE
		.detail_banner_wrap
			center()
			padding 60px 0
			.detail_banner_h3
				text-align center
				color #343744
				font-size 48px
				fontBold()
			.detail_banner_h3::before, .detail_banner_h3::after
				content "" 
				background #27ACE0 
				display inline-block
				width 36px
				height 4px
				margin-bottom 14px
			.detail_banner_h3::before
				margin-right 12px
			.detail_banner_h3::after
				margin-left 12px
			.detail_banner_h4
				text-align center
				color #343744
				font-size 24px
				fontMedium()
				margin-top 10px
				margin-bottom 20px
			.detail_baner_title_box
				display flex
				justify-content space-between
				font-size 24px
				margin-top 10px
				.detail_title_name
					color #42434B
					text-align center
					fontMedium()
					font-size 18px
				.detail_title_data
					color #27ACE0
					text-align center
					fontBold()
					margin-top 10px
					.detail_title_span
						fontLight()
			.detail_baner_image_box
				display flex
				justify-content space-between
				height 400px
				width 100%
				margin-top 55px
				.detail_banner_image_box_left
					width 45%
					height 100%
					display flex
					justify-content center
					align-items center
					background #fff
					img
						object-fit cover
						min-height 80%
						max-height 80%
						min-width 80%
						max-width 80%
				.detail_banner_image_box_right
					width 55%
					height 100%
					padding 0px 20px 0px
					background #fff
					box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
				
					
			.detail_banner_button_p
				text-align center
				margin-top 50px
				.detail_banner_button
					display inline-block
					padding 10px 20px
					color #ffffff
					fontMedium()
					font-size 8px
					border-radius 80px
				.blue_button
					background #27ACE0
				.yellow_button
					background #FDAD00
					cursor pointer
	
		

	
	.detail_tab_box
		padding-left 100px
		padding-right 100px
		width 100%
		background #ffffff
		display flex
		justify-content space-between
		box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
		//box-shadow 0 -20px 0 rgba(24,98,204,0.09)
		height 70px
		line-height 70px
		
		.detail_tab
			display flex
			.active_tab
				border-bottom 2px solid #27ACE0
			.detail_tab_item
				margin-right 20px
				fontBold()
				font-size 14px
				color #343744
			.icon_box
				absoluteRight()
				top 20px
				z-index 10
				a
					display inline-block
	.detail_tab_active	
		position fixed
		top 0
		z-index 1000
			
</style>
