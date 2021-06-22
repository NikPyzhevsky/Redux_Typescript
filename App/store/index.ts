import { store } from "./RootStore";
import type { RootState, AppDispatch } from "./RootStore";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";



const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { store, useAppDispatch, useAppSelector };