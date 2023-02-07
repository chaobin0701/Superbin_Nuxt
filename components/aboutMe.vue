<template>
  <div
    class="pt-10 pb-8 w-full bg-white flex justify-center flex-col items-center border-b-4 border-solid border-border1"
    ref="about"
  >
    <library-title text="关于我" id="about"></library-title>
    <div class="w-3/5 text-sm" v-into="['slow', 'fadeInDown']">
      <p class="w-full text-primary leading-7 text-center">
        我的github：
        <a :href="other.github" target="_blank" class="text-black">点击跳转</a>
      </p>
      <p class="w-full text-primary leading-7 text-center">
        我的笔记(语雀)：
        <a :href="other.yuque" target="_blank" class="text-black">点击跳转</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
const other = inject("other");
let into = ref(false);
</script>
<style scoped lang="less">
//   .wrapper {
//     padding: 40px 0 30px 0;
//     width: 100%;
//     background-color: #fff;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//     border-bottom: 5px @border solid;

//     .my-des {
//       width: 60%;

//       p {
//         width: 100%;
//         text-align: center;
//         line-height: 30px;
//         color: @primary;

//         span {
//           color: #000;
//         }
//       }
//     }
//   }
</style>
