<template>
  <component :class="classes" :is="tagName" :disabled="disabled">
    <Icon :class="'itu-icon ' + icon" v-if="icon && !loading"></Icon>
    <span v-if="showSlot"><slot></slot></span>
  </component>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface ButtonProps {
  //strictPropertyInitialization 启用，确保类的非undefined属性已经在构造函数里初始化。
  disable?: Boolean;
  size?: string;
  // disable! 断言这个是非null非undefined的类型断言，一会测试
  // ?表示可以为空
}

interface styleWidth {
  width: String;
}
const prefixCls = 'itu-btn';
@Component({
  name: 'button'
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
        [`${prefixCls}-ghost`]: this.ghost
        // [`${prefixCls}-icon-only`]: !!this.icon,
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

  get tagName(): String {
    return 'button';
  }
}
</script>
<style lang="less" scoped></style>
