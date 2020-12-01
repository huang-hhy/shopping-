<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <cart-list class="cart-list"></cart-list>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './cartList'
import {mapGetters} from 'vuex'
export default {
    name:'cart',
    components:{
        NavBar,
        CartList,
    },
    computed:{
        ...mapGetters(['cartLength','cartList'])
    }
}
</script>

<style lang="scss" scoped>
.nav-bar{
    background-color: pink;
    color: white;
    font-weight: 700;
    position: fixed;
    top: 0;
    width: 100%;
}
.cart-list{
    margin-top: 50px;
    margin-bottom: 80px;
}
</style>