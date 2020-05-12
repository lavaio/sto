<template>
		<div class="footer" ref="footer_div">
			<div class="footer_wrap">
				<div class="footer_wrap_box">
					<div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_title">
							<a href="">{{ $t('footer.resources') }}</a>
						</p>
						<p class="footer_wrap_box_flex_title">
							<a href="">{{ $t('footer.developers') }}</a>
						</p>
						<p class="footer_wrap_box_flex_title"><a href="">{{ $t('footer.about') }}</a></p>
					</div>
					<div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_content">
							<a href="">{{ $t('footer.whitpaper') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="https://github.com/lavaio/lava">{{ $t('footer.github') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="">{{ $t('footer.joinUs') }}</a>
						</p>
					</div>

						<div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_content">
							<a href="http://explorer.lavatech.org/" target="_blank">{{ $t('footer.explorerMainnet') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="http://explorer.lavatech.org/rpc-terminal">{{ $t('footer.rpc') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="">{{ $t('footer.businessContact') }}</a>
						</p>
					</div>

					<div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_content">
							<a href="http://testnet-explorer.lavatech.org/" target="_blank">{{ $t('footer.explorerTestnet') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="https://github.com/lavaio/lvips" target="_blank">{{ $t('footer.lvipSystem') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="">{{ $t('footer.termsAndConditions') }}</a>
						</p>

					</div>
				</div>
			</div>
		</div>
</template>
<script>
export default {
	mounted(){
	}
}
</script>
<style lang="stylus" scoped>
@import '~assets/styles/mixins.styl'
	.footer
		width 100%
		background #2f3f56 
		fontMedium()
		.footer_wrap
			.footer_wrap_box
				height 100%
				.footer_wrap_box_flex
					display flex
					justify-content space-between
					width 100%
					a
						text-decoration none
					a:hover
						cursor pointer
						color #FF7D00
					.footer_wrap_box_flex_title
						margin-bottom 10px
						width 22%
						a
							fontBold()
							font-weight 500
							color white
					.footer_wrap_box_flex_content
						width 22%
						a
							color rgba(255,255,255,0.72)
					.footer_wrap_box_flex_content:hover
						cursor pointer
						color #FF7D00
@media screen and (min-width: 420px)
	.footer_wrap
		center()
		padding-top 32px
		padding-bottom 50px
		height 100%
		.footer_wrap_box_flex
			margin-bottom 15px
			.footer_wrap_box_flex_title
					font-size 18px
			.footer_wrap_box_flex_content
				a
					font-size 15px
			
@media screen and (min-width: 320px) and (max-width: 414px)
	.footer_wrap
		padding 44px 5% 66px
		height 100%
		.footer_wrap_box_flex
			margin-bottom 15px
			.footer_wrap_box_flex_title
					font-size 16px
			.footer_wrap_box_flex_content
				a
					font-size 13px


</style>