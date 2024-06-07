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
    
    <!-- Main Section -->
    <div class="Main-Section">
      <section class="hero-section">
        <div class="hero-img">
          <img src="@/assets/Logo.jpg" alt="Logo da Empresa" />
        </div>
        <div class="hero-text">
          <h1>Crédito inteligente para cada necessidade.</h1>
        </div>
      </section>
      
      <!-- Cards Section -->
      <b-container class="cards-section">
        <b-row class="justify-content-center">
          <b-col md="4" class="card-container" v-for="card in cards" :key="card.title">
            <b-card class="custom-card">
              <div class="icon-header">
                <i :class="card.icon + ' clickable-icon'" @click="redirect(card.link)"></i>
              </div>
              <h1>{{ card.title }}</h1>
              <p>{{ card.description }}</p>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      
      <!-- About Section -->
      <b-container class="mt-5 mb-6 about-section" v-for="aboutus in abouts" :key="aboutus.title">
        <b-row>
          <div class="tittle-about">
            <h3>{{ aboutus.title }}</h3>
          </div>
          <b-col md="5 img-about">
            <img src="@/assets/Logo.jpg" alt="Imagem da seção" class="img-fluid">
          </b-col>
          <b-col md="6" class="text-about">
            <p>{{ aboutus.text1 }}</p>
            <p>{{ aboutus.text2 }}</p>
            <p class="text-font">{{ aboutus.text3 }}</p>
            <p class="text-font">{{ aboutus.text4 }}</p>
            <a href="#" class="btn btn-primary btn1" role="button">
              <i class="fa-brands fa-whatsapp"></i> Fale com a Gente sobre Empréstimo
              <i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i>
            </a>
          </b-col>
        </b-row>
      </b-container>

     <!-- FAQ Section -->
     <div class="container text-center my-5 ">
        <div>
          <h1>FAQ</h1>
          <p>Perguntas Frequentes</p>
        </div>
        <div class="row justify-content-center faq-container">
          <div class="col-md-8">
            <div v-for="(question, index) in questions" :key="index" class="mb-3 faq-item">
              <b-card-header :id="`heading-${index}`" class="faq-header">
                <b-card-button
                  class="w-200 text-start d-flex justify-content-between align-items-center"
                  @click="toggle(index)"
                >
                  {{ question.title }}
                  <span :class="show[index] ? 'arrow down' : 'arrow'"></span>
                </b-card-button>
              </b-card-header>
              <b-collapse :id="`collapse-${index}`" :visible="show[index]" class="collapse-content">
                <b-card-body  style="background-color: white">
                  {{ question.answer }}
                </b-card-body>
              </b-collapse>
            </div>
          </div>
        </div>
      </div>

      <!--About us-->
      <b-container class="mt-5 mb-6 about-section" v-for="aboutus in abouts2" :key="aboutus.title">
        <b-row>
          <div class="tittle-about">
          </div>
          <b-col md="6" class="text-about">
            <h3>{{ aboutus.title }}</h3>
            <h4>{{ aboutus.subtitle }}</h4>
            <div class="text-aboutus">
              <p>{{ aboutus.text1 }}</p>
              <p>{{ aboutus.text2 }}</p>
              <p>{{ aboutus.text3 }}</p>
            </div>
          </b-col>

        <!-- Carrossel de imagens -->
        <b-col md="5">
          <div class="carousel-container">
            <div class="carousel-slide">
              <img v-for="(image, index) in images" :key="index" :src="image" :class="{ 'active': index === currentIndex }" alt="Slide">
            </div>
            <div class="carousel-indicators">
              <div v-for="(image, index) in images" :key="index" class="carousel-indicator" :class="{ 'active': index === currentIndex }" @click="changeSlide(index)"></div>
            </div>
          </div>
        </b-col>
        </b-row>
        <div class="btn2">
          <a href="#" class="btn btn-primary" role="button">
            <i class="fa-brands fa-whatsapp"></i> Fale com a Gente sobre Empréstimos
            <i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i>
          </a>
        </div>
      </b-container>

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
              <h4>Fale Conosco</h4>
              <ul class="list-unstyled">
                <li><a href="#"><i class="fab fa-facebook"></i> (15) 99124-8993</a></li>
                <li><a href="#"><i class="fab fa-whatsapp"></i> (15) 99124-8993</a></li>
                <li><a href="#"><i class="fa-regular fa-envelope"></i> felipe.s.souza@outlook.com.br</a></li>
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
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { BNavbar, BContainer, BNavbarBrand, BNavbarNav, BNavItem, BRow, BCol, BCard, BCollapse, BCarousel, BCarouselSlide  } from 'bootstrap-vue-3';
import Logo from '@/assets/Logo.jpg';
import emprestimo1 from '@/assets/emprestimo1.jpg'
import emprestimo2 from '@/assets/emprestimo2.jpg'
const cards = ref([
  {
    title: 'Antecipação FGTS',
    description: 'Antecipe seu FGTS e tenha ainda hoje o dinheiro na sua conta.',
    icon: 'fa-solid fa-brazilian-real-sign',
    link: 'https://contratacao-digital.azurewebsites.net/home/a25GdEFMK0hkMlhQengvMUw4UjFodlUyTDkwWlc5a0puUXBBVTFWbnoybUwxWmEveGF6N01JWEJVclVoRkdBVw=='
  },
  {
    title: 'Conta de Energia',
    description: 'Libere até R$5.000,00 pelo débito na fatura de energia',
    icon: 'fa-solid fa-file',
    link: 'https://www.example.com'
  },
  {
    title: 'Conta de Energia',
    description: 'Libere até R$5.000,00 pelo débito na fatura de energia',
    icon: 'fa-solid fa-file',
    link: 'https://www.example.com'
  },
  {
    title: 'Conta de Energia',
    description: 'Libere até R$5.000,00 pelo débito na fatura de energia',
    icon: 'fa-solid fa-file',
    link: 'https://www.example.com'
  }
]);

