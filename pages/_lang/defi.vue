<template>
	<div>
		<div class="de_fi">
			<div class="head_wrap"></div>
			<p class="de_fi_p">
				{{$t("defi.title")}}
			</p>
		</div>
		<div class="de_fi_content_wrap">
			<div class="de_fi_content">
				<div class="de_fi_content_box" v-for="(item,index) in defiData" v-bind:key="index">
					<h3 class="de_fi_content_box_h3">
						{{item.title}}
						<!-- {{ $t('defi.confidential') }} -->
					</h3>
					<p class="de_fi_content_box_describe">
							{{item.describe}}
						<!-- {{ $t('defi.confidential-describe') }} -->
					</p>
				</div>

				<div class="de_fi_content_box">
					<h3 class="de_fi_content_box_h3">
						Confidential Asset scheme for STO
					</h3>
					<p class="de_fi_content_box_describe">
							The Confidential Asset (CA for short) scheme is an extension of the Confidential Transaction scheme, which enables the issuance and transaction of Multi-assets on a single blockchain and perfectly hides asset information and transaction amounts. Bitcoin developer Gregory Maxwell first proposed the Bitcoin-based Confidential Transaction scheme, which makes it possible for UTXO Model to be constructed to hide transaction amounts and asset information without compromising Bitcoin's original security assumptions, traceability and verifiability.
								Adopting the CA scheme, any UTXO-based blockchain is capable to issue, trade and manage multi-assets. Without introducing additional credit parties and cryptographic assumptions, CA’s homomorphic encryption selectively hides asset information and transaction amounts to enhance the privacy and fungibility for multi-assets issued on-chain.
					</p>
					<h4 class="de_fi_small_title marginTop">
						More advantages of combining CA, Multi-assets and STO business on Lava
					</h4>
					<p class="de_fi_content_box_describe marginTop">
							<span class="de_fi_small_title" style="margin-right: 10px">Reliability: </span>
							CA is an on-chain multi-asset issuance and trading scheme based on the UTXO model. Without introducing new cryptographic assumptions, CA does not damage the original cryptographic strength. Lava is based on the Bitcoin Codebase and UTXO model, whose reliability has been fully satisfied by long-term test.
					</p>

					<p class="de_fi_content_box_describe marginTop">
							<span class="de_fi_small_title" style="margin-right: 10px">Privacy: </span>
							CA gives excellent privacy to asset information and transaction amount, and this privacy is completely controllable and traceable. In contrast, Ethereum’s smart contracts shows no privacy, and the ZCash’s zkSNAKRS grants no traceability.
					</p>

					<p class="de_fi_content_box_describe marginTop">
							<span class="de_fi_small_title" style="margin-right: 10px">Fungibility: </span>
							Fungibility makes assets on-chain more liquid, accepted and tradable by all. By comparison, both the "colored coins” and the smart contract scheme destroy the fungibility, one of the most valued features required by an asset-issuing platform.
					</p>

					<p class="de_fi_content_box_describe marginTop">
							<span class="de_fi_small_title" style="margin-right: 10px">Consensus-backed: </span>
							The effectiveness of the CA transaction requires endorsement by the consensus itself (i.e. the hashrate in PoW), making the security of a CA transaction no inferior to a native one. This is the fundamental difference from the ubiquitous “hash it and put onto the blockchain” scheme.
					</p>
					

					<div class="de_fi_content_box">
						<h3 class="de_fi_content_box_h3">
							Why is Lava the best platform for STO business?
						</h3>
						<h4 class="de_fi_small_title marginTop">
							Lava network relies on PoC consensus
						</h4>
						<p class="de_fi_content_box_describe marginTop">
								<span class="de_fi_small_title" style="margin-right: 10px">Reliability: </span>
								Lava relies on PoC consensus to protect network security, which is safe, reliable, and highly decentralized; the operation of PoC consensus depends on a large number of storage devices, providing implicit value endorsement for assets on-chain.
						</p>

						<h4 class="de_fi_small_title marginTop">
							Lava provides a full set of STO infrastructure
						</h4>
						<p class="de_fi_content_box_describe marginTop">
								<span class="de_fi_small_title" style="margin-right: 10px">Reliability: </span>
								Lava has a complete and self-developed product line-up, including cross-platform wallet, PoC2+ plotting format standard, on-chain asset atomic swap, etc., which lowers entry for participants at all steps and reduces dependence on third parties.
						</p>

						<h4 class="de_fi_small_title marginTop">
							Lava establishes multi-faceted STO ecosystem
						</h4>
						<p class="de_fi_content_box_describe marginTop">
								<span class="de_fi_small_title" style="margin-right: 10px">Reliability: </span>
								Lava is building a multi-faceted STO ecosystem, including licensed investment banks, licensed STO token exchanges, stablecoins and legit foundation governance structure, etc., to provide STO solutions that fully meet the regulatory framework.
						</p>

					</div>
				</div>


			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			defiData:[
				{
					title: "Confidential Asset",
					describe: "CA technology brings excellent privacy and fungibility to multi-assets issued and traded on-chain."
				},
				{
					title: "STO",
					describe: `Security Tokens are the next big thing. Millions of Dollars of real-world assets will be migrated to the Lava blockchain.`,
				},
				{
					title: "On-chain ETF",
					describe: `An exchange-traded fund (ETF) is an investment fund traded on stock exchanges, much like stocks. Lava makes it tradable on-chain.`,
				},{
					title: "Decentralized Pool",
					describe: `An unprecedented system where miners join the mining pool and distribute rewards in a 100% decentralize and trustless manner.`,
				},{
					title: "Lava Firestone",
					describe: `Firestones are dynamic credentials created on-chain by staking LV. Firestones stand for economic rights and governance rights.`,
				},{
					title: "Atomic Asset Swap",
					describe: `LV, Stablecoins, STOs and other assets on Lava blockchain can be safely traded without any exchange or intermediary.`,
				},{
					title: "Stablecoin",
					describe: `Stablecoin, STO and Atomic Swap are winning combo. Move your asset smoothly and never worry about liquidity.`,
				},
				// {
				// 	title: "Confidential Asset scheme for STO",
				// 	describe: `The Confidential Asset (CA for short) scheme is an extension of the Confidential Transaction scheme, which enables the issuance and transaction of Multi-assets on a single blockchain and perfectly hides asset information and transaction amounts. Bitcoin developer Gregory Maxwell first proposed the Bitcoin-based Confidential Transaction scheme, which makes it possible for UTXO Model to be constructed to hide transaction amounts and asset information without compromising Bitcoin's original security assumptions, traceability and verifiability.
				// 						Adopting the CA scheme, any UTXO-based blockchain is capable to issue, trade and manage multi-assets. Without introducing additional credit parties and cryptographic assumptions, CA’s homomorphic encryption selectively hides asset information and transaction amounts to enhance the privacy and fungibility for multi-assets issued on-chain.
				// 					`,
				// }
			]
		}
	}
}
</script>
<style lang="stylus" scoped>
	@import '~assets/styles/mixins.styl'
	.de_fi
		width 100%
		height 400px
		position relative
		background-color #23242c
		display flex
		justify-content center
		align-items center
		z-index 10
		.de_fi_p
			fontBold()
		
			color #FFF
			margin-bottom 30px
			text-align center
		.head_wrap
			background url('../../assets/images/detail_banner.png') no-repeat 
			background-size cover
			background-position center 
			position absolute
			z-index -1
			top 0px
	.de_fi_content_wrap
		.de_fi_content
			display flex
			justify-content space-between
			flex-direction column
			.de_fi_content_box
				display flex
				justify-content space-between
				flex-direction column
				.de_fi_content_box_h3,.de_fi_small_title
					color #33415A
					fontMedium()
				.de_fi_content_box_describe
					color #6D7B94
	@media screen and (min-width: 420px)
		.de_fi
			.de_fi_p
				width 80%
				font-size 36px
			.head_wrap
				height 370px
				width 390px
		.de_fi_content_wrap
			center()
			padding 53px 0 365px
			.de_fi_content
				width 100%
				.de_fi_content_box
					margin-top 65px
					.de_fi_content_box_h3
						font-size 40px
						margin-bottom 20px
					.de_fi_small_title
						font-size 18px
					.marginTop
						margin-top 20px
					.de_fi_content_box_describe
						font-size 18px
	@media screen and (min-width: 320px) and (max-width: 414px)
		.de_fi
			.de_fi_p
				padding 0 5%
				font-size 20px
				margin-bottom 140px
			.head_wrap
				height 220px
				width 230px
				margin-top 150px
		.de_fi_content_wrap
			// center()
			padding 0 5% 66px
			.de_fi_content
				width 100%
				.de_fi_content_box
					// height 90px
					margin-top 44px
					.de_fi_content_box_h3
						font-size 20px
						margin-bottom 20px
					.de_fi_small_title
						font-size 13px
					.marginTop
						margin-top 10px
					.de_fi_content_box_describe
						font-size 13px
						fontMedium()
</style>