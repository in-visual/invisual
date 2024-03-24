const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3001; // You can change this to your desired port

// Middleware to parse JSON data from the request body
app.use(bodyParser.json());

// CORS middleware (adjust according to your needs)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// POST endpoint to handle sending emails
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("namee", name);
    console.log("email", email);
    console.log("message", message);

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g., 'gmail', 'yahoo', etc.
      auth: {
        user: "invisual.zg@gmail.com",
        pass: "zcau aotm sohb mssn",
      },
    });

    // Define email content
    const mailOptions = {
      from: email,
      to: "invisual.zg@gmail.com", // Replace with the recipient's email address
      subject: `Invisual: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
