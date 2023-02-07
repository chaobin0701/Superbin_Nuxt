/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        // 主要颜色
        primary: "#10A7AF",
        // 字体黑色
        textMain: "#333",
        // 字体颜色 未选中
        textUnChecked: "#CCC",
        // 底边框颜色
        border1: "#e4e4e4",
        // 深色背景
        bg1: "#272727",
        // 浅色背景
        bg2: "#F5F5F5",
      },
      backgroundImage: {
        "info-bg": "url(https://thumbsnap.com/s/2D7AvnTq.jpg?0207)",
      },
      boxShadow: {
        shadowDef: "0px 0px 5px rgba(0, 0, 0, .1)",
        shadowAction: "0px 0px 15px rgba(37, 171, 190, .4)",
      },
    },
  },
  plugins: [],
};
