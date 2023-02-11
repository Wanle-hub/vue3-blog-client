<template>
  <div class="bac">
    <p class="title">{{ articleData.title }}</p>
    <div class="info">
      <span class="date" v-html="articleData.pubtime.slice(0, 10)"></span>
      <span class="author">{{ articleData.author }}</span>
    </div>
    <div class="content" v-highlight v-html="articleData.content"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import api from "@/api";

const route = useRoute();
let articleData = ref({
  title: "",
  content: "",
  pubtime: "",
  author: "",
});

onMounted(() => {
  const id = route.params.id;
  api.article.getById(id).then((res) => {
    articleData.value.title = res.title;
    articleData.value.content = res.content;
    articleData.value.pubtime = res.pubtime.slice(0, 10);
    articleData.value.author = res.author;
  });
});
</script>

<style lang="scss" scoped>
.bac {
  width: 100%;
  min-height: 1200px;
  padding: 20px 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #ccc;
  border-radius: 10px;
  background-color: white;
  .title {
    color: #666;
    font-size: 2em;
  }
  .info {
    padding: 25px 0 20px;
    .date {
      position: relative;
      padding-left: 25px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        background: url("../../assets/imgs/icon-calendar.png") center/cover
          no-repeat;
      }
    }
    .author {
      position: relative;
      padding-left: 25px;
      margin: 0 20px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        background: url("../../assets/imgs/icon-author.png") center/cover
          no-repeat;
      }
    }
  }
  .content {
    line-height: 1.5em;
    font-size: 1em;
    :deep pre {
      font: inherit;
    }
    :deep p {
      margin: 15px 0;
    }
  }
}
</style>