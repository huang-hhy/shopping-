<template>
  <div class="home">
    <router-link to="/home/new">new</router-link>
    <router-link to="/home/message">message</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>
