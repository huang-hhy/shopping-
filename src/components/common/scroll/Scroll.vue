<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>   
    </div>
</template>

<script>
import BSscrllo from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            scroll:null
        }
    },
    name:'Scroll',
    mounted(){
        this.scroll=new BSscrllo(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            click:true
        })

        this.scroll.on('scroll',(position) =>{
            // console.log(position);
            this.$emit('scroll',position)
        })

        this.scroll.on('pullingUp',()=>{
            // console.log('更多');
            this.$emit('pullingup')
        })
    },
    methods:{
        finishPullUp(){
            this.scroll.finishPullUp()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>