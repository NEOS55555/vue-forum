<template>
  <div id="app">
    <div class="header">
      <ul class="clear">
        <li class="username">neos55555</li>
        <li class="message">消息</li>
      </ul>
      <div class="search-wrapper">
        <input type="text"><span class="btn">进入贴吧</span><span class="btn">全吧搜索</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import '../static/common.css'

export default {
  name: 'App'
}
</script>

<style >
.header {
  padding: 10px 20px;
}
.header ul li {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  float: right;
  cursor: pointer;
  text-decoration: underline;
}

.header ul li:not(:last-child) {
  margin-left: 20px;
}

.header .search-wrapper {
  text-align: center;
}

.header .search-wrapper .btn:not(:last-child) {
  margin-right: 15px;
}

</style>
