<template>
  <header class="w-full h-16 flex items-center justify-between bg-primary">
    <div class="box-border ml-40 flex h-full">
      <div
        class="flex items-center pr-5 pl-5 hover:bg-black hover:bg-opacity-20 h-full cursor-pointer"
        v-for="item in des"
        :key="item.text"
      >
        <a :href="item.href" class="text-base text-white">{{ item.text }}</a>
      </div>
    </div>
    <div class="mr-40 flex items-center h-full cursor-pointer">
      <div
        class="flex items-center pr-5 pl-5 hover:bg-black hover:bg-opacity-20 h-full"
      >
        <a class="text-base text-white">{{ visit }}</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const visit: String = "欢迎访问我的简历，你是第383位访问者";
const des = [
  {
    text: "关于我",
    href: "#about",
  },
  {
    text: "项目展示",
    href: "#project",
  },
  {
    text: "联系我",
    href: "#contact",
  },
];
</script>

<style lang="scss" scoped></style>
