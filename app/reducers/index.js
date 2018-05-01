import { combineReducers } from 'redux';

import navReducer from './nav';
import contactsReducer from './contacts';

const appReducer = combineReducers({
  nav: navReducer,
  contactsReducer: contactsReducer
});

export default appReducer;