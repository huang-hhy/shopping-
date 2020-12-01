<template>
  <div id="home" v-if="banner.length != 0">
    <nav-bar class="home_nav">
      <div class="home_item" slot="center">购物街</div>
    </nav-bar>
    <tab-control
          ref="tabControl1"
          @tabClick="tabClick"
          class="tab-control"
          v-show="isTabFilex"
          :titles="['流行', '新款', '精选']"
    ></tab-control>
    <scroll @pullingup="loadMore" :pull-up-load="true" @scroll="contentScroll" :probe-type="3" class="content" ref="scroll">
        <swiper ref="TabControl">
          <swiper-item v-for="(item, index) in banner" :key="index">
            <a :href="item.link">
              <img @load="imageLoad" :src="item.image" alt="" />
            </a>
          </swiper-item>
        </swiper>
        <recommend-view :recommends="recommend"></recommend-view>
        <feature></feature>
        <tab-control
          ref="tabControl2"
          @tabClick="tabClick"
          
          
          :titles="['流行', '新款', '精选']"
        ></tab-control>
        <goods-list :goods="goods[currentType].list"> </goods-list>
    </scroll>
    <back-top v-show="isShow" @click.native="backClick"></back-top>
  </div>
</template>


<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultiData, getHomeGoods } from "@/components/network/home";
import { Swiper, SwiperItem } from "@/components/common/swiper";
import RecommendView from "./RecommendView";
import Feature from "./Feature";
import TabControl from "@/components/content/tabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from '@/components/common/scroll/Scroll';
import backTop from '@/components/common/backTop/backTop'
// import BSscrllo from "better-scroll";
// import GoodsListItem from '@/components/content/goods/GoodsListItem'

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      isShow:false,
      isTabFilex:false,
      batOffsetTop:0,
      currentType: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    backTop,
    // GoodsListItem
  },
  // async created(){
  //     let res = await getHomeMultiData()
  //     this.banner=res.data.banner
  //     this.recommend=res.data.recommend
  //     console.log(this.banner);
  // },
  created() {
    //轮播图数据
    this.getHomeMultiData();

    //商品列表数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        // console.log(this.banner);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
        // console.log(res);
      });
    },

    imageLoad(){
        // console.log('ggg');
        // this.batOffsetTop=this.$refs.TabControl.$el.offsetHeight
        this.batOffsetTop=650

        // console.log(this.$refs.TabControl.$el.offsetHeight);

    },

    contentScroll(position){
        this.isTabFilex=(-position.y) > this.batOffsetTop
        this.isShow=(-position.y) > 700 ? true : false
    },

    loadMore(){
        // console.log('hh');
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()
    },

    backClick(){
        // console.log('ooo')
        this.$refs.scroll.scroll.scrollTo(0,0,500)
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
//   padding-top: 44px;
  position: relative;
  height: 100vh;
}
.home_nav {
  background-color: pink;
//   position: fixed;
//   left: 0;
//   right: 0;
//   top: 0;
//   z-index: 9;
  .home_item {
    color: white;
  }
}
.tab-control {
 position: relative;
 z-index: 99;
}
.content{
    // height: calc(100% - 94px);;
    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
    // margin-top: 44px;
}

</style>