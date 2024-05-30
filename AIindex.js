const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/chat', (req, res) => {
    const userMessage = req.body.message;

    // Simple response logic
    let botMessage = "I'm not sure what you mean.";
    if (userMessage.includes('hello')) {
        botMessage = 'Hi there! How can I help you today?';
    }

    res.json({ message: botMessage });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
