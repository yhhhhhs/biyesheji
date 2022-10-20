<template>
  <div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#303133"
  text-color="#fff"
  active-text-color="#d351e1">
  <el-menu-item index="5">
      <img :src="imgurl" alt="" class="logo">
  </el-menu-item>
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-menu-item index="8">新闻</el-menu-item>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="10" class="right hqkhd">获取客户端</el-menu-item>
<el-submenu index="3"  class="right">
    <template slot="title"><i class="el-icon-user"></i>登录</template>
    <el-menu-item index="3-1">账号注册</el-menu-item>
    <el-menu-item index="3-3">立即注册</el-menu-item>
</el-submenu>
</el-menu>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
      return{
          imgurl:require('../assets/images/logo.png'),
         activeIndex: '1',
        activeIndex2: '1'
      }
  },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="less" scoped>
 .logo{
     width: 57px;
     height: 28px;
 }
 /deep/.hqkhd{
    background: rgb(114, 30, 120) !important;
    color: rgb(255, 255, 255) !important;
 }
</style>