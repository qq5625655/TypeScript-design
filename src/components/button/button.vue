<template>
  <component :class="classes" :is="tagName">
    <slot></slot>
  </component>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface ButtonProps {
  //strictPropertyInitialization 启用，确保类的非undefined属性已经在构造函数里初始化。
  disable?: Boolean;
  size?: number;
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
  @Prop({ default: 100 }) size?: number;
  @Prop({default:'default'}) type!: string;
  @Prop({ default: false }) ghost!: boolean;
  // private readonly buttonProps!: ButtonProps;

  mount() {
    // console.log('button', ButtonProps)
  }

  get classes() {
    return [
      `${prefixCls}`,
      `${prefixCls}-${this.type}`,
      {
        [`${prefixCls}-${this.size}`]: this.size !== 100,
        [`${prefixCls}-ghost`]: this.ghost
        
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
<style lang="less" scoped>

</style>
