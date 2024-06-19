<template>
  <div>
    <Header />
    <div class="container mt-5 pt-5">
      <h1>Blog de Matérias</h1>
      <div class="filter mb-4">
        <button @click="filterPosts('ALL')">TODAS</button>
        <button @click="filterPosts('FGTS')">FGTS</button>
        <button @click="filterPosts('EMP_VEICULOS')">Empréstimo Veículos</button>
        <button @click="filterPosts('EMP_CONTA_LUZ')">Empréstimo na Conta de Luz</button>
      </div>
      <router-link to="/editor" v-if="isAuthenticated" class="btn btn-primary mb-4">Nova Postagem</router-link>
      <div class="row" id="posts-container">
        <div class="col-md-4" v-for="post in filteredPosts" :key="post.id">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.summary }}</p>
              <router-link :to="'/post/' + post.id" class="btn btn-primary">Leia mais</router-link>
              <div v-if="isAuthenticated">
                <button @click="editPost(post.id)" class="btn btn-warning ml-2">Editar</button>
                <button @click="deletePost(post.id)" class="btn btn-danger ml-2">Excluir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      selectedCategory: 'ALL',
      posts: JSON.parse(localStorage.getItem('posts')) || [],
    };
  },
  computed: {
    filteredPosts() {
      if (this.selectedCategory === 'ALL') {
        return this.posts;
      } else {
        return this.posts.filter(post => post.category === this.selectedCategory);
      }
    },
    isAuthenticated() {
      return localStorage.getItem('authenticated') === 'true';
    }
  },
  methods: {
    filterPosts(category) {
      this.selectedCategory = category;
    },
    editPost(id) {
      this.$router.push({ name: 'EditPost', params: { id } });
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
  }
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
