import { create } from "zustand";

export default create((set) => {
    return {
        isPlaying: false,
		play: () => {
            set((state) => ({
                isPlaying: true
            }));
        }
    };
});