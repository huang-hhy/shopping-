<template>
        <div class="nav-item" @click="itemClick">
            <div v-if="!isActive">
                <slot name="item_icon"></slot>
            </div>
            <div v-else>
                <slot name="item_icon_active"></slot>
            </div>
            
            <div :style="activeStyle">
                <slot name="item_text"></slot>
            </div>
            
            <!-- <img src="@/assets/img/tabbar/shouye.svg" alt="">
            <div>首页</div>  -->
        </div>  
</template>

<script>
export default {
    name:'tabitem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:true
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path).catch(err => err)
        }
    }
}
</script>

<style lang="scss" scoped>

    // display: flex;
    .nav-item {
        flex: 1;
        height: 49px;
        font-size: 14px;
        text-align: center;
    img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      margin-bottom: 3px;
      vertical-align: middle;
    }
  }
.active{
    color: pink;
}

</style>