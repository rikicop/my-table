import React, { useState } from 'react';

export default function InputExample() {
    const [text, setText] = useState('');
    /* const handleChange = e => {
        setText(e.target.value);
    }; */

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <h1 style={{color: text }}>{text}</h1>
        </div>
    );
};