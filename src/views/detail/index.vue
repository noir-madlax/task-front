<template>
  <div>
    <banner></banner>
    <van-cell-group>
      <van-field v-model="taskDto.title" placeholder="what would you like to do?"/>
    </van-cell-group>
    <van-field
      v-model="taskDto.description"
      rows="3"
      autosize
      type="textarea"
      placeholder="description"
    />
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
    };
  },
  props:{
    taskDto: {
      id:'',
      title: '',
      description: '',
      taskTypeId:'0',//TODO
      listId:'1'//TODO
    }
  },

  // 销毁之前保存信息
  beforeDestroy() {
    console.log('beforeDestroy...');

    // title为空就不保存了
    if (!this.taskDto.title) {
      console.log('no data...');
      return;
    }

    // 调用后台接口保存
    if(this.taskDto.id){
      console.log('update...');
      axios.post('/task/updateTaskInfo', {
        taskDto: this.taskDto
      }).then((response) => {
        console.log(response.data)
      })
    }else {
      console.log('create...');
      axios.post('/task/createTask', {
        taskDto: this.taskDto
      }).then((response) => {
        console.log(response.data)
      })
    }
  },
  methods: {},
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
