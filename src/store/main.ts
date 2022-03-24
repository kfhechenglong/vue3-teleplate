import { defineStore } from "pinia";
export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        name: 'hechenglong'
    }),
    getters: {
        nameLength: (state) => state.name.length
    },
    actions: {
        async updatedName(name: string) {
            this.name = name
        },
    }
})