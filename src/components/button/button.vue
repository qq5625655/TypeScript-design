<template>
  <component
    :class="classes"
    :is="tagName"
    :disabled="disabled"
    @click="handleClickLink"
    v-bind="tagProps"
  >
    <i class="itu-icon icon-spinner2" v-if="loading"></i>
    <i :class="'itu-icon ' + icon" v-if="icon && !loading"></i>
    <span v-if="showSlot"><slot></slot></span>
  </component>


</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// import  from 'vue-class-component';

export interface ButtonProps {
  //strictPropertyInitialization 启用，确保类的非undefined属性已经在构造函数里初始化。
  disable?: Boolean;
  size?: string;
  // disable! 断言这个是非null非undefined的类型断言，一会测试
  // ?表示可以为空
}
// 接口类型，接口与type的区别
interface styleWidth {
  width: String;
}



const prefixCls = 'itu-btn';
@Component({
  name: 'Button'
})
export default class Button extends Vue {
  //! 表示类型断言，非null非undefined
  @Prop({}) disable?: boolean;
  @Prop({ default: 'default' }) size!: string;
  @Prop({ default: 'default' }) type!: string;
  @Prop({ default: false }) ghost!: boolean;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: '' }) icon!: string;
  @Prop({}) loading?: boolean;
  @Prop({}) shape?: string;
  @Prop({ default: 'button' }) htmlType!: string;
  // private readonly buttonProps!: ButtonProps;

  mount() {
    // console.log('button', ButtonProps)
  }
  get showSlot() {
    // 老版slot用法
    return !!this.$slots.default;
  }
  get classes() {
    return [
      `${prefixCls}`,
      `${prefixCls}-${this.type}`,
      {
        [`${prefixCls}-${this.size}`]: this.size !== 'default',
        [`${prefixCls}-${this.shape}`]: !!this.shape,
        [`${prefixCls}-ghost`]: this.ghost,
        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || this.loading)
      }
    ];
  }

  get buttonWidth(): styleWidth {
    let buttonWidth = this.size;
    let style: styleWidth = {
      width: `${buttonWidth}px`
    };

    return style;
  }
  get isHrefPattern(): boolean {
    const { to } = this.$attrs;
    return !!to;
  }
  get tagName(): String {
    const { isHrefPattern } = this;

    return isHrefPattern ? 'a' : 'button';
  }
  get tagProps() {
    const { isHrefPattern } = this;
    const { ...rest } = this.$props;
    // const { rest } = this.$attrs;

    if (isHrefPattern) {
      const { linkUrl, target } = this.$attrs;
      return { href: linkUrl, target };
    } else {
      // 断言，需要判断类型antd写法。
      // const { htmlType } = rest as NativeButtonProps;

      // 普通写法
      const { htmlType } = rest;
      return { type: htmlType };
    }
  }
  // 内置对象Event
  private handleClickLink(event: Event) {
    this.$emit('click', event);
  }
}
</script>
<style lang="less" scoped></style>
