import { defineStore,createPinia } from 'pinia'
const store = createPinia();
export const refreshStore = defineStore('refresh', {
  state: () => {
    return { refreshNum: 0 }
  },
  getters: {
    queryRefresh(): number {
      return this.refreshNum
    }
  },
  actions: {
    upRefresh(st: number) {
      this.refreshNum = st
    }
  }
})
export {store}
