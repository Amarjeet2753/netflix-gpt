

import {
    SIGNIN_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNIN_ERROR,
    SIGNOUT_ERROR,
    SIGNUP_ERROR,
    SIGNOUT_SUCCESS,
    SIGNOUT_LOADING,
    SIGNIN_LOADING,
    SIGNUP_LOADING
  } from "../constants/authConst";
  

const initialState ={
    loading : false,
    errors  : null,
    user :null,
    
}


export const authReducer = (state =initialState ,action)=>{
      
    switch(action.type){ 
        
        case SIGNOUT_LOADING:
        case SIGNIN_LOADING :
        case SIGNUP_LOADING : return {
            ...state,
            loading :true
        }
        
        case SIGNIN_SUCCESS :
        case SIGNUP_SUCCESS : return {
             ...state,
             loading : false,
             user : action.payload
        }

        case SIGNOUT_SUCCESS:
            return { ...state, user: null, loading: false, error: null };

         case SIGNOUT_ERROR :
         case SIGNIN_ERROR :
        case SIGNUP_ERROR : return {
            ...state,
            user :null,
            loading : false,
            errors :action.payload
        }
        
        default : return state;
    }
}