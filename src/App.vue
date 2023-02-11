<template>
  <MyHeader />
  <div class="content">
    <div class="left">
      <router-view />
    </div>
    <div class="right">
      <HotAriticles />
      <Category />
    </div>
  </div>
  <MyFooter />
</template>

<script setup lang="ts">
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import Category from "@/components/aside/Category.vue";
import HotAriticles from "@/components/aside/HotAriticles.vue";

</script>

<style lang="scss" scoped>
.content {
  display: flex;
  min-height: 815px;
  padding: 30px 10vw;
  background-color: whitesmoke;
}
.left {
  width: calc(100% * 3/4);
  padding-right: 15px;
}
.right {
  width: calc(100% * 1/4);
  padding-left: 15px;
}
@media screen and (max-width: 1200px) {
  .content {
    padding: 30px 5vw;
    flex-direction: column;
  }
  .left {
    width: 100%;
    padding-right: 0;
  }
  .right {
    width: 100%;
    margin-top: 20px;
    padding-left: 0;
  }
}
</style>
