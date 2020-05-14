<template>
	<div class="progress_content">
		<h3 class="history_h3 hoverStyle">Fundraise Status</h3>
		<div class="progress_content_box">
			<div class="progress_content_box_left">
				<div v-for="item in 4" :key="item" :class="item=== 4?'progress_content_box_div last_style':'progress_content_box_div'">
					<p class="progress_content_box_div_p">Number Investors</p>
					<p class="progress_content_box_div_p marginLeft">93</p>
				</div>
			</div>
			<div class="progress_content_box_right">
				<div class="progress_content_box_right_top">
					<p>Raise Progress</p>
					<p>Closed</p>
				</div>
				<el-progress :text-inside="true" :stroke-width="22" :percentage="70"></el-progress>
				<div class="progress_content_box_right_bottom">
					<p class="progress_content_box_right_bottom_left">
							Current Amount Raised
					</p>
					<p class="progress_content_box_right_bottom_right">
						$58,300USD
					</p>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
.progress_content
	width 100%
	.hoverStyle::before, .hoverStyle::after
		margin-bottom 6px
	.progress_content_box
		box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
		border-radius 4px
		width 100%
		display flex
		justify-content space-between
		padding-top 25px
		.progress_content_box_left, .progress_content_box_right
			width 50%
			height 100%
			
		.progress_content_box_left
			border-right 1px solid #EBEEFD
			font-size 14px
			color #2E384D 
			fontMedium()
			padding-left 30px
			padding-right 56px
			
			.marginLeft
				margin-left 80px
			.progress_content_box_div
				display flex
				height 40px
				border-top 1px solid #EBEEFD
				.progress_content_box_div_p
					height 40px
					line-height 40px
					padding-left 10px
			.last_style
				border-bottom 1px solid #EBEEFD
				margin-bottom 40px
		.progress_content_box_right
			margin-left 35px
			padding-right 46px
			color #2E384D
			font-size 14px
			fontMedium()
			.progress_content_box_right_top
				display flex
				margin-bottom 26px
				justify-content space-between
			.progress_content_box_right_bottom
				display flex
				border-top 1px solid #EBEEFD
				border-bottom 1px solid #EBEEFD
				height 40px
				margin-top 10px
				.progress_content_box_right_bottom_left, .progress_content_box_right_bottom_right
					height 100%
					height 40px
					line-height 40px
				.progress_content_box_right_bottom_right
					margin-left 100px


</style>