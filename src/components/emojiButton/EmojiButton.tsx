import * as React from "react";
import './emojiButton.scss';

/**
 * Emoji Button Props
 */
export interface IEmojiButtonProps {
    char: any,
    click: (e) => void
}

/**
 *  Emoji button component
 * @param props component props
 */
export const EmojiButton = (props: IEmojiButtonProps) => {
    return <div className="emoji-button" onClick={() => {
        props.click(props.char)
    }}>{props.char.char}</div>
}
