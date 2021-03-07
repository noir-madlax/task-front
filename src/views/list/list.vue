<template>
  <div>
    <banner></banner>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-swipe-cell v-for="(item,index) in list" :key="item.id">
        <template #left>
          <van-button square type="primary" text="选择"/>
        </template>
        <van-cell :title="item.id" :label="item.title" :value="item.title"
                  @click="click(index)"/>
        <template #right>
          <van-button square type="danger" text="删除"/>
          <van-button square type="primary" text="完成"/>
        </template>
      </van-swipe-cell>

    </van-list>
  </div>
</template>

<script>

import axios from "axios";
import banner from './components/banner'

export default {
  components: {
    banner
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {

    // 点击跳转至修改页面
    click(index) {
      this.$router.push({
        name: 'detail',
        params: {taskDto:this.list[index]}
      });
    },

    onLoad() {
      // 查询列表
      setTimeout(() => {
        axios.post('/task/queryTask').then((response) => {
          console.log(response.data)
          this.list = response.data;
          this.finished = true;
        })
      }, 1000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
