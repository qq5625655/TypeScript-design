<template>
  <div class="test">
    <!-- <Cascader
            v-model="value2"
            :asyncValue="true"
            :options="options"
            :checkStrictly="true"
            :changeValue="testValue"
            :multipleLastValue="true"
            :multiple="true"
        ></Cascader> -->
    <!--直接将数据传递给级联组件即可-->
    <!-- <YuTable height="200" :data="data2" :columns="columns1"></YuTable>
        <Table height="200" :columns="columns1" :data="data2"></Table> -->
    <div class="outer">
      <div class="inner"></div>
    </div>
  </div>
</template>
<script>
import Cascader from './Cascader2.vue';
import dataList from './data.json';
import YuTable from './table';

export default {
  components: {
    Cascader,
    YuTable
  },
  data() {
    return {
      options: [],
      // value: ['jiangsu/nanjing/fuzimiao', 'jiangsu/nanjing/nanjingjie'],
      value2: [],
      testValue: false
    };
  },
  methods: {
    dosth(value) {
      console.log('va22222222222l', value);
    }
    // teee() {
    //     console.log('bbbbtttt');
    // }
  },
  watch: {
    value2(val) {
      console.log('va22222222222l', val);
    }
  },
  mounted() {
    setTimeout(() => {
      this.options = dataList;
    }, 1000);
    setTimeout(() => {
      this.value2 = ['fuzimiao'];
      this.testValue = !this.testValue;
    }, 1500);
  },
  created() {
    this.$on('test', function(msg) {
      console.log('msg', msg);
    });
  }
};
</script>
<style scoped lang="less">
.index {
  position: relative;
  top: 200px;
}
.test {
  float: left;
  width: 1000px;
  height: 300px;
  position: relative;
}
.inner {
  width: 100%;
  height: 200px;
  background: red;
}
.outer {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  width: 200px;
  height: 150px;
  overflow: hidden;
  overflow: scroll;
  background: black;
}
</style>
