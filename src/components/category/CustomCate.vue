<template>
  <div>
    <p>{{ pageConfig.category }}</p>
    <article v-for="item in articlesPage.records" :key="item.id">
      <p class="title" @click="toDetail(item.id)">{{ item.title }}</p>
      <div class="info">
        <span class="date" v-html="item.pubtime.slice(0, 10)"></span>
        <span class="author">{{ item.author }}</span>
        <span class="category">{{ item.category }}</span>
      </div>
      <div class="content" v-html="item.content"></div>
    </article>
    <el-pagination
      layout="prev, pager, next"
      :total="articlesPage.total"
      :page-size="articlesPage.size"
      @current-change="handleChange"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import api from "@/api";

const route = useRoute();
const router = useRouter();
let pageConfig = ref({
  pageNum: 1,
  pageSize: 5,
  category: "",
});
let articlesPage = ref({
  records: [],
  total: 0,
  size: 0,
  current: 0,
});

onMounted(() => {
  let cateName = route.params.name;
  if (cateName) {
    pageConfig.value.category = cateName;
  }
  let pageNum = pageConfig.value.pageNum;
  let pageSize = pageConfig.value.pageSize;
  let category = pageConfig.value.category;
  api.article.getPage(pageNum, pageSize, category).then((res) => {
    articlesPage.value = res;
  });
});

onBeforeRouteUpdate((to) => {
  let cateName = to.params.name;
  if (cateName) {
    pageConfig.value.category = cateName;
  }

  let pageNum = pageConfig.value.pageNum;
  let pageSize = pageConfig.value.pageSize;
  let category = pageConfig.value.category;
  api.article.getPage(pageNum, pageSize, category).then((res) => {
    articlesPage.value = res;
  });
});

const toDetail = (id) => {
  let detailUrl = router.resolve({
    path: "/" + id,
  });
  window.open(detailUrl.href, "_blank");
};

const handleChange = (newPageNum) => {
  api.article
    .getPage(newPageNum, pageConfig.pageSize, pageConfig.category)
    .then((res) => {
      articlesPage.value = res;
    });
};
</script>

<style lang="scss" scoped>
article {
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 0 10px #ccc;
  border-radius: 15px;
  background-color: white;
  .title {
    font-size: 24px;
    color: #666;
    cursor: pointer;
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
    .category {
      position: relative;
      padding-left: 25px;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        background: url("../../assets/imgs/icon-category.png") center/cover
          no-repeat;
      }
    }
  }
  .content {
    line-height: 2em;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    word-break: break-all;
    :deep img {
      width: 0;
    }
  }
}
</style>