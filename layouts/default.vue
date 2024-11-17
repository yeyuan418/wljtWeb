<template>
  <div class="mainBody">
    <my-header />
    <NuxtPage />
    <my-footer />
  </div>
</template>

<script setup>
import MyHeader from '@/src/components/header.vue'
// import MyFooter from '@/src/components/footer.vue'


</script>

<style lang="less">
body{
  margin: 0;
  div{
    box-sizing: border-box;
  }
}

.mainBody{
  overflow-x: hidden;
  div{
    box-sizing: border-box;
  }
}
::-webkit-scrollbar {
    width: 3px;
    -webkit-overflow-scrolling: touch;
    background-color: #e6e6e6;
}
::-webkit-scrollbar-button {
    height: 0px;
    background-color: #B0AEDA;
}
</style>
