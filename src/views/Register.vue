<template>
<div id="app">
  <div class="col-md-12">
  <div class="card card-card-container">
   <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
    <form @submit.prevent="login">
      <div>
        <label for="user_fullname">user_fullname</label>
        <input name="username" v-model="username" placeholder="enter your username">
      </div>
      <div>
        <label for="email">email Address</label>
        <input name="email" v-model="email" placeholder="enter your email address" type="email">
      </div>
      <div>
        <label for="phone_number">phone_number</label>
        <input name="phone_number" v-model="phone_number" placeholder="enter your phone number" type="number">
      </div>
      
      <div>
        <label for="password">password</label>
        <input name="password" v-model="password" placeholder="enter your password" type="password">
      </div>
      <!-- <div>
        <label for="firstName">first name</label>
        <input name="firstName" v-model="firstName" placeholder="first name">
      </div>
      <div>
        <label for="lastName">last name</label>
        <input name="lastName" v-model="lastName" placeholder="last name">
      </div>
      <div>
        <label for="age">age</label>
        <input name="age" v-model="age" placeholder="age" type="number">
      </div> -->
      
     <button class="btn btn-primary btn-" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Register</span>
          </button>
    </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
      address: ""
    };
  },
  methods: {
    async login() {
      const { username, password, firstName, lastName, age, address } = this;
      const res = await fetch(
        "https://SomberHandsomePhysics--five-nine.repl.co/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password,
            firstName,
            lastName,
            age,
            address
          })
        }
      );
      const data = await res.json();
      console.log(data);
    }
  }
};
</script> 


<style>
label{
  display: block;
  margin-top:10px;
}
.card-container{
  max-width:350px !important ;
  padding: 40px 40px;
}
.card{
  background-color: #f7f7f7;
  padding:20px 25px 30px;
  margin:0 auto 25px;
  margin-top:50px;
  -moz-border-radius:2px;
  -webkit-border-radius:2px;
  border-radius:2px;
  -moz-box-shadow: 0px 2px 2px rgba(0,0,0,0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0,0,0,0.3);
  box-shadow: 0px 2px 2px rgba(0,0,0,0.3);

}
.profile-img-card{
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;display: block;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  border-radius:50%;
}
</style>