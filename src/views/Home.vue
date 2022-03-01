<template>
<div>
        <div class="header-blue">
            <div class="container hero">
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <h1>The revolution is here.</h1>
                        <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque quis sapien viverra convallis. In non tempus lorem. </p>
                        <button class="btn btn-light btn-lg action-button" type="button">Learn More</button></div>
                    <div
                        class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div class="iphone-mockup"><img src="https://i.postimg.cc/3NSXt6Bs/iphone.png" class="device">
                            <div class="screen"></div>
                        </div>
                </div>
            </div>
        </div>
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
/* .header-blue {
 
} */

@media (min-width:768px) {
  .header-blue {
    padding-bottom:120px;
  }
}
.header-blue .action-button, .header-blue .action-button:not(.disabled):active {
  border:1px solid rgba(255,255,255,0.7);
  border-radius:40px;
  color:#ebeff1;
  box-shadow:none;
  text-shadow:none;
  padding:.3rem .8rem;
  background:transparent;
  transition:background-color 0.25s;
  outline:none;
}

.header-blue .action-button:hover {
  color:#fff;
}

.header-blue .navbar .form-inline label {
  color:#d9d9d9;
}

.header-blue .navbar .form-inline .search-field {
  display:inline-block;
  width:80%;
  background:none;
  border:none;
  border-bottom:1px solid transparent;
  border-radius:0;
  color:#ccc;
  box-shadow:none;
  color:inherit;
  transition:border-bottom-color 0.3s;
}

.header-blue .navbar .form-inline .search-field:focus {
  border-bottom:1px solid #ccc;
}

.header-blue .hero {
  margin-top:20px;
  text-align:center;
}

@media (min-width:768px) {
  .header-blue .hero {
    margin-top:60px;
    text-align:left;
  }
}

.header-blue .hero h1 {
  color:#fff;
  font-size:40px;
  margin-top:0;
  margin-bottom:15px;
  font-weight:300;
  line-height:1.4;
}

@media (min-width:992px) {
  .header-blue .hero h1 {
    margin-top:190px;
    margin-bottom:24px;
    line-height:1.2;
  }
}

.header-blue .hero p {
  color:rgba(255,255,255,0.8);
  font-size:20px;
  margin-bottom:30px;
  font-weight:300;
}

.header-blue .phone-holder {
  text-align:right;
}

.header-blue div.iphone-mockup {
  position:relative;
  max-width:300px;
  margin:20px;
  display:inline-block;
}

.header-blue .iphone-mockup img.device {
  width:100%;
  height:auto;
}

.header-blue .iphone-mockup .screen {
  position:absolute;
  width:88%;
  height:77%;
  top:12%;
  border-radius:2px;
  left:6%;
  border:1px solid #444;
  background-color:#aaa;
  overflow:hidden;
  /* background:url(https://i.postimg.cc/3NSXt6Bs/iphone.png); */
  background-size:cover;
  background-position:center;
}

.header-blue .iphone-mockup .screen:before {
  content:'';
  background-color:#444;
  position:absolute;
  width:70%;
  height:140%;
  top:-12%;
  right:-60%;
  transform:rotate(-19deg);
  opacity:0.2;
}
</style>