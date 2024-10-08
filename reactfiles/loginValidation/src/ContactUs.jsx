
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const currentUser = users.find((user) => user.isLoggedIn === true);

            if (currentUser?.isAdmin) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }

    }, []);

    if (!isAdmin) {
        return <h1>User Contact Us</h1>;
    } else {
        return navigate("/");
    }
};

export default ContactUs;