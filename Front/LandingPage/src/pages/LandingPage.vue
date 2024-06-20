<template>
    <div class="page">
      <header >
        <div class="header">
        <!-- Navbar -->
        <b-navbar variant="light" type="light" fixed="top">
          <b-container class="d-flex justify-content-between align-items-center">
            <b-navbar-brand class="d-flex align-items-center" @click="scrollTo('#home')">
              <img src="@/assets/Logo.jpg" alt="Logo da Empresa" class="d-inline-block align-top logo"  />
              <span class="ml-2">Crédito Completo</span>
            </b-navbar-brand>
            <div class="navbar-respons"  v-if="!isMobileMode">
              <b-navbar-nav class="ml-auto">
              <b-nav-item @click="scrollTo('#home')">Home</b-nav-item>
              <b-nav-item @click="scrollTo('#about')">Sobre</b-nav-item>
              <b-nav-item @click="scrollTo('#aboutus')">Nós</b-nav-item>
              <router-link to="/blog" class="nav-link">Blog</router-link>
            </b-navbar-nav>
            </div>
  
          </b-container>
        </b-navbar>
        </div>
      </header>
      
      <!-- Main Section -->
      <div class="Main-Section"  id="home">
        <section class="hero-section">
          <div class="hero-img">
            <img src="@/assets/IncialImage2.png" alt="Logo da Empresa" />
          </div>
          <div class="hero-text">
            <h1>Crédito inteligente para cada necessidade.</h1>
          </div>
        </section>
        
        <!-- Cards Section -->
        <b-container class="cards-section"v-if="!isMobileMode">
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
  
              <!-- Cards Section -->
          <b-container class="cards-section" v-else>
     
            <b-col md="4" class="card-container" v-for="card in cards" :key="card.title">
              <b-card class="custom-card">
                <div class="icon-header">
                  <i :class="card.icon + ' clickable-icon'" @click="redirect(card.link)"></i>
                </div>
                <h1>{{ card.title }}</h1>
                <p>{{ card.description }}</p>
              </b-card>
            </b-col>
         
        </b-container >
        
        <!-- About Section -->
        <b-container class="mt-5 mb-6 about-section" v-for="aboutus in abouts" :key="aboutus.title" >
          <b-row>
            <div class="tittle-about" id="about">
              <h3>{{ aboutus.title }}</h3>
            </div>
            <b-col md="5 img-about">
              <img :src="aboutus.image" alt="Imagem da seção" class="img-fluid">
            </b-col>
            <b-col md="6" class="text-about">
              <p>{{ aboutus.text1 }}</p>
              <p>{{ aboutus.text2 }}</p>
              <p>{{ aboutus.text3 }}</p>
              <p>{{ aboutus.text4 }}</p>
              <p>{{ aboutus.text5 }}</p>
              <p  class="text-font">{{ aboutus.text6 }}</p>
              <p class="text-font">{{ aboutus.text7 }}</p>
              <p class="text-font">{{ aboutus.text8 }}</p>
              <p class="text-font">{{ aboutus.text9 }}</p>
              <a href="https://api.whatsapp.com/send?phone=5515988200549&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda!!" class="btn btn-primary btn1" role="button">
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
        <b-container class="mt-5 mb-6 about-section" v-for="aboutus in abouts2" :key="aboutus.title" id="aboutus">
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
              <div class="container-carousel-div">
                <div class="carousel-container">
                  <div class="carousel-slide">
                    <img v-for="(image, index) in images" :key="index" :src="image" :class="{ 'active': index === currentIndex }" alt="Slide">
                  </div>
                </div>
                <div class="caption-text">
                  <p  v-text="carouselCaptions[currentIndex]"></p>
                </div>
              </div>
  
          </b-col>
          </b-row>
          <div class="btn2">
            <a href="https://api.whatsapp.com/send?phone=5515988200549&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda!!" class="btn btn-primary" role="button">
              <i class="fa-brands fa-whatsapp"></i> Fale com a Gente sobre Empréstimos
              <i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i><i class="fa-solid fa-dollar-sign"></i>
            </a>
          </div>
        </b-container>
  
        <!-- Footer -->
        <footer class="footer">
          <div class="container footer-container">
            <div class="row">
              <div class="col-md-4" v-if="!isMobileMode">
                <img src="@/assets/Logo.jpg" alt="Logo" class="logo">
              </div>
              <div class="col-md-4">
                <h4>Sobre Nós</h4>
                <ul class="list-unstyled">
                  <li><a>FLBM PRMOCOES DE VENDAS LTDA</a></li>
                  <li><a>15.067.608/0001-00</a></li>
                  <li><a>Largo de São Bento, 63, Jardim Santa Clara, Sorocaba - SP, 18010-030</a></li>
                  <li><a></a></li>
                </ul>
              </div>
              <div class="col-md-4" id="contact">
                <h4>Fale Conosco</h4>
                <ul class="list-unstyled">
                  <li><a href="https://api.whatsapp.com/send?phone=5515988200549&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda!!"> <i class="fab fa-whatsapp"></i> (15) 98820-0549</a></li>
                  <li><a href="tel:+551533427141"> <i class="fa-solid fa-phone"></i> (15) 3342-7141</a></li>
                  <li><a href="mailto:Contato@creditocompleto.com.br"><i class="fa-regular fa-envelope"></i> contato@creditocompleto.com.br</a></li>
                </ul>
              </div>
              <div class="col-md-4">
                <h4>Redes Sociais</h4>
                <ul class="list-unstyled social-media">
                  <li><a href="https://www.facebook.com/profile.php?id=61560990752254&mibextid=ZbWKwL"><i class="fab fa-facebook"></i> Facebook</a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                  <li><a href="https://www.instagram.com/creditocompleto?igsh=YWwxeWdoNG0waG93"><i class="fab fa-instagram"></i> Instagram</a></li>
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
  import { ref, watchEffect, onMounted, computed } from 'vue';
  import { Router, useRouter } from 'vue-router';
  import { BNavbar, BContainer, BNavbarBrand, BNavbarNav, BNavItem, BRow, BCol, BCard, BCollapse  } from 'bootstrap-vue-3'
  import FGTS from '@/assets/FGTS.jpg';
  import Energia from '@/assets/Energia.jpg';
  import refin1 from '@/assets/refin1.png';
  import refin2 from '@/assets/refin2.jpg';
  import clientimg1 from '@/assets/clientimg1.png';
  import clientimg2 from '@/assets/clientimg2.png';
  import clientimg3 from '@/assets/clientimg3.png';
  
  const cards = ref([
  
    {
      title: 'Conta de Energia',
      description: 'Obtenha crédito com garantia da sua conta de luz.',
      icon: 'fa-solid fa-file-contract',
      link: 'https://www.example.com'
    },
      {
      title: 'Antecipação FGTS',
      description: 'Antecipe seu FGTS e tenha ainda hoje o dinheiro na sua conta.',
      icon: 'fa-solid fa-brazilian-real-sign',
      link: 'https://contratacao-digital.azurewebsites.net/home/a25GdEFMK0hkMlhQengvMUw4UjFodlUyTDkwWlc5a0puUXBBVTFWbnoybUwxWmEveGF6N01JWEJVclVoRkdBVw=='
    },
    {
      title: 'Refin de veiculos',
      description: 'Troque seu financiamento atual por um novo com taxas menores.',
      icon: 'fa-solid fa-car',
      link: 'https://www.example.com'
    },
    {
      title: 'Refin de Caminhões',
      description: 'Reduza as taxas de juros e as parcelas do seu caminhão.',
      icon: 'fa-solid fa-truck',
      link: 'https://www.example.com'
    }
  ]);
  
  const abouts = ref([
  
    {
      title: "Crédito na Conta de Energia",
      text1: "O empréstimo na Conta de Energia é a solução rápida e prática para você que precisa de dinheiro na mão. Nosso serviço de empréstimo conta de luz oferece conveniência e facilidade.",
      text2: "Com este serviço a parcela do seu empréstimo virá na sua conta de energia elétrica.",
      text3: "Com aprovação rápida e sem burocracia, você recebe o dinheiro em sua conta em poucas horas. As parcelas virão junto na sua conta de luz, consulte as concessionárias autorizadas.",
      text4: "Precisa de um gás no orçamento? Consulte nossos especialistas e saiba como Empréstimo Pessoal com parcelamento na Fatura de Energia pode te ajudar! Oferecemos modalidades de crédito adaptadas às suas necessidades, mesmo para quem não tem comprovante de renda ou formas de parcelamento convencionais.",
      text5: "Por que contratar o Crédito com Parcelamento na Fatura de Energia?",
      text6: "Essa modalidade de crédito é perfeita pra quem precisa de dinheiro com urgência e não tem comprovante de renda ou formas de parcelamento.",
      text7: "A partir de R$ 400 a R$ 2.200.",
      text8: "Em até 22X.",
      text9: "Pagamento em até 24 horas após a aprovação.",
      image: Energia
    },
    {
      title: 'Antecipação de Saque Aniversário FGTS',
      text1: 'Antecipação de Saque aniversário FGTS é a solução inteligente para quem busca um empréstimo utilizando o saque aniversário antecipado do FGTS de forma rápida, fácil e sem complicação.',
      text2: 'O Saque Aniversário Antecipado do FGTS é sem burocracia, você garante dinheiro na mão em poucas horas e realiza seus sonhos sem precisar esperar.',
      text3: 'Precisa daquela força no orçamento e quer sacar seu FGTS? Consulte nossos especialistas e descubra como consultar o FGTS e liberar Saque Aniversário Antecipado do FGTS.',
      text4: 'Com a Antecipação do Saque-Aniversário FGTS, você não compromete sua renda mensal.',
      text5: 'Empréstimo FGTS é uma nova modalidade de empréstimo para pessoas quem possuem saldo no FGTS e que aderiram ao Saque-Aniversário.',
      image: FGTS,
    },
    {
      title: 'Refinanciamento de Veículos',
      text1: 'O Refinanciamento de Veículos é a solução ideal para quem busca reduzir as taxas de juros e as parcelas do financiamento do seu carro.',
      text2: 'Com o nosso Refinanciamento de Veículos você libera mais dinheiro do valor do seu veículo e pode utilizá-lo para quitar dívidas, realizar novos sonhos ou o que você precisar. O refinanciamento de veículos é uma modalidade de crédito na qual é necessário deixar um automóvel como garantia de pagamento do empréstimo. Refinanciar um veículo também é sinônimo de empréstimo com garantia de veículo.',
      text3: 'Está precisando de um gás no orçamento? Consulte nossas especialistas e saiba como o Refinanciamento de Veículos pode te ajudar!',
      text4: 'Refinancie seu veículo agora mesmo e tenha mais tranquilidade financeira!',
      text5: 'Veja as vantagens e qualidades desse empréstimo:',
      text6: '1. Juros baixos e parcelas acessíveis para você organizar suas finanças.',
      text7: '2. Troque suas dívidas com juros abusivos por apenas um boleto com juros mais baixos.',
      text8: '3. As melhores taxas para seu empréstimo.',
      image: refin1,
    },
    {
      title: 'Refinanciamento de Caminhões',
      text1: 'O Refinanciamento de Caminhões é a solução ideal para transportadores que buscam reduzir as taxas de juros e as parcelas do financiamento do seu caminhão.',
      text2: 'Com nosso Refinanciamento de Caminhões, você libera mais dinheiro do valor do seu caminhão e pode utilizá-lo para investir no seu negócio, comprar novos equipamentos, ampliar sua frota ou o que você precisar para aumentar sua lucratividade.',
      text3: 'Essa é a modalidade de Empréstimo com Caminhão de Garantia também conhecida como refinanciamento de caminhão (PESADOS) ou ainda como refinanciamento de vans, refinanciamento de ônibus...',
      text4: 'Está precisando de um fôlego novo para o seu negócio? Consulte nossas especialistas e saiba como o Refinanciamento de Caminhões Credito Completo pode te ajudar!',
      text5: 'Refinancie seu caminhão agora mesmo e tenha mais força para conquistar seus objetivos!',
      text6: 'Esta operação de refinanciamento de caminhão que também é conhecida como empréstimo com veículo/caminhão leve ou pesado em garantia, é totalmente recomendada para quem esteja utilizando de outros recursos com altíssimo custo financeiro como dívidas de curtíssimo prazo como cheque especial, cartão de crédito e outras.',
      image: refin2,
    }
  ]);
  const abouts2 = ref([
    {
      title: 'Sobre Nós',
      subtitle: 'Conheça a Credito Completo',
      text1: 'Com 12 anos no mercado de crédito a Credito Completo tem como base o respeito aos seus clientes e atenção desde o primeiro minuto.',
      text2: 'Devido a isso estamos há 12 anos no mercado e a cada dia tratando com mais respeito e dedicação nossos clientes.',
      text3: 'Sempre prezamos pela ética e enteder as necessidades dos nossos clientes para que possamos oferecer o melhor.',
  
    }
  ]);
  const questions = ref([
    {
      title: 'O que é Antecipação do Saque-Aniversário FGTS?',
      answer: 'A antecipação do saque-Aniversário FGTS permite que o trabalhador antecipe parte do saldo disponível em sua conta do FGTS, recebendo o valor antecipado de forma imediata, com o pagamento sendo descontado diretamente do FGTS.'
    },
    {
      title: 'Quem pode solicitar a Antecipação do Saque-Aniversário FGTS?',
      answer: 'Qualquer pessoa que saldo no FGTS podem solicitar a Antecipação do Saque-Aniversário FGTS.'
    },
    {
      title: 'Como funciona a antecipação do FGTS?',
      answer: 'Antecipação do Saque-Aniversário FGTS permite que o trabalhador antecipe parte do saldo disponível em sua conta do FGTS, recebendo o valor antecipado de forma imediata, com o pagamento sendo descontado diretamente das parcelas futuras do FGTS.'
    },
    {
      title: 'O que é Refinanciamento de Veículos leves?',
      answer: 'O Refinanciamento de veículos leves é uma modalidade de crédito na qual é necessário deixar um automóvel como garantia de pagamento do empréstimo. Refinanciar um veículo também é sinônimo de empréstimo com garantia de veículo.'
    },
    {
      title: 'O que é Emprestimo Pessoal com Parcelamento na Fatura de Energia?',
      answer: 'Com este serviço a parcela do seu empréstimo virá na sua conta de energia elétrica.'
    },
    {
      title: 'Quem pode solicitar o Emprestimo Pessoal com Parcelamento na Fatura de Energia?',
      answer: 'Pode solicitar o Emprestimo Pessoal com Parcelamento na Fatura de Energia quem tenha conta de energia no nome. Ter fornecimento de energia no enredeço informado; Ter conta em Banco em nome do Cliente para receber o crédito; Limide de idade de 21 a 84 anos.'
    },
    
  ]);
  function scrollTo(selector: string): void {
    const target = document.querySelector(selector);
  
    if (target instanceof Element) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with selector '${selector}' not found.`);
    }
  }
    
  const show = ref(questions.value.map(() => false));
  const toggle = (index: number) => {
    show.value[index] = !show.value[index];
  };
  
  const redirect = (link: string) => {
    window.location.href = link;
  };

  const images = ref([clientimg1, clientimg2, clientimg3]);
  const carouselCaptions = ref([
    "'Adorei o atendimento, gratidão. Muito educados e não nos deixa sem retorno.'",
    "'Muito simpáticos e cumprem com o combinado, super indico.'",
    "'Obrigado pela atenção e tirar minhas duvidas, fiz o meu empréstimo com segurança devido ao atendimento.'"
  ]);

  const currentIndex = ref(0);
  

  const changeSlide = (index: number) => {
    currentIndex.value = index;
  };
  watchEffect(() => {
    const interval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    }, 5000); 
  
    return () => clearInterval(interval);
  });
  const isMobileMode = ref(false);
  
  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });
  
  const checkScreenSize = () => {

    isMobileMode.value = window.innerWidth <= 768;
  };
  // Computed properties and methods
  const isAuthenticated = computed(() => {
      return localStorage.getItem('authenticated') === 'true';
    });
  </script>
  
  
  <style scoped>
  .page{
    overflow-x: hidden;
  
  }
  .Main-Section {
    margin-top: 65px;
  
  }
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
  .cards-section{
      margin-top: -186px !important;
    }
  .hero-section{
      height: 425px !important;
    }
    .col-md-4 {
    flex: 0 0 auto;
    width: 100%;
  }
  .hero-img img{
    margin-top: 13% !important;
    margin-right: 74% !important;
    width: 37% !important;
  }
  .hero-text h1{
    position: absolute;
    top: 36% !important;
    text-align: right;
    text-align: center !important;
    left: 63% !important;
    font-size: 2rem !important;
    transform: translate(-50%, -50%);
  }
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
  /* Hero Section */
  .hero-section {
    position: relative;
    text-align: center;
    color: white;
    height: 530px;
    background: linear-gradient(135deg, #add8e6, #00008b);
  }
  .hero-img img {
    height: auto;
    margin-top: 2%;
    margin-right: 36%;
    width: 20%;
    border-radius: 5%;
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
    width: 73%;
    display: flex;
    height: 501px;
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
    font-weight: 300 !important;
  }
  .text-about {
    padding-top: 20px;
    text-align: center;
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
  }
  
  .carousel-slide {
    display: flex;
    overflow: hidden;
  }
  
  .carousel-slide img {
    display: none;
  }
  
  .carousel-slide img.active {
    display: block;
  }
  
  .caption-text {
    margin-top: 10px; /* Ajuste o espaço entre o carrossel e a legenda conforme necessário */
    text-align: center; /* Centraliza o texto, opcional */
    font-size: 16px;
  }
  
  .carousel-caption {
    font-size: 16px; /* Ajuste o tamanho da fonte conforme necessário */
  }
  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .carousel-slide {
    display: flex;
    justify-content: center;
  }
  .caption-text p{
    font-size: 1.1rem;
    color: black;
    font-weight: 400;
  }
  .carousel-slide img {
    width: 30%;
    height: 150px;
    display: none;
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
  .footer-container{
    text-align: center;
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
    padding-top: 30px;
  }
  .footer .copyright p {
    font-size: 14px;
    color: #999;
  }
  </style>
  