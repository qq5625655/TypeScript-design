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
              <span>{{ item[column.key] }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  <!-- </div> -->
</template>
<script>
export default {
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
    // bodyHeightStyle: Object,
  },
  computed: {
    styles() {
      let style = {};
      const width = parseInt(this.tableBodyWidth);
      style.width = `${width}px`;
      console.log("tableBodyWidth", this.tableBodyWidth);
      return style;
      //   const style = Object.assign({}, this.styleObject);

      //   if(!!style.width){

      //   }
    },
    
  },
  methods:{
    setCellWith(item){
      const width = item.width ? item.width : this.tableBodyWidth;
      return width;
    },
  },
};
</script>
<style scoped>
.over {
  overflow: hidden;
}
</style>
