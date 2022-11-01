<template>
  <div class="inTro">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#121212"
      text-color="#fff"
      active-text-color="#d351e1"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
    </el-menu>
    <div>愿望清单</div>
    <el-input></el-input>
  </div>
</template>
    
    <script>
export default {
  name: "inTro",
  data() {
    return { activeIndex: "1", activeIndex2: "1" };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {}
};
</script>
    
<style lang="less" scoped>
.inTro {
  width: cale(100%-26%);
  height: 100%;
  background-color: rgb(18, 18, 18);
  padding: 0 13%;
  color: var(--text-color1);
  display: flex;
  align-items: center;
  padding-top: 20px;
}
/deep/.el-menu.el-menu--horizontal {
  border-bottom: none !important;
  width: 50%;
}
</style>