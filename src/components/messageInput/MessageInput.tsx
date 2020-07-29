import * as React from "react";
import './MessageInput.scss';
import { EmojiCallButton } from '@components/emojiCallButton';

/**
 * Message Input component
 */
export class MessageInput extends React.Component<{}, { value: string }> {

    /**
     * Class Constructor
     * @param props component props
     */
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
        this.getCharHandler = this.getCharHandler.bind(this);
    }

    /**
     * Get emoji from picker
     * @param char emoji
     */
    getCharHandler(char: string) {
        this.setState((state) => {
            return {
                value: state.value + char
            }
        })
    }

    render() {
        return <div className="message-input-area">
            <input type="text" readOnly value={this.state.value} className="message-input" placeholder={'Emojies will displayed here... Just click!'} />
            <EmojiCallButton getChar={this.getCharHandler} />
        </div>
    };
}