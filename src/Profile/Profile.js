import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import UserProfile from './UserProfile/UserProfile';
import UserPosts from './UserPosts/UserPosts';


function Profile() {
    return(
        <div>
            <UserProfile/>
            <UserPosts/>
        </div>
    );
}



export default Profile;