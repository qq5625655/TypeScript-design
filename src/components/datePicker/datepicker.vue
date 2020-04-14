<template>
  <div :class="wrapperClasses" v-click-outside="handleClose">
    <div :class="[prefixCls + '-rel']">
      <input
        :value="value"
        :class="[prefixCls + '-input']"
        @click.native="handleFocus"
        @focus="handleFocus"
      />
    </div>
    <transition name="transition-drop">
      <div v-show="visible" :class="classes">
        <!-- <component v-model="dates[0]" :is="getTableType(selectionMode)"></component> -->
        <datepickerCalendar v-model="dates[0]" :selectionMode="selectionMode" ref="pickerPanel">
        </datepickerCalendar>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import datepickerCalendar from './datepickerCalendar.vue';
import clickOutside from '../../directives/clickoutside';
import { oneOf } from '../../mixins/assist';
import componets from '../menu';

const prefixCls = 'itu-date-picker';
const prefixClsPanel = 'itu-date-picker-panel';

interface classes {
  [index: string]: any;
}

@Component({
  name: 'DatePicker',
  directives: { clickOutside },
  components: { datepickerCalendar }
})
export default class DatePicker extends Vue {
  @Prop([String, Date, Array]) value?: String | Date | Array<Date | String>;
  @Prop({ type: String, default: 'date' }) type!: String;
  @Prop({ type: String, default: 'YYYY-MM-DD' }) format!: string;
  //computed

  private visible: boolean = false;
  private prefixCls: string = prefixCls;
  private isFocused: boolean = false;

  private currentValue: String | Date | Array<Date | String> = '';
  private dates: Array<Date> = this.getDates();

  get classes(): classes {
    return [`${prefixClsPanel}-body-wrapper`];
  }
  get wrapperClasses(): Array<any> {
    return [
      prefixCls,
      {
        [prefixCls + 'focused']: this.isFocused
      }
    ];
  }
  get datePickerPanelClasses(): string {
    return `${prefixClsPanel}-body`;
  }

  get selectionMode(): String {
    let value = oneOf(this.type, ['date', 'year', 'month', 'time']) && this.type;
    let dateType = value ? value : 'date';
    return dateType;
  }

  handleClose() {
    this.visible = false;
  }
  getTableType(type: string): string {
    return `${type}-table`;
  }
  getDates(): Array<Date> {
    if (this.selectionMode !== 'daterange') {
      if (typeof this.value === 'string' && this.value) {
        return [new Date(Date.parse((this.value as string).replace(/-/g, '/')))];
      }
      return this.value ? [new Date(this.value as Date)] : [new Date()];
    } else {
      return [];
    }
  }
  getValue() {
    return this.selectionMode === 'daterange'
      ? this.dates.map((item) => this.transformValue(item))
      : this.transformValue(this.dates[0]);
  }
  handleConfirm() {
    // 类型断言，断言数组0肯定有值

    this.$emit('input', this.getValue());
    this.handleClose();
  }
  handleFocus(e: Event) {
    this.visible = true;
    if (e && e.type === 'focus') {
      return;
    }
  }
  transformValue(time: Date, format?: string) {
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();
    const hours24 = time.getHours();
    const hours = hours24 % 12 === 0 ? 12 : hours24 % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();
    const dd = (t: number) => {
      return ('0' + t).slice(-2);
    };
    interface map {
      [index: string]: string;
    }
    const map: map = {
      YYYY: '' + year,
      MM: dd(month + 1),
      // MMM: this.local.months[month],
      // MMMM: this.local.monthsHead[month],
      M: '' + month + 1,
      DD: dd(day),
      D: '' + day
      // HH: dd(hours24),
      // H: hours24,
      // hh: dd(hours),
      // h: hours,
      // mm: dd(minutes),
      // m: minutes,
      // ss: dd(seconds),
      // s: seconds,
      // S: milliseconds
    };
    let formatValue = format || this.format;
    let str = formatValue.replace(/Y+|M+|D+|H+|h+|m+|s+|S+/g, (str: string) => {
      return map[str];
    });

    return str;
    // return (format || this.format).replace(
    //   /Y+|M+|D+|H+|h+|m+|s+|S+/g,
    //   str => map[str]
    // )
  }
  @Watch('value')
  onValueChange(val: String | Date | Array<Date | String>) {
    this.dates = this.getDates();
  }
}
</script>
