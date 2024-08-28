import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminContactUs = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const currentUser = users.find((user) => user.isLoggedIn === true);

            if (currentUser?.isAdmin) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
                navigate("/");
            }

    }, [navigate]);

    if (isAdmin) {
        return <h1>Admin Contact Us</h1>;
    } else {
        return null
    }
};

export default AdminContactUs;