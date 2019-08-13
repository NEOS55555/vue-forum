<template>
  <div id="bar">
    <div class="bar-header">
      <img src="../assets/dnfbar.jpg" alt="">
    </div>
    <!-- 帖子详情 -->
    <div class="posts-detail-wrapper">
      <div class="posts-item" v-for="item in posts" :key="item.id">
        <div class="num"><span>{{item.replyNum}}</span></div>
        <div class="posts-container">
          <div class="posts-title ellipsis" @click="enterPost(item.id)">{{item.title}}</div>
          <div class="posts-content ellipsis">{{item.content}}</div>
          <div class="posts-img" v-for="(img, key) in item.imgs" :key="key">
            <img :src="img" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 浏览单个帖子 -->
    <one-post :postId="postId" @changeShowPost="changeShowPost"></one-post>
  </div>
</template>

<script>

import onePost from './post'

export default {
  name: 'homepage',
  components: {
    onePost
  },
  data () {
    return {
      showPost: true,
      postId: '213',
      posts: [
        {
          id: '123',
          replyNum: 200,
          time: '1565357465',
          title: '阿斯蒂芬',
          // link: '',
          content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
          imgs: ['https://imgsa.baidu.com/forum/wh%3D90%2C132%3Bcrop%3D0%2C0%2C90%2C90/sign=b4d8deb941c2d562f25dd8e4d73da1dc/2018cefc1e178a82b4e10f79f803738dab77e8cc.jpg']
        },
        {
          id: 'asdf',
          replyNum: 200,
          time: '1565357465',
          title: '阿斯蒂芬',
          // link: '',
          content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1',
          imgs: ['https://imgsa.baidu.com/forum/wh%3D90%2C132%3Bcrop%3D0%2C0%2C90%2C90/sign=b4d8deb941c2d562f25dd8e4d73da1dc/2018cefc1e178a82b4e10f79f803738dab77e8cc.jpg']
        }
      ]
    }
  },
  methods: {
    enterPost (postId) {
      this.postId = postId
      this.showPost = true
    },
    changeShowPost (flag) {
      this.postId = ''
      this.showPost = flag
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bar {
  position: relative;
  overflow: hidden;
}

.posts-detail-wrapper,
.bar-header {
  width: 982px;
  margin: auto;
}
.posts-item {
  display: flex;
  padding: 0 10px;
}
.posts-item .num {
  width: 70px;
}
.posts-item .num span {
  display: inline-block;
  font-size: 12px;
  width: 50px;
  height: 26px;
  line-height: 26px;
  margin-right: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 2px;
  background: #F7F7F7;
}
.posts-item .posts-title {
  color: #2d64b3;
  cursor: pointer;
}
.posts-item .posts-container {
  width: 900px;
}
</style>
