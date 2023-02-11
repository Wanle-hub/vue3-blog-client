<template>
  <footer>
    <p>微信：w2574293720 邮箱：2574293750@qq.com</p>
    <p>备案号：<a href="https://beian.miit.gov.cn/">{{ recordNumber }}</a></p>
  </footer>
</template>

<script setup>
import api from "@/api";
import { ref } from "@vue/runtime-core";

let recordNumber = ref("桂ICP备2022006924号-2");

api.setting.getByName("record_number").then((res) => {
  recordNumber.value = res.value;
});
</script>

<style scoped>
footer {
  width: 100%;
  padding: 20px 0;
  box-shadow: 0 -2px 10px #ccc;
  background-color: white;
}
p {
  padding: 10px 0;
  text-align: center;
}
</style>