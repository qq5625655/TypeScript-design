<template>
  <div>
    <TreeNode> </TreeNode>
  </div>
</template>
<script lang="ts">
import TreeNode from './node.vue';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'Tree',
  components: {
    TreeNode
  }
})
export default class Tree extends Vue {
  @Prop({ type: Array, default: () => [] }) data?: any[];
  mounted(): void {
    console.log('22222222');
    console.log('data', this.data);
  }
}
</script>
