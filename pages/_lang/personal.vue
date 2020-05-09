<template>
	<div class="personal">
		<div class="personal_wrap">
		<h3 class="personal_h3">Personal center</h3>
		<div class="personal_box">
				<div class="left">
					<el-row style="height: 100%">
						<el-col :span="24">
								<el-menu
									default-active="2"
									class="el-menu-vertical-demo"
									background-color="#FFFFFF"
									text-color="#343744"
									active-text-color="#3794FC">
									<el-menu-item index="2" @click="handleMenuClick('/personal/basicinfo')">
										<i class="el-icon-menu"></i>
											Basic Information
									</el-menu-item>
									<el-menu-item index="3"  @click="handleMenuClick('/personal/zkp')">
										<i class="el-icon-document"></i>
											Manage Stocks
									</el-menu-item>
									<el-menu-item index="4" @click="handleMenuClick('')">
										<i class="el-icon-setting"></i>
										<span slot="title">Manage Stocks</span>
									</el-menu-item>
								</el-menu>
							</el-col>
					</el-row>
				</div>
				<div class="right">
					<nuxt-child/> 
				</div>
		</div>
		</div>
	</div>
</template>
<script>
export default {
	methods:{
		handleMenuClick(path){
			console.log("/")
			if (this.$store.state.locale === 'en') {
				this.$router.push(path)
			} else {
				this.$router.push(`/zh/`+path)
			}
		}
	}
}
</script>
<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
.personal
	background #FBFBFE
	.personal_wrap
		center()
		padding 80px 0 143px
		.personal_h3
			color #343744
			font-size 24px
			margin-bottom 54px
			text-align center
			fontBold()
		.personal_h3::before,.personal_h3::after
			content "" 
			background #27ACE0 
			display inline-block
			width 36px
			height 4px
			margin-bottom 6px
		.personal_h3::before
			margin-right 12px
		.personal_h3::after
			margin-left 12px
		.personal_box
			display flex
			width 100%
			height 100%
			justify-content space-between
			.left
				width 24%
				height 560px
				/deep/.el-menu
					height 100%
					fontMedium()
					border-right none
				/deep/.el-col-24
					height 100%
				/deep/.el-menu-item
					border-bottom 2px solid #EBEEFD
					padding-left 16px!important

			.right
				width 74%
				background #fff
				height 530px
</style>
