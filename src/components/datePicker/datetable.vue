<template>
  <div :class="[datePickerPanelClasses + '-content']">
    <div :class="[datePickerPanelClasses + '-cell-head']">
      <span v-for="(day, key) in weeks" :key="key">
        {{ day }}
      </span>
    </div>
    <div :class="[datePickerPanelClasses + '-cell-body']">
      <span
        @click="handleClick(item)"
        :class="getDaysClasses(item)"
        v-for="(item, key) in days"
        :key="item.year + key"
      >
        {{ item.day }}
      </span>
    </div>
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
}
interface classes {
  [index: string]: any;
}
import { Component, Vue, Prop, PropSync, Watch, Emit } from 'vue-property-decorator';

@Component({
  name: 'DateTable'
  // directives: { clickOutside  }
})
export default class DateTable extends Vue {
  @Prop([String, Date, Array]) value!: Date;

  private weeks: Array<string> = '一_二_三_四_五_六_七'.split('_');
  private year: number = this.value.getFullYear();
  private month: number = this.value.getMonth();
  private day: number = this.value.getDay();
  private hour: number = this.value.getHours();
  private minute: number = this.value.getMinutes();
  private second: number = this.value.getSeconds();

  get datePickerPanelClasses(): string {
    return `${prefixClsPanel}-body`;
  }
  get days(): days[] {
    // this.day;
    let array = [];
    const year = this.year;
    const month = this.month;
    const time = new Date(year, month, 1);
    const today = new Date().getDate();

    // 上月最后一天
    time.setDate(0);
    let lastDay = time.getDate();
    // 上月最后一天，星期几
    const lastWeek = time.getDay() || 7;
    let count = lastWeek;
    while (count > 0) {
      array.push({
        day: lastDay - count + 1,
        month: month > 0 ? month - 1 : 11,
        year: month > 0 ? year : year - 1,
        disabled: true
      });
      count--;
    }

    time.setMonth(time.getMonth() + 2, 0); // switch to the last day of the current month
    lastDay = time.getDate();
    for (let i = 1; i <= lastDay; i++) {
      array.push({
        day: i,
        month: month,
        year: year,
        today: today === i
      });
    }
    for (let i = 1; array.length < 42; i++) {
      array.push({
        day: i,
        month: month < 11 ? month + 1 : 0,
        year: month < 11 ? year : year + 1,
        disabled: true
      });
    }

    return array;
  }
  // this.$emit('input',data) 也可以使用

  handleClick(item: days) {
    console.log('item', item);
    this.value;
    let value = new Date(item.year, item.month, item.day);

    item.selected = true;
    
    this.$emit('input', value);
    this.$emit('handleConfirm');

    // this.$parent.handleConfirm();
    // if(){}
  }
  getDaysClasses(item: days): classes {
    // methods和computed都依赖组建内部的值和props，当发生改变时候就会执行相应的方法
    this.value;
    console.log('item', item.selected)
    return [
      `${prefixClsPanel}-cell`,
      {
        [`${prefixClsPanel}-body-cell-selected`]: item.selected,
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

  @Watch('value')
  onValueChange(val: String | Date | Array<Date | String>) {
    // console.log('value', val);
    // this.dates();
  }
}
</script>
