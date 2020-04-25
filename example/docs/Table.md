
## Table 表格
用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础表格
基础的表格展示用法。
:::demo 由 columns 来接收表头 由 data 来接收数据
```html 
    <yu-table 
        :columns="columns1" 
        :data="data2" 
 > </yu-table>
 <script>
  export default {
      data() {
          return {
            columns1: [
            
            {
              title: "Name",
              key: "name",
              width: 100
            },
            {
              title: "Age",
              key: "age",
              width: 100,
              

            },
            {
              title: "Province",
              key: "province",
              width: 100
            },
            {
              title: "City",
              key: "city",
              width: 100
            },
            {
              title: "Address",
              key: "address",
              width: 200
            },
            {
              title: "Postcode",
              key: "zip",
              width: 100

            }
          ],
          data2: [
            {
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park",
              province: "America",
              city: "New York",
              zip: 100000
            },
            {
              name: "Jim Green",
              age: 24,
              address: "Washington, D.C. No. 1 Lake Park",
              province: "America",
              city: "Washington, D.C.",
              zip: 100000
            },
            {
              name: "Joe Black",
              age: 31,
              address: "Sydney No. 1 Lake Park",
              province: "Australian",
              city: "Sydney",
              zip: 100000
            },
            {
              name: "Jon Snow",
              age: 26,
              address: "Ottawa No. 2 Lake Park",
              province: "Canada",
              city: "Ottawa",
              zip: 100000
            },
            {
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park",
              province: "America",
              city: "New York",
              zip: 100000
            },
            {
              name: "Jim Green",
              age: 24,
              address: "Washington, D.C. No. 1 Lake Park",
              province: "America",
              city: "Washington, D.C.",
              zip: 100000
            },
            {
              name: "Joe Black",
              age: 30,
              address: "Sydney No. 1 Lake Park",
              province: "Australian",
              city: "Sydney",
              zip: 100000
            },
            {
              name: "Jon Snow",
              age: 26,
              address: "Ottawa No. 2 Lake Park",
              province: "Canada",
              city: "Ottawa",
              zip: 100000
            }
          ]
        };
      },
      
  }
</script>
```
:::

