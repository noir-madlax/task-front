<template>
  <div>
    <van-nav-bar title="TODO"
                 @click-left="onClickLeft"
                 @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" size="18"/>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "banner",
  methods: {
    onClickLeft() {
      this.$router.push('/');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>

<style scoped>

</style>
