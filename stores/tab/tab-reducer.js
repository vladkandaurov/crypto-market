import * as tabActionTypes from './tab-actions';

const initialState = {
  isTradeModalVisible: false,
};

export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActionTypes.SET_TRADE_MODAL_VISIBILITY:
      return {
        ...state,
        isTradeModalVisible: action.payload.isVisible,
      };
    default:
      return state;
  }
};