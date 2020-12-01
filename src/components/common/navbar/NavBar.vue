<template>
    <div class="NavBar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'NabBar'
}
</script>

<style lang="scss" scoped>
.NavBar{
    display: flex;
    text-align: center;
    height: 44px;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    line-height: 44px;
    .left,.right{
        width: 60px;
        
        // background-color: rebeccapurple;
    }
    .center{
        flex: 1;
        // color: white;
        // background-color: red;
    }
}
</style>