### 开启内联样式
:::demo 由wrapper 来控制表格是否内联
```html
<yu-table 
        :columns="columns1" 
        :data="data2" 
        :wrapper="true"
 > </yu-table>
 <script>
  export default {
      data() {
          return {
            columns1: [
            
            {
              title: "Name",
              key: "name",
              width: 100
            },
            {
              title: "Age",
              key: "age",
              width: 100,
              

            },
            {
              title: "Province",
              key: "province",
              width: 100
            },
            {
              title: "City",
              key: "city",
              width: 100
            },
            {
              title: "Address",
              key: "address",
              width: 200
            },
            {
              title: "Postcode",
              key: "zip",
              width: 100

            }
          ],
          data2: [
            {
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park",
              province: "America",
              city: "New York",
              zip: 100000
            },
            {
              name: "Jim Green",
              age: 24,
              address: "Washington, D.C. No. 1 Lake Park",
              province: "America",
              city: "Washington, D.C.",
              zip: 100000
            },
            {
              name: "Joe Black",
              age: 31,
              address: "Sydney No. 1 Lake Park",
              province: "Australian",
              city: "Sydney",
              zip: 100000
            },
            {
              name: "Jon Snow",
              age: 26,
              address: "Ottawa No. 2 Lake Park",
              province: "Canada",
              city: "Ottawa",
              zip: 100000
            },
            {
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park",
              province: "America",
              city: "New York",
              zip: 100000
            },
            {
              name: "Jim Green",
              age: 24,
              address: "Washington, D.C. No. 1 Lake Park",
              province: "America",
              city: "Washington, D.C.",
              zip: 100000
            },
            {
              name: "Joe Black",
              age: 30,
              address: "Sydney No. 1 Lake Park",
              province: "Australian",
              city: "Sydney",
              zip: 100000
            },
            {
              name: "Jon Snow",
              age: 26,
              address: "Ottawa No. 2 Lake Park",
              province: "Canada",
              city: "Ottawa",
              zip: 100000
            }
          ]
        };
      },
      
  }
</script>
```
:::
### slot插槽
:::demo 设置slot能够开启插槽模式
```html
<yu-table :columns="columnsSlot" :data="data2"> 
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary"  style="display: inline-block" @click="show(row, index)">View</Button>
      <Button type="error" style="display: inline-block" @click="remove(index)">Delete</Button>
  </template>
</yu-table>
<script>
export default {
      data() {
          return {
            columns2: [
            
            {
              title: "Name",
              key: "name",
              width: 100,
              fixed: "left"
            },
            {
              title: "Age",
              key: "age",
              width: 100,
              fixed: "right"

            },
            {
              title: "Province",
              key: "province",
              width: 100
            },
            {
              title: "City",
              key: "city",
              width: 100
            },
            {
              title: "Address",
              key: "address",
              width: 200
            },
            {
              title: "Postcode",
              key: "zip",
              width: 100

            }
          ],
          data2: [
            {
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park",
              province: "America",
              city: "New York",
              zip: 100000
            },
            {
              name: "Jim Green",
              age: 24,
              address: "Washington, D.C. No. 1 Lake Park",
              province: "America",
              city: "Washington, D.C.",
              zip: 100000
            },
            {
              name: "Joe Black",
              age: 31,
              address: "Sydney No. 1 Lake Park",
              province: "Australian",
              city: "Sydney",
              zip: 100000
            },
            {
              name: "Jon Snow",
              age: 26,
              address: "Ottawa No. 2 Lake Park",
              province: "Canada",
              city: "Ottawa",
              zip: 100000
            },
            {
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park",
              province: "America",
              city: "New York",
              zip: 100000
            },
            {
              name: "Jim Green",
              age: 24,
              address: "Washington, D.C. No. 1 Lake Park",
              province: "America",
              city: "Washington, D.C.",
              zip: 100000
            },
            {
              name: "Joe Black",
              age: 30,
              address: "Sydney No. 1 Lake Park",
              province: "Australian",
              city: "Sydney",
              zip: 100000
            },
            {
              name: "Jon Snow",
              age: 26,
              address: "Ottawa No. 2 Lake Park",
              province: "Canada",
              city: "Ottawa",
              zip: 100000
            }
          ]
        };
      },
      methods:{
        show(row, index, column){
          console.log('row', row);
          console.log('index', index);
          console.log('column', column);
        },
        remove (index) {
          this.data2.splice(index, 1);
        }
      },
      
  }
</script>

```
:::
### 表头，左侧右侧固定
:::demo  设置columns里的数据来开启
```html
 <yu-table :columns="columns2" :data="data2" width="550" height="200">
 </yu-table>

<script>
  export default {
      data() {
          return {
            columns2: [
            
            {
              title: "Name",
              key: "name",
              width: 100,
              fixed: "left"
            },
            {
              title: "Age",
              key: "age",
              width: 100,
              fixed: "right"

            },
            {
              title: "Province",
              key: "province",
              width: 100
            },
            {
              title: "City",
              key: "city",
              width: 100
            },
            {
              title: "Address",
              key: "address",
              width: 200
            },
            {
              title: "Postcode",
              key: "zip",
              width: 100

            }
          ],
          data2: [
            {
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park",
              province: "America",
              city: "New York",
              zip: 100000
            },
            {
              name: "Jim Green",
              age: 24,
              address: "Washington, D.C. No. 1 Lake Park",
              province: "America",
              city: "Washington, D.C.",
              zip: 100000
            },
            {
              name: "Joe Black",
              age: 31,
              address: "Sydney No. 1 Lake Park",
              province: "Australian",
              city: "Sydney",
              zip: 100000
            },
            {
              name: "Jon Snow",
              age: 26,
              address: "Ottawa No. 2 Lake Park",
              province: "Canada",
              city: "Ottawa",
              zip: 100000
            },
            {
              name: "John Brown",
              age: 18,
              address: "New York No. 1 Lake Park",
              province: "America",
              city: "New York",
              zip: 100000
            },
            {
              name: "Jim Green",
              age: 24,
              address: "Washington, D.C. No. 1 Lake Park",
              province: "America",
              city: "Washington, D.C.",
              zip: 100000
            },
            {
              name: "Joe Black",
              age: 30,
              address: "Sydney No. 1 Lake Park",
              province: "Australian",
              city: "Sydney",
              zip: 100000
            },
            {
              name: "Jon Snow",
              age: 26,
              address: "Ottawa No. 2 Lake Park",
              province: "Canada",
              city: "Ottawa",
              zip: 100000
            }
          ]
        };
      },
      
  }
</script>
```
:::

