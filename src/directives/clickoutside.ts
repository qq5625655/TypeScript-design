interface propertyValue {
  __vueClickOutside__: Function;
}

import { DirectiveBinding } from 'vue/types/options';
export default {
  bind(el: HTMLElement | propertyValue, binding: DirectiveBinding) {
    function documentHandler(e: Event) {
      // 给整个document添加click事件,contains如果e.target元素是el元素的子孙元素的话
      if (e.target === el || (el as Element).contains(e.target as Element)) {
        // 如果点击的区域是使用了该指令的DOM元素的内部，那么不做任何处理
        return;
      }
      
      let ElementClassName =
        (e.target as Element).parentElement? (e.target as Element).parentElement!.className:''
      // 对日期组件进行监听。
      if (
        e.target === el ||
        ElementClassName === 'itu-date-picker-panel-body-cell-month' ||
        ElementClassName === 'itu-date-picker-panel-body-cell-year'
      ) {
        return;
      }
      binding.value(e); // 即调用close()方法
    }
    (el as propertyValue).__vueClickOutside__ = documentHandler;
    // let f : propertyValue = {
    //   __vueClickOutside__: documentHandler,
    // }
    document.addEventListener('click', documentHandler);
  },
  unbind(el: Element | propertyValue) {
    let a = (el as propertyValue).__vueClickOutside__;
    document.removeEventListener(
      'click',
      (el as propertyValue).__vueClickOutside__ as (e: Event) => void
    );
    delete (el as propertyValue).__vueClickOutside__;
  }
};
