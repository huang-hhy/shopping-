<template>
    <div>
        <div class="top">
            <span class="span1">用户评论</span>
            <span class="span2">更多</span>
        </div>
        <div class="user" v-if="commentInfo.user !== undefined">
            <img :src="commentInfo.user.avatar" alt="">
            <span>{{commentInfo.user.uname}}</span>
        </div>
        <div class="content">
            <p>{{commentInfo.content}}</p>
            <div class="info-oter">
                <span class="date">{{commentInfo.created | showDate}}</span>
                <span>{{commentInfo.style}}</span>
            </div>
            <div class="info-img">
                <img :src="item" v-for="(item,index) in commentInfo.images" :key="index">
            </div>
        </div>
    </div>
</template>

<script>
import {formatDate} from '@/common/utils'
export default {
    name:"DetailComment",
    props:{
        commentInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        showDate(value){
            const date=new Date(value * 1000)
            return formatDate(date, 'yyyy-MM-dd')
        }
    }
}
</script>

<style lang="scss" scoped>
.top{
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
    // padding: 0 20px 0 20px;
    border-top: 3px solid #ccc;
    border-bottom: 1px solid #ccc;
    .span1{
        float: left;
        padding-left: 20px;
    }
    .span2{
        float: right;
        padding-right: 20px;
    }
}
.user{
    width: 100%;
    height: 50px;
     
    img{
        height: 50px;
        width: 50px;
        padding-left: 20px;
        border-radius: 50%;
    }
    span{
        margin-left: 10px;
        line-height: 50px;
        height: 50px;
        display: inline-block;
        // padding-bottom: 10px;
        text-align: center;
    }
}
.content{
    padding: 0 20px 0 20px;
}
.content .date{
    // padding: 0 20px 0 20px;
    margin-right: 10px;
    margin-bottom: 20px;
}
.info-img{
    margin-top: 20px;
}
.info-img img{
    width: 100px;
    height: 100px;
}
</style>