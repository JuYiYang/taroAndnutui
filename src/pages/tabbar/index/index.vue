<template>
  <div class="index">
    <nut-swiper
      :init-page="list.length"
      :pagination-visible="true"
      pagination-color="#426543"
      auto-play="3000"
    >
      <nut-swiper-item
        v-for="(item, index) in list"
        :key="item"
        @click="showPreview(index)"
      >
        <img :src="item" alt="" />
      </nut-swiper-item>
    </nut-swiper>
  </div>
   <nut-divider :style="{ color: '#1989fa', borderColor: '#1989fa'}">心声列表</nut-divider>
  <div class="artcicle">

  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Index",
  components: {},
  setup() {
    // 图片列表
    const list = reactive([
      "https://storage.360buyimg.com/jdc-article/fristfabu.jpg",
      "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
      "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
    ]);
    const previewConfig = reactive({
      previewIndex: 0, // 当前预览的图片index,
      showPreviewConfig: false, //弹出
    });
    // 轮播图预览
    const showPreview = (index = 0) => {
      console.log(index);
      previewConfig.previewIndex = index;
      previewConfig.showPreviewConfig = true;
    };
    const hideFn = () => {
      previewConfig.showPreviewConfig = false;
    };
    return {
      list,
      ...toRefs(previewConfig),
      showPreview,
      hideFn,
    };
  },
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.nut-swiper-item {
  img {
    width: 100%;
  }
}
.nut-imagepreview {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
}
</style>
