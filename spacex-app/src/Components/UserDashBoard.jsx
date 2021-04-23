import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpaceXData } from '../Redux/actionCreator';
import RocketCard from './RocketCard';

const UserDashBoard=()=> {
    const [category,setCategory] = useState("");
   const details = useSelector(state=> state.details.launchesData)
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(fetchSpaceXData({category}))
    },[category])
    
    return (
        <div >
            <h1>Welcome to Rocket Launch Data DashBoard - SpaceX</h1>
            <div>
                <div>To select Rocket  according to the Launches</div>
            </div>
            <select onChange = {(e)=>setCategory(e.target.value)}>
                <option>-----</option>
              
                <option value = "past">Past</option>
                <option value = "upcoming">Upcoming</option>
              
            </select>
            {
                details?.map((item)=> <RocketCard key = {item.flight_number} item = {item}/>)
            }
        </div>
    )
}

export default UserDashBoard
