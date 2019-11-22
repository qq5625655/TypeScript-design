<template>
    <div class="yutable_wrap">
        <div class="table-header" ref="title">
            <tableHead :columns="columns" :data="data"></tableHead>
        </div>

        <div class="table-body" :style="bodyHeightStyle" :class="classes">
            <tableBody :columns="columns" :data="data"></tableBody>
        </div>
        <div
            class="table-fixed"
            ref="fixLeft"
            v-if="isLeftFixed"
            :style="fixedLeftTableStyle"
        >
            <tableHead :columns="columns" :data="data"></tableHead>
            <tableBody :columns="columns" :data="data"></tableBody>
        </div>
    </div>
</template>
<script>
import tableHead from "./table-head";
import tableBody from "./table-body";
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
        }
    },
    data() {
        return {
            bodyHeight: 0,
            fixWidth: this.getScrollBarSize(),
        };
    },

    computed: {
        classes() {
            return [
                {
                    [`table-body-overflowY`]: this.height
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
        isLeftFixed() {
            return this.columns.some(col => col.fixed && col.fixed === "left");
        },
        fixedLeftTableStyle() {
            // clientHeight content + padding
            // offsetHeight  content + padding + border
            let style = {};
            let width = 0;
            this.columns.forEach(col => {
                if (col.fixed && col.fixed === "left") {
                    // console.log('233333', parseInt(this.getStyle(this.$refs.fixLeft, 'width')))
                    // width = col.width ?  col.width: parseInt(this.getStyle(this.$refs.fixLeft, 'width'))
                    // width += col.width;
                }
            });
            style.width = `${width}px`;

            return style;
        }
    },
    methods: {
        tableHeight() {
            // 不用nextTick的无法获取refs.
            this.$nextTick(() => {
                if (this.height) {
                    const titleHeight =
                        parseInt(this.getStyle(this.$refs.title, "height")) ||
                        0;

                    this.bodyHeight = this.height - titleHeight - 2;
                }
            });
        },
        getStyle(element, styleName) {
            const computed = window
                .getComputedStyle(element)
                .getPropertyValue(styleName);

            return computed ? computed : element.style[styleName];
        },
        leftWidth() {},
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
        }
    },
    mounted() {
        this.tableHeight();
        console.log("this.el", this.$el.offsetWidth);
        console.log('fixWidth', this.fixWidth);
        this.fixWidth = this.$el.offsetWidth - 2;
    }
};
</script>
<style lang="less" scoped>
.yutable_wrap {
    border: 1px solid #dcdee2;
}
</style>
