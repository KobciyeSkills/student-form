const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const Student = require('./models/Student'); // Import from models folder

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Routes
app.post('/submit', async (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    course: req.body.course
  });

  try {
    await student.save();
    res.send('Student data submitted successfully!');
    
  } catch (err) {
    res.status(400).send('Error saving student data: ' + err.message);
  }
});

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
