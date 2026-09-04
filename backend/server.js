import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.use(cors());
app.use(express.json());


// ─────────────────────────────────────
// Test Route
// ─────────────────────────────────────

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend server is running",
  });
});


// ─────────────────────────────────────
// Contact Form
// ─────────────────────────────────────

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      career,
      product,
      website,
      message,
    } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,

      subject: "New Contact Form Submission",

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Career:</strong> ${career || "Not provided"}</p>
        <p><strong>Product:</strong> ${product || "Not provided"}</p>
        <p><strong>Website:</strong> ${website || "Not provided"}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({
      success: true,
      message: "Contact form submitted successfully.",
    });

  } catch (error) {
    console.error("CONTACT EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send contact form.",
    });
  }
});


// ─────────────────────────────────────
// Start Server
// ─────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});