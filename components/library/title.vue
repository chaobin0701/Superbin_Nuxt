<template>
  <div class="mb-8 title" :id="id" ref="title" v-into="['isIn']">
    <h3 v-into="['flipInX']" class=" text-primary text-3xl text-center font-bold inline-block" >
      {{ text }}
    </h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "标题",
  },
  id: {
    type: String,
    default: "",
  },
});
const into = ref(false);
</script>
<style scoped>
.isIn ::before,
.isIn ::after {
  animation: mymove 1.5s ease;
  animation-fill-mode: forwards;
}

.title::before {
  width: 120px;
  border: 4px double #c2c2c2;
  display: inline-block;
  content: "";
  margin: 9px 10px;
  box-sizing: border-box;
}

.title::after {
  width: 120px;
  border: 4px double #c2c2c2;
  display: inline-block;
  content: "";
  margin: 9px 10px;
  box-sizing: border-box;
}

@keyframes mymove {
  from {
    transform: scaleX(0);
    opacity: .0;
  }

  to {
    transform: scaleX(1);
    opacity: 1;
  }
}
</style>
