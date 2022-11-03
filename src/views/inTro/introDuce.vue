<template>
  <div>
    <hea-der></hea-der>
    <div class="introbox"></div>
    <in-tro></in-tro>
  </div>
</template>
  
  <script>
import HeaDer from "../commoncpt/HeaDer.vue";
import inTro from "../inTro/daughter/inTro.vue";
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