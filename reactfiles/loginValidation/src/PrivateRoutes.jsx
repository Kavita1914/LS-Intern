import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


const PrivateRoutes = (props) => {

    const [ state, setState ] = useState(true)
    const { Component } = props;

    useEffect(() => {
        let manageState = true
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.length > 0) {
          const currentUser = users.find((user) => user.isLoggedIn === true);
          // console.log("currentUser >>", currentUser);
          if (!currentUser?.isLoggedIn) {
            manageState = false
          }
        }
        setState(manageState)
        },[])
        // console.log("state >>",state);        
        return state? <Component {...props} /> : <Navigate to="/login" />
}

export default PrivateRoutes;

// const sortedData = allData.sort((a,b) => a.tableHeading - b.tableHeading)
        // console.log("sortedData", sortedData);        
        // setAllData(sortedData)