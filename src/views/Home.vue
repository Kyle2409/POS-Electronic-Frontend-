<template>
<div class="container">
  <h1>Welcome to the Electronic Department Store</h1> 
  <div class="button">
     <MDBBtn color="danger"><router-link :to="{name:'Login'}">Login</router-link></MDBBtn>
      <MDBBtn color="danger"><router-link :to="{name:'Register'}">Register</router-link></MDBBtn>
      </div>
    </div>
</template>


<script>
import { MDBBtn } from "mdb-vue-ui-kit";
export default {
  name: 'Home',
  components: {
      MDBBtn
  },
}
</script>

<style >
.button{
  padding: 50px;
}
</style>