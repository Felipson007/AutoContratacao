<template>
    <div class="container mt-5 pt-5">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Usuário</label>
          <input type="text" class="form-control" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
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
        if (this.username === 'felipe' && this.password === 'felipe') {
          localStorage.setItem('authenticated', true);
          this.$router.push('/blog');
        } else {
          alert('Usuário ou senha incorretos');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui */
  </style>
  