
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    path: "", // 
  }),
  actions: {
    addpath(fromPath) {
        this.path = fromPath;
    },
  }
});
