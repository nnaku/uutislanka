import axios from 'axios'

let httpClient = axios.create({
  baseURL: '/api',
});

// Add a request interceptor
httpClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  let {params, url, baseURL} = config
  const key = url.replace(baseURL,"")
  config.params = {
    ...params, 
    defaults: JSON.parse(localStorage.getItem(key)),
    ignore: JSON.parse(localStorage.getItem('ignore'))
  }
  return config;
  
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
httpClient.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default httpClient