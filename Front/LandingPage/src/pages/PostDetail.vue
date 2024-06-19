<template>
  <div>
    <Header />
    <div class="container mt-5 pt-5">
      <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
      </div>
      <div v-else>
        <p>Post não encontrado.</p>
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
    this.post = posts.find(post => post.id === Number(postId));
  }
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
