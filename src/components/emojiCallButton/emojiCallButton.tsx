import * as React from "react";
import './emojiCallButton.scss';
import { SmileIcon } from '@icons/SmileIcon';
import { Picker } from '@components/picker';

/**
 * Emojies call button
 */
export class EmojiCallButton extends React.Component<{ getChar: (char: string) => void }, { isOpen: boolean }> {
    /**
     * Class constructor
     * @param props component props
     */
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
        this.togglePopoverHandler = this.togglePopoverHandler.bind(this);
        this.gerCharHandler = this.gerCharHandler.bind(this);
    }

    /**
     * Toggle popover handler
     */
    togglePopoverHandler() {
        this.setState((state: any) => {
            return {
                isOpen: !state.isOpen
            }
        })
    }

    /**
     * Get char handler
     */
    gerCharHandler(char: string) {
        this.props.getChar(char);
    }

    render() {
        return <div className="emoji-call-button">
            <button className="call-button" onClick={this.togglePopoverHandler}>
                <SmileIcon fillColor={'black'} width="40px" height="40px" />
            </button>
            <Picker getChar={this.gerCharHandler} isOpen={this.state.isOpen} />
        </div>
    }
}
