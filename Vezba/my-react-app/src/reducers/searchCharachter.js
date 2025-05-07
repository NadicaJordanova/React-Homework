import { SEARCH_CHARACHTER_DETAIL_FAIL, SEARCH_CHARACHTER_DETAIL_REQUEST, SEARCH_CHARACHTER_DETAIL_SUCCESS } from "../actions/searchCharachter"

const initialState = {
    charachters: [],
    error: "",
    loadingCharachters: false
}

const charachterSearchReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_CHARACHTER_DETAIL_REQUEST: 
        return{...state, loadingCharachters: true}
        case SEARCH_CHARACHTER_DETAIL_SUCCESS:
            return{...state, charachters: action.payload, loadingCharachters: false, error: ""}
        case SEARCH_CHARACHTER_DETAIL_FAIL:
            return{
                ...state,
                charachters: [],
                error: error.payload,
                loadingCharachters: false
            }
            default:
                return state
    }
}

export default charachterSearchReducer