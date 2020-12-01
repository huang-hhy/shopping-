<template>
    <div class="detailImage"> 
        <div v-for="(item,index) in detailImage" :key="index">
            <img :src="item" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'detailImage',
    props:{
        detailImage:{
            type:Array
        }
    }
}
</script>

<style lang="scss">
.detailImage img{
    width: 100%;
    height: 100%;
}
</style>