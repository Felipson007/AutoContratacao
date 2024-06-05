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
            <div class="icon-header">
              <i class="fa-solid fa-brazilian-real-sign clickable-icon" @click="redirect('https://contratacao-digital.azurewebsites.net/home/a25GdEFMK0hkMlhQengvMUw4UjFodlUyTDkwWlc5a0puUXBBVTFWbnoybUwxWmEveGF6N01JWEJVclVoRkdBVw==')"></i>
            </div>
            <h1>Antecipação FGTS</h1>
            <p>Antecipe seu FGTS e tenha ainda hoje o dinheiro na sua conta.</p>
          </b-card>
        </b-col>
        <b-col md="4" class="card-container">
          <b-card class="custom-card">
            <div class="icon-header">
              <i class="fa-solid fa-file clickable-icon" @click="redirect('https://www.example.com')"></i>
            </div>
            <h1>Conta de Energia</h1>
            <p>Libere até R$5.000,00 pelo débito na fatura de energia</p>
          </b-card>
        </b-col>
        <b-col md="4" class="card-container">
          <b-card class="custom-card">
            <div class="icon-header">
              <i class="fa-solid fa-file clickable-icon" @click="redirect('https://www.example.com')"></i>
            </div>
            <h1>Conta de Energia</h1>
            <p>Libere até R$5.000,00 pelo débito na fatura de energia</p>
          </b-card>
        </b-col>
        <b-col md="4" class="card-container">
          <b-card class="custom-card">
            <div class="icon-header">
              <i class="fa-solid fa-file clickable-icon" @click="redirect('https://www.example.com')"></i>
            </div>
            <h1>Conta de Energia</h1>
            <p>Libere até R$5.000,00 pelo débito na fatura de energia</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- About Section -->
    <b-container class="mt-5 mb-6 about-section">
    <b-row>
      <div class="tittle-about">
        <h3>Antecipação FGTS</h3>
      </div>
      <b-col md="5 img-about">
        <img src="@/assets/Logo.jpg" alt="Imagem da seção" class="img-fluid">
      </b-col>
      <b-col md="6" class="text-about">
        <p>O crédito consignado tem sido uma alternativa inteligente para todos que tem acesso e precisam de dinheiro rápido e com excelentes taxas. Essse crédito está disponível para: aposentados e pensionistas INSS, servidores públicos ativos e inativos (federais, estaduais e municipais).</p>
        <p>Com aprovação rápida e sem burocracias, este crédito tem sido a melhor escolha para realização de sonhos e garantia de fluxo financeiro para milhares de famílias.</p>
        <p class="text-font" >Precisa daquela força no orçamento e tem saldo parado no FGTS?</p>
        <p class="text-font">Saiba mais! Consulte nossas especialistas.</p>
        <a href="#" class="btn btn-primary btn1" role="button"> <i class="fa-brands fa-whatsapp"> </i> Fale com a Gente sobre Empréstimo Consignado <i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i></a>
      </b-col>

    </b-row>
  </b-container>
  <b-container class="mt-5 mb-6 about-section">
    <b-row>
      <div class="tittle-about">
        <h3>Antecipação FGTS</h3>
      </div>
      <b-col md="5 img-about">
        <img src="@/assets/Logo.jpg" alt="Imagem da seção" class="img-fluid">
      </b-col>
      <b-col md="6" class="text-about">
        <p>O crédito consignado tem sido uma alternativa inteligente para todos que tem acesso e precisam de dinheiro rápido e com excelentes taxas. Essse crédito está disponível para: aposentados e pensionistas INSS, servidores públicos ativos e inativos (federais, estaduais e municipais).</p>
        <p>Com aprovação rápida e sem burocracias, este crédito tem sido a melhor escolha para realização de sonhos e garantia de fluxo financeiro para milhares de famílias.</p>
        <p class="text-font" >Precisa daquela força no orçamento e tem saldo parado no FGTS?</p>
        <p class="text-font">Saiba mais! Consulte nossas especialistas.</p>
        <a href="#" class="btn btn-primary btn1" role="button"> <i class="fa-brands fa-whatsapp"> </i> Fale com a Gente sobre Empréstimo Consignado <i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i></a>
      </b-col>

    </b-row>
  </b-container>
  <b-container class="mt-5 mb-6 about-section">
    <b-row>
      <div class="tittle-about">
        <h3>Antecipação FGTS</h3>
      </div>
      <b-col md="5 img-about">
        <img src="@/assets/Logo.jpg" alt="Imagem da seção" class="img-fluid">
      </b-col>
      <b-col md="6" class="text-about">
        <p>O crédito consignado tem sido uma alternativa inteligente para todos que tem acesso e precisam de dinheiro rápido e com excelentes taxas. Essse crédito está disponível para: aposentados e pensionistas INSS, servidores públicos ativos e inativos (federais, estaduais e municipais).</p>
        <p>Com aprovação rápida e sem burocracias, este crédito tem sido a melhor escolha para realização de sonhos e garantia de fluxo financeiro para milhares de famílias.</p>
        <p class="text-font" >Precisa daquela força no orçamento e tem saldo parado no FGTS?</p>
        <p class="text-font">Saiba mais! Consulte nossas especialistas.</p>
        <a href="#" class="btn btn-primary btn1" role="button"> <i class="fa-brands fa-whatsapp"> </i> Fale com a Gente sobre Empréstimo Consignado <i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i></a>
      </b-col>

    </b-row>
  </b-container>
  <b-container class="mt-5 mb-6 about-section">
    <b-row>
      <div class="tittle-about">
        <h3>Antecipação FGTS</h3>
      </div>
      <b-col md="5 img-about">
        <img src="@/assets/Logo.jpg" alt="Imagem da seção" class="img-fluid">
      </b-col>
      <b-col md="6" class="text-about">
        <p>O crédito consignado tem sido uma alternativa inteligente para todos que tem acesso e precisam de dinheiro rápido e com excelentes taxas. Essse crédito está disponível para: aposentados e pensionistas INSS, servidores públicos ativos e inativos (federais, estaduais e municipais).</p>
        <p>Com aprovação rápida e sem burocracias, este crédito tem sido a melhor escolha para realização de sonhos e garantia de fluxo financeiro para milhares de famílias.</p>
        <p class="text-font" >Precisa daquela força no orçamento e tem saldo parado no FGTS?</p>
        <p class="text-font">Saiba mais! Consulte nossas especialistas.</p>
        <a href="#" class="btn btn-primary btn1" role="button"> <i class="fa-brands fa-whatsapp"> </i> Fale com a Gente sobre Empréstimo Consignado <i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i></a>
      </b-col>

    </b-row>
  </b-container>
    </div>
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src="@/assets/Logo.jpg" alt="Logo" class="logo">
            <p></p>
          </div>
          <div class="col-md-4">
            <h4>Links Úteis</h4>
            <ul class="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4>Redes Sociais</h4>
            <ul class="list-unstyled social-media">
              <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2024 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { BNavbar, BContainer, BNavbarBrand, BNavbarNav, BNavItem, BRow, BCol, BCard } from 'bootstrap-vue-3'

