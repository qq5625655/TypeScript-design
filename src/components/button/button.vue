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
  @Prop({}) disable?: boolean;
  @Prop({ default: 100 }) size?: number;
  @Prop({}) type?: string;
  // private readonly buttonProps!: ButtonProps;

  mount() {
    // console.log('button', ButtonProps)
  }

  get classes() {
    return [
      `${prefixCls}`,
      `${prefixCls}-${this.type}`,
      {
        [`${prefixCls}-${this.size}`]: this.size !== 100
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
/*
避免编译:
#main{
  width:~'calc(300px-30px)';
}


#main{
  width:calc(300px-30px);
}

结构： ~' 值 '

变量拼串

在下面例子中， 实现了不同的 transtion-delay、animation、@keyframes

.judge(@i) when(@i=1){
  @size:15px;
}
.judge(@i) when(@i>1){
  @size:16px;
}
.loopAnimation(@i) when (@i<16) {
  
  .circle:nth-child(@{i}){
      .judeg(@i);
      border-radius:@size @size 0 0;
      animation: ~"circle-@{i}" @duration infinite @ease;
      transition-delay:~"@{i}ms";
  }
  @keyframes ~"circle-@{i}" {
      // do something...
  }
  .loopAnimation(@i + 1);
}

*/
@css-prefix: itu-;
@btn-prefix-cls: ~'@{css-prefix}btn';

// base
@btn-font-weight: normal;
@text-color: #515a6e;
// color  原色color
@primary-color: #2d8cf0;
// border color
@border-color-base: #dcdee2;
@border-color-split: #e8eaec;
@border-width-base: 1px;
@border-style-base: solid;
//button
@btn-default-color: @text-color;
@btn-default-border: @border-color-base;
@btn-default-bg: #fff;

@btn-padding-base: 5px 15px 6px;
@btn-font-size: 12px;
@btn-border-radius: 4px;
@btn-primary-color: #fff;
@btn-primary-bg: @primary-color;

// Animation
@transition-time: 0.2s;
.button-color(@color; @background; @border) {
  color: @color;
  background-color: @background;
  border-color: @border;
}
.button-variant(@color; @background; @border) {
  .button-color(@color; @background; @border);
  //   &:hover
  //     //&:focus
  //  {
  //     .button-color(@color ; @background ; @border);
  //   }
}

.active-btn-color(@color) {
  &:focus {
    box-shadow: 0 0 0 2px fade(@color, 20%);
  }
}

.button-size(@padding; @font-size; @border-radius) {
  padding: @padding;
  font-size: @font-size;
  border-radius: @border-radius;
}
.btn() {
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  font-weight: @btn-font-weight;
  border: 1px solid transparent;
  white-space: nowrap;
  .button-size(@btn-padding-base; @btn-font-size; @btn-border-radius);
  transition: color @transition-time linear, background-color @transition-time linear,
    border @transition-time linear, box-shadow @transition-time linear;
}

.btn-primary() {
  .button-variant(@btn-primary-color; @btn-primary-bg; @primary-color);
  &:hover,
  &:active {
    .button-color(@btn-primary-color, @primary-color, @primary-color);
    // color: @btn-primary-color;
  }
  .active-btn-color(@primary-color);
}
.btn-default() {
  .button-variant(@btn-default-color; @btn-default-bg; @btn-default-border);
  &:hover,
  &:active {
    // .button-color(tint(@primary-color, 20%); white; tint(@primary-color, 20%));
    .button-color(@primary-color, white, @primary-color);
  }
}
.btn-dashed() {
  border-style: dashed;
}
.@{btn-prefix-cls} {
  .btn();
  .btn-default();
  // 阴影渐渐退去
  .active-btn-color(@primary-color);

  &-primary {
    .btn-primary;
  }
  &-dashed {
    .btn-dashed;
  }
}
</style>
