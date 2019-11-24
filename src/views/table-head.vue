<template>
  <div class="over">
    <table :style="styles" class="table-init">
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
        </tr>
      </thead>
    </table>
  </div>
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
      console.log('tableBodyWidth', this.tableBodyWidth);
      return style;
      //   const style = Object.assign({}, this.styleObject);

      //   if(!!style.width){

      //   }
    }
  }
};
</script>
<style scoped>
.over {
  overflow: hidden;
}
</style>
