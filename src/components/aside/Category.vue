<template>
  <div class="category">
    <p>分类</p>
    <ul>
      <li v-for="cate in categoriesData" :key="cate.id" @click="toCategory(cate.name)">
        <router-link to="#">{{ cate.name }}</router-link
        ><span>({{ cate.count }})</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import api from "@/api";
import { onMounted, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const router = useRouter()
let categoriesData = ref([]);

onMounted(() => {
  api.category.getAll().then((res) => {
    categoriesData.value = res;
  });
});

const toCategory = (cateName) => {
  router.replace("/categories/"+cateName)
}
</script>

<style lang="scss" scoped>
.category {
  width: 100%;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  box-shadow: 0 0 10px #ccc;
  border-radius: 15px;
  background-color: white;
  p {
    padding-bottom: 15px;
    color: #333;
    font-size: 18px;
    font-weight: bold;
  }
  ul {
    li {
      padding: 10px 0;
      a {
        position: relative;
        padding-left: 16px;
        color: #666;
        &::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 0;
          display: inline-block;
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 9px solid #999;
          transition: 0.2s;
        }
        &:hover::before {
          transform: rotateZ(90deg);
          transition: 0.2s;
        }
      }
      span {
        color: #999;
      }
    }
  }
}
.icon {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 9px solid black;
  transition: 0.5s;
}
</style>