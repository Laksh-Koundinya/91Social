import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, FETCH_SPACEX_DATA_REQUEST, FETCH_SPACEX_DATA_SUCCESS, FETCH_SPACEX_DATA_FAILURE}  from "./actionTypes"
import axios from "axios"


let arr = [
  {email:"admin@gmail.com",
password:"admin",
role:"admin"},

{email:"user@gmail.com",
password:"user",
role:"user"}
]

export const loginReq = () =>({
  type:LOGIN_REQUEST
})
export const loginSuccess = (payload)=>({
  type :LOGIN_SUCCESS,
  payload
})
export const loginFailure = () =>({
type :LOGIN_FAILURE
})

export const loginUserData =({email,password,role})=>dispatch=>{
  console.log("Login Dispatch")
  //console.log(email,password)
  let auth = false
dispatch(loginReq()) //login request
for(let i = 0; i<arr.length; i++){
if(arr[i].email === email && arr[i].password === password){
  auth = true;
  break
}
}
console.log(auth)
if(auth){
  dispatch(loginSuccess(role))
}
else{
  dispatch(loginFailure())
}
}

export const fetchLaunchData = () =>({
    type:FETCH_SPACEX_DATA_REQUEST
  })
  export const fetchLaunchDataSuccess = (payload)=>({
    type :FETCH_SPACEX_DATA_SUCCESS,
    payload
  })
  export const fetchLaunchDataFailure = () =>({
  type :FETCH_SPACEX_DATA_FAILURE
  })


  export const fetchSpaceXData =({category})=>dispatch=>{
      let requestURL 
      if(category === "all"){
          requestURL = "https://api.spacexdata.com/v3/capsules"
      }else{
          requestURL = `https://api.spacexdata.com/v3/launches/${category}`
      }
  
  dispatch(fetchLaunchData()) 
  axios({
    method:"GET",
    url:requestURL
  })
  .then(res=>
    dispatch(fetchLaunchDataSuccess(res.data)))
  .catch(err=>dispatch(fetchLaunchDataFailure()))
  }