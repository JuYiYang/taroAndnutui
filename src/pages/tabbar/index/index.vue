<template>
  <view class="index">
    <view
      class="searchBar"
      :style="{
        top: `${menuStyle.top * 2}rpx`,
        height: `${menuStyle.height * 2}rpx`,
      }"
    >
      <nut-searchbar
        v-model="searchValue"
        placeholder="快来搜索关于你的留言吧！"
      >
        <template v-slot:leftin>
          <nut-icon size="14" name="search2"></nut-icon>
        </template>
      </nut-searchbar>
    </view>
    <view
      class="swiper"
      :style="{
        marginTop: `${menuStyle.top * 2 + menuStyle.height * 2 + 10}rpx`,
      }"
    >
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
        </nut-swiper-item> </nut-swiper
    ></view>
  </view>
  <view class="boxTitle">
    <view>精选留言</view>
  </view>
  <nut-swipe v-for="item in 5">
    <view class="artcicle">
      <view class="userInfo">
        <view class="left">
          <nut-avatar
            size="normal"
            icon="https://c-ssl.dtstatic.com/uploads/blog/202203/25/20220325232426_17909.thumb.400_0.jpeg"
          ></nut-avatar>
          <text class="username">UserName</text>
        </view>
        <view class="right">
          <text class="colorPrimary">查看更多</text>
          <nut-icon name="right" size="14"></nut-icon>
        </view>
      </view>
      <view class="content">
        <text
          >一个view里面，有很多文字，会自动分行显示。一个view里面，有很多文字，会自动分行显示。
          一个view里面，有很多文字，会自动分行显示。
          一个view里面，有很多文字，会自动分行显示......</text
        >
      </view>
    </view>
    <template #right>
      <nut-button shape="square" style="height:100%" type="danger"
        >不感兴趣</nut-button
      >
    </template>
  </nut-swipe>
</template>

<script>
import as from "./index.config";
import { reactive, toRefs } from "vue";
import { pageInfoStore } from "../../../store/index";
export default {
  name: "Index",
  setup() {
    // 拿到页面胶囊信息
    const { menuStyle } = pageInfoStore();
    // 搜索值
    const searchValue = reactive("");
    // 图片列表
    const list = reactive([
      "https://www.dootask.com/uploads/chat/202208/3170/4a92562e85facce5cf622f3c04c4795d.jpg_thumb.jpg",
    ]);
    return {
      searchValue,
      list,
      menuStyle,
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
.searchBar {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  height: 50rpx;
  position: fixed;
  top: 0rpx;
  left: 0rpx;
  .nut-searchbar {
    background-color: transparent;
    padding-left: 20rpx;
    .nut-searchbar__search-input {
      background-color: rgb(240, 239, 244);
    }
  }
}
.swiper {
  padding: 0rpx 20rpx;
}
.nut-swiper-item {
  img {
    width: 100%;
  }
}
.boxTitle {
  padding: 0rpx 45rpx;
  // width: 100%;
  height: 80rpx;
  view {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 80rpx;
    border-radius: 50rpx;
    background-color: #586e92;
    font-weight: 800;
    font-size: 32rpx;
    color: #ffffff;
  }
}
.nut-swiper {
  border-radius: 35rpx;
}
.nut-imagepreview {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
}
.artcicle {
  border-radius: 25rpx;
  margin: 20rpx 0rpx;
  padding-top: 10rpx;
  padding-bottom: 15rpx;
  width: 100%;
  // height: 300rpx;
  // background-image: linear-gradient(
  //   direction,
  //   #409eff,
  //   #67c23a,
  //   #e6a23c,
  //   #f56c6c,
  //   #909399
  // );
  background: -webkit-linear-gradient(
    left,
    #409eff,
    #67c23a,
    #e6a23c,
    #f56c6c,
    #909399
  );
  // background-color: #409eff;
  opacity: 0.6;

  // background-color: #67c23a;
  .userInfo {
    padding: 20rpx 10rpx;
    padding-bottom: 0rpx;
    padding-top: 0rpx;
    width: 92%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left,
    .right {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .right {
      // width: 160rpx;
      justify-content: space-between;
      color: #409eff;
    }
    .username {
      display: inline-block;
      margin-left: 20rpx;
      font-size: 28rpx;
    }
  }
  .content {
    padding: 10rpx;
    text-indent: 90rpx;
    font-size: 28rpx;
  }
}
</style>
