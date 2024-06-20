<template>
  <b-container class="mt-5 pt-5">
    <router-link to="/blog" class="btn btn-secondary mb-4">Voltar</router-link>
    <h1>Login</h1>
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
      if (this.username === 'felipe' && this.password === 'felipe') {
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
</style>
