<template>
  <!-- <div   class="over"> -->
    <table :style="styles" class="table-init">
      <colgroup>
        <col v-for="(item, index) in columns" :key="index" :width="setCellWith(item)">
        <col v-if="$parent.isRightFixed" :width="scrollWidth">
      </colgroup>
      <!-- <colgroup>
        <col v-for="(column, index) in columns" :key="index" :width="setCellWidth(column)" />
      </colgroup>-->
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            <div class="table-cell">
              <span>{{ column.title }}</span>
            </div>
          </th>
          <th  v-if="$parent.isRightFixed" ></th>
        </tr>
      </thead>
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
    fixed: {
      type: [Boolean, String],
      default: false
    },
    tableBodyWidth: [Object, Number]
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
    scrollWidth(){
        const width = this.$parent.scrollWidth;

        if(width){
            return `${width}px`;
        }
    }
    
  },
  methods:{
    setCellWith(item){
      const width = item.width ? item.width : this.tableBodyWidth;
      return `${width}`;
    },
  },
};
</script>
<style scoped>
.over {
  overflow: hidden;
}
</style>
