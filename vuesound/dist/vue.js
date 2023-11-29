(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  function observer(data) {
    // 处理对象
    if (_typeof(data) != 'object' || data == null) {
      return data;
    }
    return new Observer(data);
  }
  var Observer = /*#__PURE__*/function () {
    function Observer(value) {
      _classCallCheck(this, Observer);
      this.walk(value);
    }
    _createClass(Observer, [{
      key: "walk",
      value: function walk(data) {
        var keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = data[key];
          defineReactive(data, key, value);
        }
      }
    }]);
    return Observer;
  }(); // vue数据劫持方法
  function defineReactive(data, key, value) {
    observer(value); // 深度劫持
    Object.defineProperty(data, key, {
      get: function get() {
        console.log("获取");
        return value;
      },
      set: function set(newValue, oldValue) {
        console.log("设置");
        if (newValue === value) return;
        observer(newValue);
        value = newValue;
      }
    });
  }

  function initState(vm) {
    var opts = vm.$options;
    // console.log(opts)
    if (opts.props) ;
    if (opts.data) {
      initData(vm);
    }
    if (opts.watch) ;
    if (opts.computed) ;
    if (opts.methods) ;
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
    var data = vm.$options.data;
    data = vm._data = typeof data === "function" ? data.call(vm) : data;
    // 对数据进行劫持
    observer(data);
  }

  function initMixn(Vue) {
    Vue.prototype._init = function (options) {
      // console.log(options)
      var vm = this;
      vm.$options = options;
      // 初始化状态
      initState(vm);
    };
  }

  function Vue(options) {
    // console.log(options)
    this._init(options);
  }
  initMixn(Vue);

  return Vue;

}));
//# sourceMappingURL=vue.js.map
