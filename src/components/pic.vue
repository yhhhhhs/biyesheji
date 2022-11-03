<template>
  <div class="pic">
    <img :src="pic[0]" alt="">
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    type: Array,
    default() {
      return [];
    }
  }
};
</script>