import { HAS_LOADED } from "./action"


const initialState = {
    has_loaded: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case HAS_LOADED:
            return {
                ...state,
                has_loaded: true
            }
        default: 
            return state;
    }
}