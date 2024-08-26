import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = (props) => {

    const [ state, setState ] = useState(false)
    const { Component } = props

    useEffect(() => {
        let manageState = false
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.length > 0) {
          const currentUser = users.find((user) => user.isLoggedIn === true);
          console.log("currentUser >>", currentUser);
          if (currentUser?.isLoggedIn) {
            manageState = true
          }
          setState(manageState)
        }
        },[])
        console.log("state >>",state);        
        return state? <Navigate to="/" /> : <Component {...props} /> 
}

export default PublicRoutes;