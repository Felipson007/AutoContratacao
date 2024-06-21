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
</style>
