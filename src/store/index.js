import {createStore} from 'redux';
import rootReducer from "./rootReducer";

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  console.log(`Store: `, store.getState());
});

export default store;
