<template>
  <div>
    <Header />
    <div class="container mt-5 pt-5">
      <router-link to="/blog" class="btn btn-secondary mb-4">Voltar</router-link>
      <div v-if="post" class="text-center">
        <h1>{{ post.title }}</h1>
        <div v-if="post.imageUrl">
          <img :src="post.imageUrl" alt="Post Image" class="img-fluid mb-4">
        </div>
        <h5 class="text-muted">{{ post.summary }}</h5>
        <div class="mt-4" v-html="post.content"></div>
        <span class="badge badge-primary">{{ post.category }}</span>
      </div>
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
      post: null,
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      const postId = this.$route.params.id;
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${postId}`);
        this.post = response.data;
        if (this.post.image_url) {
          this.post.imageUrl = `http://localhost:5000/uploads/${this.post.image_url}`;
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }
  }
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.img-fluid {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.mt-5 {
    margin-top: 5rem !important;
}
</style>
