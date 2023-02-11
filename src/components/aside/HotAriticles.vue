<template>
  <div class="hots">
    <p>热门文章</p>
    <ul>
      <li v-for="item in articlesPage.records" :key="item.id">
        <router-link :to="'/'+item.id" target="_blank">{{item.title}}</router-link>
      </li>
      <!-- <li><router-link to="#">SpringForAll社区</router-link></li>
      <li><router-link to="#">Spring Cloud中文资料站</router-link></li>
      <li><router-link to="#">腾讯云：每日特惠秒杀专场</router-link></li>
      <li><router-link to="#">阿里云：新用户最低0.6折</router-link></li>
      <li><router-link to="#">Markdown写作分发工具</router-link></li>
      <li><router-link to="#">Java进阶必备：源码解析</router-link></li>
      <li><router-link to="#">微服务开源项目：Onemall</router-link></li>
      <li><router-link to="#">4K高清电影资源</router-link></li> -->
    </ul>
  </div>
</template>

<script setup>
import api from "@/api";
import { ref } from "@vue/runtime-core";

let articlesPage = ref({
  records: [],
  total: 0,
  size: 0,
  current: 0,
});

api.article.getPage(1, 8, "").then((res) => {
  articlesPage.value = res;
});
</script>

<style lang="scss" scoped>
.hots {
  width: 100%;
  padding: 20px;
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
        padding-left: 20px;
        color: #666;
        font-size: 14px;
        &::before {
          content: "";
          position: absolute;
          top: -2px;
          left: 0;
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url("../../assets/imgs/icon-hot.png") center/cover
            no-repeat;
        }
      }
      span {
        color: #999;
      }
    }
  }
}
</style>