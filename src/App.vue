<template>
  <div id="nav">
    <Navbar/>
  </div>
  <router-view/>
   <Footer/>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
  components:{
    Navbar,
    Footer
  }
  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
  /* background-color: #C2FCFF; */
  height: auto;
   background:linear-gradient(135deg, #172a74, #21a9af);
  background-color:#184e8e;
  /* padding-bottom:80px; */
  font-family:'Source Sans Pro', sans-serif;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav{
  padding: 30px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
