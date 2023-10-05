import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Components/Firebae.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null);
    const [loding,setloding] = useState(true);
    const provider = new GoogleAuthProvider();


    const CreateUser=(email,password)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const UserLogin=(email,password)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const GoogleLogin=()=>{
        return signInWithPopup(auth,provider);

    }

    const Logout=()=>{
        setloding(true)
        return signOut(auth);
    }

    
    useEffect(()=>{
       const UnSubcribe = onAuthStateChanged(auth,currentUser=>{
            setuser(currentUser);
            setloding(false)
            console.log("current user",currentUser)
        });
        return ()=>{
            UnSubcribe();
        }
    },[]);

    


    const authinfo = { user,CreateUser,UserLogin,GoogleLogin,Logout,loding}
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider
