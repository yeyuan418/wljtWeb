<template>
  <div class="mainBody">
    <el-carousel height="100vh" direction="vertical" :autoplay="false" trigger="click">
    <el-carousel-item >
      <firstpage />
    </el-carousel-item>
    <el-carousel-item >
      <secondpage />
    </el-carousel-item>
    <el-carousel-item >
      <thirdpage />
    </el-carousel-item>
    <el-carousel-item >
      <fourthpage />
    </el-carousel-item>
  </el-carousel>

  </div>
</template>
<script  setup>
import firstpage from '@/src/components/firstpage/first.vue';
import secondpage from '@/src/components/firstpage/second.vue';
import thirdpage from '@/src/components/firstpage/third.vue';
import fourthpage from '@/src/components/firstpage/fourth.vue';


onMounted(()=>{
})


</script>
<style lang="less" scoped>
.mainBody{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  div{
    box-sizing: border-box;
  }
}
div{
  width: 100vw;
  box-sizing: border-box;
}


</style>