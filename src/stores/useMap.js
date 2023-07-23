import { create } from "zustand";
import $dataMap from "../assets/Map01.js"



export default create((set) => {
    return {
        width: $dataMap.width,
        height: $dataMap.height,
        map: $dataMap.data,
    };
});
