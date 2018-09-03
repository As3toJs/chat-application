import React from 'react';
import Message from './Message';

export default function MessageList({ messages }) {
    return (
        <div className="message-list">
            <ul>
                {messages.map(m => {
                    return <Message key={m.id} {...m} />
                })}
            </ul>
        </div>
    )
}