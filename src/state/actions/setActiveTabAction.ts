import { ISetActiveTabAction, SET_ACTIVE_TAB } from '../interfaces/index';

export const setActiveTabAction = (activeTab): ISetActiveTabAction => {
    return {
        type: SET_ACTIVE_TAB,
        activeTab
    };
};
