<template>
	<div>
		<div class="detail_banner_echart" ref="detail_banner_pie">
				
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
				legend: {
					type: 'scroll',
					orient: 'vertical',
					right: '0',
					top: 'center',
					itemGap: 30,
					selectedMode: false,
					icon: 'circle',
					data: ['南京a', '南京b', '南京c', '南京d', '南京e'],
					itemWidth: 10,
					textStyle: {
						color: '#343744',
						fontSize: 16,
						fontFamily: "Montserrat-Medium",
						rich: {
							uname: {
								width: 200
							},
							unum: {
								color: '#343744',
								width: 40,
								align: 'right'
							}
						}
					},
					formatter(name) {
							return `{uname|${name}}{unum|1132}`
					}
				},
				color: ['#2E5BFF ', '#8C54FF', '#5D7092', '#5AD8A6', '#F7C137'],
				series: [
					{
						name: '姓名',
						type: 'pie',
						radius: '80%',
						center: ['22%', '50%'],
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
	.detail_banner_echart
		width 100%
		height 400px
		box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
		border-radius 4px
		padding-left 82px
		padding-right 91px
</style>
