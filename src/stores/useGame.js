import { create } from "zustand";

export default create((set) => {
    return {
        rails: [],
        addRail: (item) => {
            set((state) => ({
                rails: [...state.rails, item],
            }));
        },
    };
});