const abouts = ref([
  {
    title: 'Antecipação FGTS',
    text1: 'O crédito consignado tem sido uma alternativa inteligente para todos que tem acesso e precisam de dinheiro rápido e com excelentes taxas. Essse crédito está disponível para: aposentados e pensionistas INSS, servidores públicos ativos e inativos (federais, estaduais e municipais).',
    text2: 'Com aprovação rápida e sem burocracias, este crédito tem sido a melhor escolha para realização de sonhos e garantia de fluxo financeiro para milhares de famílias.',
    text3: 'Precisa daquela força no orçamento e tem saldo parado no FGTS?',
    text4: 'Saiba mais! Consulte nossas especialistas.'
  }
]);
const abouts2 = ref([
  {
    title: 'Sobre Nós',
    subtitle: 'Conheça a Credito Completo',
    text1: 'Com mais de 10 anos no mercado de crédito, a CrediConfiance tem conquistado cada vez mais espaço no mercado nacional. Inicialmente operando no interior de São Paulo com 4 agências focadas em atendimento presencial, iniciou em 2020 sua expansão digital utilizando sua expertise para atender clientes em todo o Brasil.',
    text2: 'Com princípios éticos inegociáveis, a CrediConfiance tem como maior prêmio o reconhecimento de seus cliente e se orgulha por ser lembrada nos orgãos fiscalizadores como uma empresa séria e amiga do cliente.',
    text3: 'Essa é a CrediConfiance, um empresa feita de gente que trabalha para para promover crédito de forma justa, rápida e descomplicada.',

  }
]);
const questions = ref([
  {
    title: 'O que é o crédito consignado?',
    answer: 'O crédito consignado é uma modalidade de empréstimo onde as parcelas são descontadas diretamente da folha de pagamento do contratante, proporcionando taxas de juros mais baixas e maior facilidade na aprovação.'
  },
  {
    title: 'Quem pode solicitar o crédito consignado?',
    answer: 'Aposentados e pensionistas do INSS, servidores públicos, militares das Forças Armadas e, em alguns casos, trabalhadores de empresas privadas conveniadas.'
  },
  {
    title: 'Como funciona a antecipação do FGTS?',
    answer: 'A antecipação do FGTS permite que o trabalhador antecipe parte do saldo disponível em sua conta do FGTS, recebendo o valor antecipado de forma imediata, com o pagamento sendo descontado diretamente das parcelas futuras do FGTS.'
  }
]);

const show = ref(questions.value.map(() => false));
const toggle = (index: number) => {
  show.value[index] = !show.value[index];
};

const redirect = (link: string) => {
  window.location.href = link;
};
// Adicionando a lista de imagens para o carrossel
const images = ref([Logo, emprestimo1, emprestimo2]);

// Variável para controlar o índice da imagem atual no carrossel
const currentIndex = ref(0);

// Método para mudar a imagem do carrossel
const changeSlide = (index: number) => {
  currentIndex.value = index;
};
watchEffect(() => {
  const interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }, 5000); // Mudança a cada 5 segundos

  return () => clearInterval(interval);
});
</script>


<style scoped>
.Main-Section {
  margin-top: 58px;
}
/* Navbar styles */
.logo {
  height: 5%;
  width: 5%;
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
/* Hero Section */
.hero-section {
  position: relative;
  text-align: center;
  color: white;
  height: 530px;
  background: linear-gradient(135deg, #add8e6, #00008b);
}
.hero-img img {
  height: 15%;
  margin-top: 2%;
  margin-right: 35%;
  width: 29%;
  border-radius: 100%;
}
.hero-text h1 {
  position: absolute;
  top: 44%;
  text-align: right;
  left: 80%;
  font-size: 5rem;
  transform: translate(-50%, -50%);
}
/* Cards Section */
.icon-header {
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
/* About Section */
.about-section {
  margin-bottom: 5rem;
}
.btn1 {
  background-color: green;
}
.img-fluid {
  width: 70%;
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  border-radius: 10%;
}
.img-about {
  display: flex;
  justify-content: space-around;
}
.tittle-about h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 800;
}
.text-about {
  padding-top: 20px;
  text-align: justify;
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
}
.text-font {
  font-weight: 800;
  font-size: 1.22rem;
}
/* FAQ Section */
.collapse-content {
  transition: height 0.5s ease;
}
.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 10px;
  vertical-align: middle;
  content: "";
  border-top: 5px solid;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  transition: transform 0.3s ease;
}
.arrow.down {
  transform: rotate(180deg);
}
/* FAQ Styles */
.faq-item {
  background-color: #add8e6; /* Azul */
  border: none; /* Sem bordas */
  margin-bottom: 20px; /* Espaço entre os itens */
  cursor: pointer;
  border-radius: 10px;
}
.faq-header{
  padding: 10px;
  align-items: center;
}
/* About Us */
.text-aboutus{
  text-align: center;
  font-size: 1rem;
}
.btn2{
  display: flex;
  margin-top: 3rem;
  align-items: center;
  justify-content: space-around;
}
/* Caurossel */
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 500px; /* Altere conforme necessário */
  margin: 0 auto;
  overflow: hidden;
}

.carousel-slide {
  display: flex;
}

.carousel-slide img {
  width: 90%;
  height: auto;
  display: none;
  border-radius: 20%;
}

.carousel-slide img.active {
  display: block;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 35%;
  transform: translateX(-50%);
  display: flex;
}

.carousel-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
  cursor: pointer;
}

.carousel-indicator.active {
  background-color: black;
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease; /* Efeito de transição suave */
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
/* Footer */
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
