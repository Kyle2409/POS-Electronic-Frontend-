<template>
   <MDBNavbar expand="lg" light bg="light" container>
    <!-- Toggle button -->
    <MDBNavbarToggler
      target="#navbarCenterAlignExample"
      @click="collapse6 = !collapse6"
    ></MDBNavbarToggler>
    <!-- Collapsible wrapper -->
    <MDBCollapse id="navbarCenterAlignExample" v-model="collapse6">
      <MDBNavbarNav center class="mb-2 mb-lg-0">
        <!-- Center links -->
        <MDBNavbarItem router-link to="/">
          Home
        </MDBNavbarItem>
        <!-- <MDBNavbarItem router-link :to="{name:'Login'}">
          Login
        </MDBNavbarItem> -->
        <!-- <MDBNavbarItem router-link :to="{name:'Register'}">
          Register
        </MDBNavbarItem> -->
        <MDBNavbarItem router-link :to="{name:'Product'}">
          Products
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name:'Cart'}">
          Cart
        </MDBNavbarItem>
        
        <!-- Navbar dropdown -->
       
        <!-- Center links -->
      </MDBNavbarNav>
    </MDBCollapse>
    <!-- Collapsible wrapper -->
  </MDBNavbar>
</template>

<script>
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem
    },
    setup() {
      const collapse6 = ref(false);
      const dropdown9 = ref(false);
      return {
        collapse6,
        dropdown9
      }
    }
  };
</script>

<style>

</style>