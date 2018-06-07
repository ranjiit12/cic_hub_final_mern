
import {ADD_EMPLOYEES, GET_EMPLOYEES} from "../actions/index";

export default function(state={},action){
    switch(action.type){
      case GET_EMPLOYEES:
       
           return {...state, employees:action.payload.employees}
           break;
      case ADD_EMPLOYEES:
           return {...state, newEmployees:action.payload}
      default:
         return state;     
     
    }
}    