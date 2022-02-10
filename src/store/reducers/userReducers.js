import {GET_USERS} from '../types'

const initialState = {
    users:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){
        
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        default: 
            return state        
    }

}