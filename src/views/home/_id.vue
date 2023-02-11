<template>
  <div class="home">
    <MyBanner />
    <Details />
  </div>
</template>

<script lang="ts" setup>
import Details from "@/components/home/Details.vue";
import MyBanner from "@/components/MyBanner.vue";
import { defineComponent, onMounted } from "vue";

// export default defineComponent({
//   name: "Home",
//   components: {
//     MyBanner,
//     Details,
//   },
// });

onMounted(() => {
    console.log("_id!")
})

</script>

<style lang="scss" scoped>

</style>
