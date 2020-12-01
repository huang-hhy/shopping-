<template>
  <div>
    <div class="nav">
      <slot></slot>
    </div>
  </div>
</template>


<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.nav {
  display: flex;
  background-color: #f6f6f6;
  // height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  box-shadow: 0px -1px 5px rgba(100, 100, 100, 0.2);

  
}
</style>