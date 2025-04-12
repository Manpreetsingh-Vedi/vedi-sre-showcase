
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { submitContactMessage } = require('./api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../dist')));

// API endpoints
app.post('/api/contact', async (req, res) => {
  try {
    const result = await submitContactMessage(req.body);
    res.json(result);
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error processing your request'
    });
  }
});

// Serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
