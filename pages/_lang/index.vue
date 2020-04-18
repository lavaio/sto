<template>
    <div>
			<div class="banner">
					<div class="banner_left">
							<div class="banner_img">
									<img :src="bannerOne.src" />
							</div>
							<p class="banner_title">{{bannerOne.title}}</p>
							<div class="banner_middle">
									<div class="banner_div_content">
											<p class="banner_div_top"> Mini Investment</p>
											<p class="banner_div_bottom"> {{bannerOne.lowInvest}}</p>
									</div>
									<div class="banner_div_content">
											<p class="banner_div_top"> Price Per Token</p>
											<p class="banner_div_bottom"> {{bannerOne.token}}</p>
									</div>
							</div>
							<div class="banner_bottom">
									<p class="banner_bottom_p">
										{{bannerOne.describe}}
									</p>
							</div>
					</div>
					<div class="banner_right">
						<p class="banner_title_p">{{bannerOne.title}}</p>
						<a  :href="bannerOne.href" target="_blank" class="banner_small_title">CHECK MORE 
							<i class="iconfont icon-jiantou-xia" style="margin-left: 10px; font-size:17px"></i>
						</a>
						<div class="carousel_div">
								<div class="banner_swiper_box">
									<div v-swiper:bannerSwiper="banerOption" @slideChange="handleChange">
										<div class="swiper-wrapper">

														<div class="swiper-slide" v-for="(item,index) in  bannerData" :key="index">
															<div class="banner_div"> 
																<div class="banner_left">
																	<div class="banner_img">
																		<img :src="item.src" />
																	</div>
																	<p class="banner_title">{{item.title}}</p>
																	<div class="banner_middle">
																		<div class="banner_div_content" style="padding-left: 8px">
																			<p class="banner_div_top"> Mini Investment</p>
																			<p class="banner_div_bottom"> {{item.lowInvest}}</p>
																		</div>
																		<div class="banner_div_content" style="padding-right: 8px">
																			<p class="banner_div_top"> Price Per Token</p>
																			<p class="banner_div_bottom">  {{item.token}}</p>
																		</div>
																	</div>
																	<div class="banner_bottom">
																		<p class="banner_bottom_p">
																			{{item.describe}}
																		</p>
																	</div>
																</div>
															</div>
														</div>

															<!-- <div class="swiper-slide"><div class="banner_div"> Slide 1</div></div>
															<div class="swiper-slide"><div class="banner_div"> Slide 2</div></div>
										
															<div class="swiper-slide"><div class="banner_div"> Slide 3</div></div>
															<div class="swiper-slide"><div class="banner_div"> Slide 4</div></div>
															<div class="swiper-slide"><div class="banner_div"> Slide 5</div></div>
															<div class="swiper-slide"><div class="banner_div"> Slide 6</div></div>
															<div class="swiper-slide"><div class="banner_div"> Slide 7</div></div>
															<div class="swiper-slide"><div class="banner_div"> Slide 8</div></div>
															<div class="swiper-slide"><div class="banner_div"> Slide 9</div></div>
															<div class="swiper-slide"><div class="banner_div"> Slide 10</div></div> -->
										</div>
									</div>
								</div>
						</div>

						<div class="swiper-button-next"></div>
						<div class="swiper-button-prev"></div>
					</div>

			</div>
			<div class="table">
				<div class="table_wrap">
						<p class="public_p_title"> 
								<span class="table_span">STO Being Traded</span>
						</p>
						<p class="table_small_title">
								Total Market Cap
								<span class="table_small_span"> $47,968,640.81</span>
						</p>
						<div class="table_div">
							<el-table
								:data="pageDta"
								style="width: 100%">
								<el-table-column
									prop="logo"
									label=""
									>
									<template slot-scope="scope">
										<div class="div_img">
											<img :src="scope.row.logo"/>
										</div>
									</template>
								</el-table-column>
								<el-table-column
									prop="companyName"
									label="Company Name"
									width="200"
								>
									<template slot-scope="scope">
										<div class="link_a">
											<p>
												<a :href="scope.row.companyNameLink" target="_blank">{{scope.row.companyName}} 
													<i class="iconfont icon-lianjie" style="color: #217AF9"></i>
												</a>
											</p>
											<p>
												<a :href="scope.row.smallNmaeLink" target="_blank">{{scope.row.smallNmae}} </a>
											</p>
										</div>
									</template>
								</el-table-column>
								<el-table-column
									prop="marketCap"
									label="Market Cap">
								</el-table-column>

								<el-table-column
									prop="price"
									label="Price">
									<template slot-scope="scope">
										<div>
											<span :style="{'color':scope.row.change >0 ? '#01C0AA':scope.row.change == 0? '#2E384D':'#EE2E6B'}" >
												{{scope.row.price}}
											</span>

										</div>
									</template>
								</el-table-column>
								<el-table-column
									prop="change"
									label="Change%">
									<template slot-scope="scope">
										<div>
											<span :style="{'color':scope.row.change >0 ? '#01C0AA':scope.row.change == 0? '#2E384D':'#EE2E6B'}" >
											<i :class="scope.row.change >0 ? 'iconfont icon-shang':scope.row.change == 0? 'iconfont icon-zuoyou':'iconfont icon-xia'" ></i>
												{{Math.abs(scope.row.change)}}
											</span>
										</div>
									</template>
								</el-table-column>

								<el-table-column
									prop="volume"
									label="24hVolume">
								</el-table-column>
								<el-table-column
									prop="exchange"
									label="Exchange">
								</el-table-column>

								<el-table-column
									label="Price Trend">
									<template slot-scope="scope">
										<div class="price_change">
											<img :src="scope.row.src"/>
											<!-- {{scope.row.src}} -->
										</div>
									</template>
								</el-table-column>
							</el-table>
							<el-pagination
								background
								layout="total,prev,  pager,  next"
								:total="total"
								:page-size="pageSize"
								:current-page.sync="currentPage"
								@current-change="pageChange"
							>
							</el-pagination>
						</div>
						<p class="public_p_title marginTop"> 
							<span class="table_span">Partners</span>
						</p>
				</div>
			</div>

			<div class="partners">
				<div class="partners_bg"></div>
				<div class="partners_wrap">
					<div class="partners_box">
									<div v-swiper:mySwiper="swiperOption">
										<div class="swiper-wrapper">
											<div class="swiper-slide" v-for="(item,index) in partnerData" :key="index">
												<div class="partners_div">
													<a :href="item.link" target="_blank">
														<img :src="item.pic" />
													</a>
												</div>
											</div>
										</div>
										<div class="swiper-button-next"></div>
										<div class="swiper-button-prev"></div>
									</div>

									<p class="public_p_title marginTop marginBottom"> 
										<span class="table_span">Investor Network</span>
									</p>
									<div v-swiper:secondSwiper="swiperOption">
										<div class="swiper-wrapper">
											<div class="swiper-slide" v-for="(item,index) in investorData" :key="index">
												<div class="partners_div">
													<a :href="item.link" target="_blank">
														<img :src="item.pic" />
													</a>
												</div>
											</div>
										</div>
										<div class="swiper-button-next"></div>
										<div class="swiper-button-prev"></div>
									</div>


					</div>
				
				</div>
			</div>

			<div class="email">
				<div class="email_wrap">
					<h3 class="email_h3">Why choose STO?</h3>
					<p class="email_p">
						STO eliminates many of the frictions that have long plagued private and unlisted alternative asset transfers, and provides investors and issuers with greater opportunities, efficiency, and liquidity.
					</p>
					<div class="email_input_box">
						<div class="email_input">
							<el-input v-model="email" size="center" placeholder="stanley.kubrick@example.com" />
						</div>
						<div class="email_input_button" @click="subscribe">
								SIGN UP
						</div>
					</div>
					<div class="email_icon_box">
						<div class="email_icon_div">
							<a href="" target="_blank">
								<img src="./../../assets/images/one.png" />
							</a>
						</div>
						<div class="email_icon_div">
							<a href="" target="_blank">
							<img src="./../../assets/images/two.png" />
							</a>
						</div>
						<div class="email_icon_div">
							<a href="" target="_blank">
							<img src="./../../assets/images/three.png" />
							</a>
						</div>
						<div class="email_icon_div">
							<a href="" target="_blank">
							<img src="./../../assets/images/four.png" />
							</a>
						</div>

						
					</div>
				</div>
			</div>
    </div>
