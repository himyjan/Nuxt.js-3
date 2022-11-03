import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// Composition Api Stores
export const myStore = defineStore('my-store2', () => {
  const isReady = ref(false);

  const changeIsReady = computed(() => !isReady.value);

  const changeIsReady2 = () => {
    isReady.value = !isReady.value;
  };

  return {
    isReady,
  };
});

// Options Api Stores
export const myStore2 = defineStore({
  id: 'my-store',
  state: () => {
    return {
      isReady: false,
    };
  },
  getters: {
    changeIsReady: (state) => !state,
  },
  actions: {
    changeIsReady2() {
      this.isReady = !this.isReady;
    },
  },
});
