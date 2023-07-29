import { create } from "zustand";

export default create((set) => {
	return {
        isPlay: false,
        play: () => {
            set((state) => ({
                isPlay: !state.isPlay
            }));
        },
    };
});