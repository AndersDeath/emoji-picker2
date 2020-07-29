import { ISetActiveTabInitialState, setActiveTabInitialState, SET_ACTIVE_TAB, ISetActiveTabType } from '../interfaces/index';

export const setActiveTabReducer = (
  state: ISetActiveTabInitialState = setActiveTabInitialState,
  action: ISetActiveTabType
): ISetActiveTabInitialState => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { activeTab: action.activeTab };
    default:
      return state;
  }
};
