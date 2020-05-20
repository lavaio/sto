<template>
	<div>
		<div class="news_detail">
			<div class="news_detail_content" v-for="newItem in newsData"  v-bind:key="newItem.id">
				<h3 v-if="$store.state.locale =='zh'" class="news_detail_content_h3">
					{{newItem.title}}
				</h3>
				<h3 v-else class="news_detail_content_h3">
					{{newItem.title_en}}
				</h3>
				<p  v-if="$store.state.locale == 'zh'" class="news_detail_date">
					{{newItem.date }}
				</p>
				<p  v-else class="news_detail_date">
					{{newItem.date }}
				</p>
				<div class="new_detail_img">
					<img src="../../assets/images/news.png" />
				</div>
				<!-- <h3 class="news_detail_title">Could you introduce Smartpress for us </h3> -->
				<!-- <div class="news_detail_content_p" v-if="$store.state.locale =='zh'" v-html="newItem.describe">
					{{newItem.describe}}
				</div>
				<div class="news_detail_content_p"  v-else v-html="newItem.describe_en">
					{{newItem.describe_en}}
				</div> -->


				<div class="news_detail_content_p"  v-html="newItem.content">
					{{newItem.content}}
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted(){
		this.getNewList()
	},
	methods: {
		getNewList() {
			let params = "Securityin";
			this.$axios.$get(`http://47.244.223.4:8083/api/content?type=${params}&id=${this.$route.query.id}`).then(data=>{
				let arr = [];
				data.data.map((item,index) =>{
					item.src = this.$route.query.src
					arr.push(item);
				})
				return arr
			}).then(dataSource=>{
				if (dataSource[0].identity) {
					let identity = dataSource[0].identity;
					let languange = "en";
					if (this.$store.state.locale == "zh") {
						languange = "ch"
					} else {
						languange = "en"
					}
					this.$axios.$get(`http://47.244.223.4:8083/api/search?type=${params}&q=%2Boption:${languange} %2Bidentity:"${identity}"`).then(data=>{
						this.newsData = data.data;
					})
				} else {
						this.newsData = dataSource;
				}
			})
		},
	},
	data(){
		return {
			newsData:[],
			news: {},
			dataSource:[
					{
						src: 'news.png',
						title: "Test mining ",
						describe: "描述",
						title_en: "Test mining",
						describe_en:  `
							<p>Lava will launch to the public test mining on Lava testnet on July 24th. More details 
							will be released on July 23rd, please pay attention to the Announcement Board on the Lava official website and 
							official media platforms.</p>
						`,
						date: "2019-07-20",
						id: "1",
					},
					{
						src: 'news.png',
						title: "Details about the test mining campaign",
						describe: `
						Lava Community：
						`,
						title_en: "Details about the test mining campaign",
						describe_en: `
										<p>Lava Community：</p>
 
	<p>Lava will launch it’s test mining on 7-26.</p>
 
	<p> Basic Principle</p>
	<p> 1) The Lava test mining, organized by the Lava Foundation, offers great chance for community members who are interested in Lava to gain further insight into the Lava Consensus and PoC mining process. The whole testing campaign will last about two weeks.</p>
	<p> 2) The test mining will be operated on the Lava Testnet, with the whole parameters identical to that of the Lava Mainnet. It is expected that 1% of max supply (approximately 3 million LV coins) will be issued during the test.</p>
	<p> 3) The Lava Foundation promises to manually convert the LV coins gained from the Testnet to that from the Mainnet after the Mainnet goes live, with a conversion rate of no less than 10:1.</p>
	<p> 4) The LV coins being converted on the Mainnet comes from the coins (3% of the max supply) that the Foundation reserved from the Genesis Block. </p>
	<p> 5）Before the conversion, miners from the Testnet have to keep mining blocks on the Mainnet until they have gained LV coins equal to the coins being-converted in quantity.</p>
 
<p> Guides</p>
<p> 1) Full node wallet for Linux and Windows are provided; Please refer to Home->Download->Full Node Wallet.</p>
<p> 2) Miner software for Windows is provided; Please refer to Home->Download->Miner.</p>
<p> 3) Guides for plotting files are provided in related documents of the Miner software.</p>
<p> 4) Please consult assistants or volunteers of the Lava Foundation in any official community platform and finish registration process before test mining.</p>
<p> 5) If you want to report an issue or offer technical assistance to the project, please consult assistants or volunteers of the Lava Foundation in any official community platform.</p>
<p> 6) You can check the links of official community platforms in the Homepage.</p>
<p> &nbsp;</p>
<p>We sincerely invite you to this test mining campaign and share the harvests of Lava ecology development. </p>
<p>The Lava Foundation & Lava Core Team</p>
	<p> &nbsp;	</p>
<span>2019-07-23</span>

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
						<p> Lava Community:</p>
						<p> The Lava Testnet, which acts as the very environment of the first round Test Mining Campaign, will officially launch at GMT +0 12:00 July 26th.</p>
						<p> The Full Node Wallet and Lava Miner needed for the Test Mining Campaign will be released before the launch time. Please keep close attention to the official website (Home->Download) to check any latest update.</p> 
						<p> The Lava Foundation</p>
							<p> &nbsp;	</p>
						<p> 2019-07-26</p>
						`,
						date: "2019-07-26",
						id: "3",
					},{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "New version released for full node wallets",
						describe_en: `
						<p> Lava Community:</p>

						<p> We have released a new version of the existing full node wallets (Linux, Windows, Mac) for the testnet. Several bugs fixed and sync performance largely enchanced from the new version.</p>
						<p> Please go to Lava Official Site (lavatech.org) ->Home ->Download to get the new version and replace the old one.</p>
						<p> We'd like to express our gratitude to all of the community members who participate in the test mining and report issues.</p>
 
						<p> Lava tech team</p>
							<p> &nbsp;	</p>
						<span> 2019-07-31</span>
						`,
						date: "2019-07-31",
						id: "4",
					},{
						src: 'news.png',
						title: "lava 社区 ",
						describe: "描述",
						title_en: "Reward Stats for Test Mining I",
						describe_en: `
							<p> Lava Community:<?p>
							<p> Reward statistics for Lava Test Mining I are announced as below:<?p>
							<p> 1) Reward for mining blocks:<?p>
							<p> http://lavatech.org/miningBlocks<?p>
							<p> 2) Reward for holding balance:<?p>
							<p> http://lavatech.org/holdingBalance<?p>
							<p> If you have any question, please turn to Lava Community or Lava Foundation's assistant for help.<?p>
							<p> Thanks!</p>
							<p> The Lava Foundation</p>
							<p> &nbsp;	</p>
							<span> 2019-08-14</span>
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
							<p>Dear Lava Community Members,</p>
							<p> First of all, We would like to thank all community members for your support for Lava's first two rounds of internal testing (close beta)! The following is a list of the technical contributions and community contributions assessed by the Lava core team, and the corresponding amount of rewards, and the reasons for rewards.</p>
							<p> We know that this bare list is far from enough to include the contributions of all community members. Here we would like to represent some typical outstanding contributors, and express our gratitude and respect to all community members who have contributed to the development of the Lava community.</p>
							<p> do***86, 2000LV, for your contribution for organizing OTC trading and volunteering in community affairs, as well as reporting a technical issue regarding full node sync.</p>
							<p> de***di, 1000LV, for your contribution for offering suggestions that miner should support AVX and AVX2 format. </p>
							<p> Michael(Mi***ke), 2000LV, for your contribution of offering a great many helpful suggestions to users during the beta test. </p>
							<p> lgx***88, 2000LV, for your contribution of reporting technical issues in software testing and helping community members with technical issues.</p>
							<p> pangwa(p***a), 2000LV, for your contribution of volunteering in editing tutorial for mining process and relating software.</p>
							<p> DKCS(hey***777), 2000LV, for your contribution of warm-heartedly participating in all kinds of testing activeties and reporting issues of Lava light wallet, full node and miner software, which greatly helps the Lava core team address these issues. </p>
							<p> wa***60, 1000LV, for your contribution of reporting issue of full node sync.</p>
							<p> Eason(zha***901), 1000LV, for your contribution of participating in all kinds of testing for a very long period of time.</p>
							<p> yb***50238, 1000LV, for your contribution of reporting issue of full node sync.</p>
							<p> wan***an87, 1000LV, for your contribution of reporting issue of full node sync.</p>
							<p> z56***81, 1000LV, for your contribution of reporting issue of full node sync.</p>
							<p> xian***ihe20, 1000LV, for your contribution of warm-heartedly assisting all kinds of activities during the testing period.</p>
							<p> aj***12_, 1000LV, for your contribution of reporting issue of full node sync.</p>
							<p> zzj***an, 1000LV, for your contribution of reporting issues of printing wrong logs from the full node.</p>
							<p> Lava Core Team<p>
							<p> &nbsp;	</p>
							<span> 2019-08-20 </span>
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
					<p>On August 25, Lava officially reached a strategic investment cooperation with mining equipment supplier and integrated mining service provider, InfiChain Technology, and accepted approximately 10 million renminbi investment from the latter.
					 
					InfiChain Technology has a stable cooperative relationship with major mining pools in the industry. It is the only strategic partner of the giant blockchain computing equipment supplier Avalon, and also has established long-term cooperation with energy giants such as State Grid and “the Big Five” power generation groups in China.
					 
					InfiChain Technology said that they are optimistic about the prospect of PoC mining ecology, and will promote their existing business from pure PoW ecology to PoW+PoC “double track”, and use its resource advantages accumulated in the mining and energy data services industry to accelerate this rising ecology. InfiChain will in the future focus on the ecology development of PoC, especially top projects such as Lava.
					 
					The Lava Foundation</p>
					<p>&nbsp;</p>
					<span>2019-08-26<span>

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
							<p>Lava Community</p>
							<p>&nbsp; </p>
							<p>Lava has already launched its mainnet at GMT 04:00 AM on August, 28th.</p>
							<p>Please go to Homepage->Download to update Lava Core (Full Node Wallet for Windows/Mac OS/Linux) and SPV Light Wallet (Windows).</p>
							<p>Please go to Homepage->Guide to get official guide for Full Node Wallet, Miner, Plotting, Client, etc.</p>
							<p>Lava Testnet will remain and open for test in the long term.</p>
							<p> &nbsp;</p>
							<p>Lava Tech Team</p>
							<span>2019-08-28</span>
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
						<p> Lava Community:</p>
						<p> &nbsp;	</p>
						<p> A new version (v0.3.1) of the Lava SPV Light Wallet for Windows platform has been released! Please go to Homepage->Download to get the latest version.</p>
						<p> This version:</p>
						<p> ·Supports both Legacy address format (start with ‘1’) and Segwit address format (start with ‘bc’).</p>
						<p> ·Supports creating new wallets by seeds or by importing private keys.</p>
						<p> ·Supports exporting private keys and backup files.</p>
						<p> ·Supports creating QR codes for receiving coins.</p>
						<p> ·Supports creating individual passphrase.</p>
						<p> Warm Prompt: This version is for Lava Mainnet ONLY! Please do distinguish Lava Mainnet from Lava Testnet as they use different algorithm for private key-address system.</p>
						<p> &nbsp;</p>
						<p> Lava Tech Team</p>
						<span> 2019-09-02</span>
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
							<p>Dear Community Members,</p>
							<p>&nbsp;</p>
							<p>Lava Mainnet has been officially launched on August 28, 2019. We invite community contributors and technology contributors who participated in the first and second rounds of beta testing to fill in the following information to claim the relevant rewards. The final statistics of relevant rewards have been published on the official Lava website, which can be viewed at: http://lavatech.org/testnetReward. We will close the reward claim on October 31, </p>2019 at 20:00.
							<p>&nbsp;</p>
							<p>The final confirmation is based on the on-chain data from the Lava mainnet. Participants other than community contributors and technology contributors must meet the specific barrier to be consistent with the official final statistical data amount to receive rewards. We will issue rewards within five days after all the users fill in. For any related questions concerning the claim process, please consult the official account or community volunteers.</p>
							<p>&nbsp;</p>
							<p>Thank you for your support!</p>

							<p>Lava Foundation and Lava Core Team</p>
							<span>2019-09-02</span>
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
						<p>	Dear Lava Community,</p>
						<p>&nbsp; </p>
						<p> Lava Foundation officially announces its Lava Address as below:</p>
						<p> 3BHnqBiq4ge2J4hrmRCBJPJ3MMdBSD5x95</p>
						<p> Lava Foundation encourages an overall supervision and auditing from the whole Community.</p>
						<p>&nbsp;</p>
						<p> Lava Foundation</p>
						<span> 2019-11-01</span>
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
		<p>Lava Community,
		<p> &bnsp;</p>
		<p>Lava will soon launch "PoC2+" the new protocol upgrade. This upgrade introduces a whole new plotting format (PoC2+) and fixes some important vulnerabilities in previous PoC2 standard. </p>
		<p>The upgrade will ask for a hard fork which is supposed to trigger at block height 67584.</p>
		<p>The Lava tech team has already released new versions for all of its software including wallets, miners and plotter software. Please download and update your software in time. Notice that old versions do NOT support the new protocol.</p>
		<p>As the new protocol introduces a whole new plotting format, miners are required to re-plot their disks. We highly recommend our high-performance and versatile plotter -- HyperPlotter which supports for both old and new plotting format.</p>
		<p>Two parallel blockchains may be running after the hard fork with miners maintaining both. The Lava tech team will NOT continue developing on the previous protocol or "the old chain".</p>
		<p> &bnsp;</p>
		<p>Lava tech team</p>
		<span>2019-03-01</span>
						`,
						date: "2020-03-02 18:26:28",
						id: "13",
					}
				]
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~assets/styles/mixins.styl'
@media screen and (min-width: 420px)
	.news_detail
		padding-top 55px
		padding-bottom 155px
		width 50%
		margin 0 auto 
		fontMedium()
		.news_detail_content
			.news_detail_content_h3
				color #11223F
				font-size 36px
				fontBold()
				text-align center
				margin-bottom 10px
			.news_detail_date
				font-size 16px
				color #FF7D00
				text-align center
			.new_detail_img
				width 100%
				margin 0 auto 10px
				img
					max-width 100%
					min-width 100%
					min-height 100%
					max-height 100%
					object-fit cover
				margin-top 32px
				margin-bottom 41px
			.news_detail_title
				fontMedium()
				font-size 28px
				color rgba(138,142,158,1)
				margin-bottom 10px
			.news_detail_content_p
				font-size 21px
				color #11223f
				line-height 30px
				text-indent 2em


@media screen and (min-width: 320px) and (max-width: 414px)
	.news_detail
		padding 40px 5% 66px
		fontMedium()
		.news_detail_content
			.news_detail_content_h3
				color #11223f
				text-align center
				fontBold()
			.news_detail_date
				color #FF7D00
				font-size 12px
				margin 10px 0 20px
				text-align center
			.new_detail_img
				width 100%
				margin 0 auto 10px
				img
					max-width 100%
					min-width 100%
					min-height 100%
					max-height 100%
					object-fit cover
				
			.news_detail_content_p
				color #8A8E9E
				font-size 12px
				line-height 18px

				


</style>