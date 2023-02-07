<script setup>
import { ref, onMounted, provide } from "vue";
/* 数据 */
import userInfo from "./assets/json/userInfo.json";
import mobilePage from "./assets/json/mobilePage.json";
import PCPage from "./assets/json/PCPage.json";
import other from "./assets/json/other.json";

// import { useScroll } from "@vueuse/core";
// const bodyEle = document.body
// const { x, y} = useScroll(bodyEle)
// const toTop = () => {
//   window.scrollTo(0, 0);
// }

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
    <div class="to-top">
      <!-- <div class="push_nav" :class="{ active: y < 400 }" @click="toTop">↑</div> -->
    </div>
  </div>
</template>
