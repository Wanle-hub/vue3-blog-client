<template>
  <div class="about">
    <MyBanner />
    <AboutContent />
  </div>
</template>

<script lang="ts">
import AboutContent from "@/components/about/AboutContent.vue";
import MyBanner from "@/components/MyBanner.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  components: {
    MyBanner,
    AboutContent,
  },
});
</script>

<style lang="scss" scoped>
</style>

