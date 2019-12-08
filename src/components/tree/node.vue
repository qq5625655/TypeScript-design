<template>
  <ul>
    <li>
      <span>{{ data.title }}</span>
    </li>
    <!-- <TreeNode v-for="(item, i) in children" :key="i"> </TreeNode> -->
  </ul>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'TreeNode'
})
export default class TreeNode extends Vue {
  @Prop({ type: Array, default: () => [] }) data?: any[];
}
</script>
