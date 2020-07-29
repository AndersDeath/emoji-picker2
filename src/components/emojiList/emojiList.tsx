import * as React from "react";
import "./emojiList.scss";
import { EmojiButton } from "@components/emojiButton";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { store } from "@state/store";
import { setActiveTabAction } from '@state/actions';
import { ISetActiveTabInitialState } from '@state/interfaces';


/**
 * Emoji List coponent
 */
class EmojiListC extends React.Component<{ emojies: any, setActiveTab: any, getItem: any }, { scrollTo: string, showHeader: boolean, currentHeader: '' }> {
    /**
     * Refs obj
     */
    private myRefs: any;

    /**
     * Redux store subscription
     */
    private unsubscribtion: any;

    /**
     * text for fixed header
     */
    private fixedHeader = '';

    /**
     * Map with offsets of emojies groups.
     */
    private offsetMap = [];
    /**
     * Map of emojies groups titles
     */
    private titlesMap = [];

    /**
     * Class constructor
     * @param props component props
     */
    constructor(props) {
        super(props);
        this.myRefs = {};
        this.state = {
            showHeader: false,
            currentHeader: '',
            scrollTo: ''
        };
        this.emojiListScollHandler = this.emojiListScollHandler.bind(this);
    }

    /**
     * React lifecycle method
     */
    componentDidMount() {

        setTimeout(() => {
            for (let item in this.myRefs) {
                if (this.myRefs[item].current) {
                    this.offsetMap.push(this.myRefs[item].current.offsetTop);
                    this.titlesMap.push({
                        title: this.myRefs[item].current.innerText,
                        dataHeader: this.myRefs[item].current.getAttribute('data-header')
                    })
                }
            }
        }, 0)
        this.unsubscribtion = store.subscribe(() => {
            const currentTab = store.getState().scrollToEmojiGroup?.scrollTo;
            if (currentTab) {
                this.myRefs[
                    store.getState().scrollToEmojiGroup.scrollTo
                ].current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });

    }


/**
 * React lifecycle method
 */    componentWillUnmount() {
        this.unsubscribtion();
    }

    /**
     * Emojies Scroll Handler
     * @param e event
     */
    emojiListScollHandler(e: any) {

        this.setState({
            showHeader: (e.target as any).scrollTop > 0,
        });

        let index = 0;

        for (let i = 0; i < this.offsetMap.length; i++) {
            if (
                (e.target as any).scrollTop + 100 > this.offsetMap[i]
            ) {
                if ((e.target as any).scrollTop + 100 < this.offsetMap[i + 1]) {
                    index = i;
                    break;
                }
                index = this.offsetMap.length - 1

            }
        }
        this.fixedHeader = this.titlesMap[index].title;
        this.setState((state: any, props) => {
            if (state.currentHeader !== this.titlesMap[index].dataHeader) {
                props.setActiveTab(this.titlesMap[index].dataHeader);
                return {
                    currentHeader: this.titlesMap[index].dataHeader
                }

            }
            return null
        })
    }


    render() {
        let fixedHeaderClasses = ["header", "fixed-header"];
        if (this.state.showHeader) {
            fixedHeaderClasses.push("displayed");
        }
        this.props.emojies.forEach((e) => {
            this.myRefs[e.icon] = React.createRef();
        });
        return (
            <div onScroll={this.emojiListScollHandler} className="emoji-list">
                <div className={fixedHeaderClasses.join(" ")}>{this.fixedHeader}</div>
                {this.props.emojies.map((e, key) => {
                    return (
                        <div key={key}>
                            {!!e.data.length && (
                                <div className="emoji-group">
                                    {
                                        <div className="header" data-header={e.icon} ref={this.myRefs[e.icon]}>
                                            {e.title}
                                        </div>
                                    }
                                    {e.data.map((d, k) => {
                                        return <EmojiButton click={this.props.getItem} key={k} char={d} />;
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state: ISetActiveTabInitialState) => {
    return state
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
    setActiveTab: (current) => {
        return dispatch(setActiveTabAction(current));
    }
});

export const EmojiList = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmojiListC);
