import { ADD_ADDRESS, ADD_ADDRESS_ERROR } from "../../types";

const initialState = {
    addresses: [],
    loading: true,
    error: null
}

export default function(state = initialState, action){
    switch (action.type) {
        case ADD_ADDRESS:
            return {
                ...state,
                addresses: action.payload,
                loading: false
            }
        case ADD_ADDRESS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    
        default:
            return state;
    }
}