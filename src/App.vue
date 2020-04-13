<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <!-- <Table width="550" height="200" :columns="columns1" :data="data1"></Table> -->
    <!-- <yuTable :columns="columns1" :data="data1">
      <template slot-scope="{ item, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
            <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
    </!-->
    <!-- <Tree :data="data2"></Tree> -->
    <!-- <div class="example"> -->
    <!-- <Button>Default</Button>
    <Button icon="icon-home" size="small" type="primary">Primary</Button>
    <Button icon="icon-search" type="dashed"></Button>
    <Button type="text">text</Button>
    <Button disabled="true" ghost="true" type="success">success</Button>

    <Button type="warning">warning</Button>
    <Button type="error">error</Button>
    <ButtonGroup size="large">
      <Button>Default</Button>
      <Button type="info">info</Button>
      <Button icon="icon-home" type="primary">Primary</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary">
        <i class="itu-icon icon-arrow-left"></i>
        Forward
      </Button>
     
    </ButtonGroup>
    <ButtonGroup shape="circle">
      <Button icon="icon-home"> </Button>
      <Button icon="icon-arrow-left"> </Button>
    </ButtonGroup>
    <ButtonGroup size="small" shape="circle">
      <Button type="primary" icon="icon-home"> </Button>
      <Button type="primary" icon="icon-arrow-left"> </Button>
    </ButtonGroup>
    <ButtonGroup vertical="true">
      <Button type="primary" icon="icon-home"> </Button>
      <Button type="primary" icon="icon-arrow-left"> </Button>
    </ButtonGroup>
    <Button to="/components/icon-en" >32322</Button> -->

    <!-- <Button type="primary">
        Forward
        <i class="itu-icon  icon-arrow-left"></i>
      </!-->
    <div style="width:300px" class="test_menu">
      <Menu mode="vertical" active-name="3333">
        <MenuItem name=""> </MenuItem>
        <MenuItem name=""></MenuItem>
      </Menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Table from '@/components/table/table.vue';
import yuTable from '@/components/yuTable/table.vue';
import Button from '@/components/button/button.vue';
import ButtonGroup from '@/components/button/buttonGroup.vue';
import Tree from '@/views/tree.vue';
import Menu from '@/components/menu/menu.vue';
import MenuItem from '@/components/menu/menu-item.vue';
@Component({
  components: {
    HelloWorld,
    Table,
    Button,
    ButtonGroup,
    Tree,
    Menu,
    MenuItem,
    yuTable
  }
})
export default class App extends Vue {
  data() {
    return {
      columns1: [
        {
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name',
          width: 100
        },
        {
          title: 'Age',
          key: 'age',
          width: 100,
          sortable: true
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
        },
        {
          title: 'action',
          slot: 'action',
          type: 'slot',
          width: 150
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
  // remove (index:number) {
  //   this.data1.splice(index, 1);
  //   console.log('this', this);
  // }
}
</script>

<style lang="less">
// @import './styles/index.less';
// .test_menu{
//   width: 100px;
// }
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
