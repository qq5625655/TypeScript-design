<template>
  <div class="checkboxGroup-wrap">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CheckboxGroup',

  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    }
    // size: {
    //   validator(value) {
    //     return oneOf(value, ["small", "large", "default"]);
    //   },
    //   default() {
    //     return !this.$IVIEW || this.$IVIEW.size === ""
    //       ? "default"
    //       : this.$IVIEW.size;
    //   }
    // }
  },
  data() {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  computed: {
    // classes() {
    //   return [
    //     `${prefixCls}`,
    //     {
    //       [`ivu-checkbox-${this.size}`]: !!this.size
    //     }
    //   ];
    // }
  },
  mounted() {
    this.updateModel(true);
  },
  methods: {
    updateModel(update) {
      if (this.$children && this.$children.length > 0) {
        const { value } = this;
        this.$children.forEach((child) => {
          // 将组件里面的数组改为一个数组
          child.model = value;
          if (update) {
            child.currentValue = value.indexOf(child.value) >= 0;
            child.group = true;
          }
        });
      }

      // if (this.childrens) {
      //   const { value } = this;
      //   this.childrens.forEach(child => {
      //     child.model = value;
      //     if (update) {
      //       child.currentValue = value.indexOf(child.label) >= 0;
      //       child.group = true;
      //     }
      //   });
      // }
    },
    change(data) {
      this.currentValue = data;
      this.$emit('input', data);
      // this.$emit("on-change", data);
      // this.dispatch("FormItem", "on-form-change", data);
      this.dispatch('formItem', 'on-form-change');
    },
    dispatch: function(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    }
  },
  watch: {
    value() {
      this.updateModel(true);
    }
  }
};
</script>
<style lang="scss">
.checkboxGroup-wrap {
  overflow: auto;
}
</style>
