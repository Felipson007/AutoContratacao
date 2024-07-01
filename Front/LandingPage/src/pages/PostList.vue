<template>
  <div>
    <Header @filter-posts="filterPosts" />
    <div class="container mt-5 pt-5">
      <router-link to="/editor" v-if="isAuthenticated" class="btn btn-primary mb-4">Nova Postagem</router-link>
      <div class="row" id="posts-container">
        <div class="col-md-4" v-for="post in filteredPosts" :key="post.id">
          <div class="card mb-4 h-100">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ post.title }}</h5>
              <div v-if="post.imageUrl" class="mb-2">
                <img :src="post.imageUrl" alt="Post Image" class="img-thumbnail">
              </div>
              <p class="card-text">{{ post.summary }}</p>
              <router-link :to="'/post/' + post.id" class="btn btn-primary mt-auto">Leia mais</router-link>
              <div class="container-div mt-2" v-if="isAuthenticated">
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
import axios from 'axios';

export default {
  components: {
    Header,
  },
  data() {
    return {
      selectedCategory: 'ALL',
      posts: [],
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
    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        this.posts = response.data;
        this.posts.forEach(post => {
          if (post.image_url) {
            post.imageUrl = `http://localhost:5000/uploads/${post.image_url}`;
          }
        });
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    filterPosts(category) {
      this.selectedCategory = category;
    },
    editPost(id) {
      this.$router.push({ name: 'EditPost', params: { id } });
    },
    async deletePost(id) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        this.posts = this.posts.filter(post => post.id !== id);
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<style scoped>
.container-div {
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
}
.card-body {
  text-align: center;
  display: flex;
  flex-direction: column;
}
.card {
  height: 100%;
}
.img-thumbnail {
  max-height: 150px;
  object-fit: cover;
}
.btn {
  margin-top: 20px !important;
}
</style>
