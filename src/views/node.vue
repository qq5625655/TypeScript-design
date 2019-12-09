<template>
    <CollapseTransition>
        <ul :class="classes">
            <li>
                <span @click="handleExpand" v-if="showArrow">
                    <i :class="arrowClasses"></i>
                </span>
                <span :class="titleClasses">{{ data.title }}</span>
                <TreeNode
                    v-for="(item, i) in children"
                    :key="i"
                    :data="item"
                    :childrenKey="childrenKey"
                >
                </TreeNode>
            </li>
        </ul>
    </CollapseTransition>
</template>
<script>
import Emitter from "./emitterTest";
const prefixCls = "yu-tree";
import CollapseTransition  from './collapseTransition';
export default {
    name: "TreeNode",
    mixins: [Emitter],
    components:{ CollapseTransition },
    props: {
        data: {
            type: Object,
            default() {
                return {};
            }
        },
        childrenKey: {
            type: String,
            default: "children"
        }
    },
    computed: {
        children() {
            return this.data.expand ? this.data[this.childrenKey] : [];
        },
        showArrow() {
            return (
                this.data[this.childrenKey] &&
                this.data[this.childrenKey].length > 0
            );
        },
        classes() {
            return [`${prefixCls}-children`];
        },
        titleClasses() {
            return [`${prefixCls}-title`, {}];
        },
        arrowClasses() {
            return [
                `${prefixCls}-arrow`,
                {
                    ["yu_icon_arrow_right"]: !this.data.expand,
                    [`yu_icon_arrow_left`]: this.data.expand
                }
            ];
        }
    },
    methods: {
        handleExpand() {
            if (
                this.data[this.childrenKey] &&
                this.data[this.childrenKey].length > 0
            ) {
                this.$set(this.data, "expand", !this.data.expand);
                this.dispatch("yu-tree", "toggle-expand", this.data);
            }
        }
    }
};

</script>
<style lang="less" scoped>
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }

.yu-tree-children {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
}
.yu-tree-arrow {
    font-size: 14px;
    cursor: pointer;
}
.yu-tree-arrow-close {
    transform: rotate(90deg);
}
.yu-tree-title {
    display: inline-block;
    margin: 0;
    padding: 0 4px;
    border-radius: 3px;
    cursor: pointer;
    vertical-align: top;
    color: #515a6e;
}
.yu-tree-children {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
}
.yu-tree ul li {
    list-style: none;
    margin: 8px 0;
    padding: 0;
    white-space: nowrap;
    outline: 0;
}
.yu-tree ul li ul {
    margin: 0;
    padding: 0 0 0 18px;
}
</style>
