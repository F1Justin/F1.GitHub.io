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
  article.value = {
    title: '示例文章',
    content:
      'In its quest for a sophisticated, yet self-contained, manufacturing system, China has long employed a variety of helpful policies. Its Ministry of Education, for example, recently approved a new undergraduate concentration in high-end semiconductor science and engineering. China’s spending on more explicit industrial policies, including subsidies, tax breaks and cheap credit, amounted to 1.7% of gdp in 2019, according to the Centre for Strategic and International Studies, a think-tank—more than three times the percentage spent by America.'
  }
})
</script>
