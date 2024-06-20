// context api help to make a glabal state and the data can be used by varoius child components without using props

import React, { Children, createContext, useCallback, useContext, useEffect, useState } from 'react'; // usecontext is the hook 
import { postRequest } from '../utils/services';

export const AuthContext = createContext();


// cretecontext will return an object thar hold authentication state 

//now a provider component is created that provide context or data to children


export const AuthContextProvider = ({ children }) => {
    const [user, setuser] = useState(
        null
    );

    const [registerError, setregisterError] = useState(null);
    const [isregisterLoading, setisregisterLoading] = useState(false);

    const [registerInfo, setregisterInfo] = useState({
        name: "",
        email: "",
        password: ""
    })
    const[loginInfo , setloginInfo] = useState({
        email:"",
        password:""
    })
    const [loginError, setloginError] = useState(null);
    const [isloginLoading, setisloginLoading] = useState(false);

    
    //occur to run particular code when componend renders i.e when we refresh th epage the user state set to null so to prevent that we use useeffect hook to save the userta on re rendering da
    useEffect(()=>{
        const user = localStorage.getItem("user");
        setuser(JSON.parse(user));
    },[])

    //usecallback hook memorize finction so  that when register info and update registerinfo passed to children so this function is not created again for every child it is passed
    const updateRegisterInfo = useCallback((info) => {
        setregisterInfo(info);
    }, [])
    console.log(registerInfo);
    const updateLoginInfo = useCallback((info) => {
        setloginInfo(info);
    }, [])

    const RegisterUser = useCallback(async (e) => {
        e.preventDefault();// prevent loading of page;
        setisregisterLoading(true);
        setregisterError(null);
        const response = await postRequest(`${process.env.REACT_APP_BASE_URL}/users/register`, JSON.stringify(registerInfo));
        setisregisterLoading(false);
        if (response.error) {
            return setregisterError(response);
        }
        localStorage.setItem("user", JSON.stringify(response));
        setuser(response);

    }, [registerInfo])
    const LoginUser = useCallback(async(e)=>{
         e.preventDefault();
         setisloginLoading(true);
         setloginError(null);
         const response = await postRequest(`${process.env.REACT_APP_BASE_URL}/users/login`, JSON.stringify(registerInfo));
        setisloginLoading(false);
         if(response.error) return setloginError(response);
         localStorage.setItem("user", JSON.stringify(response));
        setuser(response);






    } ,[loginInfo])

    const logOutUser = useCallback(()=>{
        localStorage.removeItem("user");
        setuser(null)

    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            registerInfo, updateRegisterInfo, RegisterUser, registerError, isregisterLoading,logOutUser,
            LoginUser,updateLoginInfo,loginError, isloginLoading,

        }}>

            {children}
        </AuthContext.Provider>
    )
}