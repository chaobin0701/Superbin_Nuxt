<script setup>
import { ref, onMounted, provide } from "vue";
/* 数据 */
import userInfo from "./json/userInfo.json";
import mobilePage from "./json/mobilePage.json";
import PCPage from "./json/PCPage.json";
import other from "./json/other.json";

// import { useScroll } from "@vueuse/core";
// const bodyEle = document.body
// const { x, y} = useScroll(bodyEle)
const toTop = () => {
  window.scrollTo(0, 0);
}

provide("userInfo", userInfo);
provide("mobilePage", mobilePage);
provide("PCPage", PCPage);
provide("other", other);
</script>

<template>
  <div>
    <!-- 顶部区域 -->
    <AppHeader class="fixed top-0 z-50"></AppHeader>
    <!-- 个人信息区域 -->
    <MyInfo class="mt-16"></MyInfo>
    <!-- 个人描述区域 -->
    <AboutMe></AboutMe>
    <!-- 项目经验区域 -->
    <MyProject></MyProject>
    <!-- 联系我区域 -->
    <ContactMe></ContactMe>
    <!-- 返回顶部按钮 -->
    <div class="w-12 h-12 fixed right-16 bottom-24">
      <div
        class=" flex justify-center h-full items-center cursor-pointer text-lg text-white opacity-100 bg-opacity-50 transition-all duration-1000 bg-primary rounded-full
        hover:bg-opacity-100"
        :class="{ active: y < 400 }"
        @click="toTop"
      >
        ↑
      </div>
    </div>
  </div>
</template>

<style lang="less">
// 回到顶部按钮样式
.to-top {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 60px;
  bottom: 100px;
  .push_nav {
    cursor: pointer;
    font-size: 18px;
    color: #fff;
    height: 100%;
    opacity: 1;
    transform: all 1.5s ease;
    background: rgba(16, 167, 175, 0.5);
    border-radius: 50%;

    &.active {
      opacity: 0;
    }

    &:hover {
      background: rgba(16, 167, 175, 1);
    }

    transition: 0.7s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
