<template>
  <div id="app">
    <div class="my_nav">
        <!-- 导航栏  router-link-->
        <Nav/>
    </div>
    <div class="my_main">
        <!-- router-view -->
        <router-view/>
    </div>
    <div class="my_footer">
      <!-- footer的组件 -->
      <Footer/>
    </div>
  </div>
</template>

<script>

import Nav from './components/MyNavCompent.vue'
import Footer from './components/Footer.vue'


export default {
  components: {
    Nav,
    Footer
  }
  
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: #fff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
