<template>
	<div>
		<div class="headerContainer" ref="head_container">
			<div class="sticky-bar" ref="head_div"></div>
			<div class="header_flex_box">
				<div class="left" @click="linkToIndex">
					<div @click="linkToIndex">
						<!-- <a href="#homeTop" ref="head_a"> -->
						<a href="javascript:;" ref="head_a">
							<img src="../assets/images/logo.png" alt="">
						</a>
					</div>
				</div>
				<div class="header_wrap">
					<div class="middle">	
						<!-- <nuxt-link to="#homeTop">  -->
						<nuxt-link :to="$store.state.locale =='zh'? '/#homeTop' : '/en/#homeTop'"> 
							<div class="item" @click="linkToIndex">
								{{ $t('header.home') }}
							</div>
						</nuxt-link>
						<nuxt-link to= "marketPage"> 
							<div class="item">
								{{ $t('header.market') }}
						</div>
						</nuxt-link>
						<nuxt-link to="stList"> 
							<div class="item">
								{{ $t('header.sto-list') }}
							</div>
						</nuxt-link>
						<nuxt-link to="news_list"> 
							<div class="item">
								{{ $t('header.news') }}
							</div>
						</nuxt-link>

						<nuxt-link to="market"> 
							<div class="item">
								{{ $t('header.lssue') }}
							</div>
						</nuxt-link>
					
					</div>
				</div>
				<div class="right">
					<!-- <div class="user_wrap" v-if="showUserNmae" style="margin-right: 80px;">
						UserName
						<i class="iconfont icon-exchange"/>
						<div class="username_select">
							<p class="username_select_label" @click="handlePersonalCenter('personal')" >
								<i class="iconfont icon-wode"/>
								Personal center
							</p>
							<p class="username_select_label" @click="handlePersonalCenter('sign out')" style="margin-top: 28px;">
								<i class="iconfont icon-sigout"/>
								Sign Out
							</p>
						</div>
					</div> -->

					<!-- <div class="login_wrap" @click="handleLogin" v-else style="margin-right: 80px;">
							Login
					</div> -->
					<div class="language_wrap">
							{{ $t('header.language') }}
						<i class="iconfont icon-exchange"/>
						<div class="language_select" @click="handlePcSelect" ref="languageObj">
							<p class="language_select_label" ref="head_en">EN</p>
							<p class="language_select_label" ref="head_zh">中文</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="empty_Div" ref="empty_div"></div>
	
		<div class="mobile_heade" ref="mobile_head">
			<div class="left" @click="linkToIndex">
					<img src="../assets/images/logo.png" alt="">
			</div>
			<div>
				<i class="iconfont icon--menu"  @click="showTabs" style="font-size:36px;color:white;" ></i>
			</div>

			<!-- <Popup v-model="showPop" position="right" :overlay="true">
				<div v-for="(item, index) in tabList" :key="index" class="vantTabList" @click="linkToPage(item.routeName)">
					<li v-if="!item.hasChildren" class="fatherLi">
						{{ $t(item.title) }}
					</li>
					<li v-else class="vantTabList-production">
						<div class="fatherTab" :class="{'bb': showSub}" @click.stop="showSubList">
							<span class="rotate0" :class="{'rotate90': showSub}"><i class="iconfont iconshouqi_m-copy" /></span>
							<div class="vantTabList-production-title">
								{{ $t(item.title) }}
							</div>
						</div>
						<div class="subTab" :class="{'subDuration': showSub}">
							<li v-for="subItem in item.subList" :key="subItem.key" class="subLi" @click="handleSelect(subItem.key)">
								{{ subItem.name }}
							</li>
						</div>
					</li>
				</div>
			</Popup> -->
		</div>
		<div class="mobile_empty_Div" ref="mobile_empty_Div"></div>
	</div>
