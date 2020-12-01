<template>
    <div class="tabcontrol">
        <div class="tabcontrol-item" v-for="(item,index) in titles" :key="index"
        :class="{active: index === currentIndex}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"tabControl",
    props:{
        titles:{
            type:Array,
            default(){
            return []
        }
      }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style lang="scss" scoped>
.tabcontrol{
    // z-index: 99;
    display: flex;
    background-color: #ffffff;
    text-align: center;
    .tabcontrol-item{
        flex: 1;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
    }
}
.active{
    color: pink;
    span{
         border-bottom: 3px solid pink;
         padding: 5px;
    }
   
}
</style>