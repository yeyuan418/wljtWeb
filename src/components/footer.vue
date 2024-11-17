<template>
<div class="footer">
 <div class="col-left">
  <div class="nav">
    版权所有 宁波文旅会展集团有限公司
    <br>    
    地址：浙江省宁波市鄞州区达升路289号（宁波文旅中心）        电话：0574-89116078
  </div>
  <div class="copyright">
    © Copyright  2020  NINGBO CULTURE TOURISM&EXHIBITION GROUP CO.,LTD.    
    <a href="https://beian.miit.gov.cn/">浙ICP备2020044172号-1</a>  
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33021202001638" target="_blank">
      <img src="@/src/assets/images/ga.png" alt="">
      <span>浙公网安备 33021202001638号</span>
    </a>
  </div>
 </div>
 <div class="col-right">
   <select name="" id="" @change="changeUrl($event)">
    <option  v-for="(item,index) in outsideLink" :value="item.url">{{ item.name }}</option>
   </select>
   <div class="codebox">
    <img src="@/src/assets/images/logocode.jpg" alt="">
    <span>扫一扫加关注</span>
   </div>
 </div>
</div>
</template>
<script setup>
const outsideLink = [
  {
    name:'——友情链接——',
    url:'#'
  },
  {
    name:'永麒科技集团',
    url:'https://www.yokelight.com/'
  },
  {
    name:'宁波公运集团股份有限公司',
    url:'http://www.nbgy.com'
  },
  {
    name:'宁波科学探索中心管理有限公司',
    url:'http://www.nbsec.org/'
  },
  {
    name:'宁波国际会议展览中心',
    url:'http://www.expo-nb.com'
  },
  {
    name:'宁波大剧院文化发展有限公司',
    url:'http://www.nbdjy.com'
  },
  {
    name:'宁波国资委',
    url:'http://gzw.ningbo.gov.cn/'
  }
]

function changeUrl(event){
  // console.log(this)
  // this.$CONFIGInitFun();
  window.open(event.target.value)
  console.log(event.target.value);
  
}
</script>
<style lang="less">
.footer{
  padding: 0 3vw;
  background: url('@/src/assets/images/footer.png') top center no-repeat;
  background-size: 100% auto;
  border: none;
  height: 180px;
  display: flex;
  justify-content: space-between;
  .col-left{
    padding: 72px 0 3px;
    .nav{
      line-height: 28px;
      color: #a9a9a9;
      font-size: 14px;
    }
  }
  .col-right{
    padding: 72px 0 3px;
    display: flex;
    select{
      margin-right: 30px;
      height: 21px;
      margin-top: 30px;
      border: 1px #fff solid;
      color: #a9a9a9;
      text-align: center;
      padding: 0 10px;
      background: transparent;
    }
    .codebox{
      font-size: 12px;
      color: #7e7e7e;
      span{
        margin-top: 3px;
        display: block;
        text-align: center;
      }
      img{
        display: block;
        margin: 0px auto;
        width: 74px;
        height: 74px;
        border: 4px solid #fff;
      }
    }
  }
  .copyright{
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-top: 14px;
    color: #7e7e7e;
    a{
      img{
        margin-right: 5px;
      }
      display: flex;
      align-items: center;
      color: #7e7e7e;
      margin-left: 20px;
      text-decoration: none;
      &:hover{
        color: #fff;
        transition: all 0.2s linear;
        -webkit-transition: all 0.2s linear;
      }
    }
  }
}
</style>