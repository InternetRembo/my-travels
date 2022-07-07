import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/redux-store";

export const useAppDispatch: () => AppDispatch = useDispatch;
