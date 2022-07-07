import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/redux-store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
