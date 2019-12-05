<template>
    <!-- <div   class="over"> -->
    <table :style="styles" class="table-init">
        <colgroup>
            <col
                v-for="(item, index) in columns"
                :key="index"
                :width="setCellWith(item)"
            />
            <col v-if="$parent.width" :width="scrollWidth" />
        </colgroup>
        <!-- <colgroup>
        <col v-for="(column, index) in columns" :key="index" :width="setCellWidth(column)" />
      </colgroup>-->
        <thead>
            <tr>
                <th v-for="(column, index) in columns" :key="index">
                    <div class="table-cell">
                        <Checkbox
                            v-if="column.type === 'selection'"
                            :value="isSelectAll"
                            @onChnage="selectAll"
                        ></Checkbox>
                        <span v-else>{{ column.title }}</span>
                    </div>
                </th>
                <th v-if="$parent.width"></th>
            </tr>
        </thead>
    </table>
    <!-- </div> -->
</template>
<script>
import Checkbox from "./checkbox";

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
        tableBodyWidth: [Object, Number],
        checkColumn: {
            type: Array
        }
    },
    components: {
        Checkbox
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
        isSelectAll() {
            let isSelectAll = true;
            if(!this.checkColumn) {
              isSelectAll = false;
            }
            for (let i = 0; i < this.checkColumn.length; i++) {
                if (this.checkColumn[i].checked === false) {
                    isSelectAll = false;
                    break;
                }
            }
            return isSelectAll;
        },
        scrollWidth() {
            const width = this.$parent.scrollWidth;

            if (width) {
                return `${width}px`;
            }
        }
    },
    methods: {
        setCellWith(item) {
            const width = item.width ? item.width : this.tableBodyWidth;
            return `${width}`;
        },
        selectAll() {
            const status = !this.isSelectAll;
            console.log("this", this.$parent);
            this.$parent.selectAll(status);
        }
    },
    mounted() {}
};
</script>
<style scoped>
.over {
    overflow: hidden;
}
</style>
