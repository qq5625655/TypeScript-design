<template>
  <span :class="checkboxClasses">
    <!-- class="ant-checkbox"
    :class="{'ant-checkbox-checked': currentValue ,'ant-checkbox-disabled': disabled}" -->
    <input
      v-if="group"
      @change="changeItem"
      type="checkbox"
      class="ant-checkbox-input"
      v-model="model"
      :value="label"
      :disabled="disabled"
    />
    <input
      v-else
      type="checkbox"
      class="ant-checkbox-input"
      :disabled="disabled"
      :checked="currentValue"
      @change="changeItem"
    />
    <span class="ant-checkbox-inner"></span>
  </span>
</template>
<script>
export default {
  props: {
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 将this.value复制给currentValue时，是初始化的，后面this.value变化的时候currentValue不会变化.
      currentValue: this.value,
      model: []
    };
  },
  computed: {
    checkboxClasses() {
      return [
        `ant-checkbox`,
        {
          [`ant-checkbox-checked`]: this.value,
          [`ant-checkbox-disabled`]: this.disabled
        }
      ];
    }
  },
  methods: {
    changeItem(item) {
      if (this.disabled) {
        return;
      }

      this.currentValue = item.target.checked;

      if (this.group) {
        this.$parent.change(this.model);
      }
      this.$emit('input', this.currentValue);
      this.$emit('onChnage', this.currentValue);
    }
  },
  mounted() {
    if (this.$parent.$options.name === 'CheckboxGroup') {
      this.group = true;
    }
    if (this.group) {
      this.$parent.updateModel(true);
    }
  }
};
</script>
<style lang="scss" scoped>
.ant-checkbox {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  position: relative;
  top: -0.09em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  .ant-checkbox-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
  .ant-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    border-collapse: separate;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &::after {
      position: absolute;
      top: 50%;
      left: 22%;
      display: table;
      width: 5.71428571px;
      height: 9.14285714px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      -webkit-transform: rotate(45deg) scale(0) translate(-50%, -50%);
      -ms-transform: rotate(45deg) scale(0) translate(-50%, -50%);
      transform: rotate(45deg) scale(0) translate(-50%, -50%);
      opacity: 0;
      -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
      transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
      content: ' ';
    }
  }
}
.ant-checkbox-checked {
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1890ff;
    border-radius: 2px;
    visibility: hidden;
    -webkit-animation: antCheckboxEffect 0.36s ease-in-out;
    animation: antCheckboxEffect 0.36s ease-in-out;
    -webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    content: '';
  }

  .ant-checkbox-inner {
    background-color: #1890ff;
    border-color: #1890ff;
  }
  .ant-checkbox-inner::after {
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(45deg) scale(1) translate(-50%, -50%);
    -ms-transform: rotate(45deg) scale(1) translate(-50%, -50%);
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    opacity: 1;
    -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    content: ' ';
  }
}
.ant-checkbox-disabled {
  .ant-checkbox-inner {
    background-color: #f5f5f5;
    border-color: #d9d9d9 !important;
  }
  .ant-checkbox-input {
    cursor: not-allowed;
  }
}
</style>
