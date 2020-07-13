export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const getUserInfoApi = $axios.create({
		validateStatus: function validateStatus(status) {
			return status >= 200 ;
		}
  })
  // Inject to context as $api
	inject('getUserInfoApi', getUserInfoApi)


	const customeCode = $axios.create({
		validateStatus: function validateStatus(status) {
			return status >= 200 ;
		}
  })
	inject('customeCode', customeCode)



	const getPhoneCodeApi =  $axios.create({
    headers: {
      'Content-Type':  'application/x-www-form-urlencoded'
		},
	
	})
	inject('getPhoneCodeApi', getPhoneCodeApi)
	
}
