import { create } from "zustand";

export default create((set) => {
	return {
        isEnd: false,
        isPlay: false,
        play: () => {
            set((state) => ({
                isPlay: !state.isPlay
            }));
        },
        end: (value) => {
            set((state) => ({
                isEnd: value
            }));
        },
    };
});