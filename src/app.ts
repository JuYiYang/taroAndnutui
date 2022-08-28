import { createApp } from "vue";
import Uilist from "./nutuiConfig";
import "./app.less";
import Taro from "@tarojs/taro";
import { createPinia } from "pinia";
import { pageInfoStore } from "./store/index";
const App = createApp({
  onShow(options) {
    const pageInfonewStore = pageInfoStore();
    //保存胶囊信息
    const menuStyle = Taro.getMenuButtonBoundingClientRect();
    pageInfonewStore.setMenuStyleFn(menuStyle);
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});
App.use(createPinia());
// 循环导入UI
for (let i = 0; i < Uilist.length; i++) {
  App.use(Uilist[i]);
}

export default App;
