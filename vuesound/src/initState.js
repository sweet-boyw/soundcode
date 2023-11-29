import { observer } from "./observe/index.js"

export function initState(vm) {
    let opts = vm.$options
    // console.log(opts)
    if (opts.props) {
        initProps()
    }
    if (opts.data) {
        initData(vm)
    }
    if (opts.watch) {
        initWatch()
    }
    if (opts.computed) {
        initComputed()
    }
    if (opts.methods) {
        initMethods()
    }
}

// 初始化props
function initProps() {

}

// 初始化data
/**
 * 
 * @param {*} vm.data
 * （1） data是对象
 * （2） data是函数 
 */
function initData(vm) {
    // console.log(vm)
    // console.log("初始化data", vm.$options.data)
    let data = vm.$options.data
    data = vm._data = typeof data === "function" ? data.call(vm) : data
    // 对数据进行劫持
    observer(data)
}

// 初始化computed
function initComputed() {

}

// 初始化watch
function initWatch() {

}

// 初始化methods
function initMethods() {

}