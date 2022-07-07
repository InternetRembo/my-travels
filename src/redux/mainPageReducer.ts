import { useDispatch } from "react-redux";
import { getPlacesData } from "../api";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./redux-store";
import { AnyAction, Dispatch } from "redux";

export interface stateType {
  searchQuery: string;
  placesData: any[];
} // обовязковий інтерфейс для інішиал стейту

enum typesOfAction {
  GET_SEARCH_QUERY = "GET_SEARCH_QUERY",
  GET_PLACES = "GET_PLACES",
} // Енум замість оголошення типів зверху в константах

let initialState: stateType = {
  searchQuery: "",
  placesData: [],
};

interface getSearchQueryAction {
  type: typesOfAction.GET_SEARCH_QUERY;
  payload: string;
} // інтерфейс що описує екшен

interface getPlacesAction {
  type: typesOfAction.GET_PLACES;
  payload: any[];
}

type actionType = getSearchQueryAction | getPlacesAction; // сюди дописуємо всі інші інтерфейси з типами для екшенів

const mainPageReducer = (
  state = initialState,
  action: actionType
): stateType => {
  switch (action.type) {
    case typesOfAction.GET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };

    case typesOfAction.GET_PLACES:
      return { ...state, placesData: action.payload };
    default:
      return state;
  }
};

export const GetSearchQueryAC = (value: string) => {
  return {
    type: typesOfAction.GET_SEARCH_QUERY,
    value,
  };
};
export const GetPlacesAC = (data: any[]) => {
  return {
    type: typesOfAction.GET_PLACES,
    payload: data,
  };
};

export const GetPlacesTC =
  () => async (dispatch: Dispatch<getPlacesAction>) => {
    const placesData = await getPlacesData();
    dispatch(GetPlacesAC(placesData));
  };

export default mainPageReducer;
