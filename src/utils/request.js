import axios from 'axios'

const request = axios.create({
    // baseURL: 'http://localhost:9090',
    baseURL: 'http://api.wanle.vip',
    timeout:5000,
});

//响应拦截器
request.interceptors.response.use(response => {
    return response.data;
})

export default request