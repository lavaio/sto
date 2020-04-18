<template>
	<div class="news_list">
		<div class="head">
			<div class="head_wrap">
			</div>
			<p class="detail_head_p">{{$t("news.head-title")}} </p>
			<!-- <p class="detail_head_p">Infomation from Lava!</p> -->
		</div>
		<div  class="list_content">
				<el-tabs  v-model="activeName"  @tab-click="handleClick">
					<el-tab-pane :label="$t('news.all')"  name="all">
						<News :type="type"/>
						<!-- <All/> -->
					</el-tab-pane>
					<el-tab-pane  :label="$t('news.news')"  name="news">
						<News :type="type"/>
					</el-tab-pane>
					<el-tab-pane  :label="$t('news.notice')"  name="announcement">
						<News :type="type"/>
						<!-- <Notice /> -->
					</el-tab-pane>
					<el-tab-pane  :label="$t('news.events')"  name="events">
						<div class="events">
							<p> No Data</p>
						</div>
					</el-tab-pane>
				</el-tabs>
		</div>
	</div>
</template>
<script>
	import Notice from './notice'
	import News from './news'
	import All from './all'

  export default {
		components:{
			Notice,
			News,
			All
		},
    data() {
      return {
				activeName: 'all',
				pageSize: 8,
				currentPage: 1,
				total:0,
				type: "ALL",
				dataSource:[
					{
						src: 'news.png',
						title: "Test mining ",
						describe: "描述",
						title_en: "Test mining",
						describe_en:  "Lava will launch to the public test mining on Lava testnet on July 24th. More details will be released on July 23rd, please pay attention to the Announcement Board on the Lava official website and official media platforms.",
						date: "2019-07-20",
						id: "1",
					},
					{
						src: 'news.png',
						title: "Details about the test mining campaign",
						describe: `
							"描述"
						`,
						title_en: "Details about the test mining campaign",
						describe_en: `
							Lava Community：
							Lava will launch it’s test mining on 7-26.
							Basic Principle
							1) The Lava test mining, organized by the Lava Foundation, offers great chance for community members who are interested in Lava to gain further insight into the Lava Consensus and PoC mining process. The whole testing campaign will last about two weeks.
							2) The test mining will be operated on the Lava Testnet, with the whole parameters identical to that of the Lava Mainnet. It is expected that 1% of max supply (approximately 3 million LV coins) will be issued during the test.
							3) The Lava Foundation promises to manually convert the LV coins gained from the Testnet to that from the Mainnet after the Mainnet goes live, with a conversion rate of no less than 10:1.
							4) The LV coins being converted on the Mainnet comes from the coins (3% of the max supply) that the Foundation reserved from the Genesis Block. 
							5）Before the conversion, miners from the Testnet have to keep mining blocks on the Mainnet until they have gained LV coins equal to the coins being-converted in quantity.

						`,
						date: "2019-07-23",
						id: "2",
					},
					{
						src: 'news.png3',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "Lava Testnet Launch",
						describe_en: `
						Lava Community:

						The Lava Testnet, which acts as the very environment of the first round Test Mining Campaign, will officially launch at GMT +0 12:00 July 26th.
						The Full Node Wallet and Lava Miner needed for the Test Mining Campaign will be released before the launch time. Please keep close attention to the official website (Home->Download) to check any latest update.

						`,
						date: "2019-07-26",
						id: "3",
					},{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "New version released for full node wallets",
						describe_en: `
							Lava Community:

							We have released a new version of the existing full node wallets (Linux, Windows, Mac) for the testnet. Several bugs fixed and sync performance largely enchanced from the new version.
							Please go to Lava Official Site (lavatech.org) ->Home ->Download to get the new version and replace the old one.
							We'd like to express our gratitude to all of the community members who participate in the test mining and report issues.

							Lava tech team
							2019-07-31

						`,
						date: "2019-07-31",
						id: "4",
					},{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "Reward Stats for Test Mining I",
						describe_en: `
							Lava Community:

							Reward statistics for Lava Test Mining I are announced as below:
							1) Reward for mining blocks:
							http://lavatech.org/miningBlocks

							2) Reward for holding balance:
							http://lavatech.org/holdingBalance


							If you have any question, please turn to Lava Community or Lava Foundation's assistant for help.
							Thanks!

						`,
						date: "2019-08-14",
						id: "5",
					},
					{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "Reward List for the Lava Testnet 1st & 2nd Round Close Beta Contributors",
						describe_en: `
							Dear Lava Community Members,

							First of all, We would like to thank all community members for your support for Lava's first two rounds of internal testing (close beta)! The following is a list of the technical contributions and community contributions assessed by the Lava core team, and the corresponding amount of rewards, and the reasons for rewards.

							We know that this bare list is far from enough to include the contributions of all community members. Here we would like to represent some typical outstanding contributors, and express our gratitude and respect to all community members who have contributed to the development of the Lava community.

						`,
						date: "2019-08-20",
						id: "6",
					},
					{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en:`
							Lava and InfiChain Technology Reached Strategic Cooperation
						`,
						describe_en: `
							On August 25, Lava officially reached a strategic investment cooperation with mining equipment supplier and integrated mining service provider, InfiChain Technology, and accepted approximately 10 million renminbi investment from the latter.
							 
							InfiChain Technology has a stable cooperative relationship with major mining pools in the industry. It is the only strategic partner of the giant blockchain computing equipment supplier Avalon, and also has established long-term cooperation with energy giants such as State Grid and “the Big Five” power generation groups in China.
							 
							InfiChain Technology said that they are optimistic about the prospect of PoC mining ecology, and will promote their existing business from pure PoW 
						
						`,
						date: "2019-08-26",
						id: "7",
					},
					{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "Lava Mainnet Launch",
						describe_en: `
							Lava Community
 
							Lava has already launched its mainnet at GMT 04:00 AM on August, 28th.
							Please go to Homepage->Download to update Lava Core (Full Node Wallet for Windows/Mac OS/Linux) and SPV Light Wallet (Windows).
							Please go to Homepage->Guide to get official guide for Full Node Wallet, Miner, Plotting, Client, etc.
							Lava Testnet will remain and open for test in the long term.
							Lava Tech Team
							2019-08-28
						`,
						date: "2019-08-28 ",
						id: "9",
					},
					{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "Lava Mainnet SPV Light Wallet (Windows) Release",
						describe_en:  `
							Lava Community:

							A new version (v0.3.1) of the Lava SPV Light Wallet for Windows platform has been released! Please go to Homepage->Download to get the latest version.
							This version:
							·Supports both Legacy address format (start with ‘1’) and Segwit address format (start with ‘bc’).
							·Supports creating new wallets by seeds or by importing private keys.
							·Supports exporting private keys and backup files.
							·Supports creating QR codes for receiving coins.
							·Supports creating individual passphrase.
							Warm Prompt: This version is for Lava Mainnet ONLY! Please do distinguish Lava Mainnet from Lava Testnet as they use different algorithm for private key-address system.

							Lava Tech Team
							2019-09-02

						`,
						date: "2019-09-02",
						id: "10",
					},
					{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "Rewards Claim for Beta Testing",
						describe_en: `
							Dear Community Members,

							Lava Mainnet has been officially launched on August 28, 2019. We invite community contributors and technology contributors who participated in the first and second rounds of beta testing to fill in the following information to claim the relevant rewards. The final statistics of relevant rewards have been published on the official Lava website, which can be viewed at: http://lavatech.org/testnetReward. We will close the reward claim on October 31, 2019 at 20:00.

							The final confirmation is based on the on-chain data from the Lava mainnet. Participants other than community contributors and technology contributors must meet the specific barrier to be consistent with the official final statistical data amount to receive rewards. We will issue rewards within five days after all the users fill in. For any related questions concerning the claim process, please consult the official account or community volunteers.

							Thank you for your support!

							Lava Foundation and Lava Core Team
							2019-09-02
						`,
						date: "2019-09-02",
						id: "11",
					},
					{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "Announcement of Lava Foundation Address",
						describe_en: `
							Dear Lava Community,
							Lava Foundation officially announces its Lava Address as below:
							3BHnqBiq4ge2J4hrmRCBJPJ3MMdBSD5x95
							Lava Foundation encourages an overall supervision and auditing from the whole Community.

							Lava Foundation
							2019-11-01
						`,
						date: "2019-11-01",
						id: "12",
					},
					{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "Notice about PoC2+ Protocol Upgrade",
						describe_en: `
							Lava Community,

							Lava will soon launch "PoC2+" the new protocol upgrade. This upgrade introduces a whole new plotting format (PoC2+) and fixes some important vulnerabilities in previous PoC2 standard. 
							The upgrade will ask for a hard fork which is supposed to trigger at block height 67584.
							The Lava tech team has already released new versions for all of its software including wallets, miners and plotter software. Please download and update your software in time. Notice that old versions do NOT support the new protocol.
							As the new protocol introduces a whole new plotting format, miners are required to re-plot their disks. We highly recommend our high-performance and versatile plotter -- HyperPlotter which supports for both old and new plotting format.
							Two parallel blockchains may be running after the hard fork with miners maintaining both. The Lava tech team will NOT continue developing on the previous protocol or "the old chain".

							Lava tech team
							2019-03-01
						`,
						date: "2020-03-02 18:26:28",
						id: "13",
					}
				]
      };
		},
	
    methods: {
      handleClick(tab, event) {
				let obj = {
						"ALL": "ALL",
						"NEWS": "News",
						"NOTICE": "Announcement",
						"EVENTS": "Events",

				}
				this.type = obj[tab.label]
				console.log(this.type)
			}
		},
  };
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixins.styl'
@media screen and (min-width: 430px)
	.news_list
		.head
			height 400px
			display flex
			background-color #23242c
			align-items center
			flex-direction column
			padding-top 40px
			position relative
			z-index 10
			.detail_head_p
				fontBold()
				width 80%
				font-size 48px
				font-weight bold
				color white
				line-height 60px
				letter-spacing 1px
				text-align center
				margin-bottom 90px
			.head_wrap
				background url('../../assets/images/detail_banner.png') no-repeat 
				background-size cover
				background-position center 
				position absolute
				z-index -1
				height 370px
				width 390px
				top 0px
		.list_content
			width 100%
			min-height calc(100vh - 480px)
			padding-bottom 60px
			.events
				background-size cover
				background-image url('../../assets/images/no-data.png')
				background-repeat no-repeat 
				width 100%
				height 300px
				background-position center
				background-size 300px
				text-align center
				p 
					padding-top 100px
	


@media screen and (min-width: 320px) and (max-width: 425px)
	.news_list
		.head
			height 375px
			display flex
			background-color #23242c
			align-items center
			flex-direction column
			position relative
			z-index 10
			padding-top 60px
			.detail_head_p
				fontBold()
				width 80%
				font-size 20px
				font-weight bold
				color white
				line-height 30px
				letter-spacing 1px
				text-align center
			.head_wrap
				background url('../../assets/images/detail_banner.png') no-repeat 
				background-size cover
				background-position center 
				position absolute
				z-index -1
				height 220px
				width 230px
				top 115px
		.list_content
			padding 14px 4% 66px
		.events
				background-size cover
				background-image url('../../assets/images/no-data.png')
				background-repeat no-repeat 
				width 100%
				height 300px
				background-position center
				background-size 300px
				text-align center
				p 
					padding-top 100px
			



</style>


