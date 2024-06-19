<template>
  <header>
    <div class="header">
      <!-- Navbar -->
      <b-navbar variant="light" type="light" fixed="top">
        <b-container class="d-flex justify-content-between align-items-center">
          <b-navbar-brand class="d-flex align-items-center" @click="scrollTo('#home')">
            <img src="@/assets/Logo.jpg" alt="Logo da Empresa" class="d-inline-block align-top logo"  />
            <span class="ml-2">Crédito Completo</span>
          </b-navbar-brand>
          <div class="navbar-respons" v-if="!isMobileMode">
            <b-navbar-nav class="ml-auto">
              <b-nav-item @click="scrollTo('#home')">Home</b-nav-item>
              <b-nav-item @click="scrollTo('#about')">Sobre</b-nav-item>
              <b-nav-item @click="scrollTo('#aboutus')">Nós</b-nav-item>
              <b-nav-item @click="scrollTo('#contact')">Contato</b-nav-item>
              <b-nav-item @click="goToBlog">Blog</b-nav-item>
              <b-nav-item v-if="isAuthenticated" @click="logout">Logout</b-nav-item>
              <b-nav-item v-if="!isAuthenticated" to="/Login">Login</b-nav-item>
            </b-navbar-nav>
          </div>
        </b-container>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobileMode: false,
    };
  },
  computed: {
    isAuthenticated() {
      return localStorage.getItem('authenticated') === 'true';
    }
  },
  methods: {
    scrollTo(section) {
      // Implementar rolagem suave para seções específicas
    },
    goToBlog() {
      this.$router.push('/blog');
    },
    logout() {
      localStorage.removeItem('authenticated');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Navbar styles */
.logo {
    height: 10%;
    width: 10%;
    border-radius: 50%; /* Define o raio como 50% da largura/altura da imagem */
  }
  .ml-2 {
    margin-left: 10px;
  }
  .cards-section h1 {
    font-size: 1rem;
  }
  .navbar {
    padding: 15px 35% 15px 10%;
  }
  .b-navbar {
    padding: 20px; /* Espaçamento interno */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 23%;
  }
  @media only screen and (max-width: 900px) {
  .fixed-top {
    position: absolute;
  }
  .logo {
      height: 28%;
      width: 43%;
      border-radius: 50%;
  }
  .img-fluid {
      width: 86% !important;
      display: flex !important;
      height: auto!important;
      justify-content: space-around;
      align-items: center;
      border-radius: 10%;
  }
  .ml-2{
    font-size: 1.4rem !important;
  }
  }
</style>
