<template>
	<div class="banner_content">
		<div class="banner_div_top">
			<div class="banner_div_top_left">
				<p class="banner_right_title">Mini Investment</p>
				<p class="banner_right_num">$10,000,000</p>
			</div>
			<div class="banner_div_top_right">
				<p class="banner_right_title">Mini Investment</p>
				<p class="banner_right_num">$10</p>
			</div>
		</div>
		<div class="banner_div_top">
			<div class="banner_div_top_left">
				<p class="banner_right_title">Mini Investment</p>
				<p class="banner_right_num">$10,000,000</p>
			</div>
			<div class="banner_div_top_right">
				<p class="banner_right_title">Mini Investment</p>
				<p class="banner_right_num">$10</p>
			</div>
		</div>
		<div class="banner_div_bottom">
			<p>
				<i class="iconfont icon-exchange"/> 
				<a href=""> https://www.minedblock.io/</a>
			</p>
			<p class="banner_div_bottom_pargaph">
				Real estate backed digital securities offering of three unique portfolios of 
				trophy properties (US$10M/$20M/$45M) under long-term commercial leases. 
				Passive income monthly yields 8-12% with immigration and tax benefits.
			</p>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
.banner_content
	width 100%
	height 330px
	padding-top 20px
	.banner_div_top
		background #FBFBFE
		height 83px
		width 100%
		padding-left 30px
		display flex
		justify-content space-around
		border-top 1px solid #DFE5F9
		border-bottom 1px solid #DFE5F9
		.banner_right_title
			color #42434B
			font-size 18px
			margin-top 8px
			fontMedium()
		.banner_right_num
			color #27ACE0
			font-size 24px
			margin-top 10px
			fontBold()
			text-align center
		// .banner_div_top_right
		// 	margin-left 90px

		


	.banner_div_bottom
		font-size 16px
		margin-top 10px
		fontMedium()
		a
			color #343744 
			text-decoration underline
		.banner_div_bottom_pargaph
			padding-left 30px
			line-height 19px
			margin-top 10px
</style>