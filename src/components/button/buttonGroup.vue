<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
const prefixCls = 'itu-btn-group';
@Component({
  name: 'buttonGoup'
})
export default class buttonGoup extends Vue {
  @Prop({}) shape?: string;
  @Prop({ default: 'default' }) size!: string;
  get classes() {
    return [
      `${prefixCls}`,
      {
        [`${prefixCls}-${this.size}`]: !!this.size
        //   [`${prefixCls}-${this.shape}`]: !!this.shape,
        //   [`${prefixCls}-vertical`]: this.vertical
      }
    ];
  }
}
</script>
