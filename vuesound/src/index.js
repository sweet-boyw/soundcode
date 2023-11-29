import { initMixn } from "./init";

function Vue(options) {
    // console.log(options)
    this._init(options)
}
initMixn(Vue)
export default Vue;