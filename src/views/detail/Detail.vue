<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" class="detail-nav"></detail-nav-bar>
    <!-- <scroll class="content"></scroll> -->
    
    <detail-swiper :top-image="topImage"></detail-swiper>
    <detail-base-info
      v-if="goods.services !== undefined"
      :goods="goods"
    ></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>

    <detail-image :detail-image="detailImage"></detail-image>
    <back-top v-if="btnFlag" @click.native="backTop"></back-top>
    <detail-params
      :item-info="itemInfo"
      :item-params="itemParams"
    ></detail-params>
    <detail-comment :comment-info="commentInfo"></detail-comment>
    <goods-list :goods="recommends"></goods-list>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./DetailNavBar";
import DetailSwiper from "./DetailSwiper";
import DetailBaseInfo from "./DetailBaseInfo";
import DetailShopInfo from "./DetailShopInfo";
import DetailImage from "./DetailImage";
import DetailParams from "./DetailParams";
import backTop from "@/components/common/backTop/backTop";
import {
  getDetail,
  Goods,
  Shop,
  getRecommend,
} from "@/components/network/detail";
import Scroll from "@/components/common/scroll/Scroll";
import DetailComment from "./DetailComment";
import GoodsList from '../../components/content/goods/GoodsList.vue';
import DetailBottomBar from './DetailBottomBar.vue';

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailImage,
    backTop,
    DetailParams,
    DetailComment,
    GoodsList,
    DetailBottomBar,
  },

  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailImage: [],
      btnFlag: false,
      itemParams: {},
      itemInfo: [],
      commentInfo: {},
      recommends:[]
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res) => {
      // console.log(res);
      // let data=res.result
      // console.log(data)
      //1、轮播图
      this.topImage = res.result.itemInfo.topImages;
      // console.log(res.result.columns);

      //2、商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      // console.log(this.goods);

      //3、商家信息
      this.shop = new Shop(res.result.shopInfo);
      // console.log(this.shop);

      //4、详情图片
      this.detailImage = res.result.detailInfo.detailImage[0].list;

      //5、详情参数1
      this.itemParams = res.result.itemParams;
      // console.log(this.itemParams);

      //5、详情参数2
      this.itemInfo = res.result.itemParams.info.set;

      //5、详情参数3
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0];
      }
    });

    getRecommend().then(res => {
      // console.log(res);
      this.recommends=res.data.list
    })
  },

  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    addToCart(){
      // console.log('lll');
      const product={}
      product.image=this.topImage[0]
      product.title=this.goods.title
      product.desc=this.goods.desc
      product.price=this.goods.newPrice
      product.iid=this.iid
      
      this.$store.commit('addCart', product)
      console.log(product);
    },

    titleClick(index){
      console.log(index);
    },

    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 500) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#detail {
  position: relative;
  z-index: 999;
  // height: 100vh;
  background-color: #fff;
}
.detail-nav {
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #fff;
}
</style>