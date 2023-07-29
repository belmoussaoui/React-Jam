import { create } from "zustand";

export default create((set) => {
    return {
        scene: "boot",
        setScene: (scene) => set((state) => ({scene: scene})),
    };
});
