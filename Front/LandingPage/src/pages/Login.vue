<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="row w-100">
      <router-link to="/blog" class="button">X</router-link>
      <div class="col-md-6 d-none d-md-block">
        <img src="../assets/login-background.jpg" alt="Login Background" class="img-fluid">
      </div>
      <div class="col-md-6">
        <h1>Login</h1>

        <b-container class="mt-3">
          <b-form @submit.prevent="login">
            <b-form-group label="Usuário" label-for="username">
              <b-form-input
                id="username"
                v-model="username"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Senha" label-for="password">
              <b-form-input
                id="password"
                type="password"
                v-model="password"
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'creditocompleto' && this.password === 'creditocompleto') {
        localStorage.setItem('authenticated', 'true');
        this.$router.push('/blog');
      } else {
        this.$bvToast.toast('Usuário ou senha incorretos', {
          title: 'Erro de Login',
          variant: 'danger',
          solid: true
        });
      }
    }
  }
};
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  width: 100%;
  height: auto;
}
.button{
  text-decoration: none;
  color: black;
}
</style>
