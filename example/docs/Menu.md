## yu-menu 按钮

菜单组件，用来切换选择相应的菜单。

### 基本用法

:::demo

```html
<yu-menu active-name="1">
  <yu-menu-item name="1">
    内容管理
  </yu-menu-item>
  <yu-menu-item name="2">
    用户管理
  </yu-menu-item>
  <yu-menu-item name="3">
    综合设置
  </yu-menu-item>
</yu-menu>
```

:::

### 纵向排列

:::demo 设置 mode 可以纵向排列

```html
<yu-menu mode="vertical" active-name="1">
  <yu-menu-item name="1">
    内容管理
  </yu-menu-item>
  <yu-menu-item name="2">
    用户管理
  </yu-menu-item>
  <yu-menu-item name="3">
    综合设置
  </yu-menu-item>
</yu-menu>
```

:::

### to 属性能够使用， 跳转的链接，支持 vue-router 对象

:::demo 设置 to 可以跳转链接

```html
<yu-menu mode="vertical" active-name="1">
  <yu-menu-item to="/menu" name="1">
    Menu组件
  </yu-menu-item>
</yu-menu>
```

:::

|    参数     |          说明          |  类型  | 可选值 | 默认值 |
| :---------: | :--------------------: | :----: | :----: | :----: |
| active-name |          选择          | string |   -    |   -    |
|     to      |        跳转属性        | string |   -    |   -    |
|  on-select  | 选择（MenuItem）时触发 | string |   -    |   -    |
