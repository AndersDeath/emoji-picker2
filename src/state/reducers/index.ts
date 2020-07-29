import { combineReducers } from 'redux';
import { scrollToEmojiGroupReducer } from './scrollToEmojiGroup';
import { setActiveTabReducer } from './setActiveTab';
const allReducers = combineReducers({
    scrollToEmojiGroup: scrollToEmojiGroupReducer,
    setActiveTab: setActiveTabReducer
});

export {
    scrollToEmojiGroupReducer,
    setActiveTabReducer,
    allReducers
}