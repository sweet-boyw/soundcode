import { initState } from "./initState"

export function initMixn(Vue) {
    Vue.prototype._init = function (options) {
        // console.log(options)
        let vm = this
        vm.$options = options
        // 初始化状态
        initState(vm)
    }
}
