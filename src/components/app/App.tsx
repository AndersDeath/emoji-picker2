import * as React from "react";
import './App.scss';
import { Chat } from '@components/chat';

/**
 * App component
 */
export function App() {
    return (
        <div className="container">
            <Chat />
        </div>
    )
}
