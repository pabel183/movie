import { create } from "zustand";

interface ModalStorageInterface{
    movieId?:string,
    isOpen:boolean,
    openModel:(movieId:string)=>void,
    closeModel:()=>void,
}
const useInfoModel=create<ModalStorageInterface>((set)=>({
    movieId:undefined,
    isOpen:false,
    openModel:(movieId:string)=>set({isOpen:true,movieId}),
    closeModel:()=>set({isOpen:false,movieId:undefined})
}));

export default useInfoModel;