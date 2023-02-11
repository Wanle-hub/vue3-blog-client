<template>
  <header>
    <div class="header">
      <div class="logo">
        <img src="../assets/imgs/avatar.webp" alt="头像" />
        <span>威诺</span>
      </div>
      <nav>
        <router-link to="/">首页</router-link>
        <a href="https://github.com/" target="_blank">社区</a>
        <router-link to="/about">关于</router-link>
      </nav>
      <div class="search">
        <input type="text" placeholder="搜索" />
        <i class="icon"></i>
      </div>
    </div>
    <div class="mobile">
      <nav>
        <router-link to="/">首页</router-link>
        <a to="https://github.com/" target="_blank">社区</a>
        <router-link to="/about">关于</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0 10vw;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px #ccc;
  background-color: white;
  .logo {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      height: 80%;
      border-radius: 50%;
    }
    span {
      font-size: 22px;
    }
  }
  nav {
    display: flex;
    width: 60%;
    font-size: 18px;
    a {
      padding: 0 15px;
      color: #666;
      &:hover {
        color: skyblue;
      }
    }
  }
  .search {
    position: relative;
    input {
      all: unset;
      position: relative;
      display: block;
      max-width: 200px;
      height: 40px;
      padding: 0 20px;
      box-sizing: content-box;
      border-radius: 20px;
      border: 1px solid #ccc;
      background-color: white;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 100%;
      }
    }
    .icon {
      display: inline-block;
      height: 18px;
      width: 18px;
      background: url("../assets/imgs/icon-search.png") center/cover no-repeat;
      position: absolute;
      top: 28%;
      left: 85%;
      z-index: 2;
      cursor: pointer;
    }
  }
}
.mobile {
  position: relative;
  display: none;
  height: 60px;
  padding: 0 5vw;
  overflow-x: auto;
  box-sizing: border-box;
  box-shadow: 0 5px 6px #ccc;
  border-top: 1px solid #eee;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    min-width: 450px;
    font-size: 18px;
    a {
      padding: 0 15px;
      color: #666;
      &:hover {
        color: skyblue;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .header {
    padding: 0 5vw;
  }
}
@media screen and (max-width: 980px) {
  .header {
    box-shadow: 0 0 0 #fff;
    nav {
      display: none;
    }
  }
  .mobile {
    display: flex;
  }
}
@media screen and (max-width: 425px) {
  .header {
    .search {
      input {
        width: 30vw;
      }
    }
  }
}
</style>