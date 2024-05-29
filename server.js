const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // If needed
const SimpleAI = require('./aiModule'); // Import your AI module

const app = express();
const ai = new SimpleAI(); // Create an instance of your AI class

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS if needed

// Route to handle chat messages
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    const botResponse = ai.getResponse(userMessage); // Get response from AI module
    res.json({ response: botResponse }); // Send response back to frontend
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
