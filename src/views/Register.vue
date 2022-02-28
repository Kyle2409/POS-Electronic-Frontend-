<template>
<h1>WELCOME TO ELECTRONIC DEPARTMENT STORE</h1>
  <div class="column">
   <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="user_fullname"></label>
        <input name="username" v-model="username" placeholder="enter your username">
      </div>
      <div class="form-group">
        <label for="email"></label>
        <input name="email" v-model="email" placeholder="enter your email address" type="email">
      </div>
      <div class="form-group">
        <label for="phone_number"></label>
        <input name="phone_number" v-model="phone_number" placeholder="enter your phone number" type="number">
      </div>
      
      <div class="form-group">
        <label for="password"></label>
        <input name="password" v-model="password" placeholder="enter your password" type="password">
      </div>
    <button class="btn btn-primary btn-" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Register</span>
          </button>
    </form>
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
.form-group{
  padding:20px
}
.profile-img-card{
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  border-radius:50%;
}
/* .column{
  height: 250vh;

} */
</style>