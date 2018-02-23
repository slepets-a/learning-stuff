import {combineReducers} from 'redux';
import dataTableReducer from '../../modules/DataTable/store/reducer';

const rootReducer = combineReducers({
  dataTable: dataTableReducer,
});

export default rootReducer;
