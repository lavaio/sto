# sto

> My magnificent Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

(1)
	使用 http://192.168.0.101:8000/captcha  来初始化 图片验证码 ，这个时候，有个图片验证码

（2） 用户 输完手机号，要发送验证码   http://{{host}}:{{port}}/auth/code?id=vqhjbH1XACP6igtj9GM0&digits=406827  
	这个id  就是 图片验证码的id  表单形式
	需要再传入 一个手机号码

（4） 登录  JSON
		登录的时候，参数为 手机号 和手机 验证码 

(5) getUserInfo  jwtToken放请求头里面 HEAD



eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJsb2dpbm5hbWUiOiIwYXNQNWFHbXpmZGJTREZFVkJSWjRWTlYwanNqZEZVNHNjMHZUZWswZkbS9JUWE2WHN1IiwiZXhwIjoxNTg3ODc4MTAwLCJpc3MiOiJhaW1zIn0.X8y-KiqDeMkgxK5h2ZOO21GvNFgk-u46shMIKhBdOfc