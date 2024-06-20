<template>
  <div>
    <Header />
    <div class="container mt-5 pt-5">
      <router-link to="/blog" class="btn btn-secondary mb-4">Voltar</router-link>
      <div v-if="post">
        <h1>{{ post.title }}</h1>
        <div v-if="post.image">
          <img :src="post.image" alt="Post Image" class="img-fluid mb-4">
        </div>
        <p>{{ post.content }}</p>
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
      post: null,
    };
  },
  created() {
    const postId = this.$route.params.id;
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const existingPost = posts.find(post => post.id === Number(postId));
    if (existingPost) {
      this.post = existingPost;
    }
  },
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
