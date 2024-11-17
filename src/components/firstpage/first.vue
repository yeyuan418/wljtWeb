<template>
  <div class="mainBody">
    <swiper
    :modules="modules"
    :loop="true"
    :autoplay="{ delay: 5000 }"
    :navigation="navigation"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: false }"
    effect="fade"
   	class="swiperBox"
   	@slideChange="onSlideChange"
    v-if="isClient"
    >
    <swiper-slide>
     <img class="fadeImg animate__animated animate__fadeInDown animate__delay-0s " v-if="activeIndex==2 || activeIndex==0" src="@/src/assets/images/wz1.png" alt="">
     <img class="swiperimg" src="@/src/assets/images/firstpage1.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
     <img class="fadeImg animate__animated animate__fadeInDown animate__delay-0s "  v-if="activeIndex==2 || activeIndex==1 " src="@/src/assets/images/wz1.png" alt="">
     <img class="swiperimg" src="@/src/assets/images/firstpage2.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
     <img class="fadeImg animate__animated animate__fadeInDown  animate__delay-0s" v-if="activeIndex==2" src="@/src/assets/images/wz1.png" alt="">
     <img class="swiperimg" src="@/src/assets/images/firstpage3.jpg" alt="">
    </swiper-slide>
    <!-- <div class="swiper-button-prev" @click.stop="prevEl(item, index)" />
    <div class="swiper-button-next" @click.stop="nextEl" /> -->
    </swiper>

  </div>
</template>
<script  setup>
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/pagination' // 轮播图底面的小圆点
import 'swiper/css/navigation' // 轮播图两边的左右箭头
// import 'swiper/css/scrollbar'  // 轮播图的滚动条， 轮播图里一般不怎么会使用到滚动条，如果有用到的话import导入就行
import { Autoplay, Pagination, Navigation, Scrollbar, EffectFade } from 'swiper/modules'
const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});
const activeIndex = ref(0)
const isClient = ref(false)
// 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation, Scrollbar, EffectFade]
const prevEl = (item, index) => {
  // console.log('上一张' + index + item)
};
const nextEl = () => {
  // console.log('下一张')
};
// 更改当前活动swiper
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}
onMounted(()=>{
  isClient.value = true
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
.swiper-slide{
}
.swiperimg{
  width: 100vw;
  height: 100vh;
}
.fadeImg{
  position: absolute;
  top: 20vh;
  left:21vw;
  width: 26vw;
}
:deep(.swiper-pagination){
  margin-bottom: 40px;
  .swiper-pagination-bullet{
  background: #fff;
  opacity: 1;
  width: 12px;
  height: 12px;
}
.swiper-pagination-bullet-active{
  background: #fff;
  width: 30px;
  border-radius: 8px;
}
}

</style>