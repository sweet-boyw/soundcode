export function observer(data) {
    // 处理对象
    if (typeof data != 'object' || data == null) {
        return data;
    }
    return new Observer(data)
}
class Observer {
    constructor(value) {
        this.walk(value)
    }
    walk(data) {
        let keys = Object.keys(data)
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            let value = data[key]
            defineReactive(data, key, value)
        }
    }
}
// vue数据劫持方法
function defineReactive(data, key, value) {
    Object.defineProperty(data, key, {
        get() {
            console.log("获取")
            return value
        },
        set(newValue, oldValue) {
            console.log("设置")
            if (newValue === value) return
            value = newValue
        }
    })
}