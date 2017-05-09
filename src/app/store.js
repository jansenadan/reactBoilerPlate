import { createStore } from 'redux';

// App
import rootReducer from './reducers/rootReducer';

export default createStore(
  rootReducer
);