<template>
  <div>
    <div class="container mt-5 pt-5">
      <h1>Blog de Matérias</h1>
      <div class="filter mb-4">
        <button @click="filterPosts('ALL')">TODAS</button>
        <button @click="filterPosts('FGTS')">FGTS</button>
        <button @click="filterPosts('EMP_VEICULOS')">Empréstimo Veículos</button>
        <button @click="filterPosts('EMP_CONTA_LUZ')">Empréstimo na Conta de Luz</button>
      </div>
      <div class="row mb-4">
        <div class="col-md-8">
          <h2>Adicionar Matéria</h2>
          <form @submit.prevent="addPost">
            <div class="form-group">
              <label for="title">Título</label>
              <input type="text" id="title" v-model="newPost.title" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="summary">Resumo</label>
              <textarea id="summary" v-model="newPost.summary" class="form-control" required></textarea>
            </div>
            <div class="form-group">
              <label for="content">Conteúdo</label>
              <textarea id="content" v-model="newPost.content" class="form-control" required></textarea>
            </div>
            <div class="form-group">
              <label for="category">Categoria</label>
              <select id="category" v-model="newPost.category" class="form-control" required>
                <option value="FGTS">FGTS</option>
                <option value="EMP_VEICULOS">Empréstimo Veículos</option>
                <option value="EMP_CONTA_LUZ">Empréstimo na Conta de Luz</option>
              </select>
            </div>
            <div class="form-group">
              <label for="link">Link</label>
              <input type="text" id="link" v-model="newPost.link" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary">Adicionar Matéria</button>
          </form>
        </div>
      </div>
      <div class="row" id="posts-container">
        <div class="col-md-4" v-for="post in filteredPosts" :key="post.id">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.summary }}</p>
              <router-link :to="post.link" class="btn btn-primary">Leia mais</router-link>
              <button @click="editPost(post.id)" class="btn btn-secondary">Editar</button>
              <button @click="deletePost(post.id)" class="btn btn-danger">Excluir</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal v-model="showEditModal" title="Editar Matéria" @ok="updatePost">
      <div class="form-group">
        <label for="edit-title">Título</label>
        <input type="text" id="edit-title" v-model="editPostData.title" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="edit-summary">Resumo</label>
        <textarea id="edit-summary" v-model="editPostData.summary" class="form-control" required></textarea>
      </div>
      <div class="form-group">
        <label for="edit-content">Conteúdo</label>
        <textarea id="edit-content" v-model="editPostData.content" class="form-control" required></textarea>
      </div>
      <div class="form-group">
        <label for="edit-category">Categoria</label>
        <select id="edit-category" v-model="editPostData.category" class="form-control" required>
          <option value="FGTS">FGTS</option>
          <option value="EMP_VEICULOS">Empréstimo Veículos</option>
          <option value="EMP_CONTA_LUZ">Empréstimo na Conta de Luz</option>
        </select>
      </div>
      <div class="form-group">
        <label for="edit-link">Link</label>
        <input type="text" id="edit-link" v-model="editPostData.link" class="form-control" required />
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      selectedCategory: 'ALL',
      newPost: {
        title: '',
        summary: '',
        content: '',
        category: '',
        link: '',
      },
      showEditModal: false,
      editPostData: {
        id: null,
        title: '',
        summary: '',
        content: '',
        category: '',
        link: '',
      },
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
  },
  methods: {
    filterPosts(category) {
      this.selectedCategory = category;
    },
    addPost() {
      const newPost = { ...this.newPost, id: Date.now() };
      this.posts.push(newPost);
      this.newPost = {
        title: '',
        summary: '',
        content: '',
        category: '',
        link: '',
      };
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    },
    editPost(id) {
      const post = this.posts.find(post => post.id === id);
      if (post) {
        this.editPostData = { ...post };
        this.showEditModal = true;
      }
    },
    updatePost() {
      const index = this.posts.findIndex(post => post.id === this.editPostData.id);
      if (index !== -1) {
        this.posts.splice(index, 1, this.editPostData);
      }
      this.showEditModal = false;
    },
  },
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
