<template>
	<div class="basicinfo">
		<h3 class="basicinfo_h3">Basic Information</h3>
		<div class="basicinfo_form_box">

			<div class="basicinfo_input_box">
				<p class="basicinfo_input_label">Name</p>
				<div class="basicinfo_input">
					<el-input v-model="name" placeholder="name"></el-input>
				</div>
				<span class="basicinfo_input_modify">Modify</span>
			</div>

			<div class="basicinfo_input_box">
				<p class="basicinfo_input_label">Account</p>
				<div class="basicinfo_input">
					<el-input v-model="account" placeholder="name">Account</el-input>
				</div>
			</div>
		
			<div class="basicinfo_input_box">
				<p class="basicinfo_input_label">Currency</p>
				<div class="basicinfo_input">
					<el-input v-model="currency" placeholder="name">Currency</el-input>
				</div>
			</div>

			<p class="basicinfo_button">
				Determine
			</p>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			name: "",
			account: "",
			currency: ""
		}
	},
	methods:{
		
		
	}
}
</script>
<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
.basicinfo
	.basicinfo_h3
		color #3794FC
		font-size 16px
		height 56px
		line-height 56px
		border-bottom 2px solid #EBEEFD
		padding-left 10px
	.basicinfo_form_box
		height 86px
		line-height 86px
		.basicinfo_input_box
			display flex
			justify-content space-between
			fontMedium()
			font-size 16px
			border-bottom 2px solid #EBEEFD
			position relative
			.basicinfo_input_label
				color #8A8E9E
				width 17%
				text-align right
			.basicinfo_input
				width 76%
			.basicinfo_input_modify
				position absolute
				color #3794FC
				font-size 16px
				fontMedium()
				right 20px
			/deep/.el-input__inner
				color #343744
				border none
				font-size 16px


	.basicinfo_button
		width 140px
		height 54px
		line-height 54px
		color #fff
		text-align center
		fontMedium()
		background rgba(55,148,252,1)
		box-shadow 0px 12px 20px 0px rgba(27,107,222,0.37)
		border-radius 28px
		margin 0 auto
		margin-top 45px
	.basicinfo_button:hover
		background #1A2E44

</style>