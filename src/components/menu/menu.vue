<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
const prefixCls = 'itu-menu';
import Component, { mixins } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
// 无法使用相对路径,使用require
// const Emitter = require('./emitter.js');

// 使用ts编写
import Emitter from './emitter';

@Component({
  name: 'yuMenu'
})
export default class Menu extends mixins(Emitter) {
  @Prop({ default: 'horizontal' }) mode!: string;
  @Prop({ default: 'light' }) theme!: string;
  @Prop({}) activeName?: string | number;

  // watch
  @Watch('currentActiveName')
  setCurrentActiveName() {
    this.updateActiveName();
  }
  private currentActiveName = this.activeName;

  mounted() {
    this.$on('on-menu-item-select', (name: string) => {
      this.currentActiveName = name;
      this.$emit('on-select', name);
    });
    this.$nextTick(() => this.updateActiveName());
  }
  updateActiveName() {
    this.broadcast('MenuItem', 'on-update-active-name', this.currentActiveName);
  }

  get classes() {
    return [
      `${prefixCls}`,
      `${prefixCls}-${this.theme}`,
      {
        [`${prefixCls}-${this.mode}`]: this.mode
      }
    ];
  }
}
</script>
