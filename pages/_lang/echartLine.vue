<template>
	<div>
		<h4 class="detail_banner_image_box_right_h4">RealT Price History</h4>
		<p class="detail_banner_image_box_right_p">
			<i class="iconfont icon-exchange"/>
			<i class="iconfont icon-exchange"/>
			<i class="iconfont icon-exchange"/>
			<i class="iconfont icon-exchange"/>
		</p>
		<div class="detail_banner_echart" ref="detail_banner_echart">
				
		</div>
	</div>
</template>
<script>
export default {
	mounted () {
    this.echartsInit()
	},
	methods: {
		echartsInit () {
      // 找到容器
      let myChart = this.$echarts.init(this.$refs.detail_banner_echart)
      myChart.setOption({
        // title: {text: '在Vue中使用echarts'},
				tooltip: {},
				grid: {
					left: "5%",
					top: "3%",
					bottom: "10%",
					right: "2%",
				},
        xAxis: {
					show: true,
					nameTextStyle: "#B0BAC9",
					boundaryGap: false,
					axisLine: {
						lineStyle: {
							color: "#B0BAC9",
						}
					},
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
				},
			
        yAxis: {
					show: true,
					splitLine:{
						lineStyle: {
							type: "dashed",
						},
						show: true,
					},
					axisLine: {
						lineStyle: {
							color: "#B0BAC9",
						}
					}
				},
        series: [{
          name: '销量',
          type: 'line',
					data: [5, 20, 36, 10, 10, 20],
					symbolSize: 8,
					lineStyle: {
						color: "#2E5BFF",
					},
					itemStyle: {
						borderColor: "#2E5BFF",
					},
					markLine: {
						symbol: ['none', 'none'],
						label: {show: false},
						data: [
								{xAxis: 1},
								{xAxis: 2},
								{xAxis: 3},
								{xAxis: 4},
								{xAxis: 5},
								{xAxis: 6},
								{xAxis: 7},
						],
						lineStyle: {
							color: "#D8D8D8"
						}
					},
					areaStyle: {
						color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(222,229,255,1)'
						}, {
								offset: 1,
								color: 'rgba(46,91,255,0)'
						}])
					}
        }]
      })
    },
	}
}
</script>
<style lang="stylus"  scoped>
.detail_banner_image_box_right_h4
	text-align center
	color #343744
	font-size 14px
	fontMedium()
	margin-top 20px
.detail_banner_image_box_right_p
	text-align right
	margin-top 10px
.detail_banner_echart
	margin-top 15px
	height 230px
	width 100%
</style>
