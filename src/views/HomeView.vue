<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <div v-for="article in articles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <p>{{ article.summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      articles: [
        { id: 1, title: 'Article 1', summary: 'This is the summary of article 1.' },
        { id: 2, title: 'Article 2', summary: 'This is the summary of article 2.' }
        // 更多文章...
      ]
    }
  }
}
</script>
