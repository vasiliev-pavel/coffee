
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    path: "", //     
    userMadeSelection: false,
  }),
  actions: {
    addpath(fromPath) {
        this.path = fromPath;
    }, 
    setUserMadeSelection(value) {
      this.userMadeSelection = value;
    }
  }
});
