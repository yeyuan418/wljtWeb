<template>
  <div>
    <swiper :pagination="pagination" :modules="modules" class="mySwiper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>
  </div>
</template>
<script  setup>
 import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination } from 'swiper/modules';

// 定义分页配置
const pagination = {
  clickable: true,
  renderBullet: (index, className) => {
    return `<span class="${className}">${index + 1}</span>`;
  },
};

// 定义使用的模块
const modules = [Pagination];
</script>
<style lang="less" scoped>
div{
  box-sizing: border-box;
}
.swiper-slide{
  background-color: aqua;
}
</style>