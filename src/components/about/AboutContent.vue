<template>
  <div class="about-content">
    <h1 class="name">威诺</h1>
    <p class="date">2021-07-19</p>

    <h3 class="title">简介</h3>
    <div class="brief">
      <p>本博客主要维护人威诺。</p>
      <p>
        编程给我的热趣不亚于儿时对游戏的沉迷。因为热爱，所以坚持！因为坚持，发现快乐！
      </p>
      <p>更多想法注入…</p>
    </div>

    <h3 class="title">宗旨</h3>
    <p>
      本博客主要分享作者原创的技术文章以及在日常工作和学习中读过的好文。希望通过博客和公众号上分享的方式为读者精选一些我认为在企业应用架构实践中非常实用的干货内容。
    </p>

    <h3 class="title">意见反馈</h3>
    <p>
      若本号内容有做得不到位的地方（比如：涉及版权或其他问题），请及时联系我进行整改。
    </p>

    <h3 class="title">联系方式</h3>
    <ul class="contact">
      <li>微信：w2574293750</li>
      <li>邮箱：2574293750@qq.com</li>
    </ul>

    <div class="copyright">
      <img src="../../assets/imgs/avatar.webp" alt="头像" />
      <div>
        <p>本文由 <router-link to="/">威诺</router-link> 创作</p>
        <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh">版权声明：自由转载-非商用-非衍生-保持署名 (CC BY-NC-ND 3.0)</a>
        <p>
          原创不易，转载请注明出处，感谢支持！如果本文对您有用，欢迎转发分享！
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-content {
  padding: 20px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 15px;
  background-color: white;
  .name {
    color: #888;
    font-size: 24px;
    margin-bottom: 15px;
  }
  .date {
    position: relative;
    font-size: 16px;
    padding-left: 1.5em;
    &::before {
      content: "";
      position: absolute;
      top: 4px;
      left: 0;
      width: 1em;
      height: 1em;
      background: url("../../assets/imgs/icon-calendar.png") center/cover no-repeat;
    }
  }
  h3 {
    margin: 1.3em 0;
    color: #555;
    font-size: 20px;
    font-weight: bold;
  }
  p {
    color: #666;
    line-height: 1.6em;
    margin: 1em 0;
  }
  .contact {
    li {
      position: relative;
      padding-left: 20px;
      margin: 10px 0;
      &::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
        width: 10px;
        height: 10px;
        background-color: #999;
      }
    }
  }
  .copyright {
    display: flex;
    padding: 20px;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 15px;
    background-color: beige;
    img {
      width: 100px;
      height: 100px;
      margin-right: 20px;
      box-shadow: 0 0 10px #666;
    }
    p:first-child {
      position: relative;
      padding-left: 1.5em;
      &::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
        width: 1em;
        height: 18px;
        background: url('../../assets/imgs/icon-prompt.png') center/cover no-repeat;
      }
    }
  }
}
@media screen and (max-width: 860px) {
  .copyright {
    flex-direction: column;
    img {
      margin: 0 auto !important;
    }
  }
}
</style>