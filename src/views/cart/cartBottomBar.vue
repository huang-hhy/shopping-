<template>
    <div class="footer">
        <div class="check-content">
            <cart-check-button class="check-button"></cart-check-button>
            <span>全选</span>
        </div>      
        
        <div class="heji">
            合计: {{totalPrice}}
        </div>

        <div class="js">
            去结算：{{checkLength}}
        </div>
    </div>
</template>

<script>
import CartCheckButton from "./CartCheckButton";
import {mapGetters} from 'vuex';
export default {
    name:'cartBottomBar',
    components:{
        CartCheckButton,
    },
    computed:{
         ...mapGetters(['cartLength','cartList']),
        totalPrice(){
            return '￥' + this.cartList.filter(item =>{
                return item.checked
            }).reduce((preVaule, item)=>{
                return preVaule + item.price * item.count
            }, 0)
        },
        checkLength(){
            return this.cartList.filter(item => item.checked).length
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 49px;
    position: fixed;
    background-color: #eee;
}
.check-content{
    float: left;
    display: flex;
    flex: 1;
    align-items: center;
    margin-top: 10px;
}
.check-button{
    width: 24px;
    height: 24px;
    line-height: 20px;
    span{
        font-size: 14px;
    }
}
.heji{
    float: left;
    margin-left: 140px;
    margin-top: 10px;
    // flex: 1;
}
.js{
    float: left;
    margin-top: 10px;
    margin-left: 50px;
}
</style>