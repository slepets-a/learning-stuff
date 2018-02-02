import {combineReducers} from 'redux';
import membershipsReducer from '../../modules/DataTable/store/reducer';

const rootReducer = combineReducers({
  memberships: membershipsReducer,
});

export default rootReducer;
