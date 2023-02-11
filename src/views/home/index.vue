<template>
  <div class="home">
    <MyBanner />
    <Articles />
  </div>
</template>

<script lang="ts" setup>
import Articles from "@/components/home/Articles.vue";
import MyBanner from "@/components/MyBanner.vue";
import { defineComponent, onMounted } from "vue";

// export default defineComponent({
//   name: "Home",
//   components: {
//     MyBanner,
//     Articles,
//   },
// });

onMounted(() => {
    console.log("index!")
})
</script>

<style lang="scss" scoped>

</style>
