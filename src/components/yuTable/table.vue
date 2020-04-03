<template>
  <div :class="wrapClasses" :style="styles">
    <div class="table-header" ref="title">
      <tableHead
        :columns="cloneColumns"
        :data="data"
        :checkColumn="checkColumn"
      ></tableHead>
    </div>

    <div
      class="table-body"
      :style="bodyHeightStyle"
      :class="classes"
      @scroll="handleBodyScroll"
    >
      <tableBody
        :columns="cloneColumns"
        :data="data"
        :checkColumn="checkColumn"
      ></tableBody>
    </div>
    <div
      class="table-fixed-left"
      ref="fixLeft"
      v-if="isLeftFixed"
      :style="fixedLeftTableStyle"
    >
      <div class="table-fixed-header">
        <tableHead
          :columns="convertColumnOrder(columns, 'left')"
          :data="data"
          :tableBodyWidth="fixLeftWidth"
        ></tableHead>
      </div>

      <div
        class="table-fixed-body"
        :style="bodyFixHeightStyle"
        ref="fixedLeftBody"
      >
        <tableBody
          :columns="convertColumnOrder(columns, 'left')"
          :data="data"
          :tableBodyWidth="fixLeftWidth"
        ></tableBody>
      </div>
    </div>
    <div
      class="table-fixed-right"
      ref="fixRight"
      v-if="isRightFixed"
      :style="fixedRightTableStyle"
    >
      <div class="table-fixed-header">
        <tableHead
          :columns="convertColumnOrder(columns, 'right')"
          :data="data"
          :tableBodyWidth="fixLeftWidth"
        ></tableHead>
      </div>

      <div
        class="table-fixed-body"
        :style="bodyFixHeightStyle"
        ref="fixedRightBody"
      >
        <tableBody
          :columns="convertColumnOrder(columns, 'right')"
          :data="data"
          :tableBodyWidth="fixLeftWidth"
        ></tableBody>
      </div>
    </div>
    <div
      v-if="width !== 0"
      :style="fixedRightScroll"
      class="fixed-right-scroll"
    ></div>
  </div>
