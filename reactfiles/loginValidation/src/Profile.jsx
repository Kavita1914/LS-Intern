import React, { useEffect, useState } from 'react';
import ModalComponent from './ModalComponent';

const Profile = () => {

    const [profile, setProfile] = useState('');
    const [updatedProfile, setUpdatedProfile] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const currentUser = users.find((user) => user.isLoggedIn === true);
            
            try {
                const response = await fetch('https://api-dev.smoothire.com/api/v1/me', {
                    headers: {'Content-Type': 'application/json',
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
    }, [updatedProfile]);

   if (loading) {
        return <h1 className='httpError'>Loading...</h1>;
    }

    if (error) {
        return <h1 className='httpError'>Error: {error}</h1>;
    }

    return (
        <>
        <div className='profileDiv'>
            <h1>Profile Details:</h1>
            {profile ? (
                <div>
                    <div className="display">
                        <img className='round' src={profile.me.profilePicUrl} alt="image loading" height={250} width={250}/>
                    </div>
                    <div className="details">
                        <h3>Name : {profile.me.name.first} {profile.me.name.last}</h3>
                        <h3>ID : {profile.me.id}</h3>
                        <h3>Email : {profile.me.email}</h3>
                        <h3>Role : {profile.me.role}</h3>
                        <h3>phone : {profile.me.phone}</h3>
                        <ModalComponent first={profile.me.name.first} last={profile.me.name.last} phone={profile.me.phone} setUpdatedProfile={setUpdatedProfile}/>
                    </div>
                </div>
            ) : ( <p> No profile data available </p>) }
        </div>
        </>
    );
}

export default Profile;