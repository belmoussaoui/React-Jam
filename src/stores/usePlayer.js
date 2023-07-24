import { create } from "zustand";
import $dataMap from "../assets/Map01";


export default create((set) => {
    return {
        x: 3,
		y: 7,
		direction: 3,
        setDirection: (direction) => {
            set((state) => ({
                direction: direction,
            }));
        },
		setX: (x) => {
            set((state) => ({
                x: x,
            }));
        },
		setY: (y) => {
            set((state) => ({
                y: y,
            }));
        },
    };
});