<template>
  <div>
    <header>
      <!-- Navbar -->
      <b-navbar variant="light" type="light" fixed="top">
        <b-container class="d-flex justify-content-between align-items-center">
          <b-navbar-brand class="d-flex align-items-center">
            <img src="@/assets/Logo.jpg" alt="Logo da Empresa" class="d-inline-block align-top logo" />
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
    <!--Main Section-->
    <div class="Main-Section">
      <section class="hero-section">
      <div class="hero-img">
        <img src="@/assets/Logo.jpg" alt="Logo da Empresa"  />
      </div>
      <div class="hero-text">
        <h1>Crédito inteligente para cada necessidade.</h1>
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
            <h1>Antecipação FGTS</h1>
            <p>Antecipe seu FGTS e tenha ainda hoje o dinheiro na sua conta.</p>
          </b-card>
        </b-col>
        <b-col md="4" class="card-container">
          <b-card class="custom-card">
            <template #header>
              <i class="fa-solid fa-file clickable-icon" @click="redirect('https://www.example.com')"></i>
            </template>
            <h1>Conta de Energia</h1>
            <p>Libere até R$5.000,00 pelo débito na fatura de energia</p>
          </b-card>
        </b-col>
        <b-col md="4" class="card-container">
          <b-card class="custom-card">
            <template #header>
              <i class="fa-solid fa-file clickable-icon" @click="redirect('https://www.example.com')"></i>
            </template>
            <h1>Conta de Energia</h1>
            <p>Libere até R$5.000,00 pelo débito na fatura de energia</p>
          </b-card>
        </b-col>
        <b-col md="4" class="card-container">
          <b-card class="custom-card">
            <template #header>
              <i class="fa-solid fa-file clickable-icon" @click="redirect('https://www.example.com')"></i>
            </template>
            <h1>Conta de Energia</h1>
            <p>Libere até R$5.000,00 pelo débito na fatura de energia</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    </div>
    <!-- Section with Gradient Background and Text -->
    
  </div>
</template>

<script setup>
import { BNavbar, BContainer, BNavbarBrand, BNavbarNav, BNavItem, BRow, BCol, BCard, BCardText } from 'bootstrap-vue-3'

const redirect = (url) => {
  window.location.href = url;
}
</script>

<style scoped>
.Main-Section{
  height: 90vh;
  margin-top: 65px;
}
/* Navbar styles */
.logo{
  height: 5%;
  width: 5%;
  border-radius: 50%; /* Define o raio como 50% da largura/altura da imagem */
}

.ml-2 {
  margin-left: 10px;
}
.cards-section h1{
  font-size: 1rem;
}
.navbar{
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
/* Hero Section */
.hero-section {
  position: relative;
  text-align: center;
  color: white;
  height: 500px;
  background: linear-gradient(135deg, #add8e6, #00008b);
}
.hero-img img{
  height: 15%;
  margin-top: 8%;
  margin-right: 65%;
  width: 20%;
  border-radius: 100%;
}
.hero-text h1 {
    position: absolute;
    top: 50%;
    text-align: left;
    left: 18%;
    font-size: 4rem;
    margin-left: 36%;
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
  font-size: 5rem;
  cursor: pointer;
}
</style>