const redirect = (url) => {
  window.location.href = url;
}

</script>

<style scoped>
.Main-Section{
  margin-top: 58px;
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
  height: 530px;
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

.icon-header{
  padding-bottom: 8px;
  margin-bottom: 10px;
}
.cards-section {
  margin-top: -100px; /* Levantar os cards para ficarem sobre a imagem */
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

/* section about */
.about-section{
  margin-bottom: 5rem;
}
.btn1{
  background-color: green;
}
.img-fluid{
  width: 70%;
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  border-radius: 10%;
}
.img-about{
  display: flex;
  justify-content: space-around;
}
.tittle-about h3{
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 800;
}
.text-about{
  padding-top: 20px;
  text-align: justify;
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
}
.text-font{
font-weight: 800;
font-size: 1.22rem;
}
/*Footer*/
.footer {
  background-color: #f8f9fa;
  padding: 60px 0 0 0;
  width: 100%;
  position: absolute;
}

.footer .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
}

.footer .logo {
  width: 150px;
  height: auto;
}

.footer p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.footer h4 {
  font-size: 20px;
  margin-bottom: 20px;
}

.footer ul.list-unstyled {
  list-style: none;
  padding: 0;
}

.footer ul.list-unstyled li {
  margin-bottom: 10px;
}

.footer ul.list-unstyled a {
  color: #333;
  text-decoration: none;
}

.footer .social-media li {
  display: inline-block;
  margin-right: 15px;
}

.footer .social-media i {
  font-size: 20px;
  color: #333;
}

.footer .copyright {
  text-align: center;
  padding-top: 20px;
}

.footer .copyright p {
  font-size: 14px;
  color: #999;
}

</style>
