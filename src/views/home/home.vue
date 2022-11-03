<template>
  <div>
    <hea-der></hea-der>
    <mat-ter></mat-ter>
  </div>
</template>

<script>
import MatTer from "../home/daughter/MatTer.vue";
import HeaDer from "../commoncpt/HeaDer.vue";
export default {
  name: "home",
  data() {
    return {};
  },

  methods: {},
  components: {
    MatTer,
    HeaDer
  }
};
</script>

<style lang="less" scoped>
</style>