
# 🎓 Student Form App

This is a simple full-stack web application that collects student data (name, email, course) using an HTML form and stores it in a MongoDB database using a Node.js + Express backend. Mongoose is used for data modeling, and the UI is styled with basic CSS.

## 📁 Folder Structure

student-form-app/
│
├── index.html              # Main HTML form served at root

├── server.js               # Node.js + Express backend server
├── package.json            # NPM config with dependencies
├── .env                    # Environment variables (Mongo URI, port)
│
├── models/                 # Mongoose schemas/models
│   └── Student.js          # Schema definition for student data
│
├── public/                 # Static files served by Express
│   └── style.css           # CSS styling for the form
│
└── README.md               # Project documentation



## 🚀 Features

- HTML form for student registration
- Backend using Node.js + Express
- MongoDB database integration with Mongoose
- Clean and responsive UI with custom CSS
- POST form submission with real-time data storage

---

## 🛠 Technologies Used

- HTML5 & CSS3
- Node.js
- Express.js
- MongoDB
- Mongoose

---
