<template>
  <div class="post-container" :class="{show: !!postId}">
    <div class="close" @click="close"></div>
    <div class="post-content-wrapper">
      <div class="post-header">
        <span class="text ellipsis">asdfasdfasdfasdfsadfa</span><span class="text-btn">回复</span>
      </div>
      <div class="post-content-container">
        <div class="post-content-item">
          <div class="user-ctn">
            <i class="icon">
              <img src="http://tb.himg.baidu.com/sys/portrait/item/80ede697a0e591b3e899bee7b1b3bd3d" alt="">
            </i>
            <span class="user-name">呢嗯阿斯蒂</span>
          </div>
          <div class="user-cotnent">
            <div class="user-answer-wrapper">
              <p>1123231123231123231123231123 23112323112323112323 1123231123231123231123231123231123231123231123 23112323112323112323112323112 3231123231123 2311232311232311232311232 3112323112323112323</p>
            </div>
            <div class="reply-container">
              <div class="reply-item clear">
                <i class="icon">
                  <img src="http://tb.himg.baidu.com/sys/portrait/item/80ede697a0e591b3e899bee7b1b3bd3d" alt="">
                </i>
                <div class="reply-content">
                  <a>阿斯蒂芬:</a>回复 <a>我是约了解:</a> <span class="answer-text">以前接近30个 陆陆续续删得差不多了 最后忍痛把几个天空宝珠拉满的也删了 只留下这两个最初的两个</span>
                </div>
                <div class="clear-both"></div>
                <p class="reply-time"><span>2013-12-13 12:12:12</span><span class="text-click">回复</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: {
    postId: ''
  },
  data () {
    return {
      msg: '123'
    }
  },
  methods: {
    close () {
      this.$emit('changeShowPost', false)
    }
  }
}
</script>

<style scoped>
.close {
  width: 30px;
  height: 30px;
  background: red;
  position: absolute;
  right: 30px;
  top: 0;
  cursor: pointer;
}
.post-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100%;
  transition: left .5s;
  width: 100%;
  background: #fff;
}
.post-container.show {
  left: 0;
}

.post-content-wrapper {
  width: 740px;
  margin: auto;
  border: 1px solid #E5E5E5;
}
.post-header .text {
  width: 470px;
  font-size: 16px;
  line-height: 56px;
  height: 56px;
  font-weight: 400;
  margin-left: 20px;
  display: inline-block;
  vertical-align: middle;
}
.post-header .text-btn {
  margin-left: 20px;
}
.post-content-item {
  border-top: 1px solid #E1E4E6;;
  /*border-bottom: 1px solid #E1E4E6;;*/
  display: flex;
}
.post-content-item .user-ctn {
  width: 130px;
}
.post-content-item .user-cotnent {
  width: calc(100% - 130px);
  padding: 10px 20px;
}
.user-ctn {
  text-align: center;
  padding: 15px 0;
}
.user-ctn .icon {
  padding: 4px;
  border: 1px solid #ccc;
}
.user-ctn img {
  width: 80px;
  height: 80px;
}
.user-ctn .user-name {
  font-size: 14px;
  color: #2d64b3;
  display: inline-block;
  margin-top: 10px;
  cursor: pointer;
}
.user-ctn .user-name:hover {
  text-decoration: underline;
}
.reply-item  {
  font-size: 14px;
  margin-top: 20px;
  background: #F7F8FA;
  padding: 15px;
}
.reply-item .icon {
  float: left;
}
.reply-item .icon {
  border: 1px solid #ccc;
}
.reply-item .icon img {
  width: 32px;
  height: 32px;
}
.reply-item .reply-content {
  float: right;
  width: calc(100% - 50px);
}
.reply-item .reply-time {
  text-align: right;
  margin-top: 10px;
}
.reply-item .reply-time span {
  color: #666;
  font-size: 12px;
  margin-right: 15px;
}
</style>
