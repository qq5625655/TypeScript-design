<template>
  <div :class="[datePickerPanelClasses + '-cell-day']">
    <span
      @click="handleClick(item)"
      :class="getDaysClasses(item)"
      v-for="(item, key) in cells"
      :key="item.year + key"
    >
      {{ item.day }}
    </span>
  </div>
</template>

<script lang="ts">
const prefixClsPanel = 'itu-date-picker-panel';
interface days {
  day: number;
  month: number;
  year: number;
  disabled?: boolean;
  today?: boolean;
  selected?: boolean;
  pre?: boolean;
  next?: boolean;
}
interface classes {
  [index: string]: any;
}
import { Component, Vue, Prop, PropSync, Watch, Emit } from 'vue-property-decorator';
import datepicker from './datepicker.vue';

@Component({
  name: 'DateTable'
})
export default class DateTable extends Vue {
  @Prop([Array]) cells!: Array<Date>;
  @Prop({ type: Function }) setSelected!: Function;
  @Prop({ type: Function }) handleClick!: Function;

  get datePickerPanelClasses(): string {
    return `${prefixClsPanel}-body`;
  }

  handlePickCell() {}

  getDaysClasses(item: days): classes {
    // methods和computed都依赖组建内部的值和props，当发生改变时候就会执行相应的方法

    let currentTime = new Date(item.year, item.month, item.day);

    return [
      `${prefixClsPanel}-cell`,
      {
        [`${prefixClsPanel}-body-cell-selected`]: this.setSelected(item),
        // || cell.start || cell.end,
        [`${prefixClsPanel}-body-cell-disabled`]: item.disabled,
        [`${prefixClsPanel}-body-cell-today`]: item.today
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
