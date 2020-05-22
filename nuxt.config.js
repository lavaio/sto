let target ;
if (process.env.NODE_ENV === 'development') {
	target = 'http://47.244.223.4:8081'
} else {
  target = 'http://47.244.223.4:8081/'
}
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
			{ "http-equiv":"Content-Security-Policy", content:"upgrade-insecure-requests"}
    ],
    link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: '//at.alicdn.com/t/font_1759757_p06ap9ffk8.css'}
		],
		script: [
      // { src: '//at.alicdn.com/t/font_1759757_hwm0bnetmr4.js', async: true },
    ]
	},
	server: {
    port: 5000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
		'~/assets/styles/element.styl',
		'vant/lib/index.css',
		'swiper/css/swiper.css'
	],
	router: {
		middleware: "i18n",
		// base: '/'
	},
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
		{src: '@/plugins/element-ui', ssr: true},
		{ src: '~/plugins/vant', ssr: true },
		'~/plugins/i18n.js',
		'~plugins/echarts.js',
		{ src: "~/plugins/vue-awesome-swiper.js", ssr: false },
		'~/plugins/axios'
	],
	
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
		'@nuxtjs/axios',
		'@nuxtjs/proxy',
	],
	axios: {
		// proxyHeaders: false
		proxy: true,
		// prefix: '/api',
	},
	proxy: {
		// '/cpi': {
		// 	"target": "http://47.244.223.4:8081",
    //   "pathRewrite": {
    //     '^/cpi': ''
		// 	},
		// },
	},

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_module)/
        })
      }
    }
  }
}
