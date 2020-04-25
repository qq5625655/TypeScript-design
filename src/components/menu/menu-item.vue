<template>
  <router-link v-if="to" :to="to" :class="classes" @click.native="handleClickItem">
    <slot></slot>
  </router-link>

  <li v-else :class="classes" @click.stop="handleClickItem"><slot></slot></li>
</template>
<script lang="ts">
import Component, { mixins } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
// 测试声明模块
// js 无法通过编译，使用ts
// import Emitter from '../../mixins/emitter.js';
import Emitter from '../../mixins/emitter';
const prefixCls = 'itu-menu';

@Component({
  name: 'MenuItem'
})
export default class Menu extends mixins(Emitter) {
  @Prop({}) name?: string | number;
  @Prop({}) to?: string;

  private active: boolean = false;

  mounted() {
    this.$on('on-update-active-name', (name: string | number) => {
      if (this.name === name) {
        this.active = true;
        // this.dispatch('Submenu', 'on-update-active-name', name);
      } else {
        this.active = false;
      }
    });
  }

  get classes() {
    return [
      `${prefixCls}-item`,
      {
        [`${prefixCls}-item-active`]: this.active
      }
    ];
  }
  handleClickItem() {
    this.dispatch('yuMenu', 'on-menu-item-select', this.name);
  }
}
</script>
