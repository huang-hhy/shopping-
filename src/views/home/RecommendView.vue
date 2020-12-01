<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 10px solid #cccccc;
    .recommend-item{
        flex: 1;
        img{
            width: 65px;
            height: 65px;
        }
        div{
            color: black;
            margin-top: 5px;
        }
    }
}
</style>