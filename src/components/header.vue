<template>
<div class="header">
  <div class="logo">
    <img class="biglogo" src="@/src/assets/images/biglogo.png" alt="">
  </div>
   <div class="navGroup">
      <div class="navItem" v-for="(item,index) in menuList" :key="index">
        <span>{{ item.name }}</span> 
        <dl class="navpull2" v-if="item.children">
          <dd v-for="(ele,inx) in item.children" :key="inx">{{ ele.name }}</dd>
        </dl>
      </div>
   </div>
   <div class="searchWrap">
      <img src="@/src/assets/images/searchbtn.png" alt="">
   </div>
   <div class="openbtn2">
    <span class="sp1"></span>
    <span class="sp2"></span>
    <span class="sp3"></span>
   </div>
</div>
</template>
<script setup>
const menuList = ref([
  {
    name:'首页',
    path:''
  },
  {
    name:'关于我们',
    path:'/about',
    children:[
      {
        name:'集团介绍',
        path:''
      },
      {
        name:'组织架构',
        path:''
      },
      {
        name:'领导班子',
        path:''
      },
      {
        name:'领导关怀',
        path:''
      },
      {
        name:'集团大事记',
        path:''
      },
      {
        name:'企业文化',
        path:''
      }
    ]
  },
  {
    name:'新闻资讯',
    path:'/news',
    children:[
      {
        name:'集团要闻',
        path:''
      },
      {
        name:'企业动态',
        path:''
      },
      {
        name:'重大信息公开',
        path:''
      },
     ]
    },
    {
    name:'集团产业',
    path:'/industry',
    children:[
      {
        name:'产业板块',
        path:''
      },
      {
        name:'重点项目',
        path:''
      },
     ]
    },
    {
    name:'党群建设',
    path:'',
    children:[
      {
        name:'党建动态',
        path:''
      },
      {
        name:'廉政建设',
        path:''
      },
      {
        name:'群团园地',
        path:''
      },
     ]
    },
    {
    name:'招标信息',
    path:'',
    children:[
      {
        name:'工程类招标',
        path:''
      },
      {
        name:'物资(服务)类招标',
        path:''
      },
      {
        name:'产权交易信息',
        path:''
      },
      {
        name:'结果公示',
        path:''
      },
     ]
    },
    {
    name:'招贤纳士',
    path:'',
    children:[
      {
        name:'招聘公告',
        path:''
      },
      {
        name:'招聘公示',
        path:''
      },
     ]
    },
    {
    name:'文旅宁波',
    path:''
  },
])
</script>
<style lang="less">
.header{
  padding:0 4vw;
  display: flex;
  align-items: center;
  height: 107px;
  position: fixed;
  width: 100%;
  z-index: 999;
  left: 0px;
  top: 0px;
  background: rgba(255, 255, 255, 0.6);
  transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  .logo{
    width: 21.5%;
    transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    img{
      width: 100%;
    }
  }

 
}
.navGroup{
  height: 100%;
  padding: 0 6vw;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .navItem{
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    color: #515151;
    text-align: center;
    font-size: 18px;
    position: relative;
    &:hover{
      span{
        color: #B50105;
      }
      .navpull2 {
        max-height: 260px;
      }
      &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: #B50105

      }
    }
    .navpull2{
      color: #fff;
      border-radius: 0 0 10px 10px;
      width: 150px;
      top: 90px;
      left: -40px;
      position: absolute;
      z-index: 100;
      background: rgba(148, 107, 107, 0.8);
      text-align: center;
      max-height: 0;
      overflow: hidden;
      transition: all 0.5s linear;
      -webkit-transition: all 0.5s linear;
      dd{
        margin: 0;
        padding: 8px 0px;
        border-bottom: 1px solid #8a5951;
        border-top: 1px solid #a2776f;
        font-size: 16px;
        transition: all 0.2s linear;
        -webkit-transition: all 0.2s linear;
        &:hover{
          background-color: #b50105;
        }
      }
      >:last-child{
        border: 0;
      }
    }
  }
}
.searchWrap{
  width: 60px;
  transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  cursor: pointer;
  img{
    
  }
}

.openbtn2{
  cursor: pointer;
  width: 30px;
  z-index: 999;
  transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  span {
      display: block;
      height: 3px;
      background: #131718;
      margin-bottom: 9px;
      transition: all 0.2s linear;
      -webkit-transition: all 0.2s linear;
  }
}
</style>