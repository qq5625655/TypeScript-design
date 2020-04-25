<template>
  <div>
    <BaseHead></BaseHead>
    <div class="wrapper_container">
      <div class="app_left">
        <yuMenu active-name="introduction" mode="vertical">
          <yuMenuItem to="/introduction" name="introduction">
            简介
          </yuMenuItem>
          <yuMenuItem to="/button" name="button">
            Button按钮
          </yuMenuItem>
          <yuMenuItem to="/checkbox" name="checkbox">
            Checkbox按钮
          </yuMenuItem>
          <yuMenuItem to="/menu" name="Menu">
            Menu菜单
          </yuMenuItem>
          <yuMenuItem to="/table" name="table">
            Table表格
          </yuMenuItem>
        </yuMenu>
      </div>
      <div class="app_right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import BaseHead from './BaseHead.vue';
// import DatePicker from '../src/components/datePicker/datepicker.vue';
export default {
  components: {
    BaseHead,
    // DatePicker
  },
  data() {
    return {
      date: ''
    };
  }
};
</script>
<style scoped>
.test {
  width: 100%;
  margin-left: 100px;
}
</style>
