<script setup>
const num1 = ref(100);
const num2 = ref(0);
const { count } = useAddCount(num2.value);

const increment = () => {
  num2.value++;
};

const props = defineProps({ data: { type: Object, default: () => {} } });

// const { data, pending, error, refresh } = await useAsyncData('mountains', () =>
//   $fetch('https://api.nuxtjs.dev/mountains')
// );

const { data, pending, error, refresh } = await useFetch(
  'https://api.nuxtjs.dev/mountains'
);

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
  <div class="text-[#000000] text-[30px]">{{ num2 }}</div>
  <button @click="increment">Add 1</button>
  <div
    class="text-[#000000] text-[30px]"
    v-for="item in data"
    :key="item.title"
  >
    {{ item }}
  </div>
</template>
