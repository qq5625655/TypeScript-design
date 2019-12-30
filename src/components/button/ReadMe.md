写在前面，2.6x使用v-slot代替了slot也就说

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

调用，可以在一个父组件上的template元素上使用
<base-layout>
  <template slot="header">
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template slot="footer">
    <p>Here's some contact info</p>
  </template>
</base-layout>
或者直接用在一个普通的元素上：
<base-layout>
  <h1 slot="header">Here might be a page title</h1>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <p slot="footer">Here's some contact info</p>
</base-layout>

上述两个示例渲染出来的 HTML 都将会是：
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>


用v-slot改写
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
就是这么简单，插槽的名字现在通过 v-slot:slotName 这种形式来使用。
tips:  没有名字的 <slot> 隐含有一个 "default" 名称
例如，上面的默认插槽，如果你想显示调用的话，可以这样：
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>

无论哪种方式，上面的代码都将输出为下面代码：
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>

v-slot 只能添加到 <template> 或自定义组件上，这点与弃用的 slot 属性不同


```
这是button按钮所学到的东西
具体看 [https://juejin.im/post/5c64e11151882562e4726d98]

// css选择器

5.	E,F	多元素选择器，同时匹配所有E元素或F元素，E和F之间用逗号分隔
6.	E F	后代元素选择器，匹配所有属于E元素后代的F元素，E和F之间用空格分隔
7.	E > F	子元素选择器，匹配所有E元素的子元素F
8.	E + F 毗邻元素选择器，匹配所有紧随E元素之后的第一个同级元素F(阮一峰文章，这一点错误！)
```css
div p { color:#f00; }

#nav li { display:inline; }

#nav a { font-weight:bold; }

div > strong { color:#f00; }

p + p { color:#f00; }
```
具体看[http://www.ruanyifeng.com/blog/2009/03/css_selectors.html]
