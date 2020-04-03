<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
  data() {
    return {};
  }
}
</script>
<style scoped lang="less">
#app {
  overflow: auto;
}
</style>
<style lang="less">
@import '../src/styles/index.less';
// .test_menu{
//   width: 100px;
// }
ul {
  margin: 0;
  padding: 0;
}
.example {
  height: 200px;
  width: 1000px;
  background: rgb(190, 200, 200);
  padding: 20px;
}
.base_head {
  box-shadow: rgb(225, 231, 246) 0px 1px 16px 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  min-width: 1200px;
  z-index: 1000;
  height: 80px;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(243, 243, 243);
  padding: 0 120px;
  & > ul {
    li {
      float: left;
      min-width: 80px;
      height: 80px;
      margin: 0px 10px;
      list-style: none;
      line-height: 80px;
      text-align: center;
      color: rgb(136, 136, 136);
      cursor: pointer;
      &:hover {
        color: rgb(24, 24, 25);
      }
    }
    .active {
      border-bottom: 4px solid transparent;
      border-color: rgb(64, 158, 255);
      color: rgb(24, 24, 25);
    }
  }
}
.wrapper_container {
  background: #fff;
  margin: 90px auto 15px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  overflow: auto;
}
.app_left {
  width: 16%;
  float: left;
  & > ul li {
    padding: 14px 24px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 34px;
  }
}
.app_right {
  overflow: auto;
  padding: 24px;
}
</style>
