import React, { useRef, useState } from 'react';

const CharacterCounter = () => {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);

    const handleInputChange = () => {
        setCount(inputRef.current.value.length);
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                onInput={handleInputChange}
                placeholder="Type something..."
            />
            <p>Character count: {count}</p>
        </div>
    );
};

export default CharacterCounter;
