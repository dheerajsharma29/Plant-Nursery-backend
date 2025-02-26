// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // Set up the server port
// const PORT = process.env.PORT || 3019;
// const app = express();

// // Enable CORS
// app.use(cors());

// // Middleware to parse URL-encoded and JSON data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MongoDB connection setup
// mongoose.connect('mongodb://127.0.0.1:27017/help', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 20000, // Increase timeout
// })
//   .then(() => console.log('MongoDB connection successful'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Mongoose schema for user data
// const userSchema = new mongoose.Schema({
//   email: String,
//   message: String,
// });

// const User = mongoose.model('Contact', userSchema);

// // Handle form submission (POST request)
// app.post('/post', async (req, res) => {
//   try {
//     const { email, message } = req.body;
//     const newUser = new User({
//       email,
//       message,
//     });

//     // Save the new user data to the database
//     await newUser.save();
//     console.log('Form submitted:', newUser);

//     // Send a response back to the client
//     res.send('Form submitted successfully!');
//   } catch (error) {
//     console.error('Error saving data:', error);
//     res.status(500).send('An error occurred while processing your form.');
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const plantRoutes = require("./routes/plantRoute");

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // Connect to MongoDB

app.use("/plant", plantRoutes); // Use routes

app.listen(process.env.PORT, () => console.log("🚀 Server running on port 5000"));
