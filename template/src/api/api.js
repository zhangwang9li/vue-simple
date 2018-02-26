import axios from 'axios'

let base = config.ip // 打包地址http://192.168.0.200:9001
// let base = 'http://192.168.8.18:9003' // 打包地址http://192.168.0.200:9001
// let base = '/api' // 打包地址http://192.168.0.200:9001
let baseURL = 'http://211.101.37.245:9006'
const defaults = {
  baseURL: base + '',
  headers: {
    'Authorization': '',
    'No-Cache': '',
    'X-Requested-With': '',
    'If-Modified-Since': '',
    'Pragma': '',
    'Last-Modified': '',
    'Cache-Control': '',
    'Expires': '',
    'Content-Type': 'application/json',
    'X-E4M-With': '',
    post: {
      'Content-Type': 'application/json'
    },
    get: {
      'Content-Type': 'application/json'
    }
  }
}
Object.assign(axios.defaults, defaults)
// axios.defaults.withCredentials = true
// console.log(axios.defaults)
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = sessionStorage.getItem('token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401: case 403:
          // 返回 401 清除token信息并跳转到登录页面
          // sessionStorage.clear()
          // window.location.href = '/'
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  })

// 调试修修改
export const login = (urlpart) => { return axios.post(`/user/login`, urlpart).then(res => res) }// 登录
export const getDict = () => { return axios.get(`/dict/getDict`).then(res => res) }// 获取枚举下拉菜单数据（mcode、mtype）
export const getCampanySelect = () => { return axios.get(`/dict/getCampany`).then(res => res) }// 获取公司/企业下拉菜单数据
export const getGnss = (param) => { return axios.get(`/mobileye/getGnss?${param}`).then(res => res) }// 轨迹回放
export const getMobileCount = (param) => { return axios.get(`/countmobileye/getMobileCount?${param}`).then(res => res) }// 驾驶行为分析列表
export const getMobileByPlateNumber = (param) => { return axios.get(`/countmobileye/getMobileByPlateNumber?${param}`).then(res => res) }// 驾驶行为分析详情查看
export const getWarnTotal = (param) => { return axios.get(`/countmobileye/getWarnTotal?${param}`).then(res => res) }// 综合统计、
export const getPersons = (urlpart) => { return axios.get(`/person/getPersons?${urlpart}`).then(res => res) }// 查询驾驶员集合

export const getCompanies = (urlpart) => { return axios.get(baseURL + `/jcsj/companies?${urlpart}`).then(res => res) }// 查询企业集合
export const postCompanies = (param) => { return axios.post(baseURL + `/jcsj/companies`, param).then(res => res) }// 新增企业
export const deleteCompanies = (urlpart) => { return axios.delete(baseURL + `/jcsj/companies/${urlpart}`).then(res => res) }// 删除企业集合
export const getCompanieOne = (urlpart) => { return axios.get(baseURL + `/jcsj/companies/${urlpart}`).then(res => res) }// 查询企业详情
export const updateCompanieOne = (urlpart, param) => { return axios.put(baseURL + `/jcsj/companies/${urlpart}`, param).then(res => res) }// 修改企业

export const getCargroup = (urlpart) => { return axios.get(baseURL + `/jcsj/cargroup?${urlpart}`).then(res => res) }// 查询车队集合
export const postCargroup = (param) => { return axios.post(baseURL + `/jcsj/cargroup`, param).then(res => res) }// 新增车队
export const deleteCargroup = (urlpart) => { return axios.delete(baseURL + `/jcsj/cargroup/${urlpart}`).then(res => res) }// 删除车队
export const getCargroupOne = (urlpart) => { return axios.get(baseURL + `/jcsj/cargroup/${urlpart}`).then(res => res) }// 查询车队详情
export const updateCargroupOne = (urlpart, param) => { return axios.put(baseURL + `/jcsj/cargroup/${urlpart}`, param).then(res => res) }// 修改车队

export const getCars = (urlpart) => { return axios.get(baseURL + `/jcsj/cars?${urlpart}`).then(res => res) }// 查询车辆集合
export const postCars = (param) => { return axios.post(baseURL + `/jcsj/cars`, param).then(res => res) }// 新增车队
export const deleteCars = (urlpart) => { return axios.delete(baseURL + `/jcsj/cars?${urlpart}`).then(res => res) }// 删除车队
export const getCarsOne = (urlpart) => { return axios.get(baseURL + `/jcsj/cars/${urlpart}`).then(res => res) }// 查询车队详情
export const updateCarsOne = (urlpart, param) => { return axios.put(baseURL + `/jcsj/cars/${urlpart}`, param).then(res => res) }// 修改车队

export const getCargroupTree = () => { return axios.get(baseURL + `/jcsj/companyTree`).then(res => res) }// 查询企业-车队树

export const getDriver = (urlpart) => { return axios.get(baseURL + `/jcsj/driver?${urlpart}`).then(res => res) }// 查询驾驶员集合
export const getUsers = (urlpart) => { return axios.get(baseURL + `/yhqx/users?${urlpart}`).then(res => res) }// 查询用户集合
export const getRoad = (urlpart) => { return axios.get(baseURL + `/jcsj/route?${urlpart}`).then(res => res) }// 查询路线集合
