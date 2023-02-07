<template>
  <div
    class="project-item shadow-shafowDef hover:shadow-shadowAction bg-white transition-all duration-500 rounded-lg flex w-5/12 justify-center items-center"
    ref="project"
    v-into="['zoomIn']"
  >
    <div class="p-5 w-48 h-48 overflow-hidden">
      <img
        class="transition-all duration-1000 scale-150"
        :src="data.data.imgSrc"
        alt=""
      />
    </div>
    <div
      class="flex-1 pl-5 border-l-2 border-gray-400 border-solid h-full flex flex-col"
    >
      <!-- 链接 -->
      <a :href="computedUrl" target="_blank" class="mt-1">
        <p class="text-lg font-bold text-primary leading-10 cursor-pointer">
          {{ data.title }} >
        </p>
      </a>
      <ul class="flex-1 flex flex-col">
        <li class="flex leading-8">
          <span class="text-primary font-bold w-20">项目简介：</span>
          <span class="flex-1">{{ data.data.brief }}</span>
        </li>
        <li class="flex leading-8">
          <span class="text-primary font-bold w-20">开发时间：</span>
          <span class="flex-1">{{ data.data.developmentTime }}</span>
        </li>
        <li class="flex leading-8 flex flex-wrap">
          <span class="text-primary font-bold w-20">技术使用：</span>
          <span
            class="mb-2 ml-2 pr-2 pl-2 leading-6"
            v-for="(x, index) in data.data.describe.split('/')"
            :key="index"
            :style="{ backgroundColor: `${color[colorChoose[index]]}` }"
            >{{ x.trim() }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { IsURL } from "@/utils/handle.js";
import { ref, inject, computed } from "vue";
let into = ref(false);
const color = [
  "rgba(252,151,175,.5)",
  "rgba(135,247,207,.5)",
  "rgba(247,244,148,.5)",
  "rgba(114,204,255,.5)",
  "rgba(247,197,160,.5)",
  "rgba(212,164,235,.5)",
  "rgba(210,245,166,.5)",
  "rgba(43,130,29,.5)",
  "rgba(63,177,227,.5)",
];
const { data } = defineProps(["data"]);
const other = inject("other");
// 随机选择颜色
const colorChoose = computed(() => {
  let res = [];
  for (let i = 0; i < 20; i++) {
    res.push(Math.floor(Math.random() * color.length));
  }
  return res;
});
const computedUrl = computed(() => {
  // 判断这个url是否为完整的链接
  // 如果是完整的链接就直接返回,如果不是就拼接固定地址之后返回
  if (IsURL(data.link)) {
    return data.link;
  } else {
    return other.mainPath + data.link;
  }
});
</script>
<style scoped>
.project-item {
  min-height: 160px;
  margin: 1%;
}

</style>
