<template>
    <div class="wrapper">
        <ul class="content">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>

        </ul>
    </div>
</template>

<script>
import BSscrllo from 'better-scroll'
export default {
    data(){
        return{
            scroll:null
        }
    },
    name:'category',
    mounted(){
        this.scroll=new BSscrllo(document.querySelector('.wrapper'),{
            probeType:3,
            pullUpLoad:true
        })

        this.scroll.on('scroll',(position) =>{
            console.log(position);
        })

        this.scroll.on('pullingUp',()=>{
            console.log('更多');
        })
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    height: 150px;
    overflow: hidden;
    background-color: pink;
}
</style>