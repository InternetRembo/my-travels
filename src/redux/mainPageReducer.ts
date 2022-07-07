import { getPlacesData } from "../api";
import { Dispatch } from "redux";

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

type actionTypes = getSearchQueryAction | getPlacesAction; // сюди дописуємо всі інші інтерфейси з типами для екшенів

const mainPageReducer = (
  state = initialState,
  action: actionTypes
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

export const GetSearchQueryAC = (value: string): getSearchQueryAction => {
  //типи описуй, дібіл
  return {
    type: typesOfAction.GET_SEARCH_QUERY,
    payload: value,
  };
};
export const GetPlacesAC = (data: any[]): getPlacesAction => {
  return {
    type: typesOfAction.GET_PLACES,
    payload: data,
  };
};

export const GetPlacesTC = () => async (dispatch: Dispatch<actionTypes>) => {
  const placesData = await getPlacesData();
  dispatch(GetPlacesAC(placesData));
};

export default mainPageReducer;
