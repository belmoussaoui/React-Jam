import { create } from "zustand";
import $dataMap from "../assets/Map01";

export default create((set) => {
    return {
        routes: [{id: 1, direction: 3, x: 3, y: 7}],
        addRoute: (route) => {
            set((state) => ({
                routes: [...state.routes, route],
            }));
        },
        removeRoute: () => {
            set((state) => ({
                routes: state.routes.filter((value, index) => index !== state.routes.length - 1),
            }));
        },
    };
});
