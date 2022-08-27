export default defineAppConfig({
  pages: [
    'pages/tabbar/index/index',
    'pages/tabbar/release/release',
    'pages/tabbar/user/user'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  //图片的内容区域设置 60px 比较好，给4个方向各留10px的边距。
  tabBar: {
    color: "#626567",
    selectedColor: "#6e9eea",
    backgroundColor: "#FBFBFB",
    borderStyle: "white",
    list: [{
      pagePath: "pages/tabbar/index/index",
      text: "我的",
      iconPath: "static/tabbar/home-uncheckout.png",
      selectedIconPath: "static/tabbar/home.png"
    },
    {
      pagePath: "pages/tabbar/release/release",
      text: "发布",
      iconPath: "static/tabbar/release-unchecnkout.png",
      selectedIconPath: "static/tabbar/release.png"
    },
    {
      pagePath: "pages/tabbar/user/user",
      text: "我的",
      iconPath: "static/tabbar/user-uncheckout.png",
      selectedIconPath: "static/tabbar/user.png"
    }
    ]
  }
})
