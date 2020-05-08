<template>
	<div class="visit">
		<h3 class="history_h3 hoverStyle">Visit List</h3>
		<div v-for="item in 5" :key=item :class="item==5 ?'visit_div' : 'marginBottom visit_div'">
			<div class="visit_div_left">
				<img src="https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10sGVMy2d64Om7MKW5kDAs6ehwtSNA2n263heeh46HMrjXuvsQ6u.png" />
			</div>
			<div class="visit_div_right">
				<p class="visit_div_right_p">
					SPiCE VC Launches Liquid VC Fund With Tradable Token-Based Digital Securities
				</p>
				<div class="visit_div_right_button_div"><span class="visit_div_right_button">visit</span></div>
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
.visit
	width 100%
	.hoverStyle::before, .hoverStyle::after
		margin-bottom 4px
	.marginBottom
		margin-bottom 30px
	.visit_div
		display flex
		box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
		border-radius 4px
		height 240px
	.visit_div_left
		width 20%
		height 100%
		display flex
		justify-content center
		align-items center
		img 
			max-width 60%
			min-width 60%
			min-height 60%
			max-height 60%
			object-fit cover

	.visit_div_right
		width 80%
		height 100%
		box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
		border-radius 4px
		padding 32px 48px 50px 30px
		display flex
		justify-content space-between
		flex-direction column
		.visit_div_right_p
			color #343744
			font-size 16px
			fontMedium()
		.visit_div_right_button_div
			text-align right
			.visit_div_right_button
				padding 10px 15px
				color #ffffff
				font-size 16px
				background #3794FC
				padding 15px 30px
				border-radius 30px
				fontMedium()
				box-shadow 0px 12px 20px 0px rgba(27,107,222,0.37)
</style>