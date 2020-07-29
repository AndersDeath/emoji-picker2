import * as React from "react";
import './emojiTabs.scss';
import { EmojiTabButton } from "@components/emojiTabButton";


/**
 * Emoji tabs props
 */
export interface IEmojiTabsProps {
    tabs: any;
    selectedTab: (tab: string) => void
}
/**
 * Emoji tabs functional component
 */
export function EmojiTabs(props: IEmojiTabsProps) {
    return <div className="emoji-tabs">
        {props.tabs.map((tab, key) => {
            return (
                <div
                    key={key}
                    onClick={() => {
                        props.selectedTab(tab.title)
                    }}
                >
                    <EmojiTabButton
                        name={tab.title}
                        height={tab.height}
                        width={tab.width}
                        fillColor={!tab.isFill ? tab.colors.default : tab.colors.fill}
                        isFill={tab.isFill}
                    />
                </div>
            );
        })}
    </div>
}
