<template>
  <ul>
    <li><img src="@/assets/imgs/banner-spring-boot.png" alt="" /></li>
    <li>
      <img src="@/assets/imgs/banner-spring-cloud-alibaba.png" alt="" />
    </li>
    <li><img src="@/assets/imgs/banner-spring-cloud.png" alt="" /></li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  li {
    width: 30%;
    img {
      width: 100%;
      box-shadow: 0 0 10px #ccc;
      border-radius: 15px;
    }
  }
}
@media screen and (max-width: 768px) {
  ul {
    flex-direction: column;
    gap: 10px;
    li {
      width: 100%;
    }
  }
}
</style>