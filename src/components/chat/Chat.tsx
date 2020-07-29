import * as React from "react";
import './Chat.scss';
import { MessageArea } from '@components/messageArea';
import { MessageInput } from "@components/messageInput";

/**
 * Char functional component
 */
export const Chat = () => (
    <div className="chat">
        <MessageArea />
        <MessageInput />
    </div>
);
