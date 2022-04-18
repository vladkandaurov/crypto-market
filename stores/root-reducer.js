import { combineReducers } from 'redux';

import tabReducer from './tab/tab-reducer';
import marketReducer from './market/market-reducer';

export default combineReducers({
  tabReducer,
  marketReducer,
});
