<script setup>
const num1 = ref(100);
const { count } = useAddCount();

onMounted(() => {
  setInterval(() => {
    num1.value++;
  }, 1000);

  if (process.client) {
    console.log(window);
  }
});
</script>

<template>
  <div class="text-orange-500 text-[50px]">index</div>
  <div class="text-[#000000] text-[30px]">{{ num1 }}</div>
  <Card />
  <Todo />
  <div class="text-[#000000] text-[30px]">{{ count }}</div>
</template>
