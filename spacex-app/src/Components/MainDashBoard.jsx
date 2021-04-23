import React from 'react';
import { useSelector } from 'react-redux';
import AdminDashBoard from './AdminDashBoard';
import UserDashBoard from './UserDashBoard';

const MainDashBoard = () => {
     const role = useSelector(state => state.details.userType)
     console.log(role,"USER")
     
  
    return (
        <div>
            {
                role === "admin" ?
                <AdminDashBoard />
                :
                <UserDashBoard />
            }
        </div>
    );
};

export default MainDashBoard;