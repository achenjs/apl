<template>
  <div class="home">
    <el-menu theme="dark" class="el-menu-demo"
     mode="horizontal" router>
      <el-menu-item :index="index++" v-for="(item, index) in $router.options.routes"
      key="index"  
      v-if="!item.hidden">{{item.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
