<template>
    <div>
        <h1>我是profile</h1>
        <p>{{$route.query}}</p>
    </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge'
export default {
    name:'Profile',
    data(){
        return{

        }
    },
    created(){
        console.log(this.$route)
    }
}
</script>