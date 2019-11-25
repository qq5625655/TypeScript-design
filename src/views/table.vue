<template>
  <div class="yutable_wrap" :style="styles">
    <div class="table-header" ref="title">
      <tableHead :columns="cloneColumns" :data="data"></tableHead>
    </div>

    <div class="table-body" :style="bodyHeightStyle" :class="classes" @scroll="handleBodyScroll">
      <tableBody :columns="cloneColumns" :data="data"></tableBody>
    </div>
    <div class="table-fixed-left" ref="fixLeft" v-if="isLeftFixed" :style="fixedLeftTableStyle">
      <div class="table-fixed-header">
        <tableHead
          :columns="convertColumnOrder(columns, 'left')"
          :data="data"
          :tableBodyWidth="fixLeftWidth"
        ></tableHead>
      </div>

      <div class="table-fixed-body" :style="bodyFixHeightStyle" ref="fixedBody">
        <tableBody
          :columns="convertColumnOrder(columns, 'left')"
          :data="data"
          :tableBodyWidth="fixLeftWidth"
        ></tableBody>
      </div>
    </div>
    <div class="table-fixed-right" v-if="isRightFixed" :style="fixedRightTableStyle">
      <div class="table-fixed-header">
        <tableHead
          :columns="convertColumnOrder(columns, 'right')"
          :data="data"
          :tableBodyWidth="fixLeftWidth"
        ></tableHead>
      </div>

      <div class="table-fixed-body" :style="bodyFixHeightStyle">
        <tableBody
          :columns="convertColumnOrder(columns, 'right')"
          :data="data"
          :tableBodyWidth="fixLeftWidth"
        ></tableBody>
      </div>
    </div>
    <div v-if="isRightFixed" :style="fixedRightScroll" class="fixed-right-scroll"></div>
  </div>
</template>
<script>
import tableHead from "./table-head";
import tableBody from "./table-body";
import "./table.less";
export default {
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
    }
  },
  data() {
    return {
      bodyHeight: 0,
      scrollWidth: this.getScrollBarSize(),
      fixLeftWidth: 0,
      cloneColumns: this.markColumns(this.columns),
      titleHeight:0,
    };
  },

  computed: {
    classes() {
      return [
        {
          [`table-body-overflowY`]: this.height,
          ["table-body-overflowX"]: this.width
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
      if (this.fixLeftWidth !== 0) {
        style.width = `${this.fixLeftWidth}px`;
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
      console.log('height', height)
      if (this.isRightFixed) {
        width = this.scrollWidth;
      }
      style.width = `${width}px`;
      style.height = `${height}px`;
      return style;
    }
  },
  methods: {
    handleBodyScroll(event) {
      if (this.isLeftFixed) {
        this.$refs.fixedBody.scrollTop = event.target.scrollTop;
      }

      this.$refs.title.scrollLeft = event.target.scrollLeft;
    },
    leftWidth() {
      this.$nextTick(() => {
        // let style = {};
        let width = 0;

        // this.fixLeftWidth =
        //     parseInt(this.getStyle(this.$el, "width")) -
        //     this.scrollWidth -
        //     2;

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
        // this.fixLeftWidth = `${width}px`;

        // return style;
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
    }
  },
  mounted() {
    this.tableHeight();
    this.markColumns();
    if (this.isLeftFixed) {
      this.leftWidth();
    }

    // this.scrollWidth = this.$el.offsetWidth - 2;
  }
};
</script>
<style lang="less" scoped>
.yutable_wrap {
  border: 1px solid #dcdee2;
}
.over {
  overflow: hidden;
}
</style>
