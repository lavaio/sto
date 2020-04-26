export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const getUserInfoApi = $axios.create({
    
  })
  // Inject to context as $api
	inject('getUserInfoApi', getUserInfoApi)
	

	const getPhoneCodeApi =  $axios.create({
    headers: {
      'Content-Type':  'application/x-www-form-urlencoded'
    }
	})
	inject('getPhoneCodeApi', getPhoneCodeApi)
	
}
