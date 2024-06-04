<template>
  <div>
  <header>
 <!-- Navbar -->
 <b-navbar variant="light" type="light" fixed="top">
      <b-container class="d-flex justify-content-between align-items-center">
        <b-navbar-brand class="d-flex align-items-center">
          <img src="@/assets/logo.svg" alt="Logo da Empresa" class="d-inline-block align-top logo" />
          <span class="ml-2">Nome da Empresa</span>
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="#">Home</b-nav-item>
          <b-nav-item to="#">Sobre</b-nav-item>
          <b-nav-item to="#">Contato</b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </header>
   

    <!-- Section with Image and Text -->
    <section class="hero-section">
      <img src="@/assets/Emprestimo_FGTS-1.jpg" alt="Hero Image" class="hero-image">
      <div class="hero-text">
        <h1>Bem-vindo à Nossa Empresa</h1>
        <p>Descrição sobre a empresa.</p>
      </div>
    </section>

    <!-- Cards Section -->
    <b-container class="cards-section">
      <b-row class="justify-content-center">
        <b-col md="4" class="card-container">
          <b-card class="custom-card">
            <template #header>
              <i class="fa-solid fa-file clickable-icon" @click="redirect('https://www.example.com')"></i>
            </template>
            <b-card-text>
              Texto do Card 1
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" class="card-container">
          <b-card class="custom-card">
            <template #header>
              <i class="fa-solid fa-file   clickable-icon" @click="redirect('https://www.example.com')"></i>
            </template>
            <b-card-text>
              Texto do Card 2
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4" class="card-container">
          <b-card class="custom-card">
            <template #header>
              <i class="fa-solid fa-envelope clickable-icon" @click="redirect('https://www.example.com')"></i>
            </template>
            <b-card-text>
              Texto do Card 3
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { BNavbar, BContainer, BNavbarBrand, BNavbarNav, BNavItem, BRow, BCol, BCard, BCardText } from 'bootstrap-vue-3'

const redirect = (url) => {
  window.location.href = url;
}
</script>

<style scoped>
/* Navbar styles */
.logo{
  height: 20%;
  width: 20%;
}
.ml-2 {
  margin-left: 10px;
}
.navbar{
  padding: 0px 8rem;
}
.b-navbar {
  padding: 20px; /* Espaçamento interno */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.ml-2 {
  margin-left: 10px;
}

/* Hero Section */
.hero-section {
  position: relative;
  text-align: center;
  color: white;
}

.hero-image {
  width: 100%;
  height: auto;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Cards Section */
.cards-section {
  margin-top: -50px; /* Levantar os cards para ficarem sobre a imagem */
  padding: 20px;
}

.card-container {
  margin-top: 20px;
}
.custom-card {
  border-bottom: 3px solid blue; /* Borda inferior azul */
  text-align: center;
}

.clickable-icon {
  font-size: 2rem;
  cursor: pointer;
}

</style>
