import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      settings: {},
    };
  },
  getters: () => {
    return {
      getSettings: () => this.settings,
    };
  },
});
