import { create } from "zustand";

export default create((set) => {
    return {
        scene: "main",
        setScene: (scene) => set((state) => ({scene: scene})),
    };
});
