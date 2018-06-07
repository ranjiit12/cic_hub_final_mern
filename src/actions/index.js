import Axios from "axios";

export const GET_EMPLOYEES = "GET_USERS";
export const ADD_EMPLOYEES = "ADD_EMPLOYEES";
export const ADD_HOLYDAY   = "ADD_HOLYDAY";
export const ADD_Leave   = "ADD_Leave";
export const LOGIN   = "LOGIN";


const baseURL = "http://localhost:8000/api";

export const fetchEmployees = () => {
    
 let request = Axios.get(`${baseURL}/employees`).then( response => {
       return response.data;
 });

  return {
      type: GET_EMPLOYEES,
      payload:request
  }
}


export const addEmployees = (employee) => {
    console.log("Employee", employee);
    let request = Axios.post(`${baseURL}/employees/register`, employee);
    return {
        type: GET_EMPLOYEES,
        payload:request
    }
   }

export const addHolyDay = (holyday) => {
    console.log("holyda", holyday);
    let request = Axios.post(`${baseURL}/admin/timetable`, holyday);
    return {
        type: ADD_HOLYDAY,
        payload:request
    }
   }

//    export const addLeave = () => {

//     let request = Axios.post(`${baseURL}/admin/timetables`);
//     return {
//         type: ADD_Leave,
//         payload:request
//     }
//    }

//   user auth



export const loginUser = ({email, password}) => {

    let request = Axios.post(`${baseURL}/users/login`, {email, password});
    return {
        type: LOGIN,
        payload:request
    }
   }