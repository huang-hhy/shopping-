<template>
  <div id="app">
   <navbar>
     <navbaritem path="/home" activeColor="pink">
       <img slot="item_icon" src="@/assets/img/tabbar/shouye.svg" alt="">
       <img slot="item_icon_active" src="@/assets/img/tabbar/shouye_hover.svg" alt="">
       <div slot="item_text">首页</div>
     </navbaritem>
     <navbaritem path="/categroy" activeColor="pink">
       <img slot="item_icon" src="@/assets/img/tabbar/fenlei.svg" alt="">
       <img slot="item_icon_active" src="@/assets/img/tabbar/fenlei_hover.svg" alt="">
       <div slot="item_text">分类</div>
     </navbaritem> 
     <navbaritem path="cart" activeColor="pink">
       <img slot="item_icon" src="@/assets/img/tabbar/baoshuicang.svg" alt="">
       <img slot="item_icon_active" src="@/assets/img/tabbar/baoshuicang_hover.svg" alt="">
       <div slot="item_text">购物车</div>
     </navbaritem>
     <navbaritem path="profile" activeColor="pink">
       <img slot="item_icon" src="@/assets/img/tabbar/wo.svg" alt="">
       <img slot="item_icon_active" src="@/assets/img/tabbar/wo_hover.svg" alt="">
       <div slot="item_text">我的</div>
     </navbaritem>
   </navbar>
   <keep-alive exclude="Detail">
       <router-view/>
  </keep-alive>
  
  
  </div>
</template>

<script>
import navbar from "./components/tabbar/tab"
import navbaritem from "./components/tabbar/tabitem"
export default {
  name:"App",
  components:{
    navbar,
    navbaritem
    
  }
}
</script>

<style lang="scss">
@import "assets/css/base.css"
</style>
