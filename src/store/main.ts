import { defineStore } from "pinia";
import { useOtherStore } from "./otherStore";
export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        name: 'hechenglong',
        age: 18
    }),
    getters: {
        nameLength: (state) => state.name.length,
        agePlus (state) {
            const otherStore = useOtherStore()
            return state.age + otherStore.count
        }
    },
    actions: {
        async updatedName(name: string) {
            this.name = name
        },
    }
})