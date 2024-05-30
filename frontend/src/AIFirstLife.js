import React, { useState } from 'react';
import axios from 'axios';
import './AIFirstLife.css';


function AIFirstLife() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/chat', { message });
            setResponse(res.data.message);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>AI Chatbot</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            <p>Bot: {response}</p>
        </div>
    );
}

export default AIFirstLife;
