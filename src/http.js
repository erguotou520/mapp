import axios from 'axios'
import { param } from 'vtc'
import Cache from './cache'
const httpCache = Cache.create('http')

export default function createDefaultInstance (hook = {
  beforeRequest: () => {},
  afterRequest: () => {}
}) {
  const instance = axios.create({
    baseURL: 'http://xxxx.xxx.com/v1/api',
    timeout: 10000,
    paramsSerializer: params => param(params),
    transformRequest: [data => param(data)],
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
  instance.interceptors.request.use(config => {
    // 支持配置跳过loading
    if (config && config.params && config.params.__skip_loading__) {
      delete config.params.__skip_loading__
      return config
    }
    // LOADING start
    // store.dispatch('changeLoading', true)
    return config
  }, err => {
    return Promise.reject(err)
  })
  instance.interceptors.response.use(res => {
    // LOADING finish
    // store.dispatch('changeLoading', false)
    if (res.data.result !== 'success') {
      return Promise.reject(res.data.error)
    }
    if (res.config && res.config.useCache) {
      let key = res.config.url.replace(new RegExp(`^${res.config.baseURL}/`), '')
      if (res.config.params) {
        key = `${key}?${param(res.config.params)}`
      }
      httpCache.put(key, res.data)
    }
    return Promise.resolve(res.data)
  }, err => {
    // store.dispatch('changeLoading', false)
    console.log(new Date().toLocaleString(), err)
    return Promise.reject(err)
  })
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  // cache get method
  const _get = instance.get
  instance.get = (url, params, config = {}) => {
    config.params = params
    // 是否使用缓存数据
    if (!config.useCache) {
      return _get(url, config)
    }
    // 读取缓存数据
    const stored = httpCache.get(`${url}?${param(config.params)}`)
    if (stored) {
      return Promise.resolve(stored)
    } else {
      // 没有缓存数据的情况下仍然发送请求
      return _get(url, config)
    }
  }
}
