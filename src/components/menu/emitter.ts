import Vue from 'vue';
import Component from 'vue-class-component';

function broadcast(this: Vue, componentName: string, eventName: string, params: any) {
  this.$children.forEach((child: Vue) => {
    const name = child.$options.name;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params) as [string, any[]]);
    } else {
      // todo 如果 params 是空数组，接收到的会是 undefined
      broadcast.apply(
        child,
        [componentName, eventName].concat([params]) as [string, string, any[]]
      );
    }
  });
}
@Component
export default class Emitter extends Vue {
  // 修改工作区
  // methods: {
  dispatch(componentName: string, eventName: string, params: any) {
    let parent: Vue = this.$parent || this.$root;
    let name: string | undefined = parent.$options.name;

    while (parent && (!name || name !== componentName)) {
      parent = parent.$parent;

      if (parent) {
        name = parent.$options.name;
      }
    }

    if (parent) {
      // parent.$emit.apply(parent, [eventName].concat(params));

      //将下面内容断言为[string, ...any[]] 类型“[1, "2", "3"]”的参数不能赋给类型“[string, ...any[]]”的参数。
      parent.$emit.apply(parent, [eventName].concat(params) as [string, any[]]);
    }
  }
  // },
  broadcast(componentName: string, eventName: string, params: any) {
    broadcast.call(this, componentName, eventName, params);
  }
  // }
}
