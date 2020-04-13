<template>
  <div :class="datePickerPanelClasses">
    <div :class="[datePickerPanelClasses + '-header']">
      <span class="pre-year-btn" @click="year--">«</span>
      <span @click="preMonth" class="pre-month-btn">‹</span>
      <span @click="changeTableType('year')" class="text">{{ year }}</span>
      <span @click="changeTableType('month')" class="text">{{ monthHead[month] }}</span>
      <span @click="nextMonth" class="next-month-btn">›</span>
      <span class="next-year-btn" @click="year++">»</span>
    </div>
    <div :class="[datePickerPanelClasses + '-content']">
      <div v-if="pickerTable === 'date-table'" :class="[datePickerPanelClasses + '-cell-head']">
        <span v-for="(day, key) in weeks" :key="key">
          {{ day }}
        </span>
      </div>
      <component
        :cells="cells"
        :setSelected="setSelected"
        :handleClick="handleClick"
        :is="pickerTable"
      >
      </component>
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
  pre?: boolean;
  next?: boolean;
}
interface months {
  month: number;
  year: number;
  monthTitle: string;
}
interface classes {
  [index: string]: any;
}
import { Component, Vue, Prop, PropSync, Watch, Emit } from 'vue-property-decorator';
import datepicker from './datepicker.vue';
import dateTable from './datetable.vue';
import monthTable from './monthTable.vue';
import yearTable from './yearTable.vue';
@Component({
  name: 'datepickerCalendar',
  components: { dateTable, monthTable, yearTable }
  // directives: { clickOutside  }
})
export default class datepickerCalendar extends Vue {
  public $parent!: datepicker;

  @Prop([String, Date, Array]) value!: Date;
  @Prop({ type: String }) selectionMode!: string;

  private pickerTable: string = this.getTableType(this.selectionMode);
  private currentPicker: string = 'date';
  private weeks: Array<string> = '一_二_三_四_五_六_七'.split('_');
  private year: number = this.value.getFullYear();
  private month: number = this.value.getMonth();
  private day: number = this.value.getDay();
  private hour: number = this.value.getHours();
  private minute: number = this.value.getMinutes();
  private second: number = this.value.getSeconds();
  private monthHead: Array<string> = '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
    '_'
  );

  get datePickerPanelClasses(): string {
    return `${prefixClsPanel}-body`;
  }
  get yearTitleStart(): number {
    return parseInt(String(this.year / 10), 10) * 10;
  }
  get yearTitleEnd(): number {
    return this.yearTitleStart + 10;
  }
  get years(): number[] {
    const arr = [];
    let start = this.yearTitleStart - 1;
    while (arr.length < 12) {
      arr.push(start++);
    }
    return arr;
  }
  get days(): days[] {
    // this.day;
    let array = [];
    const year = this.year;
    const month = this.month;
    const time = new Date(year, month, 1);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
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
        disabled: true,
        pre: true
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
        today:
          new Date(year, month, i).getTime() ===
          new Date(currentYear, currentMonth, today).getTime()
      });
    }
    for (let i = 1; array.length < 42; i++) {
      array.push({
        day: i,
        month: month < 11 ? month + 1 : 0,
        year: month < 11 ? year : year + 1,
        disabled: true,
        next: true
      });
    }

    return array;
  }
  get months(): months[] {
    let array = [];
    for (let i = 0; i < this.monthHead.length; i++) {
      array.push({
        month: i,
        year: this.year,
        monthTitle: this.monthHead[i]
      });
    }
    return array;
  }
  get cells(): Array<any> {
    let array = [];
    if (this.pickerTable === 'year-table') {
      array = this.years;
    } else if (this.pickerTable === 'month-table') {
      array = this.months;
    } else {
      array = this.days;
    }

    return array;
  }
  // item在第三层，value在第二层
  setSelected(item: any): boolean {
    let flag: boolean = false;
    let transform = this.$parent.transformValue;

    if (this.pickerTable === 'date-table') {
      let currentTime = new Date(item.year, item.month, item.day);
      flag = transform(this.value) === transform(currentTime);
    } else if (this.pickerTable === 'month-table') {
      let currentMonth = new Date(item.year, item.month, 1);
      
      flag = transform(currentMonth, 'YYYY-MM') === transform(this.value, 'YYYY-MM');
    } else {
      flag = this.year === item;
    }
    return flag;
  }
  changeTableType(value: string) {
    this.pickerTable = this.getTableType(value);
  }
  getTableType(type: string): string {
    return `${type}-table`;
  }
  // this.$emit('input',data) 也可以使用
  preMonth() {
    if (this.month > 0) {
      this.month--;
    } else {
      this.month = 11;
      this.year--;
    }
  }
  nextMonth() {
    if (this.month < 11) {
      this.month++;
    } else {
      this.month = 0;
      this.year++;
    }
  }
  setMonth(value: number) {
    this.month = value;
  }
  handlePick() {
    if (this.pickerTable !== this.getTableType(this.selectionMode)) {
      if (this.pickerTable === 'year-table') {
        this.changeTableType('month');
      } else if (this.pickerTable === 'month-table') {
        this.changeTableType('date');
      }

      return false;
    }
    return true;
  }
  handleClick(item: any) {
    if (this.pickerTable === 'month-table') {
      this.month = item.month;
    }
    let flag = this.handlePick();
    if (!flag) {
      return;
    }

    let value = new Date(item.year || this.year, item.month || this.month, item.day || this.day);

    item && item.next && this.nextMonth();
    item && item.pre && this.preMonth();

    this.$emit('input', value);

    this.$parent.handleConfirm();
    // if(){}
  }

  // getDaysClasses(item: days): classes {
  //   // methods和computed都依赖组建内部的值和props，当发生改变时候就会执行相应的方法
  //   let transform = this.$parent.transformValue;
  //   let currentTime = new Date(item.year, item.month, item.day);

  //   return [
  //     `${prefixClsPanel}-cell`,
  //     {
  //       [`${prefixClsPanel}-body-cell-selected`]: transform(this.value) === transform(currentTime),
  //       // || cell.start || cell.end,
  //       [`${prefixClsPanel}-body-cell-disabled`]: item.disabled,
  //       [`${prefixClsPanel}-body-cell-today`]: item.today
  //       // [`${prefixClsPanel}-cell-prev-month`]: cell.type === 'prevMonth',
  //       // [`${prefixClsPanel}-cell-next-month`]: cell.type === 'nextMonth',
  //       // [`${prefixClsPanel}-cell-week-label`]: cell.type === 'weekLabel',
  //       // [`${prefixClsPanel}-cell-range`]: cell.range && !cell.start && !cell.end,
  //       // [`${prefixClsPanel}-focused`]: clearHours(cell.date) === clearHours(this.focusedDate)
  //     }
  //   ];
  // }

  @Watch('value')
  onValueChange(val: Date) {
    this.year = val.getFullYear();
    this.month = val.getMonth();
    this.day = val.getDate();
    this.hour = val.getHours();
    this.minute = val.getMinutes();
    this.second = val.getSeconds();
  }
}
</script>
