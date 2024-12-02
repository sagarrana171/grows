const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const User = require('./models/User'); // Assuming you have a User model

const app = express();

// Middleware
app.use(express.json());

// Route for user signup
app.post('/signup', [
    // Validation using express-validator
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    // You can add more validations as needed
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user object
    const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
        // You can add more fields here
    });

    // Save the user to the database
    try {
        const savedUser = await newUser.save();

        // Send verification email
        sendVerificationEmail(savedUser.email, savedUser.verificationToken);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Function to send verification email
function sendVerificationEmail(email, verificationToken) {
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Configure your email service
    });

    // Configure email options
    const mailOptions = {
        from: 'your@email.com',
        to: email,
        subject: 'Email Verification',
        text: `Click the following link to verify your email: http://yourapp.com/verify/${verificationToken}`,
        // You can also include HTML content
    };

    // Send the email
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending verification email:', err);
        } else {
            console.log('Verification email sent:', info.response);
        }
    });
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
