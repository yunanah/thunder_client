import {combineReducers} from 'redux';

import {userReducer} from './userReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export {rootReducer};
