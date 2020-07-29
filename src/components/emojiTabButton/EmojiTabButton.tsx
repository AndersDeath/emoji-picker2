import * as React from "react";
import './emojiTabButton.scss';
import {
    TimerIcon,
    TimerFillIcon,
    AnimalIcon,
    AnimalFillIcon,
    CarIcon,
    CarFillIcon,
    FlagIcon,
    FlagFillIcon,
    LampIcon,
    LampFillIcon,
    NatureIcon,
    NatureFillIcon,
    SmileIcon,
    SmileFillIcon,
    SportIcon,
    SportFillIcon
} from '@icons/index';

/**
 * Emoji tab button component' Props
 */
export interface IEmojiTabButtonProps {
    name: string;
    isFill?: boolean;
    fillColor?: '#000';
    width?: '10px';
    height?: '10px'
}
/**
 * Emoji tab Button Components
 */
export class EmojiTabButton extends React.Component<IEmojiTabButtonProps> {
    /**
     * Loaded svg icons
     */
    private icons = {
        timer: {
            default: TimerIcon,
            fill: TimerFillIcon
        },
        animal: {
            default: AnimalIcon,
            fill: AnimalFillIcon
        },
        car: {
            default: CarIcon,
            fill: CarFillIcon
        },
        flag: {
            default: FlagIcon,
            fill: FlagFillIcon
        },
        lamp: {
            default: LampIcon,
            fill: LampFillIcon
        },
        nature: {
            default: NatureIcon,
            fill: NatureFillIcon
        },
        smile: {
            default: SmileIcon,
            fill: SmileFillIcon
        },
        sport: {
            default: SportIcon,
            fill: SportFillIcon
        }
    }

    /**
     * Class constructor
     * @param props component props
     */
    constructor(props) {
        super(props);
    }


    render() {
        const props = {
            height: this.props.height,
            width: this.props.width,
            fillColor: this.props.fillColor
        }
        let className = 'emoji-tab-button';
        if (!this.props.isFill) {
            return <div className={className}> {React.createElement(this.icons[this.props.name].default, props)}</div>;
        } else {
            className += ' active';
            return <div className={className}> {React.createElement(this.icons[this.props.name].fill, props)} </div>;
        }
    }
}
