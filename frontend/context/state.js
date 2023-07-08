import { createContext, useContext, useEffect, useState } from "react"; 
import posts from "../.json/posts.json";
import { GoogleAuthProvider,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "api/firebase.config";



const SearchContext = createContext();

export const JsonContext = ({ children }) => {
  const [Guser,setUser]=useState({});
  
  const googleSignIn=()=>{
    const provider= new GoogleAuthProvider();
    signInWithRedirect(auth,provider);
  }
  const logOut=()=>{
    signOut(auth);
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    })
    return ()=>{
      unsubscribe();
    }


  },[]);

  
  return (
    <SearchContext.Provider value={{googleSignIn,logOut,Guser,posts}}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
