<template>
    <div class="cartList">
        <cart-list-item v-for="(item,index) in cartList" :key="index" :item="item"></cart-list-item>
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './cartListItem'
import CartBottomBar from './cartBottomBar'

export default {
    name:'cartList',
    computed:{
        ...mapGetters(['cartList'])
    },
    components:{
        CartListItem,
        CartBottomBar,
    }
}
</script>

<style lang="scss" scoped>
.cartList{
    margin-top: 10px;
}
</style>