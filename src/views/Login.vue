<template>
   <div class="column">
     <h1>WELCOME BACK PLEASE LOG IN  </h1>
    <!-- <div class="card "> -->
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="user_fullname"></label>
          <input name="user_fullname" type="text" v-model="user_fullname" placeholder="Username"/>
          <ErrorMessage name="user_fullname" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password"></label>
          <input name="password" type="password" v-model="password" placeholder="Password"/>
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    <!-- </div> -->
  </div>
</template>

<script>


export default {
    name:'Login',
    components: {

    }

}
</script>

<style scoped>
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