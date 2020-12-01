<template>
    <div v-if="topImage.length !== 0">
        <swiper class="swiper1">
            <swiper-item v-for="(item,index) in topImage" :key="index">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
    name:'DeatilSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImage:{
            type:Array,
            default(){
                return []
            }
        }
    },
    created(){
        // console.log(topImage);
    }
}
</script>

<style lang="scss" scoped>
.swiper1{
    height: 300px;
    overflow: hidden;
}
</style>