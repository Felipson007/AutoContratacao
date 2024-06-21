<template>
  <div>
    <Header />
    <div class="container mt-5 pt-5">
      <router-link to="/blog" class="btn btn-secondary mb-4">Voltar</router-link>
      <h1>{{ isEditMode ? 'Editar Postagem' : 'Nova Postagem' }}</h1>
      <form @submit.prevent="savePost">
        <div class="form-group">
          <label for="title">Título</label>
          <input type="text" class="form-control" id="title" v-model="post.title" required>
        </div>
        <div class="form-group">
          <label for="summary">Resumo</label>
          <textarea class="form-control" id="summary" v-model="post.summary" required></textarea>
        </div>
        <div class="form-group">
          <label for="content">Conteúdo</label>
          <textarea class="form-control" id="content" v-model="post.content" required></textarea>
        </div>
        <div class="form-group">
          <label for="category">Categoria</label>
          <select class="form-control" id="category" v-model="post.category" required>
            <option value="FGTS">FGTS</option>
            <option value="EMP_VEICULOS">Empréstimo Veículos</option>
            <option value="EMP_CONTA_LUZ">Empréstimo na Conta de Luz</option>
          </select>
        </div>
        <div class="form-group">
          <label for="image">Imagem</label>
          <input type="file" class="form-control" id="image" @change="onImageSelected">
        </div>
        <button type="submit" class="btn btn-primary">{{ isEditMode ? 'Salvar Alterações' : 'Adicionar Postagem' }}</button>
      </form>
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
      isEditMode: false,
      post: {
        id: null,
        title: '',
        summary: '',
        content: '',
        category: 'FGTS',
        image: null,
      },
    };
  },
  created() {
    if (localStorage.getItem('authenticated') !== 'true') {
      this.$router.push('/login');
    }
    const postId = this.$route.params.id;
    if (postId) {
      this.isEditMode = true;
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      const existingPost = posts.find(post => post.id === Number(postId));
      if (existingPost) {
        this.post = { ...existingPost };
      }
    }
  },
  methods: {
    onImageSelected(event) {
      const file = event.target.files[0];
      this.post.image = file ? URL.createObjectURL(file) : null;
    },
    savePost() {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      if (this.isEditMode) {
        const index = posts.findIndex(post => post.id === this.post.id);
        if (index !== -1) {
          posts.splice(index, 1, this.post);
        }
      } else {
        this.post.id = Date.now();
        posts.push(this.post);
      }
      localStorage.setItem('posts', JSON.stringify(posts));
      this.$router.push('/blog');
    }
  }
};
</script>

<style scoped>
.form-group{
  margin-bottom: 20px;
}
</style>
