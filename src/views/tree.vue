<template>
    <div :class="prefixCls">
        <TreeNode
            v-for="(item, index) in stateTree"
            :key="index"
            :data="item"
            :childrenKey="childrenKey"
        >
        </TreeNode>
    </div>
</template>
<script>
import TreeNode from "./node";
const prefixCls = "yu-tree";
export default {
    name: "yu-tree",
    components: {
        TreeNode
    },
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        childrenKey: {
            type: String,
            default: "children"
        }
    },
    data() {
        return {
            stateTree: this.data
        };
    },
    computed: {
        prefixCls() {
            return prefixCls;
        }
    },
    created() {
        this.$on("toggle-expand", params => {
            console.log("param", params);
        });
    },
    mounted() {}
};
</script>
<style lang="less" scoped>
.yu-tree {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
}
</style>
