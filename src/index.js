const props = {
  name: {
    type: String,
    default: "default",
  },
  color: {
    type: [String, undefined],
    default: undefined,
  },
  timeout: {
    type: [Number, undefined],
    default: undefined,
  },
  app: {
    type: Boolean,
    default: true,
  },
  bottom: {
    type: Boolean,
    default: false,
  },
  centered: {
    type: Boolean,
    default: false,
  },
  contentClass: {
    type: [String, undefined],
    default: undefined,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  elevation: {
    type: [Number, String, undefined],
    default: undefined,
  },
  height: {
    type: [Number, String, undefined],
    default: undefined,
  },
  left: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  minWidth: {
    type: [Number, String, undefined],
    default: undefined,
  },
  maxWidth: {
    type: [Number, String, undefined],
    default: undefined,
  },
  minHeight: {
    type: [Number, String, undefined],
    default: undefined,
  },
  maxHeight: {
    type: [Number, String, undefined],
    default: undefined,
  },
  multiLine: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: [Boolean, String, undefined],
    default: undefined,
  },
  shaped: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: "div",
  },
  text: {
    type: Boolean,
    default: false,
  },
  tile: {
    type: Boolean,
    default: false,
  },
  timeout: {
    type: [Number, String],
    default: 5e3,
  },
  top: {
    type: Boolean,
    default: false,
  },
  transition: {
    type: [Boolean, String],
    default: "v-snack-transition",
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  width: {
    type: [Number, String, undefined],
    default: undefined,
  },
};

const propsName = [];

for (const name in props) {
  propsName.push(name);
}

function toArray(array) {
  if ("length" in array) {
    return array;
  }

  return [array];
}

function mergeProps(a, b) {
  const current = {};

  propsName.forEach((name) => {
    current[name] = a[name];

    if (name in b) {
      current[name] = b[name];
    }
  });

  return current;
}

const VueToastGroup = {
  props: {
    ...props,
    prepend: {
      type: [String, undefined],
      default: undefined,
    },
    append: {
      type: [String, undefined],
      default: undefined,
    },
  },
  created() {
    const { name } = this;

    const toastProp = {
      value: false,
      $text: undefined,
      $html: undefined,
    };

    const props = {
      ...props,
      prepend: {
        type: [String, undefined],
        default: undefined,
      },
      append: {
        type: [String, undefined],
        default: undefined,
      },
    };

    for (const name in props) {
      toastProp[name] = props[name].default;
    }

    if ("action" in props) {
      toastProp.action = {
        icon: props.action?.icon || undefined,
        text: props.action?.text || undefined,
        onClick: props.action?.onClick || undefined,
      };
    }

    this.$set(this.$toasts, name, toastProp);
  },
  beforeDestroy() {
    this.$delete(this, this.name);
  },
  render(h) {
    return h(
      "div",
      toArray(this.$toasts[this.name] || []).map((item) => {
        return h("v-snackbar", {
          scopedSlots: {
            default: () =>
              h("div", [
                ...(item.prepend ? [h("v-icon", item.prepend)] : []),
                !!item.$html
                  ? h("span", {
                      domProps: {
                        innerHTML: item.$html,
                      },
                    })
                  : item.$text,
                ...(item.append ? [h("v-icon", item.append)] : []),
              ]),
            action: () =>
              item.action
                ? h(
                    "v-btn",
                    {
                      props: {
                        [item.action.icon ? "icon" : "text"]: true,
                      },
                      on: {
                        click: item.action.onClick || (() => {}),
                      },
                    },
                    [
                      item.action.icon
                        ? h("v-icon", item.action.icon)
                        : item.action.text,
                    ]
                  )
                : undefined,
          },
          props: {
            ...mergeProps(this, item),
            value: item.value,
          },
          on: {
            input($event) {
              item.value = $event;
            },
          },
        });
      }) /////
    );
  },
};

export default function (Vue) {
  const toasts = {};
  const toast = {
    show: (group, prop, color, prepend) => {
      if (arguments.length === 1) {
        prop = group;
        group = "default";
      }

      if (typeof prop === "string" || typeof prop === "number") {
        prop = {
          $text: prop + "",
        };
      }

      if (group in toasts) {
        toasts[group] = {
          ...toasts[group],
          ...prop,
          ...(color ? { color } : {}),
          ...props(prepend ? { prepend } : {}),
          value: true,
        };
      }
    },
    success: (group, prop) => {
      toast.show(group, prop, "success", "mdi-check-circle");
    },
    info: (group, prop) => {
      toast.show(group, prop, "info", "mdi-alert-circle-outline");
    },
    warn: (group, prop) => {
      toast.show(group, prop, "warning", "mdi-alert-outline");
    },
    error: (group, prop) => {
      toast.show(group, prop, "error", "mdi-alert-octagon-outline");
    },
  };
  Object.defineProperty(Vue.prototype, "_toasts", {
    get() {
      return toasts;
    },
  });
  Object.defineProperty(Vue.prototype, "$toast", {
    get() {
      return toast;
    },
  });

  Vue.mixin({
    beforeCreate() {
      Vue.util.defineReactive(this, "$toasts", this._toasts);
    },
  });

  Vue.component("vue-toast-group", VueToastGroup);
}