</template>
<script>
import tableHead from "./table-head";
import tableBody from "./table-body";
// import "./table.scss";
export default {
  name: "yuTable",
  components: {
    tableHead,
    tableBody
  },
  props: {
    columns: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    },
    height: {
      type: [String, Number]
    },
    width: {
      type: [String, Number]
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
        tableRoot: this
    };
  },
  data() {
    return {
      bodyHeight: 0,
      scrollWidth: this.getScrollBarSize(),
      fixLeftWidth: 0,
      cloneColumns: this.markColumns(this.columns),
      titleHeight: 0,
      fixRightWidth: 0,
      checkColumn: [],
      
    };
  },

  computed: {
    wrapClasses() {
      return [
        `yutable_wrap`,
        {
          [`yutable_wrap_border`]: this.border
        }
      ];
    },
    classes() {
      return [
        {
          [`table-body-overflowY`]: this.height,
          ["table-body-overflowX"]: this.width,
          ["table-border"]: this.border
        }
      ];
    },
    bodyHeightStyle() {
      let style = {};
      if (this.bodyHeight !== 0) {
        const height = this.bodyHeight;
        if (this.height) {
          style.height = `${height}px`;
        }
      }
      return style;
    },
    bodyFixHeightStyle() {
      let style = {};
      if (this.bodyHeight !== 0) {
        let height = this.bodyHeight;
        if (this.width) {
          height = height - this.scrollWidth;
        }

        if (this.height) {
          style.height = `${height}px`;
        }
      }
      return style;
    },
    isLeftFixed() {
      return this.columns.some(col => col.fixed && col.fixed === "left");
    },
    isRightFixed() {
      return this.columns.some(col => col.fixed && col.fixed === "right");
    },
    fixedLeftTableStyle() {
      let style = {};

      if (this.fixLeftWidth !== 0) {
        style.width = `${this.fixLeftWidth}px`;
      }
      return style;
    },
    fixedRightTableStyle() {
      let style = {};
      style.right = "0";

      if (this.height) {
        style.right = `${this.scrollWidth}px`;
      }
      if (this.fixRightWidth !== 0) {
        style.width = `${this.fixRightWidth}px`;
      }
      return style;
    },
    styles() {
      let style = {};
      // let summaryHeight = 0;
      // if (this.showSummary) {
      //     if (this.size === "small") summaryHeight = 40;
      //     else if (this.size === "large") summaryHeight = 60;
      //     else summaryHeight = 48;
      // }
      // if (this.height) {
      //     let height = parseInt(this.height) + summaryHeight;
      //     style.height = `${height}px`;
      // }
      // if (this.maxHeight) {
      //     const maxHeight = parseInt(this.maxHeight) + summaryHeight;
      //     style.maxHeight = `${maxHeight}px`;
      // }
      if (this.width) {
        style.width = `${this.width}px`;
      }
      return style;
    },
    fixedRightScroll() {
      let style = {};
      let width = 0;

      let height = this.titleHeight - 2;

      if (this.isRightFixed) {
      }
      width = this.scrollWidth;
      style.width = `${width}px`;
      style.height = `${height}px`;
      return style;
    }
  },
  created() {
    this.$on("toggleSelect", params => {
      const { index } = params;
      let data = {};
      for (let i = 0; i < this.data.length; i++) {
        if (i === index) {
          data = this.data[i];
          this.checkColumn[i].checked = !this.checkColumn[i].checked;
          break;
        }
      }
      // this.checkColumn.forEach((item)=>{

      // })
      this.$emit("on-selection-change", data);
    });
  },
  methods: {
    selectAll(status) {
      console.log("status", status);
      this.checkColumn.forEach(item => {
        item.checked = status;
      });
    },
    handleBodyScroll(event) {
      if (this.isLeftFixed) {
        this.$refs.fixedLeftBody.scrollTop = event.target.scrollTop;
      }
      if (this.isRightFixed) {
        this.$refs.fixedRightBody.scrollTop = event.target.scrollTop;
      }
      this.$refs.title.scrollLeft = event.target.scrollLeft;
    },
    fixedLeftWidth() {
      this.$nextTick(() => {
        // let style = {};
        let width = 0;
        this.columns.forEach(col => {
          if (col.fixed && col.fixed === "left") {
            width = col.width ? col.width : "";
            this.fixLeftWidth += width;
          }
        });
        if (this.fixLeftWidth === "0") {
          this.fixLeftWidth =
            (parseInt(this.getStyle(this.$el, "width")) -
              this.scrollWidth -
              2) /
            this.columns.length;
        }
      });
    },
    fixedRightWidth() {
      this.$nextTick(() => {
        // let style = {};
        let width = 0;
        this.columns.forEach(col => {
          if (col.fixed && col.fixed === "right") {
            width = col.width ? col.width : "";
            this.fixRightWidth += width;
          }
        });
        if (this.fixRightWidth === "0") {
          this.fixRightWidth =
            (parseInt(this.getStyle(this.$el, "width")) -
              this.scrollWidth -
              2) /
            this.columns.length;
        }
      });
    },
    tableHeight() {
      // 不用nextTick的无法获取refs.
      this.$nextTick(() => {
        if (this.height) {
          this.titleHeight =
            parseInt(this.getStyle(this.$refs.title, "height")) || 0;

          this.bodyHeight = this.height - this.titleHeight - 2;
        }
      });
    },
    getStyle(element, styleName) {
      const computed = window
        .getComputedStyle(element)
        .getPropertyValue(styleName);

      return computed ? computed : element.style[styleName];
    },
    convertColumnOrder(columns, fixedType) {
      let list = [];
      let other = [];
      columns.forEach(col => {
        if (col.fixed && col.fixed === fixedType) {
          list.push(col);
        } else {
          other.push(col);
        }
      });
      return list.concat(other);
    },
    // leftWidth() {},
    // 动态创建div来获取不同浏览器scroll的宽度
    getScrollBarSize() {
      const inner = document.createElement("div");
      inner.style.width = "100%";
      inner.style.height = "200px";

      const outer = document.createElement("div");
      const outerStyle = outer.style;

      outerStyle.position = "absolute";
      outerStyle.top = 0;
      outerStyle.left = 0;
      outerStyle.pointerEvents = "none";
      outerStyle.visibility = "hidden";
      outerStyle.width = "200px";
      outerStyle.height = "150px";
      outerStyle.overflow = "hidden";

      outer.appendChild(inner);

      document.body.appendChild(outer);

      const widthContained = inner.offsetWidth;
      outer.style.overflow = "scroll";
      let widthScroll = inner.offsetWidth;

      if (widthContained === widthScroll) {
        widthScroll = outer.clientWidth;
      }

      document.body.removeChild(outer);

      let cached = widthContained - widthScroll;

      return cached;
    },
    markColumns(cols) {
      let left = [];
      let right = [];
      let center = [];
      this.checkColumn = this.shallowCopy(this.data, "array");

      this.checkColumn.forEach((ele, index) => {
        this.$set(ele, "checked", false);
      });

      this.columns.forEach((col, index) => {
        if (col.fixed === "left") {
          left.push(col);
        } else if (col.fixed === "right") {
          right.push(col);
        } else {
          center.push(col);
        }
      });
      return left.concat(center).concat(right);
    },
    // 浅拷贝
    shallowCopy(src, type = "obj") {
      let dst;
      if (type === "array") {
        dst = [];
      } else {
        dst = {};
      }

      for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
          dst[prop] = src[prop];
        }
      }
      return dst;
    }
  },
  mounted() {
    this.tableHeight();
    this.markColumns();
    console.log('cloneColumns');
    if (this.isLeftFixed) {
      this.fixedLeftWidth();
    }
    if (this.isRightFixed) {
      this.fixedRightWidth();
    }

    // this.scrollWidth = this.$el.offsetWidth - 2;
  }
};
</script>
<style lang="scss">
.table-body-overflowY {
    overflow-y: scroll;
}
.table-body-overflowX {
    overflow-x: scroll;
}
.fixed-right-scroll {
    position: absolute;
    top: -1px;
    right: 0;
    background-color: #f8f8f9;
    border-top: 1px solid #dcdee2;
    border-bottom: 1px solid #e8eaec;
}
.table-header {
    overflow: hidden;
}


