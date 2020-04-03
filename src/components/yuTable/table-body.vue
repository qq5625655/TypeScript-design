<template>
  <!-- <div   class="over"> -->
    <table :style="styles"  class="table-init">
      <colgroup>
        <col v-for="(item, index) in columns" :key="index" :width="setCellWith(item)">
      </colgroup>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="(column, colIndex) in columns" :key="colIndex">
            
              <div class="table-cell">
                <Checkbox :value="rowChecked(index)" @onChnage="toggleSelect(index)" v-if="column.type === 'selection'"></Checkbox>
                
              <span  v-else>{{ item[column.key] }}</span>
              
            </div>
            <TableSlot
              v-if="column.type === 'slot'"
              :item="item"
              :column="column"
              :index="index"></TableSlot>
           
          </td>
        </tr>
      </tbody>
    </table>
  <!-- </div> -->
</template>
<script>
import Checkbox from './checkbox';
// import Emitter from '../../src/mixin/emitter';
import Emitter from './emitterTest';
import TableSlot  from './slot';
export default {
  inject: ['tableRoot'],
  mixins:[Emitter],
  props: {
    columns: {
      type: Array
    },
    data: {
      type: Array
    },
    height: {
      type: Number
    },
    tableBodyWidth: [Object, Number],
    checkColumn:{
      type: Array,
    },
    // bodyHeightStyle: Object,
  },
  components:{
    Checkbox,
    TableSlot,
  },
  computed: {
    
    styles() {
      let style = {};
      const width = parseInt(this.tableBodyWidth);
      style.width = `${width}px`;

      return style;
      //   const style = Object.assign({}, this.styleObject);

      //   if(!!style.width){

      //   }
    },
    
  },
  methods:{
    rowChecked(index){
      return this.checkColumn[index] && this.checkColumn[index].checked;
    },
    toggleSelect(index){
      
      this.dispatch('yuTable', 'toggleSelect', {
        index,
      })
    },
    setCellWith(item){
      const width = item.width ? item.width : this.tableBodyWidth;
      return width;
    },
    
  },
  mounted(){
      console.log('tableRoottableRoottableRoottableRoot', this);
      
    },
};
</script>
<style scoped>
.over {
  overflow: hidden;
}
</style>
