import {IScrollToEmojiGroupAction, SCROLL_TO_EMOJI_GROUP } from '../interfaces/index';

export const scrollToEmojiGroupAction = (scrollTo): IScrollToEmojiGroupAction => {
    return {
        type: SCROLL_TO_EMOJI_GROUP,
        scrollTo
    };
};
