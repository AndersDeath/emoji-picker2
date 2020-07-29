import {
  SCROLL_TO_EMOJI_GROUP,
  IScrollToEmojiGroupInitialState,
  scrollToEmojiGroupInitialState,
  IScrollToEmojiType
} from "../interfaces/index";

export const scrollToEmojiGroupReducer = (
  state: IScrollToEmojiGroupInitialState = scrollToEmojiGroupInitialState,
  action: IScrollToEmojiType
): IScrollToEmojiGroupInitialState => {
  switch (action.type) {
    case SCROLL_TO_EMOJI_GROUP:
      return { scrollTo: action.scrollTo };
    default:
      return state;
  }
};
