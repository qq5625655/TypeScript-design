<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <Table width="550" height="200" :columns="columns1" :data="data1"></Table>
    <!-- <Tree :data="data2"></Tree> -->
    <!-- <div class="example"> -->
    <Button>Default</Button>
    <Button icon="icon-home" size="small" type="primary">Primary</Button>
    <Button shape="circle" icon="icon-search" type="dashed"></Button>
    <Button  type="text">text</Button>
    <Button disabled="true" ghost="true" type="success">success</Button>
    <Button type="info">info</Button>
    <Button type="warning">warning</Button>
    <Button type="error">error</Button>
    <ButtonGroup>
      <Button>Default</Button>
      <Button icon="icon-home"  type="primary">Primary</Button>
    </ButtonGroup>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Table from '@/components/table/table.vue';
import Button from '@/components/button/button.vue';
import ButtonGroup from '@/components/button/buttonGroup.vue';
import Tree from '@/views/tree.vue';
@Component({
  components: {
    HelloWorld,
    Table,
    Button,
    ButtonGroup,
    Tree
  }
})
export default class App extends Vue {
  data() {
    return {
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name',
          width: 100
          // fixed: "left"
        },
        {
          title: 'Age',
          key: 'age',
          width: 100
        },
        {
          title: 'Province',
          key: 'province',
          width: 100
        },
        {
          title: 'City',
          key: 'city',
          width: 100
        },
        {
          title: 'Address',
          key: 'address',
          width: 200
        },
        {
          title: 'Postcode',
          key: 'zip',
          width: 100
          // fixed:'right',
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          province: 'America',
          city: 'New York',
          zip: 100000
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'Washington, D.C. No. 1 Lake Park',
          province: 'America',
          city: 'Washington, D.C.',
          zip: 100000
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          province: 'Australian',
          city: 'Sydney',
          zip: 100000
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          province: 'Canada',
          city: 'Ottawa',
          zip: 100000
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          province: 'America',
          city: 'New York',
          zip: 100000
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'Washington, D.C. No. 1 Lake Park',
          province: 'America',
          city: 'Washington, D.C.',
          zip: 100000
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          province: 'Australian',
          city: 'Sydney',
          zip: 100000
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          province: 'Canada',
          city: 'Ottawa',
          zip: 100000
        }
      ],
      data2: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    };
  }
}
</script>

<style lang="less">
@import './styles/index.less';
.example {
  height: 200px;
  width: 1000px;
  background: rgb(190, 200, 200);
  padding: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
