<template>
		<div class="footer" ref="footer_div">
			<div class="footer_wrap">
					<div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_title">
							<a href="javascript:;">{{ $t('footer.securityIn') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="javascript:;">{{ $t('footer.about') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="market">{{ $t('footer.faq') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="market">{{ $t('footer.terms') }}</a>
						</p>
					</div>

					<div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_title">
							<a href="javascript:;">{{ $t('footer.sto') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="javascript:;">{{ $t('footer.stoList') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="market">{{ $t('footer.rank') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
								<a href="javascript:;">
								{{ $t('footer.service') }}
							</a>
						</p>
					</div>

					<div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_title">
							<a href="javascript:;">{{ $t('footer.contact') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="javascript:;">{{ $t('footer.contactUs') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="market">{{ $t('footer.joinUs') }}</a>
						</p>
					</div>

					<div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_content">
							<a href="/">
								<img src="./../assets/images/footer_logo.png" />
							</a>
						</p>
						<p class="footer_wrap_box_flex_content"></p>
						<p class="footer_wrap_box_flex_content"></p>
						<div class="footer_wrap_box_flex_content">
							<a href="https://twitter.com/SecurityIN2020" target="_blank">
								<i class="iconfont icon-twitter margin-right"/>
							</a>
							<a href="https://t.me/stonews2020" target="_blank">
								<i class="iconfont icon-telegram margin-right"/>
							</a>
							<a>
								<el-popover
									placement="top-start"
									width="155"
									trigger="hover"
									enterable="true"
								>
									<div class="code_box" style="width: 150px; height: 150px; margin-left: -10px;margin-top: -10px;">
										<img src="./../assets/images/wetchat.jpg" style="width: 100%"/>
									</div>
									<i class="iconfont icon-weixin" slot="reference" />
								</el-popover>
							</a>
						</div>
					</div>

					<!-- <div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_title">
							<a href="javascript:;">{{ $t('footer.securityIn') }}</a>
						</p>
						<p class="footer_wrap_box_flex_title">
							<a href="javascript:;">{{ $t('footer.sto') }}</a>
						</p>
						<p class="footer_wrap_box_flex_title">
							<a href="market">{{ $t('footer.contact') }}</a>
						</p>
						<p class="footer_wrap_box_flex_title">
							<a href="/">
								<img src="./../assets/images/footer_logo.png" />
							</a>
						</p>
					</div> -->



					<!-- <div>
						<p class="footer_wrap_box_flex_title">
							<a href="javascript:;">{{ $t('footer.securityIn') }}</a>
						</p>
						<p class="footer_wrap_box_flex_title">
							<a href="javascript:;">{{ $t('footer.sto') }}</a>
						</p>
						<p class="footer_wrap_box_flex_title">
							<a href="market">{{ $t('footer.contact') }}</a>
						</p>
						<p class="footer_wrap_box_flex_title">
							<a href="/">
								<img src="./../assets/images/footer_logo.png" />
							</a>
						</p>
					</div> -->


					<!-- <div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_content">
							<a href="javascript:;">{{ $t('footer.about') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="stList">{{ $t('footer.stoList') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="market#contact">{{ $t('footer.contactUs') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content"></p>
					</div> -->


					<!-- <div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_content">
							<a href="javascript:;" >{{ $t('footer.faq') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="marketPage">{{ $t('footer.rank') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="market">{{ $t('footer.joinUs') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content"></p>
					</div> -->



					<!-- <div class="footer_wrap_box_flex">
						<p class="footer_wrap_box_flex_content">
							<a href="javascript:;" >{{ $t('footer.terms') }}</a>
						</p>
						<p class="footer_wrap_box_flex_content">
							<a href="javascript:;">
							{{ $t('footer.service') }}
							</a>
						</p>
						<p class="footer_wrap_box_flex_content"></p>
						<div class="footer_wrap_box_flex_content">
							<a href="https://twitter.com/SecurityIN2020" target="_blank">
								<i class="iconfont icon-twitter margin-right"/>
							</a>
							<a href="https://t.me/stonews2020" target="_blank">
								<i class="iconfont icon-telegram margin-right"/>
							</a>
							<a>
								<el-popover
									placement="top-start"
									width="155"
									trigger="hover"
									enterable="true"
								>
									<div class="code_box" style="width: 150px; height: 150px; margin-left: -10px;margin-top: -10px;">
										<img src="./../assets/images/wetchat.jpg" style="width: 100%"/>
									</div>
									<i class="iconfont icon-weixin" slot="reference" />
								</el-popover>
							</a>
						</div>
					</div> -->




				
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
		background #001629 
		padding-bottom 70px
		padding-top 40px
		fontMedium()
		.footer_wrap
			display flex
			justify-content space-between
			.footer_wrap_box_flex
				a
					text-decoration none
				a:hover
					cursor pointer
					color #FF7D00
				.footer_wrap_box_flex_title
					height 70px
					a
						fontBold()
						font-weight 500
						color white
				.footer_wrap_box_flex_content
					height 40px
					min-width 80px
					a
						color rgba(255,255,255,0.72)
						.margin-right
							margin-right 10px
						i 
							font-size 33px
				.footer_wrap_box_flex_content:hover
					cursor pointer
					color #FF7D00
@media screen and (min-width: 420px)
	.footer_wrap
		center()
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