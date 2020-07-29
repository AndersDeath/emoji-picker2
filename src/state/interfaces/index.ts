import { Action } from 'redux';


//// SCROLL TO EMOJI GROUP

export const SCROLL_TO_EMOJI_GROUP = 'scrollToEmojiGroup';

export interface IScrollToEmojiGroupInitialState {
    scrollTo: string
}

export const scrollToEmojiGroupInitialState: IScrollToEmojiGroupInitialState = {
    scrollTo: ''
}

export interface IScrollToEmojiGroupAction extends Action {
    type: string;
    scrollTo: string;
}

export interface IScrollToEmojiGroupState {
    scrollToEmojiGroup: IScrollToEmojiGroupInitialState;
}


export interface IScrollToEmojiAction extends Action {
    type: string;
    scrollTo: string;
}
export type IScrollToEmojiType = IScrollToEmojiAction;


//// SET ACTIVE TAB

export const SET_ACTIVE_TAB = 'setActiveTab';

export interface ISetActiveTabInitialState {
    activeTab: string
}

export const setActiveTabInitialState: ISetActiveTabInitialState = {
    activeTab: 'timer'
}

export interface ISetActiveTabAction extends Action {
    type: string;
    activeTab: string;
}

export interface ISetActiveTabState {
    setActiveTab: ISetActiveTabInitialState;
}



export interface ISetActiveTabAction extends Action {
    type: string;
    activeTab: string;
}
export type ISetActiveTabType = ISetActiveTabAction;
