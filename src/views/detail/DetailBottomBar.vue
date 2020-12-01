<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div class="item">
                <img src="@/assets/img/kefu.png" alt="">
                <p>客服</p>
            </div>
            <div class="item">
                <img src="@/assets/img/dp.png" alt="">
                <p>店铺</p>
            </div>
            <div class="item">
                <img src="@/assets/img/sc.png" alt="">
                <p>收藏</p>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="addToCart">
                <p>购物车</p>
            </div>
            <div class="gm">
                <p>购买</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailBottomBar',
    methods:{
        addToCart(){
            this.$emit('addCart')
        }
    }
}
</script>

<style lang="scss" scoped>
.bar-left{
    width: 50%;
    height: 100%;
    float: left;
    // background-color: gray;
    div{
        width: 33%;
        height: 100%;
        float: left;
    }
}
.bar-right{
    width: 50%;
    height: 100%;
    float: left;
    background-color: pink;
    .cart{
        width: 50%;
        cursor: pointer;
        float: left;
        background-color: yellow;
        height: 100%;
        z-index: 1000;
        p{
            padding-left: 24px;
            // line-height: 50px;
        }
        
    }
    .gm{
        float: left;
        width: 50%;
        cursor: pointer;
        background-color: violet;
        p{
            padding-left: 30px;
            color: white;
        }
    }
}
.bottom-bar{
    height: 49px;
    background: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
.item img{
    background: honeydew;
    width: 40%;
    height: 50%;
    float: left;
    padding: 5px 0 0 15px;
}
.item p{
    float: left;
    z-index: 1002;
    font-size: 12px;
    margin-top: 0;
    padding-left: 15px;
}
</style>