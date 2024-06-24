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
          <img v-if="post.image" :src="post.image" alt="Post Image" class="img-thumbnail mt-2" style="max-width: 200px;">
        </div>
        <button type="submit" class="btn btn-primary">{{ isEditMode ? 'Salvar Alterações' : 'Adicionar Postagem' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import axios from 'axios';

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
        imageUrl: null,
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
      this.loadPost(postId);
    }
  },
  methods: {
    async loadPost(postId) {
      try {
        const response = await axios.get(`http://localhost:3000/api/posts/${postId}`);
        this.post = response.data;
      } catch (error) {
        console.error('Error loading post:', error);
      }
    },
    onImageSelected(event) {
      const file = event.target.files[0];
      this.post.image = file;
      this.post.imageUrl = URL.createObjectURL(file);
    },
    async savePost() {
      try {
        const formData = new FormData();
        formData.append('title', this.post.title);
        formData.append('summary', this.post.summary);
        formData.append('content', this.post.content);
        formData.append('category', this.post.category);
        formData.append('image', this.post.image);

        if (this.isEditMode) {
          await axios.put(`http://localhost:3000/api/posts/${this.post.id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        } else {
          await axios.post('http://localhost:3000/api/posts', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        }
        this.$router.push('/blog');
      } catch (error) {
        console.error('Error saving post:', error);
      }
    },
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}
</style>
