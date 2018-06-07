import { combineReducers } from 'redux';
import employeesReducer from "../reducers/employees_reducer";

const rootReducer = combineReducers({
  employees:employeesReducer
});

export default rootReducer;