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

.buttonStyle{
  padding: 10px 15px;
	color: #ffffff;
	font-size: 14px;
	display: inline-block;
	background:linear-gradient(90deg,rgba(49,205,186,1) 0%,rgba(40,170,226,1) 100%);
	padding: 15px 30px;
	border-radius: 30px;
	font-family: Montserrat-Medium;
	box-shadow: 0px 12px 20px 0px rgba(27,107,222,0.37);
}

.buttonStyle:hover {
  color: #fff;
  background: #2F3F56;
}

.hoverStyle::before, .hoverStyle::after
{
	content: "" ;
	display: inline-block;
	width: 36px;
	height: 4px;
}

.hoverStyle::before{
	margin-right: 12px;
	background:rgba(33,122,249,1) linear-gradient(90deg,rgba(49,205,186,1) 0%,rgba(40,170,226,1) 100%);
}
.hoverStyle::after{
	margin-left: 12px;
	background:rgba(33,122,249,1) linear-gradient(90deg,rgba(40,170,226,1) 0%,rgba(49,205,186,1) 100%);
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
