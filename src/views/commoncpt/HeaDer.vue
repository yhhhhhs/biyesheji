<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#d351e1"
    >
      <el-menu-item @click="skipHome">
        <img :src="imgurl" alt class="logo" />
      </el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">新闻</el-menu-item>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-submenu index="4">
        <template slot="title">我的工作台</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项3</el-menu-item>
        <el-submenu index="4-4">
          <template slot="title">选项4</template>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
          <el-menu-item index="4-4-2">选项2</el-menu-item>
          <el-menu-item index="4-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="5" class="hqkhd">获取客户端</el-menu-item>
      <el-submenu index="6" class="login">
        <template slot="title">
          <i class="el-icon-user"></i>登录
        </template>
        <el-menu-item index="6-1">账号注册</el-menu-item>
        <el-menu-item index="6-2">立即注册</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "HeaDer",
  data() {
    return {
      imgurl: require("../../assets/images/logo.png"),
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    skipHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style lang="less" scoped>
.logo {
  width: 57px;
  height: 28px;
}
/deep/.hqkhd {
  background: rgb(114, 30, 120) !important;
  color: rgb(255, 255, 255) !important;
  position: absolute;
  right: 0;
}
/deep/.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
.header {
  position: fixed;
  z-index: 9999;
  width: 100%;
}
.login {
  position: absolute;
  right: 110px;
}
</style>