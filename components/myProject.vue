<template>
  <div
    class="pt-10 pb-8 bg-bg2 w-full flex justify-center items-center flex-col border-b-4 border-border1 border-solid"
  >
    <library-title text="项目展示" id="project"></library-title>
    <div class="flex mb-5">
      <div
        :class="{ active: active == 'all' }"
        class="text-xl mr-8 ml-8 pr-3 pl-3 opacity-30 text-black border-b-2 border-black border-solid transition-all duration-700 cursor-pointer hover:text-black hover:opacity-100 hover:border-primary"
        @click="change('all')"
      >
        所有项目
      </div>
      <div
        :class="{ active: active == 'pc' }"
        class="text-xl mr-8 ml-8 pr-3 pl-3 opacity-30 text-black border-b-2 border-black border-solid transition-all duration-700 cursor-pointer hover:text-black hover:opacity-100 hover:border-primary"
        @click="change('pc')"
      >
        PC端项目
      </div>
      <div
        :class="{ active: active == 'mobile' }"
        class="text-xl mr-8 ml-8 pr-3 pl-3 opacity-30 text-black border-b-2 border-black border-solid transition-all duration-700 cursor-pointer hover:text-black hover:opacity-100 hover:border-primary"
        @click="change('mobile')"
      >
        移动端项目
      </div>
    </div>
    <div class="w-full pr-20 pl-20 flex flex-wrap justify-center ">
      <library-project
        v-for="item in PCPage"
        :data="item"
        :key="item.link"
        v-show="active === 'all' || active == 'pc'"
      >
      </library-project>
      <library-project
        v-for="item in mobilePage"
        :data="item"
        :key="item.link"
        v-show="active === 'all' || active == 'mobile'"
      ></library-project>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
const PCPage = inject("PCPage");
const mobilePage = inject("mobilePage");
const active = ref("all");
const change = (key) => {
  active.value = key;
};
</script>
<style scoped lang="less">
//   .wrapper {
//     padding: 40px 0 30px 0;
//     width: 100%;
//     background-color: @bg-2;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//     border-bottom: 5px @border solid;

//     .breadcrumb {
//       display: flex;
//       margin-bottom: 20px;

//       div {
//         font-size: 20px;
//         margin: 0px 30px;
//         padding: 0px 10px;
//         padding-bottom: 20px;
//         opacity: .3;
//         color: #000;
//         border-bottom: 2px #000 solid;
//         transition: .7s all;
//         cursor: pointer;
//       }

//       div:hover {
//         color: #000;
//         opacity: 1;
//         border-bottom: 2px @primary solid;
//       }

//       div.active {
//         color: #000;
//         opacity: 1;
//         border-bottom: 2px @primary solid;
//       }
//     }

//     .project {
//       width: 100%;
//       padding: 0 10%;
//       flex-wrap: wrap;
//       display: flex;
//       justify-content: space-around;

//       .project-item {}
//     }
//   }
</style>
