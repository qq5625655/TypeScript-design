## yu-checkbox 按钮

多选按钮，用来标记或者切换某种状态。

### 基本用法

:::demo 单独样式

```html
<yu-checkbox v-model="single"></yu-checkbox>
{{ single }}

<script>
  export default {
    data() {
      return {
        single: false
      };
    }
  };
</script>
```

:::

### 组合使用

:::demo 使用 CheckboxGroup 配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。

```html
{{ social }}
<yu-checkbox-group v-model="social">
  <yu-checkbox label="twitter">
    <span>Twitter</span>
  </yu-checkbox>
  <yu-checkbox label="facebook">
    <span>Facebook</span>
  </yu-checkbox>
  <yu-checkbox label="github">
    <span>Github</span>
  </yu-checkbox>
  <yu-checkbox label="snapchat">
    <span>Snapchat</span>
  </yu-checkbox>
</yu-checkbox-group>

<script>
  export default {
    data() {
      return {
        social: []
      };
    }
  };
</script>
```
:::
### 不可用

:::demo 通过使用disabled来进行不可用

```html
{{ social2 }}


<yu-checkbox-group  v-model="social2">
  <yu-checkbox disabled label="twitter">
    <span>Twitter</span>
  </yu-checkbox>
  <yu-checkbox label="facebook">
    <span>Facebook</span>
  </yu-checkbox>
  <yu-checkbox label="github">
    <span>Github</span>
  </yu-checkbox>
  <yu-checkbox label="snapchat">
    <span>Snapchat</span>
  </yu-checkbox>
</yu-checkbox-group>

<script>
  export default {
    data() {
      return {
        social2: []
      };
    }
  };
</script>
```
:::
<script>
  export default {
    data() {
      return {
        single: false,
        social:[],
        social2:[],
      };
    }
  };
</script>

### Attributes

|   参数   |   说明   |  类型   |                            可选值                             | 默认值  |
| :------: | :------: | :-----: | :-----------------------------------------------------------: | :-----: |
| disabled |   禁用   | Booelan |                          true/false                           |  false  |
|   onChnage | 点击事件 | -  | - |    -    |

