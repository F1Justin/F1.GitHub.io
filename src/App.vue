<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '文章标题 1',
          excerpt: '这里是一部分文章正文的内容...',
          date: '2024-01-01'
        },
        { id: 2, title: '文章标题 2', excerpt: '这里是一部分文章正文的内容...', date: '2024-01-02' }
        // 可以根据需要添加更多文章
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="left-panel">
      <h1>F1's Blog</h1>
      <p>欢迎来到我的博客</p>
      <div class="icons">
        <!-- 这里可以放置图标，例如使用 FontAwesome -->
        <i class="icon-example">图标</i>
      </div>
    </div>
    <div class="right-panel">
      <div class="post" v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <div class="post-meta">{{ post.date }}</div>
      </div>
    </div>
  </div>
</template>

<style>
/* 全局样式 */
body,
html {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

.container {
  display: flex;
  height: 100vh;
}

.left-panel {
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0; /* 淡雅的背景色 */
}

.right-panel {
  flex: 2;
  padding: 20px;
  background-color: #ffffff; /* 白色背景 */
}

/* 左侧面板样式 */
h1 {
  margin: 0;
  font-size: 2em;
}

p {
  font-size: 1em;
}

.icons {
  /* 根据需要添加图标样式 */
}

/* 右侧面板样式 */
.post {
  background-color: #f9f9f9; /* 淡雅的卡片背景色 */
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
}

h2 {
  margin-top: 0;
}

.post-meta {
  font-size: 0.8em;
  color: #777;
}
</style>
