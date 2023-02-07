<template>
  <div
    class="w-full h-56 border-border1 border-solid border-b-4 bg-info-bg bg-no-repeat bg-center bg-cover"
    ref="header"
  >
    <div
      class="flex items-center justify-between box-border pt-8 pb-8 mr-60 ml-60"
    >
      <div class="flex items-center">
        <div
          class="w-40 g-40 box-border overflow-hidden"
          v-into="['fadeInLeft']"
        >
          <img
            class="transition-all duration-500 hover:scale-125"
            src="https://i.postimg.cc/J4zZLV4m/head.jpg"
          />
        </div>
        <div
          class="flex ml-7 h-24 flex-col justify-around delay-500"
          v-into="['delay-1s', 'flipInX']"
        >
          <p class="text-primary font-bold text-3xl">{{ userInfo.name }}</p>
          <p class="text-gray-50">{{ userInfo.motto }}</p>
        </div>
      </div>
      <div class="h-40" v-into="['fadeInRight']">
        <ul class="flex h-full flex-col justify-around">
          <li class="text-base text-gray-50">
            <span class="pr-5 text-primary font-bold">联系邮箱:</span
            >{{ userInfo.email }}
          </li>
          <li class="text-base text-gray-50">
            <span class="pr-5 text-primary font-bold">毕业学校:</span
            >{{ userInfo.school }}
          </li>
          <li class="text-base text-gray-50">
            <span class="pr-5 text-primary font-bold">联系电话:</span
            >{{ userInfo.phone }}
          </li>
          <li class="text-base text-gray-50">
            <span class="pr-5 text-primary font-bold">现居城市:</span
            >{{ userInfo.city }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
const userInfo = inject("userInfo");
let into = ref(false);
</script>
<style scoped lang="less"></style>
