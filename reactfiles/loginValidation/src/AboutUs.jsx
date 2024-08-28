
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const currentUser = users.find((user) => user.isLoggedIn === true );

            if (currentUser?.isAdmin) {
                navigate("/");
                setIsAdmin(true);
                
            } else {
                setIsAdmin(false);
            }

    }, []);

    if (!isAdmin) {
        return <h1>User About Us</h1>;
    } else {
        return navigate("/");
    }
   
};

export default AboutUs;