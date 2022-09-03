<template>
  <view class="login">
    <view class="iptBox">
      <view class="header">
        <img
          src="https://ts4.cn.mm.bing.net/th?id=OIP-C.CBSLTkaar6S3UeNVGnZpXgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt=""
        />
      </view>
      <view class="enter">
        <input type="text" placeholder="账号" />
      </view>
      <view class="other"></view>
    </view>
    <view class="iptBox">
      <view
        @click="negationShowIcon"
        class="showIcon iconfont"
        :class="{
          ' icon-clearfnbiyanjing': !showIcon,
          'icon-clearfnyanjing': showIcon,
        }"
      ></view>
      <view class="enter">
        <input :type="!showIcon ? 'password' : 'text'" />
      </view>
      <i class="iconfont.icon-clearfnclear" @click="clearPas"></i>
    </view>
  </view>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    let showIcon = ref<Boolean>(false);
    type formDataType = {
      password: string;
    };
    const formData = ref<formDataType>({
      password: "",
    });
    const negationShowIcon = (): void => {
      showIcon.value = !showIcon.value;
    };
    const clearPas = (): void => {
      formData.value.password = "";
    };
    return {
      showIcon,
      negationShowIcon,
      formData,
      clearPas,
    };
  },
};
</script>

<style lang="less">
.login {
  padding: 150rpx 10%;
  max-width: 100%;
  .iptBox {
    margin: auto;
    margin-bottom: 20rpx;
    padding: 10rpx 42rpx;
    background-color: rgb(242, 243, 247);
    border-radius: 48rpx;
    width: 90%;
    // min-width: 280rpx;
    height: 106rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .header {
      width: 64rpx;
      height: 64rpx;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .enter {
      width: 300rpx;
      input {
        border: 0rpx;
        width: 100%;
        font-size: 36rpx;
        font-weight: 500;
        background-color: transparent;
      }
    }
    .other {
      width: 40rpx;
      height: 40rpx;
    }
  }
  .pasBox {
    justify-content: center !important;
    align-items: center !important;
  }
}
</style>
