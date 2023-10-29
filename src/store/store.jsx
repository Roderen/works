import {combineReducers, createStore} from "redux";
import {formDataReducer} from './formDataReducer';

const rootReducer = combineReducers({
  formData: formDataReducer,
})

export const store = createStore(rootReducer);