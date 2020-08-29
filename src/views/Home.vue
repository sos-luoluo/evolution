<template>
  <div class="home">
    <h3>进化实验室</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  created() {}
  mounted() {}
  onmounted() {}
}
</script>
<style lang="less">
.home {
  h3 {
    text-align: center;
  }
}
</style>
