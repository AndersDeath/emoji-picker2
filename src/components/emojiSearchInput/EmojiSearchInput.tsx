import * as React from "react";
import './EmojiSearchInput.scss';

/**
 * Emoji Seacrk input component props
 */
export interface IEmojiSearchProps {
    getValue: (request: string) => void,
    resetValue: () => void,
    searchRequest: string
}

/**
 * Emoji Search input Component State
 */
export interface IEmojiSearchState {
    showReset: boolean;
}

/**
 * Emoji Search input component
 */
export class EmojiSearchInput extends React.Component<IEmojiSearchProps, IEmojiSearchState> {

    /**
     * Class constructor
     * @param props component props
     */
    constructor(props) {
        super(props);
        this.state = {
            showReset: false
        };
        this.inputTextHandler = this.inputTextHandler.bind(this);
        this.resetInputHandler = this.resetInputHandler.bind(this);

    }

    /**
     * Text change handler
     * @param e event
     */
    inputTextHandler(e: any) {
        e.persist();
        this.props.getValue(e.target.value);
        this.setState(() => {
            return {
                showReset: !!e.target.value.length,
            };
        });
    }

    /**
     * input reset handler
     */
    resetInputHandler() {
        this.setState(() => {
            return {
                showReset: false,
            }
        });

        this.props.resetValue();
    }

    render() {
        return <div className="search">
            <input
                className="search-input"
                value={this.props.searchRequest}
                onChange={this.inputTextHandler}
                type="text"
            />
            <span className="search-icon"></span>
            {this.state.showReset && (
                <span className="search-reset" onClick={this.resetInputHandler}></span>
            )}
        </div>
    }
}