.yutable_wrap {
    position: relative;
    overflow: hidden;
    border: 1px solid #dcdee2;
    .table-init {
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
        border-spacing: 0;
        empty-cells: show;

        td,
        th {
            min-width: 0;
            height: 48px;
            box-sizing: border-box;
            text-align: left;
            text-overflow: ellipsis;
            vertical-align: middle;
            background: #f4f5f9;
            border-bottom: 1px solid #e8eaec;
        }
        th {
            height: 40px;
            white-space: nowrap;
            overflow: hidden;
            background: #f8f8f9;
        }
        td {
            background-color: #fff;
            transition: background-color 0.5s ease-in-out;
        }
        tr:hover {
            td {
                background: #f0faff;
            }
        }
        
    }

    .table-fixed-left,
    .table-fixed-right {
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: 2px 0 6px -2px rgba(0, 0, 0, 0.2);
        .table-fixed-header {
            overflow: hidden;
        }
        .table-fixed-body {
            overflow: hidden;
            position: relative;
            z-index: 3;
        }
    }
    .table-fixed-right {
        left: auto;
        box-shadow: -2px 0 6px -2px rgba(0,0,0,.2);
    }
}
.yutable_wrap_border{
    th,td{
        border-right: 1px solid #e8eaec;
    }
}
.table-cell {
    padding-left: 18px;
    padding-right: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    box-sizing: border-box;
}
</style>
