// 永久存储
const TTL_FOREVER = 0
const ls = window.localStorage
/**
 * 数据缓存，可以指定缓存的有效期，也可以设置为永久的
 */
class Cache {
  constructor (namspace) {
    this.namspace = `__cache_${namspace}`
    const stored = JSON.parse(ls.getItem(this.namspace))
    this.map = stored ? stored.map : {}
    this.ttl = stored ? stored.ttl : {}
  }

  // 默认ttl为30000秒
  put (key, value, ttl = 30000) {
    this.map[key] = value
    this.ttl[key] = ttl === TTL_FOREVER ? TTL_FOREVER : new Date().getTime() + ttl * 1000
    ls.setItem(this.namspace, JSON.stringify({ map: this.map, ttl: this.ttl }))
  }

  get (key) {
    const ttl = this.ttl[key]
    // value valid when time < ttl or no ttl
    if (ttl === TTL_FOREVER || new Date().getTime() <= ttl) {
      return this.map[key]
    }
    return null
  }

  clear () {
    this.map = {}
    this.ttl = {}
    ls.removeItem(this.namspace)
  }

  keys () {
    return Object.keys(this.map)
  }

  size () {
    return this.keys().length
  }
}

export default {
  // 根据命名空间创建一个缓存
  create (namspace) {
    return new Cache(namspace)
  },
  // 根据命名空间和键值获取value
  get (namspace, key) {
    const stored = ls.getItem(`__cache_${namspace}`)
    if (stored) {
      const json = JSON.parse(stored)
      const ttl = json.ttl[key]
      // value valid when time < ttl or no ttl
      if (ttl === TTL_FOREVER || new Date().getTime() <= ttl) {
        return json.map[key]
      }
      return null
    }
    return null
  }
}
