import * as React from "react";
import "./Picker.scss";
import { Emoji, IEmojiDirtyItem } from "@utils/emoji";
import { EmojiList } from '@components/emojiList';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { store } from '@state/store';
import { scrollToEmojiGroupAction } from '@state/actions/scrollToEmojiGroupAction';
import { EmojiTabs } from '@components/emojiTabs';
import { EmojiSearchInput } from '@components/emojiSearchInput';
import { EmojiSearchArea } from '@components/emojiSearchArea';

/**
 * Picker component Props
 */
export interface IPickerProps {
    isOpen: boolean;
    scrollToEmojiGroup: (tab: string) => void;
    getChar: (char: string) => void;
}

/**
 * Picker component State
 */
export interface IPickerState {
    tabs: any[];
    currentTab: string;
    emojies: any[];
    searchRequest: string;
    searchResult: IEmojiDirtyItem[];
}

export class PickerC extends React.Component<IPickerProps, IPickerState> {
    /**
     * Class for work with emojies
     */
    private emoji = new Emoji();
    /**
     * Redux state subscribtion
     */
    private unsubscribtion: () => void;

    /**
     * Class constructor
     * @param props component props
     */
    constructor(props) {
        super(props);

        this.state = {
            currentTab: "timer",
            tabs: [],
            emojies: [],
            searchRequest: '',
            searchResult: []
        };
        this.buildTabs = this.buildTabs.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.resetSearchHandler = this.resetSearchHandler.bind(this);
        this.getItemHandler = this.getItemHandler.bind(this);
    }

    /**
     * React lifecycle method
     */
    componentDidMount() {
        this.buildEmojies();
        this.buildTabs();
        this.unsubscribtion = store.subscribe(() => {
            this.setState(((state) => {
                if (state.currentTab !== store.getState().setActiveTab.activeTab) {
                    return {
                        currentTab: store.getState().setActiveTab.activeTab
                    }
                } else {
                    return null
                }
            }), this.buildTabs)
        })
    }

    /**
     * React lifecycle method
     */
    componentWillUnmount() {
        this.unsubscribtion();
    }
    /**
     * Set tab
     * @param tab tab id
     */
    setTab(tab: string) {
        this.setState(
            {
                currentTab: tab,
            },
            this.buildTabsAndStoreUpdate
        );
    }

    /**
     * Set emojies to state
     */
    buildEmojies() {
        this.setState({ emojies: this.emoji.getDataByMap() })
    }

    /**
     * build tabs and Redux state update
     */
    buildTabsAndStoreUpdate() {
        this.props.scrollToEmojiGroup(this.state.currentTab);
        this.buildTabs()
    }

    /**
     * build tabs
     */
    buildTabs() {
        const tabs = this.emoji.defaultTabs;
        let data = [];
        tabs.forEach((tab) => {
            data.push({
                title: tab,
                colors: {
                    default: "#70737A",
                    fill: "#248BF2",
                },
                isFill: this.state.currentTab === tab,
                height: "18px",
            });
        });
        this.setState({
            tabs: data,
        });
    }

    /**
     *
     * @param item
     */
    pushToFrequently(item: IEmojiDirtyItem) {
        if (item.category !== 'frequently') {
            let updatedEmojies = this.state.emojies;
            let check = true;
            let pushedItem = {
                category: "frequently",
                char: item.char,
                fitzpatrick_scale: false,
                keywords: [],
                title: "",
            };
            if (updatedEmojies[0].data.length !== 0 && updatedEmojies[0].data.length < 15) {
                for (let i = 0; i < updatedEmojies[0].data.length; i++) {
                    if (updatedEmojies[0].data[i].char === item.char) {
                        check = false;
                    }
                }
            }
            // TODO: Make a maximum of 15 elements. When a new element is added, the last one is removed from the array
            // TODO: Make saving lasted emojis into localstorage.
            if (check && updatedEmojies[0].data.length < 15) {
                updatedEmojies[0].data.unshift(pushedItem)
                this.setState({
                    emojies: [...updatedEmojies]
                })
            }
        }
    }

    /**
     * Search handler
     * @param request search request
     */
    searchHandler(request: string) {
        this.setState({ searchRequest: request, searchResult: [...this.emoji.searchByString(request)] });
    }

    resetSearchHandler() {
        this.setState({
            searchRequest: '',
            searchResult: []
        });
    }

    /**
     * Get Emoji item from list and sent to parent
     * @param item item
     */
    getItemHandler(item: IEmojiDirtyItem) {
        this.getChar(item.char);
        this.pushToFrequently(item);
        this.setState({
            searchRequest: '',
            searchResult: []
        });
    }
    /**
     * Send emoji to parent
     * @param char emoji
     */
    getChar(char: string) {
        this.props.getChar(char);
    }

    render() {
        if (!this.props.isOpen) {
            return <div></div>;
        }
        return (
            <div className="picker">
                <div className="header">Emoji</div>
                <EmojiSearchInput resetValue={this.resetSearchHandler} searchRequest={this.state.searchRequest} getValue={this.searchHandler} />
                {!this.state.searchRequest.length && (
                    <div>
                        <EmojiList getItem={this.getItemHandler} emojies={this.state.emojies} />
                        <EmojiTabs tabs={this.state.tabs} selectedTab={(title) => {
                            this.setTab(title);
                        }} />
                    </div>
                )}
                {this.state.searchRequest.length > 0 && (<EmojiSearchArea getItem={this.getItemHandler} searchResult={this.state.searchResult} />)}
            </div>
        );
    }
}



const mapStateToProps = (state: any[]) => {
    return {
        state: state
    };
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    scrollToEmojiGroup: (current) => {
        return dispatch(scrollToEmojiGroupAction(current))
    },
});

export const Picker = connect(mapStateToProps, mapDispatchToProps)(PickerC)