</template>
<script>
import * as Math from 'mathjs'
import VueAwesomeSwiper from 'vue-awesome-swiper'
export default {
    data(){
        return {
					bannerOne:{
									src: "https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10sGVMy2d64Om7MKW5kDAs6ehwtSNA2n263heeh46HMrjXuvsQ6u.png",
									title: "MegaFan",
									smallTitle: "(MEGA)",
									lowInvest: "$ 10",
									token: "$ 2.5",
									href:"https://stomarket.com/sto/megafan-mega",
									describe: "Megafanstore distributes and trades with fan merchandise and sporting goods. B2C Online Store, as well as B2B Platforms and direct B2B trade to business clients. Mega has a small team experienced in marketing a."
							},
					swiperOption: {
						slidesPerView: 3,
						spaceBetween: 30,
						loop: true,
					
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
					},
					banerOption:{
						slidesPerView: 2,
						spaceBetween: 16,
						loop: true,
						centeredSlides: true,
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
					},
					email: "",
					pageSize: 8,
					currentPage: 1,
					total:0,
					pageDta:[],
					bannerData:[
							{
									src: "https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10sGVMy2d64Om7MKW5kDAs6ehwtSNA2n263heeh46HMrjXuvsQ6u.png",
									title: "MegaFan",
									smallTitle: "(MEGA)",
									lowInvest: "$ 10",
									token: "$ 2.5",
									href:"https://stomarket.com/sto/megafan-mega",
									describe: "Megafanstore distributes and trades with fan merchandise and sporting goods. B2C Online Store, as well as B2B Platforms and direct B2B trade to business clients. Mega has a small team experienced in marketing a."
							},
							{
									src: "https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10wy9Zcoq7Qs1vMIzQkykEs0YlglhFgd2GhzfDGbsOsv8PkXQF5Kq.png",
									title: "Morfin.io",
									smallTitle: "(MST)",
									lowInvest: "$ 150",
									token: "$ 0.01",
									href: "https://stomarket.com/marketplace?industry=financial+services",
									describe: `Your customizable bank. Our bank, your bank and crypto. 
											All in one custom app. Our product is a mobile banking application providing a 
											current account and crypto wallet which enables our users easy access to crypto-assets, 
											neobanks (like Revolut or N26), traditional banks and person to person banking. 
											Our users can lend small loans to each other, exchange currencies for each other or act as person 
											to person ATMs. Using the Morfin app you will automatically use the best-pre-paid card for each given 
											situation, the cheapest foreign exchange service, a more rewarding savings account and you will earn money 
											by seemingly providing services to other Morfin users.`
							},
							{
									src: "https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10dw8Uw8Cyb0nVH31KEv0BOettYDuUClzJVa5w8E3mwT0XnapohHuLW.jpeg",
									title: "Arctic Exchange ",
									smallTitle: "(ARCTIC)",
									lowInvest: "$100",
									token: "$20",
									href: "https://stomarket.com/sto/arctic-exchange-arctic",
									describe: "Greenland based security token exchange."
							},
							{
									src: "https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y101xwFBMsM6z2AKUhdqdHSlOyuK2bl3QdxEboDRduiHY8Yy3uticS.png",
									title: "Oak Group One ",
									smallTitle: "(OAK1)",
									lowInvest: "$125",
									token: "$0.125",
									href: "https://stomarket.com/sto/oak-group-one-oak1",
									describe: `Oak Group One PLC is a limited life investment company focusing on rare whisky investments. 
											Whisky has been a strongly performing investment over the past few years, with an index of 1,000 investment 
											whiskies showing over 400% growth since the start of 2011. The company is managed by a team of professionals with 
											decades of experience in asset and fund management.`
							},
							{
									src: "https://s3.amazonaws.com/stm-public-local/sto/manualsync/3411f3edc65a-3rdrequests.png",
									title: "DigiShares  ",
									smallTitle: "(DIGI)",
									lowInvest: "$320",
									token: "$10.82",
									href: "https://stomarket.com/sto/digishares-digi",
									describe: `DigiShares is your guide towards a successful security token offering. DigiShares is among the first in Europe 
											to provide a white-label software platform that can be used for investment funds, real estate funds, and later stage startups 
											to raise funding by issuing shares as tokens on the blockchain and offering them for sale. These tokens represent securities 
											and are fully regulated under the issuer��s jurisdiction. Tokens can represent equity, bonds or other types of customized 
											securities with revenue-sharing rights, voting rights, etc. DigiShares helps design the tokens and smart contracts to correctly 
											represent these securities and the platform then manages the entire process related to the registration and verification of 
											investors, distribution and signing of subscriptions forms and shareholder agreements, continuously updated shareholder registers, 
											as well as the distribution of dividends, voting, etc. DigiShares partners with international exchanges for the listing and trading 
											of security tokens as well as investor networks to help ensure that issuers can sell their tokens and provide investors with future 
											liquidity. DigiShares also partners with legal advisors across many jurisdictions to provide assistance with setting up SPVs, drafting
											private placement memorandums, prospectus documents, etc. We have a focus on white-label partnerships so our solution is targeted towards 
											easy customization and branding such that partners can operate it. The STO is carried out using our own platform.Software`
							},
							{
									src: "https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10xeriZywfPxC32q7TIQNFull2SwcTcejE88SPi7d4m6CQuU0pJby.jpg",
									title: "15795 Mansfield  ",
									smallTitle: "(RTT)",
									lowInvest: "$60",
									token: "$60",
									href: "https://stomarket.com/sto/15795-mansfield-rtt",
									describe: "TBA"
							},
							{
									src: "https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10xeriZywfPxC32q7TIQNFull2SwcTcejE88SPi7d4m6CQuU0pJby.jpg",
									title: "16200 Fullerton Ave Detroit MI ",
									smallTitle: "(RealT)",
									lowInvest: "$162",
									token: "$162",
									href: "https://stomarket.com/sto/16200-fullerton-ave-detroit-mi-realt",
									describe: `Residential real estate property in Detroit, Michigan - 16200 Fullerton, Detroit, Michigan. 
													Token holders are paid a daily dividend in DAI stablecoin based off of rental income of the property. 
													Yield is 12% per year!`
							},
							{
									src: "https://s3.amazonaws.com/stm-public-local/sto/manualsync/upload_2y10OnccRIAzu5pbcYWLifSCCZlOJXO6ePmyEJTBmu18KTI6dFmrO.jpg",
									title: "9336 Patton St Detroit ",
									smallTitle: "(RealT)",
									lowInvest: "$60",
									token: "$60",
									href: "https://stomarket.com/sto/9336-patton-st-detroit-rt",
									describe: `9336 Patton Street is a single-family home located in the Franklin Park neighborhood of the greater Detroit area. 
									Patton is a mid-century 3 bed, 1 bath, single floor property. Patton is local to a number of community churches, as well as 
									up the street from the Dearborn campus of the University of Michigan.`
							},
					],
					tableData:[
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/tzero.png",
								"companyName":   "tZERO" ,
								"companyNameLink": "https://www.tzero.com/",
								"smallNmae": "TZROP",
								"smallNmaeLink": "https://www.tzero.com/",
								"marketCap": "$26,008,327.50",
								"price": "$1.25",
								"change": "0",
								"volume": "$4,051.00",
								"exchange": "tZERO",
								"priceSrc": "1.jpg"
						},
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/blockchaincapital.jpg",
								"companyName":   "Blockchain Capital" ,
								"companyNameLink": "http://www.blockchaincapital.com/",
								"smallNmae": "BCAP",
								"smallNmaeLink": "http://www.blockchaincapital.com/",
								"marketCap": "$9,057,297.27",
								"price": "$1.49",
								"change": "10.37",
								"volume": "$596.00",
								"exchange": "OpenFinance",
								"priceSrc": "2.jpg" 
						},
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/spice.jpg",
								"companyName":   "SPiCE VC" ,
								"companyNameLink": "https://spicevc.com",
								"smallNmae": "SPiCE",
								"smallNmaeLink": "https://spicevc.com",
								"marketCap": "$8,126,101.44",
								"price": "$0.96",
								"change": "0",
								"volume": "$132.48",
								"exchange": "OpenFinance",
								"priceSrc": "3.jpg"  
						},
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/lotto.jpg",
								"companyName":   "Lottery.com" ,
								"companyNameLink": "https://lottery.com/",
								"smallNmae": "LDCC",
								"smallNmaeLink": "https://lottery.com/",
								"marketCap": "$4,278,768.50",
								"price": "$0.10",
								"change": "0",
								"volume": "$567.00",
								"exchange": "OpenFinance",
								"priceSrc": "4.jpg" 
						}, {
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/mt-pelerin-icon.png",
								"companyName":   "Mt Pelerin" ,
								"companyNameLink": "https://www.mtpelerin.com/",
								"smallNmae": "MPS",
								"smallNmaeLink": "https://www.mtpelerin.com/",
								"marketCap": "	$1,580,000.00",
								"price": "$3.16",
								"change": "-11.98",
								"volume": "$338.06",
								"exchange": "Uniswap",
								"priceSrc": "5.jpg"  
						},
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/22x.png",
								"companyName":   "22X Fund" ,
								"companyNameLink": "https://www.22xfund.com",
								"smallNmae": "22X",
								"smallNmaeLink": "https://www.22xfund.com",
								"marketCap": "$1,543,370.40",
								"price": "$0.30",
								"change": "-40",
								"volume": "$30.00",
								"exchange": "OpenFinance",
								"priceSrc": "6.jpg" 
						},
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/protos.jpg",
								"companyName":   "Protos" ,
								"companyNameLink": "http://protosmanagement.com/",
								"smallNmae": "PRTS",
								"smallNmaeLink": "http://protosmanagement.com/",
								"marketCap": "$1,507,579.20",
								"price": "$0.45",
								"change": "0",
								"volume": "$20.25",
								"exchange": "OpenFinance",
								"priceSrc": "7.jpg" 
						},
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
								"companyName":   "16200 Fullerton Ave Detroit MI" ,
								"companyNameLink": "https://realt.co/product/16200-fullerton-ave-detroit-mi-48227/",
								"smallNmae": "RealT",
								"smallNmaeLink": "https://realt.co/product/16200-fullerton-ave-detroit-mi-48227/",
								"marketCap": "$650,370.00",
								"price": "$171.15",
								"change": "-0.83",
								"volume": "$1,000.78",
								"exchange": "Uniswap",
								"priceSrc": "8.jpg"  
						},
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
								"companyName":   "1002428 Appoline St" ,
								"companyNameLink": "https://realt.co/product",
								"smallNmae": "RealT",
								"smallNmaeLink": "https://realt.co/product",
								"marketCap": "$144,860.00",
								"price": "$1744.86",
								"change": "0.54",
								"volume": "$726.00",
								"exchange": "Uniswap",
								"priceSrc": "9.jpg"  
						},
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
								"companyName":   "9943 Marlowe Street, Detroit, MI" ,
								"companyNameLink": "https://realt.co/product",
								"smallNmae": "RealT",
								"smallNmaeLink": "https://realt.co/product",
								"marketCap": "$71,690.00",
								"price": "$71.69",
							"change": "2.68",
								"volume": "$0.00",
								"exchange": "Uniswap",
								"priceSrc": "10.jpg" 
						},
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
								"companyName":   "20200 Lesure St Detroit MI 48235" ,
								"companyNameLink": "https://realt.co/product",
								"smallNmae": "RealT",
								"smallNmaeLink": "https://realt.co/product",
							"marketCap": "$69,290.00",
								"price": "$69.29",
							"change": "0.55",
								"volume": "$208.92",
								"exchange": "Uniswap",
								"priceSrc": "11.jpg" 
						},
						{
								"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
								"companyName":   "9336 Patton St Detroit" ,
								"companyNameLink": "https://realt.co/product",
								"smallNmae": "RealT",
								"smallNmaeLink": "https://realt.co/product",
							"marketCap": "$62,950.00",
								"price": "$62.95",
							"change": "-1.5",
								"volume": "$126.37",
								"exchange": "Uniswap",
								"priceSrc": "12.jpg"  
						},
						{
							"logo": "https://s3.amazonaws.com/stm-public-local/squarelogos/realt.jpg",
							"companyName":   "942 Audubon Rd Detroit MI" ,
							"companyNameLink": "https://realt.co/product",
							"smallNmae": "RealT",
							"smallNmaeLink": "https://realt.co/product",
							"marketCap": "$59,122.50",
							"price": "$78.83",
							"change": "-1.67",
							"volume": "$0.00",
							"exchange": "Uniswap",
							"priceSrc": "13.jpg"
						}
					], 
					partnerData:[
						{
								src: "altfin.png",
								link: "https://altfin.partners",
						},
						{
								src: "arora.png",
								link: "https://aroraproject.co",
						},
						{
								src: "diliex.png",
								link: "https://liquia.io",
						},

						{
								src: "dltmilogo.png",
								link: "https://dltmi.com",
						},
						{
								src: "hyperion.png",
								link: "https://hyperion.exchange",
						},
						{
								src: "liquia.png",
								link: "https://liquia.io",
						},
						{
								src: "logo-tokeny.png",
								link: "https://tokeny.com",
						},
						{
								src: "pink_sky_group.jpg",
								link: "https://pinksky.io",
						},
						{
								src: "polybird.png",
								link: "https://polybird.io",
						},
						{
								src: "polymath.png",
								link: "https://polymath.network",
						},
						{
								src: "rivverlogo.png",
								link: "https://rivver.io",
						},
						{
								src: "securitize1.png",
								link: "https://securitize.io",
						},
						{
								src: "swarm.png",
								link: "https://swarm.fund",
						},
						{
								src: "tzedeklogo.png",
								link: "http://tzedeklaw.com.sg",
						}
					],
					investorData:[
						{
								src: "8decimal.png",
								link: "http://8dcapital.com",
						},
						{
							src:"deals-logo3@2x.jpg",
							link:"https://www.investready.com/",
						},
						{
								src: "sta.png",
								link: "http://securitytokenadvisors.com/ ",
						},
						{
								src: "mvca.png",
								link: "https://miamiventurecapital.org/",
						}
					]
        }
		},
		mounted(){
			this.getTableList(1)
			this.mySwiper.slideTo(3, 1000, false)
			let arr = [];
			let brr = [];
			this.partnerData.map(item=>{
				item.pic = require(`./../../assets/images/${item.src}`);
				arr.push(item)
			})
			this.partnerData = arr;
			this.investorData.map(item=>{
				item.pic = require(`./../../assets/images/${item.src}`);
				brr.push(item)
			})

			this.investorData = brr;
			// this.bannerOne = this.banerOption[0];


		},
		methods:{
			handleChange(){
				this.bannerOne = this.bannerData[this.bannerSwiper.realIndex];
				console.log(this.bannerSwiper.realIndex)
			},
			getTableList(currentPage){
				let arr = [];
				this.tableData.map((item,index) =>{
					if (index >= (currentPage-1) * this.pageSize && index <= (this.pageSize * currentPage)-1 ) {
						item.src = require(`./../../assets/images/${item.priceSrc}`);
						arr.push(item)
					}
				})
				this.pageDta = arr;
				this.total = this.tableData.length;
			},
			pageChange(page) {
				this.currentPage = page;
				this.getTableList(page)
			},
			async subscribe(){
				console.log(this.email)
				const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
				if (this.email === '') {
					this.$message.error('请输入邮箱地址')
					return
				}
				if (!reg.test(this.email)) {
					this.$message.error('请输入正确的邮箱格式')
					return
				}
			

				// /api/contents?type=Announcement
				// const res = await this.$axios.post('/v1/email/add', { email: this.email })
				// if (res !== undefined) {
				// 	this.$message.success('订阅成功')
				// }
			},
		}
}
</script>
<style lang="stylus" scoped>
	/deep/.el-table--enable-row-hover .el-table__body tr:hover
		transform translateY(-6px)
	/deep/.el-table--enable-row-hover .el-table__body tr:hover>a
		text-decoration underline
		color 2e384d
		transform scale(1.1)
	/deep/.el-input__inner
		border-radius 44px 0 0 44px
		height 56px
		line-height 14px
		line-height 56px
		border none
		//padding 13px  15px
		display block
	/deep/.el-input.is-active .el-input__inner, .el-input__inner:focus
		border-color #FFF
		outline none
		border none
