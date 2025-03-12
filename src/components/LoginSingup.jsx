import React, { useEffect, useState } from "react";
import Header from "./Header";
import { bg_img } from "../utils/constant";
import { validateForm } from "../utils/validateform";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { signInUser, signUpUser } from "../redux/actions/authAction";

{
  /* <div style={{backgroundImage : ` linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${bg_img})`}} className='h-screen flex justify-center items-center'> */
}

const LoginSingup = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const {user} =  useSelector(state =>state.auth)
  

  const [isSignIn, setSignup] = useState(true);

  const [errors, setErrors] = useState({});


  useEffect(()=>{
    if(user)
      navigate('/browse')
  },[user])


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => { 
    e.preventDefault()
    const validationErr= validateForm(formData)
   
    
    if(isSignIn) delete validationErr["name"]
    setErrors(validationErr);

    if (Object.keys(errors).length == 0) {
      console.log("form add datat in = ", formData);
     
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } else {
      alert("All fields required with valid input");
    }

    if(isSignIn){
      dispatch(signInUser(formData))
    
    }
    else{
        dispatch(signUpUser(formData))
    }


  };

  return (
    <div className="relative">
      <img src={bg_img} className=" object-cover object-center" />

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>

      <div className="absolute flex justify-center w-full top-0 mt-28">
        <div className="w-[70%] lg:w-[30%] md:w-[40%] text-white  bg-black opacity-90 px-8 py-4">
          <h1 className="font-bold text-3xl m-3 ">
            {isSignIn ? "Sign In " : "Sign Up"}
          </h1>
          <form action="">
            {!isSignIn && (
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleInputChange}
                className="p-3 m-3 bg-gray-900 w-full border border-white"
              />
            )}
            {errors.name && !isSignIn && (
              <span className="text-red-400 mx-2 p-1">{errors.name}</span>
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email"
              className="p-3 m-3 bg-gray-900 w-full border  border-white"
            />
            {errors.email && (
              <span className="text-red-400 mx-2 p-1">{errors.email}</span>
            )}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="password"
              className="p-3 m-3 bg-gray-900 w-full border border-white"
            />
             {errors.password && (
              <span className="text-red-400 mx-2 p-1">{errors.password}</span>
            )}
            <button className="bg-red-600 font-bold p-2 m-3 w-full px" onClick={handleSubmitForm}>
              Sign {isSignIn ? "In" : "Up"}{" "}
            </button>
            <p className="my-2 p-3" onClick={() => setSignup(!isSignIn)}>
              {isSignIn
                ? "New to Netflix?Sign up now."
                : "Already registered?Sign in."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
