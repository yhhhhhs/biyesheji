<template>
  <div>
    <hea-der></hea-der>
    <div class="introbox"></div>
    <in-tro></in-tro>
  </div>
</template>
  
  <script>
import HeaDer from "../components/HeaDer.vue";
import inTro from "../components/inTro.vue";
export default {
  name: "introduce",
  data() {
    return {};
  },

  methods: {},
  components: {
    HeaDer,
    inTro
  }
};
</script>
  
<style lang="less" scoped>
.introbox {
  height: 60px;
}
</style>