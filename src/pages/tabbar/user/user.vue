<template>
个人中心
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  name: 'user',
  components: {
    
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 Nut1UI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text12312',
      show: false,
      cover: false
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss" >
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
