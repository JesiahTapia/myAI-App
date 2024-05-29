import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        if (message.trim() === '') return;

        const userMessage = { user: 'User', text: message };
        setChat([...chat, userMessage]);

        const response = await axios.post('/chat', { message });
        const botMessage = { user: 'Bot', text: response.data.response };
        setChat([...chat, userMessage, botMessage]);
        setMessage('');
    };

    return (
        <div className="App">
            <div className="chat-box">
                {chat.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.user}`}>
                        <strong>{msg.user}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default App;
