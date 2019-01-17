import * as actionTypes from '../store/actionTypes';
import { authStart, authSuccess, authFail } from './actions';


const initialState= {
    token: null,
    error: null,
    loading:false,
    user: [],
    phoneNumber: null
 
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: 
        return{...state, loading: true};

        case actionTypes.AUTH_SUCCESS:
        return {...state, loading: false};
        
        case actionTypes.AUTH_FAIL: 
        return {...state, error: action.payload.data , loading: false};
        
        default: 
            return state;
    }
};

export default reducer;