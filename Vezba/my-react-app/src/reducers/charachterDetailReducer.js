import { FETCH_CHARACHTER_DETAIL_FAIL, FETCH_CHARACHTER_DETAIL_REQUEST, FETCH_CHARACHTER_DETAIL_SUCCESS } from "../actions/charachterDetailActions"

const initialState = {
    charachter: [],
    error: "",
    loadingCharachter: false
}

const charachterDetailReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACHTER_DETAIL_REQUEST: 
        return{...state, loadingCharachter: true}
        case FETCH_CHARACHTER_DETAIL_SUCCESS:
            return{...state, charachter: action.payload, loadingCharachter: false, error: ""}
        case FETCH_CHARACHTER_DETAIL_FAIL:
            return{
                ...state,
                charachter: [],
                error: error.payload,
                loadingCharachter: false
            }
            default:
                return state
    }
}

export default charachterDetailReducer