@import '~assets/styles/mixins.styl'
	.carousel_div
		.swiper-container
			padding-bottom 0px
			padding-top 0px
	.swiper-container {
		width: 100%;
		height: 100%;
		padding-bottom: 90px;
		padding-top: 20px;
	}
	.banner_right
		.swiper-button-next
			left 200px
			bottom 15px
		.swiper-button-prev
			left 130px
			bottom 15px


	.swiper-slide {
		text-align: center;
		font-size: 18px;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	.swiper-button-prev:after, .swiper-button-next:after{
		font-size: 16px;
	}
	.swiper-button-prev, .swiper-button-next{
		top: unset;
		bottom: 0;
		background: #217AF9;
    width: 32px;
    height: 32px;
    color: white;
		border-radius:4px;
	}
	.swiper-button-prev{
		left: 45%;
	}
	.swiper-button-next{
		right: 45%;
	}
	.public_p_title 
		color #343744
		font-size 24px
		fontBold()
		text-align center
	.public_p_title::before,.public_p_title::after
		content "" 
		background #217AF9 
		display inline-block
		width 36px
		height 4px
		margin-bottom 6px
	.public_p_title::before
		margin-right 20px
	.public_p_title::after
		margin-left 20px
	.marginTop
		margin-top 128px
	.marginBottom
		margin-bottom 84px
	.banner
		height 534px
		margin-left 240px
		display flex
		background #FBFBFE
		// border 1px solid black
		
		.banner_title
			height 50px
			color #343744
			line-height 50px
			fontBold()
			font-size 28px
			border-top 1px solid  #EBEEFD
			padding 0 5px
		.banner_middle
			background #FBFBFE
			display flex
			justify-content space-between
			border-top 1px solid  #EBEEFD
			border-bottom 1px solid  #EBEEFD
			.banner_div_content
					padding 0 20px
					.banner_div_top
						font-size 18px
						fontMedium()
						padding 5px 0
						color #42434B
					.banner_div_bottom
						font-size 24px
						color #217AF9
						fontBold()
						padding 5px 0
		.banner_bottom
			padding 12px 10px
			.banner_bottom_p
				color #343744
				font-size 16px
				fontMedium()
				display -webkit-box
				-webkit-box-orient vertical
				-webkit-line-clamp 9
				overflow hidden
		.banner_left
			height 534px
			width 396px
			.banner_img
				height 40%
			img
				max-width 100%
				min-width 100%
				max-height 100%
				min-height 100%
				object-fit cover
			
    .banner_right
			height 100%
			padding-left 140px
			padding-top 125px
			box-sizing border-box
			// border 1px solid red
			position relative
			width calc(100% - 396px)
			.banner_title_p
				color #343744
				font-size 36px
				fontBold()
				width 325px
				line-height 56px
			.banner_small_title
				overflow hidden
				font-size 18px
				color #343744
				fontMedium()
				margin-top 20px
				display inline-flex


			.carousel_div
				width 50%
				height 206px
				position absolute 
				bottom 0
				right 0px
				.banner_left
					width 100%
					height 100%
					.banner_img
						justify-content center
						align-items center
						display flex
						img
							// transform scale(0.8)
							min-height 80%
							max-height 80%
							min-width 80%
							min-height 80%
							object-fit contain
					.banner_title
						font-size 12px
						height 30px
						line-height 30px
					.banner_middle
						padding 0 5px
						.banner_div_content 
							padding unset
							width 45%
							text-align left
							.banner_div_top
								font-size 12px
								white-space nowrap
								transform scale(0.7)
								transform-origin 0 0
							.banner_div_bottom
								font-size 12px
								transform scale(0.8)
								transform-origin 0 0
								padding 0
					.banner_bottom
						height 25px
						padding 3px 3px
						transform scale(0.8)
						transform-origin 0
						width 120%
						.banner_bottom_p
							width 100%
							display -webkit-box
							-webkit-box-orient vertical
							-webkit-line-clamp 3
							font-size 12px
							overflow hidden
							

			
				.banner_swiper_box
					height 100%
					.banner_div
						width 100%
						box-shadow 1px 0 5px 0 #e9e5ef
						//height 200px
						height 100%
						display flex
    				justify-content center
						background skyblue
					
	.table
		margin-top 136px
		padding-bottom 48px
		.table_wrap
			center()
			.table_small_title
				color #343744
				fontMedium()
				text-align center
				font-size 18px
				margin 10px 0 56px
				.table_small_span
					color #217AF9
			.table_div
				.link_a
					p
						white-space nowrap
						a
							color #2e384d
							text-decoration none
				.div_img
					width 50px
					height 50px
					img
						min-height 100%
						max-height 100%
						min-width 100%
						max-width 100%
						object-fit cover
					a
						color #2E384D
						text-decoration none
				.price_change
					width 100px
					img
						min-height 100%
						max-height 100%
						min-width 100%
						max-width 100%
						object-fit cover


	.partners
		width 100%
		position relative
		.partners_bg
			position absolute
			width 100%
			height 225px
			background #FBFBFE
		.partners_wrap
			center()
			padding-top 80px
			.partners_box
				// display flex
				margin-bottom 110px
				// justify-content space-between
			
				.partners_div
					width 70%
					height 238px
					border-radius 8px
					background white
					box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
					display flex
					justify-content center
					align-items center
					img
						min-height 70%
						min-width  70%
						max-height 70%
						max-width  70%
						object-fit cover

	.email
		height 553px
		width 100%
		background url("./../../assets/images/stobg.png") no-repeat 
		background-size cover
		padding 98px 91px
		.email_wrap
			center()
			.email_h3
				color #FFFFFF
				font-size 24px
				fontBold()
				text-align center
				margin-bottom 24px
			.email_p
				font-size 16px
				color #FFFFFF
				text-align center
				line-height 24px
				margin-bottom 47px
				fontMedium()
			.email_input_box
				height 56px
				width 460px
				display flex
				border-radius 0 44px 44px 0
				margin 0 auto
				justify-content space-between
				.email_input
					width 75%
				.email_input_button
					width 25%
					background #3794FC
					color white
					font-size 16px
					display flex
					align-items center
					justify-content center
					border-radius 0 44px 44px 0
					fontMedium()
					margin 0 auto
	.email_icon_box
		display flex
		justify-content space-between
		width 70%
		margin 0 auto
		margin-top 70px
		.email_icon_div
			width 10%
			img
				max-width 80%
				min-width 80%
				max-height 80%
				min-height 80%
				object-fit contain
			

</style>
