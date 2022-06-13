import { defineStore } from 'pinia'
import {store} from '@/stores';
interface State {
  cacheViews: string[]
}
export const appStore = defineStore('app', {
  state: (): State => {
    return { cacheViews: [] }
  },
  getters: {
    getCacheViews(): string[] {
      return this.cacheViews
    }
  },
  actions: {
    addCacheView(name: string) {
      if (!this.cacheViews.includes(name)) {
        this.cacheViews.push(name)
      }
    },
    removeCacheView(name: string) {
      this.cacheViews = this.cacheViews.filter((item) => item !== name)
    }
  }
})

export function useAppStoreWithOut() {
  return appStore(store)
}