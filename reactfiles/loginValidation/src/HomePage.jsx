import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const getCurrentUser = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        return users.find((user) => user.isLoggedIn === true);
    };

    const handleLogout = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUserIndex = users.findIndex((user) => user.isLoggedIn === true);

        if (currentUserIndex !== -1) {
            // Set isLoggedIn to false for the found user
            users[currentUserIndex].isLoggedIn = false;

            // Save the updated list back to local storage
            localStorage.setItem('users', JSON.stringify(users));

            // Redirect to login page
            navigate('/login');
        }
    };

    const handleClickContact = () => {
        const currentUser = getCurrentUser();

        if (currentUser?.isAdmin) {
            navigate("/admincontactus");
        } else {
            navigate("/contactus");
        }
    };

    const handleClickAbout = () => {
        const currentUser = getCurrentUser();

        if (currentUser?.isAdmin) {
            navigate("/adminaboutus");
        } else {
            navigate("/aboutus");
        }
    };

    const handleClickProfile = () => {
        navigate("/profile");
    };

    useEffect(() => {
        const fetchProfile = async () => {
            const currentUser = getCurrentUser();

            try {
                const response = await fetch('https://api-dev.smoothire.com/api/v1/me', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentUser.token}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProfile(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <>
            <div className="display round">
                <img className="round" src={profile?.me?.profilePicUrl} alt="Profile" height={250} width={250} />
            </div>
            <h1 className="welcome">Welcome! {profile?.me?.name?.full}...</h1>
            <div className="display">
                <div>
                    <button className="btn4" onClick={handleClickAbout}>About us</button>
                </div>
                <div>
                    <button className="btn4" onClick={handleClickContact}>Contact us</button>
                </div>
                <div>
                    <button className="btn4" onClick={handleClickProfile}>Profile</button>
                </div>
                <div>
                    <button className="btn4" onClick={handleLogout}>Log out</button>
                </div>
            </div>
        </>
    );
};

export default HomePage;
