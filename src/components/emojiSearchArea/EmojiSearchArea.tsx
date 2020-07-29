import * as React from "react";
import './EmojiSearchArea.scss';
import { EmojiButton } from '@components/emojiButton';

/**
 * Emoji Seacrk input component props
 */
export interface IEmojiSearchProps {
    searchResult: any[],
    getItem: (item: any) => void
}

/**
 * Emoji Search Area input component
 */
export class EmojiSearchArea extends React.Component<IEmojiSearchProps, {}> {

    /**
     * Class constructor
     * @param props component props
     */
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="emoji-search-area">
            {this.props.searchResult.map((d, k) => {
                return <EmojiButton click={this.props.getItem} key={k} char={d} />;
            })}
        </div>
    }
}
