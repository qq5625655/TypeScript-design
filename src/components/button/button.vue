<template>
  <component :is="tagName" :style="buttonWidth">
    test
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
let buttonDefaultProps: ButtonProps = {
  disable: false
};

interface Style {
  width: String;
}

@Component
export default class Button extends Vue {
  @Prop({})
  private readonly buttonProps!: ButtonProps;

  mount(): void {
    // console.log('button', ButtonProps)
  }

  get buttonWidth(): Style {
    let buttonWidth: number | undefined = this.buttonProps.size;
    let style: Style = {
      width: `${buttonWidth}px`
    };

    return style;
  }
  get tagName(): String {
    return 'button';
  }
}
</script>