### 可以开启checkbox
:::demo 设置columns里的数据来开启
```html
<yu-table  
    :columns="columns3" 
    :data="data2" 

    > </yu-table>

<script>
  export default {
      data() {
          return {
            columns3: [
                {
                type: "selection",
                width: 60,
                align: "center"
                },
                {
                title: "Name",
                key: "name",
                width: 100,
                // fixed: "left"
                },
                {
                title: "Age",
                key: "age",
                width: 100,
                // fixed: "right"
                },
                {
                title: "Province",
                key: "province",
                width: 100
                },
                {
                title: "City",
                key: "city",
                width: 100
                },
                {
                title: "Address",
                key: "address",
                width: 200
                },
                {
                title: "Postcode",
                key: "zip",
                width: 100
                }
            ],
            data2: [
                {
                name: "John Brown",
                age: 18,
                address: "New York No. 1 Lake Park",
                province: "America",
                city: "New York",
                zip: 100000
                },
                {
                name: "Jim Green",
                age: 24,
                address: "Washington, D.C. No. 1 Lake Park",
                province: "America",
                city: "Washington, D.C.",
                zip: 100000
                },
                {
                name: "Joe Black",
                age: 31,
                address: "Sydney No. 1 Lake Park",
                province: "Australian",
                city: "Sydney",
                zip: 100000
                },
                {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                province: "Canada",
                city: "Ottawa",
                zip: 100000
                },
                {
                name: "John Brown",
                age: 18,
                address: "New York No. 1 Lake Park",
                province: "America",
                city: "New York",
                zip: 100000
                },
                {
                name: "Jim Green",
                age: 24,
                address: "Washington, D.C. No. 1 Lake Park",
                province: "America",
                city: "Washington, D.C.",
                zip: 100000
                },
                {
                name: "Joe Black",
                age: 30,
                address: "Sydney No. 1 Lake Park",
                province: "Australian",
                city: "Sydney",
                zip: 100000
                },
                {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                province: "Canada",
                city: "Ottawa",
                zip: 100000
                }
            ]
        }
      },
      
  }
</script>
```
:::

### Options

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| columns | 传递表头 | Array | — | [] ||
| data | 传递数据 | Array | — | [] |
| width | 表格宽度 | string | — | - |
| height | 表格高度 | string | - | - |
| border | 表格网格  | Boolean | — | false |

### Methods

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| on-selection-change | 点击checkbox时触发 | function | — | — |

<script>
export default {
  data() {
    return {
      columns1: [
        {
          width: 60,
          align: "center"
        },
        {
          title: "Name",
          key: "name",
          width: 100
        },
        {
          title: "Age",
          key: "age",
          width: 100,
          sortable: true
        },
        {
          title: "Province",
          key: "province",
          width: 100
        },
        {
          title: "City",
          key: "city",
          width: 100
        },
        {
          title: "Address",
          key: "address",
          width: 200
        },
        {
          title: "Postcode",
          key: "zip",
          width: 100
        },
        
      ],
      columnsSlot: [
        {
          width: 60,
          align: "center"
        },
        {
          title: "Name",
          key: "name",
          width: 100
        },
        {
          title: "Age",
          key: "age",
          width: 100,
          sortable: true
        },
        {
          title: "Province",
          key: "province",
          width: 100
        },
        {
          title: "City",
          key: "city",
          width: 100
        },
        {
          title: "Address",
          key: "address",
          width: 200
        },
        {
          title: 'action',
          slot: 'action',
          type: "slot",
          width: 150,
        },
        
        
      ],
      columns2: [
        {
          title: "Name",
          key: "name",
          width: 100,
          fixed: "left"
        },
        {
          title: "Age",
          key: "age",
          width: 100,
          fixed: "right"
        },
        {
          title: "Province",
          key: "province",
          width: 100
        },
        {
          title: "City",
          key: "city",
          width: 100
        },
        {
          title: "Address",
          key: "address",
          width: 200
        },
        {
          title: "Postcode",
          key: "zip",
          width: 100
        }
      ],
      columns3: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "Name",
          key: "name",
          width: 100,
          // fixed: "left"
        },
        {
          title: "Age",
          key: "age",
          width: 100,
          // fixed: "right"
        },
        {
          title: "Province",
          key: "province",
          width: 100
        },
        {
          title: "City",
          key: "city",
          width: 100
        },
        {
          title: "Address",
          key: "address",
          width: 200
        },
        {
          title: "Postcode",
          key: "zip",
          width: 100
        }
      ],
      data2: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000
        },
        {
          name: "Jim Green",
          age: 24,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000
        },
        {
          name: "Joe Black",
          age: 31,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000
        },
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000
        },
        {
          name: "Jim Green",
          age: 24,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000
        }
      ]
    };
  },
  methods:{
    show(row, index, column){
      console.log('row', row);
      console.log('index', index);
      console.log('column', column);
    },
    remove (index) {
      this.data2.splice(index, 1);
    }
  },
};
</script>