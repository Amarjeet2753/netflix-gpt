import {
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT_ERROR,
  SIGNUP_ERROR,
  SIGNOUT_SUCCESS,
  SIGNOUT_LOADING,
  SIGNIN_LOADING,
  SIGNUP_LOADING,
} from "../constants/authConst";

import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile ,signInWithEmailAndPassword, signOut} from "firebase/auth";

// for signup

export const signUpUser = ({ name, email, password }) => {
  return (dispatch) => {
    dispatch(signupLoading());
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: name }).then(() => {
          // const user =userCredential.user
          dispatch(signupSuccess(user));
        });
      
      })
      .catch((error) => {
        // dispatch(signupError(error));
           
           const errorMessage = getFirebaseErrorMessage(error.code);
           dispatch(signupError(error.code));
      });
  };
};


// login user ...
export const signInUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch(signinLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      
        const user = userCredential.user;
         dispatch(signinSuccess(user))
      })
      .catch((error) => {
        dispatch(signinError(error.code))
      });
  };
};


// logout user ...

export const signOutUser =()=>{
     return (dispatch) =>{
        dispatch(signoutLoading())
        signOut(auth).then(() => {
            dispatch(signoutSuccess())
          }).catch((error) => {
            // An error happened.
            dispatch(signoutError(error.code))
          });
     }
}

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupError = (error) => ({
  type: SIGNUP_ERROR,
  payload: error,
});

export const signupLoading = () => ({
  type: SIGNUP_LOADING,
});

export const signinSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const signinError = (error) => ({
  type: SIGNIN_ERROR,
  payload: error,
});

export const signinLoading = () => ({
  type: SIGNIN_LOADING,
});

export const signoutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
});

export const signoutError = (error) => ({
  type: SIGNOUT_ERROR,
  payload: error,
});

export const signoutLoading = () => ({
  type: SIGNOUT_LOADING,
});



const getFirebaseErrorMessage = (errorCode) => {
    const errorMessages = {
      "auth/email-already-in-use": "This email is already in use. Please log in or use another email.",
      "auth/invalid-email": "Please enter a valid email address.",
      "auth/weak-password": "Password should be at least 6 characters.",
      "auth/missing-password": "Please enter a password.",
      "auth/network-request-failed": "Network error. Please check your connection and try again.",
      "auth/operation-not-allowed": "Signup with email and password is disabled.",
    };
  
    return errorMessages[errorCode] || "An unexpected error occurred. Please try again.";
  };