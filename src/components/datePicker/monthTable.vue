<template>
  <div :class="[datePickerPanelClasses + '-cell-month']">
    <span
      @click="handleClick(item)"
      :class="getDaysClasses(item)"
      v-for="(item, key) in cells"
      :key="key"
    >
      {{ item.monthTitle }}
    </span>
  </div>
</template>

<script lang="ts">
const prefixClsPanel = 'itu-date-picker-panel';
interface months {
  month: number;
  year: number;
}
interface classes {
  [index: string]: any;
}
import { Component, Vue, Prop, PropSync, Watch, Emit } from 'vue-property-decorator';
import datepicker from './datepicker.vue';

@Component({
  name: 'MonthTable'
})
export default class MonthTable extends Vue {
  @Prop([Array]) cells!: Array<Date>;
  @Prop({ type: Function }) setSelected!: Function;
  @Prop({ type: Function }) handleClick!: Function;

  get datePickerPanelClasses(): string {
    return `${prefixClsPanel}-body`;
  }

  getDaysClasses(item: months): classes {
    // methods和computed都依赖组建内部的值和props，当发生改变时候就会执行相应的方法

    let currentTime = new Date(item.year, item.month, 1);

    return [
      `${prefixClsPanel}-cell`,
      {
        [`${prefixClsPanel}-body-cell-selected`]: this.setSelected(item)
        // || cell.start || cell.end,
        // [`${prefixClsPanel}-body-cell-disabled`]: item.disabled,
        // [`${prefixClsPanel}-body-cell-today`]: item.today
        // [`${prefixClsPanel}-cell-prev-month`]: cell.type === 'prevMonth',
        // [`${prefixClsPanel}-cell-next-month`]: cell.type === 'nextMonth',
        // [`${prefixClsPanel}-cell-week-label`]: cell.type === 'weekLabel',
        // [`${prefixClsPanel}-cell-range`]: cell.range && !cell.start && !cell.end,
        // [`${prefixClsPanel}-focused`]: clearHours(cell.date) === clearHours(this.focusedDate)
      }
    ];
  }
}
</script>
