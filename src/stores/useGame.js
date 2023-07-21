import { create } from "zustand";

export default create((set) => {
    return {
        isPlay: false,
        rails: [],
        addRail: (item) => {
            set((state) => ({
                rails: [...state.rails, item],
            }));
        },
        play: () => {
            set((state) => ({
                isPlay: true
            }));
        }
    };
});
