
import { FETCH_SPACEX_DATA_FAILURE, FETCH_SPACEX_DATA_REQUEST, FETCH_SPACEX_DATA_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import { loadData, saveData } from "./localStorage";

export const initState = {

  isAuth:loadData("auth") || false,
  launchesData:loadData("launchesdata") || [],
  userType:loadData("userrole") || "",
  isError:false,
  isLoading:false
};
const reducer = (state = initState, { type, payload }) => {
  //console.log(type, payload);
  switch (type) {
    case LOGIN_REQUEST:
        
           
      return {
        ...state,
        isLoading:true
       
      };


    case LOGIN_SUCCESS:
      console.log("SUCEESS")
        saveData('auth', true)
        console.log(payload,"PAU")
        saveData('userrole', payload)
      return {
        ...state,
                isAuth:true,
                isLoading:false
      };




      case LOGIN_FAILURE:
       return{
          ...state,
         isError:true,
         isLoading:false
        }

        case FETCH_SPACEX_DATA_REQUEST:
            return {
              ...state,
              isLoading:true
             
            };
            case FETCH_SPACEX_DATA_SUCCESS:
                saveData('launchesdata', payload)
                return {
                  ...state,
                 launchesData:payload
                 
                };

        case FETCH_SPACEX_DATA_FAILURE:
      return {
        ...state,
       
       
      };

          


    default:
      return state;
  }
};
export default reducer;


