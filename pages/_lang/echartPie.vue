<template>
	<div class="pie_box">
		<div class="detail_banner_echart" ref="detail_banner_pie">
				
		</div>
		<div class="pie_list">
			<div class="pie_list_div" v-for="(item,index) in listData" :key="index">
				<div :class="['pie_list_div_left', item.backgroundColor]">{{item.name}}</div>
				<div class="pie_list_div_right">{{item.value}}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			listData:[{
				name: "Reserve",
				value: "10%",
				backgroundColor:"blueColor",
			},{
				name: "Reserve",
				value: "20%",
				backgroundColor:"purpleColor",
			},{
				name: "Reserve",
				value: "30%",
				backgroundColor:"greyColor",
			},{
				name: "Reserve",
				value: "40%",
				backgroundColor:"greenColor",
			},{
				name: "Reserve",
				value: "10%",
				backgroundColor:"yellowColor",
			}]
		}
	},
	mounted () {
		this.echartsInit()
	},
	methods: {
		echartsInit () {
      // 找到容器
      let myChart = this.$echarts.init(this.$refs.detail_banner_pie)
      myChart.setOption({
				title: {
					text: '',
					subtext: '',
					textStyle: {
							fontSize: 16,
							color: '#999',
							lineHeight: 20
					},
					subtextStyle: {
							fontSize: 28,
							color: '#333'
					},
					textAlign: 'center',
					left: '39.8%',
					top: '45%'
				},
				tooltip: {
					trigger: 'item',
				},
				// legend: {
				// 	type: 'scroll',
				// 	orient: 'vertical',
				// 	right: '0',
				// 	top: 'center',
				// 	itemGap: 30,
				// 	selectedMode: false,
				// 	icon: 'circle',
				// 	data: ['南京a', '南京b', '南京c', '南京d', '南京e'],
				// 	itemWidth: 10,
				// 	textStyle: {
				// 		color: '#343744',
				// 		fontSize: 16,
				// 		fontFamily: "Montserrat-Medium",
				// 		rich: {
				// 			uname: {
				// 				width: 200
				// 			},
				// 			unum: {
				// 				color: '#343744',
				// 				width: 40,
				// 				align: 'right'
				// 			}
				// 		}
				// 	},
				// 	formatter(name) {
				// 			return `{uname|${name}}{unum|1132}`
				// 	}
				// },
				color: ['#2E5BFF ', '#8C54FF', '#5D7092', '#5AD8A6', '#F7C137'],
				series: [
					{
						name: '姓名',
						type: 'pie',
						radius: '80%',
						center: ['40%', '50%'],
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						itemStyle: {
							borderWidth: 1,
							borderColor: '#fff'
            },
						data: [
							{name: '南京a', value: 100},
							{name: '南京b', value: 100},
							{name: '南京c', value: 100},
							{name: '南京d', value: 100},
							{name: '南京e', value: 100},
						],
					}
				]
      })
    },
	}
}
</script>
<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
	.pie_box
		display flex
		justify-content space-between
		padding-right 90px
		align-items center
		box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
		.detail_banner_echart
			width 60%
			height 400px
			border-radius 4px
			padding-left 82px
		.pie_list
			width 35%
			.pie_list_div
				display flex
				justify-content space-between
				border-bottom 1px solid #EBEEFD
				font-size 16px
				color #343744
				fontMedium()
				padding 10px 5px 10px 3px
				.pie_list_div_left::before
					content ""
					width 10px
					height 10px
					border-radius 50%
					display inline-block
					margin-right 10px
				.blueColor::before
					background #2E5BFF
				.purpleColor::before
					background #8C54FF
				.greyColor::before
					background #7585A2
				.greenColor::before
					background #73DEB3
				.yellowColor::before
					background #F7C137

				


</style>
