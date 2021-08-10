function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayLikeToArray = createCommonjsModule(function (module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  module.exports = _arrayLikeToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(arrayLikeToArray);

var arrayWithoutHoles = createCommonjsModule(function (module) {
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }

  module.exports = _arrayWithoutHoles;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  module.exports = _iterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(iterableToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  module.exports = _unsupportedIterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(unsupportedIterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  module.exports = _nonIterableSpread;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }

  module.exports = _toConsumableArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _toConsumableArray = unwrapExports(toConsumableArray);

var defineProperty = createCommonjsModule(function (module) {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  module.exports = _defineProperty;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _defineProperty = unwrapExports(defineProperty);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var props = {
  name: {
    type: String,
    "default": "default"
  },
  color: {
    type: [String, undefined],
    "default": undefined
  },
  app: {
    type: Boolean,
    "default": true
  },
  bottom: {
    type: Boolean,
    "default": false
  },
  centered: {
    type: Boolean,
    "default": false
  },
  contentClass: {
    type: [String, undefined],
    "default": undefined
  },
  dark: {
    type: Boolean,
    "default": false
  },
  elevation: {
    type: [Number, String, undefined],
    "default": undefined
  },
  height: {
    type: [Number, String, undefined],
    "default": undefined
  },
  left: {
    type: Boolean,
    "default": false
  },
  light: {
    type: Boolean,
    "default": false
  },
  minWidth: {
    type: [Number, String, undefined],
    "default": undefined
  },
  maxWidth: {
    type: [Number, String, undefined],
    "default": undefined
  },
  minHeight: {
    type: [Number, String, undefined],
    "default": undefined
  },
  maxHeight: {
    type: [Number, String, undefined],
    "default": undefined
  },
  multiLine: {
    type: Boolean,
    "default": false
  },
  outlined: {
    type: Boolean,
    "default": false
  },
  right: {
    type: Boolean,
    "default": false
  },
  rounded: {
    type: [Boolean, String, undefined],
    "default": undefined
  },
  shaped: {
    type: Boolean,
    "default": false
  },
  tag: {
    type: String,
    "default": "div"
  },
  text: {
    type: Boolean,
    "default": false
  },
  tile: {
    type: Boolean,
    "default": false
  },
  timeout: {
    type: [Number, String],
    "default": 5e3
  },
  top: {
    type: Boolean,
    "default": false
  },
  transition: {
    type: [Boolean, String],
    "default": "v-snack-transition"
  },
  vertical: {
    type: Boolean,
    "default": false
  },
  width: {
    type: [Number, String, undefined],
    "default": undefined
  }
};
var propsName = [];

for (var name in props) {
  propsName.push(name);
}

function toArray(array) {
  if ("length" in array) {
    return array;
  }

  return [array];
}

function mergeProps(a, b) {
  var current = {};
  propsName.forEach(function (name) {
    current[name] = a[name];

    if (name in b) {
      current[name] = b[name];
    }
  });
  return current;
}

var VueToastGroup = {
  props: _objectSpread(_objectSpread({}, props), {}, {
    prepend: {
      type: [String, undefined],
      "default": undefined
    },
    append: {
      type: [String, undefined],
      "default": undefined
    }
  }),
  created: function created() {
    var name = this.name;
    var toastProp = {
      value: false,
      $text: undefined,
      $html: undefined
    };

    var props = _objectSpread(_objectSpread({}, props), {}, {
      prepend: {
        type: [String, undefined],
        "default": undefined
      },
      append: {
        type: [String, undefined],
        "default": undefined
      }
    });

    for (var _name in props) {
      toastProp[_name] = props[_name]["default"];
    }

    if ("action" in props) {
      var _props$action, _props$action2, _props$action3;

      toastProp.action = {
        icon: ((_props$action = props.action) === null || _props$action === void 0 ? void 0 : _props$action.icon) || undefined,
        text: ((_props$action2 = props.action) === null || _props$action2 === void 0 ? void 0 : _props$action2.text) || undefined,
        onClick: ((_props$action3 = props.action) === null || _props$action3 === void 0 ? void 0 : _props$action3.onClick) || undefined
      };
    }

    this.$set(this.$toasts, name, toastProp);
  },
  beforeDestroy: function beforeDestroy() {
    this.$delete(this, this.name);
  },
  render: function render(h) {
    var _this = this;

    return h("div", toArray(this.$toasts[this.name] || []).map(function (item) {
      return h("v-snackbar", {
        scopedSlots: {
          "default": function _default() {
            return h("div", [].concat(_toConsumableArray(item.prepend ? [h("v-icon", item.prepend)] : []), [item.$html ? h("span", {
              domProps: {
                innerHTML: item.$html
              }
            }) : item.$text], _toConsumableArray(item.append ? [h("v-icon", item.append)] : [])));
          },
          action: function action() {
            return item.action ? h("v-btn", {
              props: _defineProperty({}, item.action.icon ? "icon" : "text", true),
              on: {
                click: item.action.onClick || function () {}
              }
            }, [item.action.icon ? h("v-icon", item.action.icon) : item.action.text]) : undefined;
          }
        },
        props: _objectSpread(_objectSpread({}, mergeProps(_this, item)), {}, {
          value: item.value
        }),
        on: {
          input: function input($event) {
            item.value = $event;
          }
        }
      });
    }) /////
    );
  }
};
function index (Vue) {
  var _arguments = arguments;
  var toasts = {};
  var toast = {
    show: function show(group, prop, color, prepend) {
      if (_arguments.length === 1) {
        prop = group;
        group = "default";
      }

      if (typeof prop === "string" || typeof prop === "number") {
        prop = {
          $text: prop + ""
        };
      }

      if (group in toasts) {
        toasts[group] = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, toasts[group]), prop), color ? {
          color: color
        } : {}), props(prepend ? {
          prepend: prepend
        } : {})), {}, {
          value: true
        });
      }
    },
    success: function success(group, prop) {
      toast.show(group, prop, "success", "mdi-check-circle");
    },
    info: function info(group, prop) {
      toast.show(group, prop, "info", "mdi-alert-circle-outline");
    },
    warn: function warn(group, prop) {
      toast.show(group, prop, "warning", "mdi-alert-outline");
    },
    error: function error(group, prop) {
      toast.show(group, prop, "error", "mdi-alert-octagon-outline");
    }
  };
  Object.defineProperty(Vue.prototype, "_toasts", {
    get: function get() {
      return toasts;
    }
  });
  Object.defineProperty(Vue.prototype, "$toast", {
    get: function get() {
      return toast;
    }
  });
  Vue.mixin({
    beforeCreate: function beforeCreate() {
      Vue.util.defineReactive(this, "$toasts", this._toasts);
    }
  });
  Vue.component("vue-toast-group", VueToastGroup);
}

export { index as default };
