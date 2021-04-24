import React, {useState, useEffect, useContext} from 'react'
import {auth} from '../firebase'; //firebase will take the current user obj

const AuthContext = React.createContext()

// a function allow using that context again
export function useAuth() {
  return useContext(AuthContext)
}


export default function AuthProvider({children}) {

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true); //default to loading when called

  function signup(email, password) {
    //returns a promise when it's ready
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //firebase has a way to let you know if the user has been set
  useEffect(() => {
    console.log("auth use effect")
    //vaerification to see if there's a user
    //unsubscribe from listener too when the auth state changes
    const unsubscribe = auth.onAuthStateChanged(user => {
       //set the user here
       console.log("UNSUBCSCRIUBING")
      setCurrentUser(user) //returns a method and when called returns an unsubscribe
      setLoading(false)
    })

    return unsubscribe
  }, [])


  //will contain all the info we want to send for authentication
  const value={
    currentUser,
    signup
  }

  return <AuthContext.Provider value={value}>
    {!loading && children}
    </AuthContext.Provider>
  
}
