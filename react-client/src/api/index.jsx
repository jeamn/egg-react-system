import http from 'flyio'

//添加请求拦截器
http.interceptors.request.use(request => {
    request.headers["Content-Type"]="application/x-www-form-urlencoded";
    request.baseURL = 'http://localhost:7001/'
    request.timeout = 10000
    request.body = { ...request.body }
    return request
})
http.interceptors.response.use((response) => {
    if(Number(response.status) === 200){
        return response.data
    }
})

// export default http
export default {
    async get(){
        return await http.get(...Array.from(arguments)).catch(e => e)
    }
}