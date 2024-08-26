import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find the currently logged-in user
        const userIndex = users.findIndex((user) => user.isLoggedIn === true);

        if (userIndex !== -1) {
            // Set isLoggedIn to false for the found user
            users[userIndex].isLoggedIn = false;

            // Save the updated list back to local storage
            localStorage.setItem('users', JSON.stringify(users));
           
            // Redirect to login page
            navigate('/login');
        }
    }

    const handleClickContact = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = users.find((user) => user.isLoggedIn === true);

        if (currentUser?.isAdmin) {
            navigate("/admincontactus")
        } else {
            navigate("/contactus")
        }
    }

    const handleClickAbout = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = users.find((user) => user.isLoggedIn === true);

        if (currentUser?.isAdmin) {
            navigate("/adminaboutus")
        } else {
            navigate("/aboutus")
        }
    }

    return (
        <>
            <h1 className="welcome">Welcome to the Home Page</h1>
            <div className="display">
                <div>
                        <button className="btn4" onClick={handleClickAbout}>About us</button>
                </div>
                <div>
                        <button className="btn4" onClick={handleClickContact}>Contact us</button>
                </div>
                <div>
                    <button className="btn4" onClick={handleLogout}>Log out</button>
                </div>
            </div>
        </>
    )
}

export default HomePage;
