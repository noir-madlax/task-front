<template>
  <div>
    <van-nav-bar title="TODO"
                 @click-left="onClickLeft"
                 @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-down" size="18"/>
      </template>
      <template #right>
        <van-icon name="plus" size="18"/>
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
      Toast('返回');
    },
    onClickRight() {
      this.$router.push('/detail');
    },
  },
}
</script>

<style scoped>

</style>
