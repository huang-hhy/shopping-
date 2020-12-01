<template>
    <div class="backtop">     
            <img src="@/assets/img/top.png" alt="">       
    </div>
</template>

<script>
export default {
    name:'backTop'
}
</script>

<style lang="scss" scoped>
.backtop{
    position:fixed;
    right: 10px;
    bottom: 45px;
    z-index: 99;
    img{
        width: 50px;
        height: 50px;
    }
    
}
</style>