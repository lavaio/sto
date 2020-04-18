<template>
	<div>
		<div class="poc">
			<div class="head_wrap"></div>
			<p class="poc_head_p">
				Lava is expanding its application 
				in the financial field to truly build the connection 
				between PoC consensus and real-world assets.
			</p>
		</div>
		<div class="poc_content_wrap">
			<div class="poc_content">
				<div class="poc_explain_wrap">
					<div class="poc_explain_wrap_left">
						<h3 class="poc_h3">PoC explained</h3>
						<p class="poc_p marginTop48">
							PoC is short for Proof-of-Capacity. “Capacity” here stands for storage capacity, 
							which is the maximum size of data that storage device can contain.
							PoC is a consensus mechanism where miners compete for block production by providing mathematically 
							verifiable commitments to their storage capacity. Before a miner can join the consensus, 
							special data packages (Plots) should be generated and filled into the storage.
						</p>
					</div>
					<div class="poc_explain_wrap_right">
						<img src="./../../assets/images/poc.png">
					</div>
				</div>
				<div class="poc_consensus_wrap" id="poc">
					<h3 class="poc_h3 marginBottom65">{{$t('poc.poc-title')}}</h3>
					<div class="poc_consensus_content">
						<div class="poc_consensus_wrap_div">
							<div class="poc_consensus_wrap_div_left">
								<img src="./../../assets/images/secure.png"/>
							</div>
							<div class="poc_consensus_wrap_div_right">
								<h6 class="poc_consensus_wrap_h6">
									{{$t('poc.poc-title-one')}}
								</h6>
								<p class="poc_consensus_wrap_p">
									{{$t('poc.poc-title-one-describe')}}
								</p>
							</div>
						</div>

						<div class="poc_consensus_wrap_div">
							<div class="poc_consensus_wrap_div_left">
								<img src="./../../assets/images/clean.png"/>
							</div>
							<div class="poc_consensus_wrap_div_right">
								<h6 class="poc_consensus_wrap_h6">
									{{$t('poc.poc-title-two')}}
								</h6>
								<p class="poc_consensus_wrap_p">
									{{$t('poc.poc-title-two-describe')}}
								</p>
							</div>
						</div>
				
						<div class="poc_consensus_wrap_div">
							<div class="poc_consensus_wrap_div_left">
								<img src="./../../assets/images/open.png"/>
							</div>
							<div class="poc_consensus_wrap_div_right">
								<h6 class="poc_consensus_wrap_h6">
										{{$t('poc.poc-title-three')}}
								</h6>
								<p class="poc_consensus_wrap_p">
									{{$t('poc.poc-title-three-describe')}}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="poc2_plus_wrap" id="hyplotter">
					<h3 class="poc_h3"> PoC 2 Plus (PoC2+) </h3>
					<p class="poc_p marginTop32">
						Lava has proposed and launched a key PoC2+ consensus protocol upgrade. This new plotting standard reshapes the most critical plotting process in PoC, repairs the technical loopholes in the original standard (PoC2), and ensures that PoC consensus can achieve higher security. 
						By mathematically clarifies the ownership of the plot file, the new standard has for the first time achieved a rigid attribution for the PoC capacity power and established foundation in the mechanism level for long term development of the whole PoC ecosystem.
					</p>
				</div>
				<div class="hyper_plotter_wrap">
					<h3 class="poc_h3"> HyperPlotter & PoC2+ Kit </h3>
					<p class="poc_p marginTop32">
						HyperPlotter is a high-performance plotter (plotting software) developed by Lava. HyperPlotter is designed for the new PoC2+ plotting standard, and forward compatible with the old PoC2 format. 
						HyperPlotter takes significant role in the PoC2+ Kit, a complete solution package including plotting format, plotting algorithm, plotter and miner software. PoC2+ Kit will be open and shared to the entire PoC consensus ecosystem, leading the next generation industry standard.
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
<style lang="stylus" scoped>
	@import '~assets/styles/mixins.styl'
	@media screen and (min-width: 420px)
		.poc
			width 100%
			height 400px
			position relative
			background-color #23242c
			display flex
			justify-content center
			align-items center
			z-index 10
			.head_wrap
				background url('../../assets/images/detail_banner.png') no-repeat 
				background-size cover
				background-position center 
				position absolute
				z-index -1
				height 370px
				width 390px
				top 0px
			.poc_head_p
				fontBold()
				width 80%
				color #FFF
				font-size 36px
				margin-bottom 30px
				text-align center
		.poc_content_wrap
			width 100%
			padding 64px 0 98px
			.poc_content
				display flex
				justify-content space-between
				flex-direction column
				center()
				.poc_h3
					color #33415A
					font-size 40px
					fontBold()
				.poc_p
					font-size 18px
					color #6D7B94
				.marginTop48
					margin-top 48px
				.marginTop32
					margin-top 32px
				.marginBottom65
					margin-bottom 65px
				.poc_explain_wrap
					display flex
					justify-content space-between
					.poc_explain_wrap_left
						padding-top 20px
						width 65%
					.poc_explain_wrap_right	
						width 25%
						img
							width 100%
				.poc_consensus_wrap
					margin-top 108px
					.poc_consensus_content
						display flex
						justify-content space-between
						.poc_consensus_wrap_div
							display flex
							justify-content space-between
							height 200px
							width 28%
							.poc_consensus_wrap_div_left
								width 22%
								img 
									width 80%
									// min-width 80%
									// max-width 80%
									// min-height 80%
									// max-height 80%
									object-fit cover
							.poc_consensus_wrap_div_right
								width 75%
								.poc_consensus_wrap_h6
									color #304467
									font-size 18px
									fontBold()
								.poc_consensus_wrap_p
									color #304467
									font-size 14px
									margin-top 20px


						

					

		

			
			.hyper_plotter_wrap
				margin-top 126px

	@media screen and (min-width: 320px) and (max-width: 414px)
		.poc
			width 100%
			height 400px
			position relative
			background-color #23242c
			display flex
			justify-content center
			align-items center
			z-index 10
			.head_wrap
				background url('../../assets/images/detail_banner.png') no-repeat 
				background-size cover
				background-position center 
				position absolute
				z-index -1
				height 220px
				width 230px
				top 115px
			.poc_head_p
				fontBold()
				width 80%
				color #FFF
				font-size 20px
				line-height 30px
				margin-bottom 120px
				text-align center
		.poc_content_wrap
			padding 0px 5% 66px
			.poc_content
				.poc_h3
					color #33415A
					font-size 20px
					margin-bottom 20px
					margin-top 40px
					text-align center
					fontBold()
				.poc_p
					color #6D7B94
					font-size 13px
					text-align center
					fontMedium()
				.poc_explain_wrap
					.poc_explain_wrap_left
						margin-bottom 28px
						text-align center
					.poc_explain_wrap_right
						width 50%
						margin 0 auto
						img
							width 100%
				.poc_consensus_wrap
					margin-bottom 20px
					.poc_consensus_wrap_div
						display flex
						margin-top 20px
						justify-content space-between
						.poc_consensus_wrap_div_left
							width 14%
							img 
								width 100%
						.poc_consensus_wrap_div_right
							margin-left 13px
							width 96%
							.poc_consensus_wrap_h6
								color #32415D
								font-size 15px
								fontBold()
								// margin-top 10px
							.poc_consensus_wrap_p
								font-size 13px
								color #304467
								margin-top 5px
								fontMedium()
</style>