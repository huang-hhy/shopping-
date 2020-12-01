<template>
  <div>
    <nav-bar>
        <div slot="left" class="back" @click="backClick">
            <img src="@/assets/img/back.svg" alt="">
        </div>
      <div class="title" slot="center" >
          <div @click="titleClick(index)" :class="{active: index===currentindex}" v-for="(item,index) in titles" :key="index" class="title-item">{{item}}</div>   
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "Deatil",
  components: {
    NavBar,
  },

  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentindex:0
    };
  },
  methods:{
      titleClick(index){
          this.currentindex=index
          this.$emit('titleClick', index)
      },
      backClick(){
          this.$router.back()
      }
  }
 
};
</script>

<style lang="scss" scoped>
.title{
    display: flex;
    font-size: 13px;
    .title-item{
        flex: 1;
        cursor: pointer;
    }
}
.active{
    color: pink;
}
.back img{
    margin-top: 10px;
    cursor: pointer;
}
</style>