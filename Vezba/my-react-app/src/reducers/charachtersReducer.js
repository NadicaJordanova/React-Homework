import { FETCH_CHARACHTERS_FAIL, FETCH_CHARACHTERS_REQUEST, FETCH_CHARACHTERS_SUCCESS } from "../actions/charachterActions"

const initialState = {
    charachters: [],
    error: "",
    loadingCharachters: false
}

const charachtersReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACHTERS_REQUEST: 
        return{...state, loadingCharachters: true}
        case FETCH_CHARACHTERS_SUCCESS:
            return{...state, charachters: action.payload, loadingCharachters: false, error: ""}
        case FETCH_CHARACHTERS_FAIL:
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

export default charachtersReducer