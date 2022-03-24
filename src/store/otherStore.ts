import { defineStore } from "pinia";
export const useOtherStore = defineStore({
    id: 'otherStore',
    state: () => ({
        count: 10
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        doubleCountPlusOne() :number {
            // 调用另外一个getter
            return this.doubleCount + 1
        }
    },
    actions: {
        async updatedCount(count: number) {
            this.count = count
        }
    }
})