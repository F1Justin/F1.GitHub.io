<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 假设您将从某个API或静态文件中获取文章数据
const article = ref({ title: '', content: '' })

onMounted(async () => {
  // 这里是获取文章数据的逻辑
  article.value = { title: '示例文章', content: '这是文章内容。' }
})
</script>
