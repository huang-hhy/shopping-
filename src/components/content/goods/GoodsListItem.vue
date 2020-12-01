<template>
    <div class="goods-item" @click="itemClick">
        <img v-if="goodsItem.show !== undefined" :src="goodsItem.show.img" alt="">
        <img v-else :src="goodsItem.image" alt="">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>⭐  <span class="collect">{{goodsItem.cfav}}</span> 
            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        showImage(){
            return this.product.image || this.product.show.image
        }
    },
    name:"GoodsListItem",
    methods:{
        itemClick(){
            // console.log('ppp');
            this.$router.push('/detail/'+this.goodsItem.iid)
            // this.$router.push({
            //     path:''
            // })

        }
    }
}
</script>

<style lang="scss" scoped>
.goods-item{
    padding-bottom: 40px;
    width: 48%;
    text-align: center;
    position: relative;
    img{
        width: 100%;
        border-radius: 5px;
    }
    .goods-info{
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
        p{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 3px;
        }
        .price{
            color: pink;
            margin-right: 20px;
        }
        .collect{
            position: relative;
        }
    }
}
</style>