<template>
<div class="containers">
  <div class="column">
    <h1>WELCOME TO ELECTRONIC DEPARTMENT STORE</h1>
  <div id="register">
    <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="user_fullname"></label>
        <input name="username" v-model="username" placeholder="username">
      </div>
      <div class="form-group">
        <label for="email"></label>
        <input name="email" v-model="email" placeholder="email address" type="email">
      </div>
      <div class="form-group">
        <label for="phone_number"></label>
        <input name="phone_number" v-model="phone_number" placeholder="phone number" type="number">
      </div>
      
      <div class="form-group">
        <label for="password"></label>
        <input name="password" v-model="password" placeholder="password" type="password">
      </div>
    <button class="btn btn-primary btn-" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Register</span>
          </button>
          <br>
            <p style="color: black;" class="login">Already a member? <a href="/login">Login to your account</a></p>
    </form>
    </div>
    </div>
</div>
</template>

<script>
import User from '../models/user';
export default {
  name: 'Register',
  data() {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      // return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    }
  }
};
</script> 


<style>
#register{
  border: 5px solid black;
  width: 35%;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
}
#register input {
  margin: 20px;
  border: none;
  border-bottom: 2px solid black;
  background-color:transparent
}
.login a{
  color: red;
  transition: 0.3s;
}
.login a:hover {
  color: rgb(73, 73, 73);
  transition: 0.3s;
}
::placeholder{
  color: black;
  font-size: 20px;
}
</style>