<template>
  <div class="home">
    <h3>进化实验室</h3>
    <input v-model.number="typeNumber" type="number" placeholder="请输入type" />
    <button @click="test">进行测试</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {Pool,AutoTest} from "@/evolution/algorithm"
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

@Component({
  components: {}
})
export default class Home extends Vue {
  typeNumber:number=0;
  pool:Pool=new Pool();
  async test(){
    this.pool=new Pool();
    const list = new AutoTest(this.typeNumber).list
    for(let i=0;i<list.length;i++){
      const {x,y,z} = list[i]
      this.pool.testAll(x,y,z)
      const alive = this.pool.cache.size
      if(alive===1){
        break;
      }
      // await delay(10)
    }
    this.pool.printAlive()
  }
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
