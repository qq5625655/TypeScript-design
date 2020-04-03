## yu-button 按钮

常用的操作按钮。

### 基本用法

:::demo 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。

```html
<yu-button>默认按钮1</yu-button>
<yu-button type="Primary">Primary</yu-button>
<yu-button type="dashed">成功按钮</yu-button>
<yu-button type="text">text</yu-button>
<br /><br />
<yu-button type="info">info</yu-button>
<yu-button type="success">success</yu-button>
<yu-button type="warning">warning</yu-button>
<yu-button type="error">error</yu-button>
```

:::

### 禁用状态

幽灵按钮
:::demo 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样

```html
<yu-button type="default" ghost="true">Default</yu-button>
<yu-button type="primary" ghost="true">Primary</yu-button>
<yu-button type="dashed" ghost="true">Dashed</yu-button>
<yu-button type="text" ghost="true">Text</yu-button>
<yu-button type="info" ghost="true">Info</yu-button>
<yu-button type="success" ghost="true">Success</yu-button>
<yu-button type="warning" ghost="true">Warning</yu-button>
<yu-button type="error" ghost="true">Error</yu-button>
```

:::

### 图标按钮及按钮形状

:::demo

```html
<yu-button type="primary" shape="circle" icon="icon-home"></yu-button>
<yu-button type="primary" icon="icon-search">Search</yu-button>
<yu-button type="primary" shape="circle" icon="icon-search">Search</yu-button>
<yu-button type="primary" shape="circle">Circle</yu-button>
<br /><br />
<yu-button shape="circle" icon="icon-search"></yu-button>
<yu-button icon="icon-search">Search</yu-button>
<yu-button shape="circle" icon="icon-search">Search</yu-button>
<yu-button shape="circle">Circle</yu-button>
```

:::

### 按钮尺寸

:::demo 通过 size 来改变大小

```html
<yu-button size="large" type="primary">Primary</yu-button>
<yu-button size="default" type="default">Default</yu-button>
<yu-button size="small" type="dashed">Dashed</yu-button>
<br /><br />
<yu-button-group size="large">
  <yu-button type="primary">
    Backward
  </yu-button>
  <yu-button type="primary">
    Forward
  </yu-button>
</yu-button-group>
```

:::

### 禁用状态

:::demo 通过 disabled 来禁用

```html
<yu-button>Default</yu-button>
<yu-button disabled>Default(Disabled)</yu-button>
<br />
<yu-button type="primary">Primary</yu-button>
<yu-button type="primary" disabled>Primary(Disabled)</yu-button>
<br />
<yu-button type="dashed">Dashed</yu-button>
<yu-button type="dashed" disabled>Dashed(Disabled)</yu-button>
<br />
<yu-button type="text">Text</yu-button>
<yu-button type="text" disabled>Text(Disabled)</yu-button>
```

:::

### 加载状态

:::demo 通过 loading 来使用加载状态

```html
<yu-button type="primary" loading>Loading...</yu-button>
<yu-button type="primary" :loading="loading" @click="toLoading">
  <span v-if="!loading">Click me!</span>
  <span v-else>Loading...</span>
</yu-button>
<yu-button type="primary" :loading="loading2" icon="icon-power" @click="toLoading2">
  <span v-if="!loading2">Click me!</span>
  <span v-else>Loading...</span>
</yu-button>
<yu-button loading="loading3" shape="circle"></yu-button>
<yu-button loading="loading3" shape="circle" type="primary"></yu-button>
<script>
  export default {
    data() {
      return {
        loading: false,
        loading2: false,
        loading3: true,
        sss: []
      };
    },
    methods: {
      toLoading() {
        this.loading = true;
      },
      toLoading2() {
        this.loading2 = true;
      }
    }
  };
</script>
```

:::

### 按钮组合

:::demo

```html
<yu-button-group>
  <yu-button>Cancel</yu-button>
  <yu-button type="primary">Confirm</yu-button>
</yu-button-group>
<yu-button-group>
  <yu-button disabled>Yesterday</yu-button>
  <yu-button disabled>Today</yu-button>
  <yu-button disabled>Tomorrow</yu-button>
</yu-button-group>
<yu-button-group>
  <yu-button type="primary">L</yu-button>
  <yu-button>M</yu-button>
  <yu-button>M</yu-button>
  <yu-button type="dashed">R</yu-button>
</yu-button-group>
<br /><br />
<h4>Icons</h4>
<br /><br />
<yu-button-group>
  <yu-button type="primary">
    <!-- <Icon type="icon-arrow-back"></Icon> -->
    Backward
  </yu-button>
  <yu-button type="primary">
    Forward
    <!-- <Icon type="icon-arrow-forward"></Icon> -->
  </yu-button>
</yu-button-group>
<yu-button-group>
  <yu-button type="primary" icon="icon-backward"></yu-button>
  <yu-button type="primary" icon="icon-forward2"></yu-button>
</yu-button-group>
<yu-button-group>
  <yu-button icon="icon-magic-wand"></yu-button>
  <yu-button icon="icon-scissors"></yu-button>
  <yu-button icon="icon-crop"></yu-button>
  <yu-button icon="icon-filter"></yu-button>
</yu-button-group>
<br /><br />
<h4>Circle</h4>
<br /><br />
<yu-button-group shape="circle">
  <yu-button type="primary">
    <!-- <Icon type="icon-arrow-back"></Icon> -->
    Backward
  </yu-button>
  <yu-button type="primary">
    Forward
    <!-- <Icon type="icon-arrow-forward"></Icon> -->
  </yu-button>
</yu-button-group>
<yu-button-group shape="circle">
  <yu-button type="primary" icon="icon-backward"></yu-button>
  <yu-button type="primary" icon="icon-forward2"></yu-button>
</yu-button-group>
<yu-button-group shape="circle">
  <yu-button icon="icon-magic-wand"></yu-button>
  <yu-button icon="icon-scissors"></yu-button>
  <yu-button icon="icon-crop"></yu-button>
  <yu-button icon="icon-filter"></yu-button>
</yu-button-group>
```

:::

### 按钮组纵向排列

:::demo

```html
<yu-button-group vertical="true">
  <yu-button icon="icon-facebook"></yu-button>
  <yu-button icon="icon-twitter"></yu-button>
  <yu-button icon="icon-google"></yu-button>
  <yu-button icon="icon-tumblr"></yu-button>
</yu-button-group>
```

:::

<script>
  export default {
    data() {
      return {
        loading: false,
        loading2: false,
        loading3: true,
        sss:[],
      };
    },
    methods: {
      toLoading() {
        this.loading = true;
      },
      toLoading2() {
        this.loading2 = true;
      }
    }
  };
</script>

### Attributes

|   参数   |   说明   |  类型   |                            可选值                             | 默认值  |
| :------: | :------: | :-----: | :-----------------------------------------------------------: | :-----: |
| disabled |   禁用   | Booelan |                          true/false                           |  false  |
|   type   | 按钮类型 | String  | default、primary、dashed、text、info、success、warning、error | default |
|  ghost   | 幽灵属性 | Booelan |                          true/false                           |  false  |
|   size   | 按钮大小 | String  |                     large、small、default                     | default |
|  shape   |   圆角   | String  |                            circle                             |    -    |
| loading  | 加载状态 | Booelan |                          true/false                           |  false  |
|   icon   | 图标类型 | String  |                            图标值                             |    -    |