</template>
<script>
import { Popup } from 'vant'
export default {
	components: {
    Popup
  },
	data(){
		return{
			link_path: "",
			userName: "",
			showUserNmae: false,
			isShow: false,
      showPop: false,
			showSub: false,
			// tabList: [
			// 	{
			// 		title: 'header.home',
			// 		hasChildren: false,
			// 		key: 'home',
			// 		routeName: '/'
			// 	},
			// 	{
			// 		title: 'header.poc',
			// 		hasChildren: false,
			// 		key: 'poc',
			// 		routeName: '/poc'
			// 	},
			// 	{
			// 		title: 'header.defi',
			// 		hasChildren: false,
			// 		key: 'defi',
			// 		routeName: '/defi'
			// 	},
			// 	{
			// 		title: 'header.news',
			// 		hasChildren: false,
			// 		key: 'news',
			// 		routeName: '/news_list'
			// 	},
			// 	{
			// 		title: 'header.download',
			// 		hasChildren: false,
			// 		key: 'download',
			// 		routeName: '/download'
			// 	},
			// 	{
			// 		title: 'header.language',
			// 		hasChildren: true,
			// 		key: 'index',
			// 		routeName: '',
			// 		subList: [{
			// 			name: '中文',
			// 			key: 'zh',
			// 			routeName: 'zh'
			// 		}, {
			// 			name: 'EN',
			// 			key: 'en',
			// 			routeName: 'en'
			// 		}]
			// 	}
			// ]
		}
	},
	methods: {
		// handleLogin(){
		// 	this.$router.push('Login');
		// 	if (this.$store.state.locale === 'en') {
		// 		this.$router.push('/')
		// 	} else {
		// 		this.$router.push('/zh/')
		// 	}
		// },
		getUserInfo(){
			// 获取用户信息
			this.$getUserInfoApi.setHeader('jwtToken', window.localStorage.getItem("token"))
			this.$getUserInfoApi.$post(`/api/v1/user/getUserInfo`).then(data=>{
					if (data.code == 200) {
						this.userName = data.data.nickname;
						this.showUserNmae  = true;
					} else {
						this.$message.error("获取用户信息失败");
						this.showUserNmae = false;
					}
			})
		},
		showSubList() {
			this.showSub = !this.showSub
			this.showPop = true
		},
		handleSelect(key) {
			this.$store.commit('SET_LANG', key)
		},
		linkToPage(name) {
			const ln = this.$store.state.locale
			if (name !== '' && name === '/') {
				this.$router.push({
					path: name + ln + '/'
				})
				this.showPop = false
      		} else if(!name){
				if (ln === 'zh') {
					if (this.$route.path.includes('/zh')) {
						return false
					} else {
						this.$router.push(`/zh${this.$route.fullPath}`)
					}
        			this.showPop = false
				} else {
					const path = this.$route.fullPath.replace('/zh', '')
					this.$router.push(`${path}`)
					this.showPop = false;
      			}
			} else{
				this.$router.push({
				path: '/' + ln + name
				})
				this.showPop = false
			}
		},
		linkToIndex(){
			// if (this.$store.state.locale === 'en') {
			// 	this.$router.push('/en/')
			// } else {
			// 	this.$router.push('/')
			// }

			if (this.$store.state.locale === 'en') {
        this.$router.push('/en/')
      } else {
        this.$router.push('/zh/')
      }
		},
		showTabs() {
			this.isShow = !this.isShow
			this.showPop = true
    	},
		handlePersonalCenter(params){
			this.$router.push("/personal/basicinfo")
			// if (this.$store.state.locale === 'zh') {

			// } else {

			// }

		},
		handlePcSelect(e) {
			let key = "EN";
			if (e.target.innerHTML == "EN") {
				key = "en";
				this.link_path = 'en';
			} else {
				key = "zh";
				this.link_path = '';
			}
			this.$store.commit('SET_LANG', key)
			if (this.$store.state.locale === 'en') {
				this.$refs.head_zh.style.color = "#ffffff"
				this.$refs.head_en.style.color = "#27ace0"
	
				if (this.$route.path.includes('/en')) {
				return false
				} else {
				this.$router.push(`/en${this.$route.fullPath}`)
				}
			} else {
				this.$refs.head_en.style.color = "#ffffff"
				this.$refs.head_zh.style.color = "#27ace0";
				const path = this.$route.fullPath.replace('/en', '')
				this.$router.push(`${path}`)
			}
		}
	},
	mounted(){
			const self = this;
			if (window.localStorage.getItem("token")) {
				// this.getUserInfo()			
			}
		if (self.$store.state.locale === 'zh') {
			this.$refs.head_en.style.color = "#ffffff"
			this.$refs.head_zh.style.color = "#27ace0"

		} else if (self.$store.state.locale === 'en') {
			this.$refs.head_zh.style.color = "#ffffff"
			this.$refs.head_en.style.color = "#27ace0";
		}
		window.addEventListener('scroll',()=>{
			let scrollHeight= document.documentElement.scrollTop || document.body.scrollTop;
			let head_div = this.$refs.head_div;
			let head_container = this.$refs.head_container;
			let head_a = this.$refs.head_a;
			let empty_div = this.$refs.empty_div;
			if(head_container) {
				if(scrollHeight > 0 ){
						head_div.style.transform= "translateY(0%)";
						head_container.style.height = "72px";
						empty_div.style.height = "72px"
					
						// this.$refs.head_container.style.borderBottom = "none";
						this.$refs.head_a.classList.add("left_a")
				}
				if (scrollHeight == 0) {
							head_div.style.transform= "translateY(-100%)";
							head_container.style.height = "90px";
							empty_div.style.height = "90px"
							
							// this.$refs.head_container.style.borderBottom = "solid 1px rgba(151,151,151,1)"
							this.$refs.head_a.classList.remove("left_a")
					
				}
			}
		})
	 	// window.addEventListener('resize', () => {
		// 	if (window.innerWidth <= 1000) {
		// 				// 小屏幕的时候
		// 		this.$refs.mobile_head.style.display = 'flex'
		// 		this.$refs.mobile_empty_Div.style.display = 'block'
				
		// 		this.$refs.head_container.style.display = 'none'
		// 		this.$refs.empty_div.style.display = 'none'
						
		// 	} else {
		// 		this.$refs.head_container.style.display = 'flex'
		// 		this.$refs.empty_div.style.display = 'block'
				
		// 		this.$refs.mobile_head.style.display = 'none'
		// 		this.$refs.mobile_empty_Div.style.display = 'none'
		// 	}
		// })
	}
	
}
</script>
<style lang="stylus" scoped>
@import '~assets/styles/mixins.styl'
// @import '~assets/styles/vant.styl'
@media screen and (min-width: 1000px)
	.headerContainer
		width 100%
		height 90px
		background #001629
		position fixed
		// padding 0px 100px
		top 0
		z-index 9
		fontMedium()
		transition all .5s cubic-bezier(.5,0,.5,1)
		// display flex
		// justify-content space-between
		// align-items center
		.sticky-bar
			position absolute
			left 0
			top 0
			width 100%
			height 72px
			z-index -1
			background #001629
			transform translateY(-100%)
			box-shadow 0px 2px 4px 0px rgba(255,244,233,0.07)
			transition all 0.5s cubic-bezier(0.5, 0, 0.5, 1)
		.sticky-bar::after
			content: ''
			width 100%
			height 100%
			position absolute
			left 0
			top 0
			z-index 0
			border-bottom 1px solid rgba(49,64,77,1)
			box-shadow 0 0 15px rgba(49,64,77,.05)
			transition opacity 0.5s linear
		.header_flex_box
			center()
			height 100%
			display flex
			justify-content space-between
			align-items center
			.left:hover
				cursor pointer
			.left
				height 60%
				width 200px
				align-items center
				display flex
				.left_a
					overflow hidden
					transform scale(0.9)
					width 40px
					transition all 0.5s cubic-bezier(0.5, 0, 0.5, 1)
				img 
					height 38px
			.header_wrap
				// width 60%
				width 50%
				height 100%
				margin 0 auto
				.middle
					display flex
					align-items center
					justify-content space-between
					color #ffffff
					font-size 17px
					height 100%
					.nuxt-link-exact-active
						.item
							border-bottom 2px solid  #27ACE0
							color  #27ACE0
					.item 
						height 60px
						line-height 60px
					.item_active
						border-bottom 2px solid #27ACE0
					a
						color #ffffff
						text-decoration none 
					a:hover
						color #27ACE0
				
			.right
				height 100%
				display flex
				justify-content center
				align-items center
				font-size 17px
				.login_wrap
					// margin-right 120px
					cursor pointer
				.user_wrap
					// margin-right 120px
					cursor pointer
					position relative
					fontMedium()
					font-size 14px
					height 100%
					display flex
					justify-content center
					align-items center
					.username_select
						display none
						background #001629
						position absolute
						color #ffffff
						top 71px
						padding 25px 5px 15px
						width 150px
						height 100px
						left -20px
						border-radius 0px 0px 8px 8px
						p
							width 100%
				.user_wrap:hover
					.username_select
						display block
				.language_wrap
					color #27ACE0
					display flex
					justify-content center
					align-items center
					position relative
					cursor pointer
					height 50px
					width 100px
					background rgba(17,34,63,0.86)
					border-radius 4px
					.language_select
						background #001629
						position absolute
						top 70px
						padding 20px 0px 0px 30px
						margin-top -20px
						width 100px
						height 120px
						z-index -1
						box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
						display none
						border-radius 0px 0px 8px 8px
						cursor pointer
						transition all .5s cubic-bezier(.5,0,.5,1)
						.language_select_label
							height 50px
							line-height 50px
							cursor pointer
			.right:hover
				.language_select
					display block

		
	.empty_Div
		width 100%
		height 90px
		transition all .5s cubic-bezier(.5,0,.5,1)


	.mobile_heade
		justify-content space-between
		background #001629
		height 72px
		width 100%
		padding 0 5%
		align-items center
		display none
		position fixed
		box-shadow 0px 2px 4px 0px rgba(255,244,233,0.07)
		z-index 90
		.left
			width 150px
			img
				width 100%
	.mobile_empty_Div
		width 100%
		height 72px
		display none

@media screen and (min-width: 320px) and (max-width: 1000px)
	.headerContainer, .empty_Div
		display none
	.mobile_heade
		justify-content space-between
		background #001629
		height 72px
		width 100%
		padding 0 5%
		align-items center
		position fixed
		display flex
		box-shadow 0px 2px 4px 0px rgba(255,244,233,0.07)
		z-index 90
		.left
			width 150px
			img
				width 100%
	.mobile_empty_Div
		width 100%
		height 72px
</style>