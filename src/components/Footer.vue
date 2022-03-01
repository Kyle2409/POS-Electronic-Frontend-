<template>
  <MDBFooter
    bg="none"
    :text="['center', 'white']"
    style="background-color: #0a4275"
    class="footer"

  >
    <div
      class="text-center p-1"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2020 Copyright:
      <p class="text-white" 
        >Electronic Department Store</p> 
    </div>
  </MDBFooter>
</template>

<script>
  import { MDBFooter, MDBContainer, MDBBtn } from 'mdb-vue-ui-kit';
  export default {
    components: {
      MDBFooter,
      MDBContainer,
      MDBBtn
    },
  };
</script>
<style>

</style>