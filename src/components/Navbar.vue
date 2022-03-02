<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarToggler
      target="#navbarCenterAlignExample"
      @click="collapse6 = !collapse6"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarCenterAlignExample" v-model="collapse6">
      <MDBNavbarNav center class="mb-2 mb-lg-0">
        <MDBNavbarItem router-link to="/">
          Home
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name:'Login'}">
          Login
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name:'Register'}">
          Register
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name:'Profile'}">
          Profile
        </MDBNavbarItem> 
        <MDBNavbarItem router-link :to="{name:'Product'}">
          Products
        </MDBNavbarItem>
         <MDBNavbarItem router-link :to="{name:'Create'}">
          Create a product
        </MDBNavbarItem>
        <MDBNavbarItem router-link :to="{name:'Cart'}">
          Cart
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
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