<template>
  <div
    class="border-border1 flex flex-col pt-8 pb-20 justify-center items-center bg-bg1"
  >
    <library-title text="与我联系" id="contact"></library-title>
    <span class="text-white leading-7" v-into="['fadeInLeft']"
      >感谢你看到最后!~</span
    >
    <span class="text-white leading-7" v-into="['fadeInRight']"
      >联系电话:{{ userInfo.phone }}&emsp;&emsp;&emsp; 邮箱地址:{{
        userInfo.email
      }}</span
    >
  </div>
</template>

<script setup>
import { inject } from "vue";
const userInfo = inject("userInfo");
</script>
<style scoped lang="less">
// .wrapper {
//   background-color: @bg-1;
//   display: flex;
//   flex-direction: column;
//   padding: 30px 0 80px 0;
//   justify-content: center;
//   align-items: center;

//   span {
//     color: #fff;
//     line-height: 30px;
//   }
// }
</style>
