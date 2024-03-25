import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

import PropTypes from 'prop-types';
// import { axiosSecure } from "../Hooks/useAxiosSecure";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const Authproviders = ({children}) => {
    const [user ,setuser] = useState(null)
    const [loading , setloading] = useState(true)
    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth , currentUser => {
            console.log('user in auth state changes' , currentUser)
            setuser(currentUser)
            // //jwt setup start
            // if(currentUser){
            //     //get token
            //     const userinfo = {email : currentUser.email}
            //     axiosSecure.post('/jwt' , userinfo )
            //     .then(res => {
            //         if(res.data.token){
            //             localStorage.setItem('token' , res.data.token)
            //         }
            //     })

            // }
            // else {
            //     ///no user
            //     localStorage.removeItem('token')
            // }
            //jwt setup ends
            setloading(false)
           
              


    })



        return () => {
            Unsubscribe()
        }
     },[])



    // create user
    const createUser = (email , password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    // login user
    const loginUser = (email , password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    // logout user
    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    // Login USer with Google
    const googleprovider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        logout,
        loading,
        GoogleLogin

    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};



Authproviders.propTypes = {
    children : PropTypes.node
};

export default Authproviders;