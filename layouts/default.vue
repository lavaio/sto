<template>
  <div>
		<Header />
    <nuxt />
		<Footer />
  </div>
</template>
<script>
import Header from "./../components/Header.vue";
import Footer from './../components/Footer'
export default {
  components: {
		Header,
    Footer
	},

}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.hoverStyle::before, .hoverStyle::after
{
	content: "" ;
	background: #217AF9;
	display: inline-block;
	width: 36px;
	height: 4px;
}
.hoverStyle::before{
	margin-right: 12px;
}
.hoverStyle::after{
	margin-left: 12px;
}
.history_h3{
	color: #343744;
	font-size: 24px;
	font-family: Montserrat-Medium;
	text-align: center;
	margin-bottom: 56px;
	margin-top: 128px;
}
			
</style>
