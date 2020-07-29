import * as React from 'react';
import { FunctionComponent } from 'react'

export const TimerIcon: FunctionComponent<{ width?: string, fillColor?: string, height?: string }> = ({
    fillColor = "#000",
    width = '30px',
    height = '',
}) => (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" fill={fillColor} clipRule="evenodd" d="M11 2.25C6.16751 2.25 2.25 6.16751 2.25 11C2.25 15.8325 6.16751 19.75 11 19.75C15.8325 19.75 19.75 15.8325 19.75 11C19.75 6.16751 15.8325 2.25 11 2.25ZM0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM10.5 5C11.0523 5 11.5 5.44772 11.5 6V11.0401L14.6508 13.7407C15.0701 14.1002 15.1187 14.7315 14.7593 15.1508C14.3998 15.5701 13.7685 15.6187 13.3492 15.2593L9.84921 12.2593C9.62756 12.0693 9.5 11.7919 9.5 11.5V6C9.5 5.44772 9.94771 5 10.5 5Z"/>
    </svg>
    )