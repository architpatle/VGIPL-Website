import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import multer from "multer";

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

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, // 10 MB
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            'application/pdf',
            'image/jpeg',
            'image/png',
            'image/webp',
        ];

        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only PDF, JPG, PNG and WEBP files are allowed.'));
        }
    },
});

const resumeUpload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 25 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/pdf") {
            cb(null, true);
        } else {
            cb(new Error("Only PDF resumes are allowed."));
        }
    },
});

app.use(cors(
    {
        origin: [
            "http://localhost:5173",
            "https://vgipl.com",
            "https://www.vgipl.com",
            //      "include test domain here"
        ],
    }
));
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

app.post("/api/contact", upload.single("file"), async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            country,
            message,
        } = req.body;

        const file = req.file;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required.",
            });
        }

        const mailOptions = {
            from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,

            subject: "New Contact Form Submission",

            html: `
  <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #292C2E;">

    <div style="padding: 20px 0; border-bottom: 2px solid #292C2E;">
      <h2 style="margin: 0;">New Contact Enquiry</h2>
    </div>

    <div style="padding: 24px 0;">

      <p>
        <strong>Name</strong><br>
        ${name}
      </p>

      <p>
        <strong>Email</strong><br>
        ${email}
      </p>

      <p>
        <strong>Phone</strong><br>
        ${phone || "Not provided"}
      </p>

      <p>
        <strong>Country</strong><br>
        ${country || "Not provided"}
      </p>

      <p>
        <strong>Message</strong><br>
        ${message}
      </p>

    </div>

    ${file
                    ? `
          <div style="padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <strong>Attachment</strong><br>
            📎 ${file.originalname}
          </div>
        `
                    : ''
                }

  </div>
`,
        };

        // Add attachment only if user selected one
        if (file) {
            mailOptions.attachments = [
                {
                    filename: file.originalname,
                    content: file.buffer,
                    contentType: file.mimetype,
                },
            ];
        }

        await transporter.sendMail(mailOptions);

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

app.post(
    "/api/job-application",
    resumeUpload.single("resume"),
    async (req, res) => {
        try {
            const {
                jobTitle,
                name,
                email,
                phone,
                message,
            } = req.body;

            const resume = req.file;

            // Required fields
            if (!jobTitle || !name || !email || !phone || !message) {
                return res.status(400).json({
                    success: false,
                    message: "All application fields are required.",
                });
            }

            // Resume required
            if (!resume) {
                return res.status(400).json({
                    success: false,
                    message: "Resume is required.",
                });
            }

            // PDF validation
            if (resume.mimetype !== "application/pdf") {
                return res.status(400).json({
                    success: false,
                    message: "Only PDF resumes are allowed.",
                });
            }

            // 25MB server-side validation
            if (resume.size > 25 * 1024 * 1024) {
                return res.status(400).json({
                    success: false,
                    message: "Resume must be smaller than 25MB.",
                });
            }

            await transporter.sendMail({
                from: `"Website Job Application" <${process.env.EMAIL_USER}>`,
                to: process.env.JOB_EMAIL_TO,
                replyTo: email,

                subject: `New Job Application - ${jobTitle}`,

                html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #292C2E;">

          <div style="padding: 20px 0; border-bottom: 2px solid #292C2E;">
            <h2 style="margin: 0;">New Job Application</h2>
          </div>

          <div style="padding: 24px 0;">

            <p>
              <strong>Position</strong><br>
              ${jobTitle}
            </p>

            <p>
              <strong>Name</strong><br>
              ${name}
            </p>

            <p>
              <strong>Email</strong><br>
              ${email}
            </p>

            <p>
              <strong>Phone</strong><br>
              ${phone}
            </p>

            <p>
              <strong>Message</strong><br>
              ${message}
            </p>

          </div>

          <div style="padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <strong>Resume</strong><br>
            📎 ${resume.originalname}
          </div>

        </div>
      `,

                attachments: [
                    {
                        filename: resume.originalname,
                        content: resume.buffer,
                        contentType: "application/pdf",
                    },
                ],
            });

            res.json({
                success: true,
                message: "Job application submitted successfully.",
            });

        } catch (error) {
            console.error("JOB APPLICATION EMAIL ERROR:", error);

            res.status(500).json({
                success: false,
                message: "Failed to submit job application.",
            });
        }
    });

app.post('/api/brochure', async (req, res) => {
    try {
        const {
            productSlug,
            productTitle,
            name,
            email,
            phone,
            city,
        } = req.body;

        const allowedBrochures = {
            'core-banking-solution': 'Core Banking Solution',
            'imis-solution': 'IMIS Solution',
            'digital-payments': 'Digital Payments',
            'end-to-end-cyber-security': 'End-to-End Cyber Security',
        };

        if (!allowedBrochures[productSlug]) {
            return res.status(400).json({
                message: 'Invalid brochure request.',
            });
        }

        if (!name || !email || !phone) {
            return res.status(400).json({
                message: 'Name, email and phone number are required.',
            });
        }

        const verifiedProductTitle = allowedBrochures[productSlug];

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.BROCHURE_EMAIL_TO,
            replyTo: email,
            subject: `New Brochure Request - ${verifiedProductTitle}`,
            html: `
        <h2>New Brochure Download Request</h2>

        <p><strong>Product:</strong> ${verifiedProductTitle}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city || 'Not provided'}</p>
      `,
        });

        return res.status(200).json({
            success: true,
            message: 'Brochure request submitted successfully.',
        });
    } catch (error) {
        console.error('Brochure email error:', error);

        return res.status(500).json({
            message: 'Unable to process brochure request.',
        });
    }
});

app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'Attachment must be smaller than 10 MB.',
            });
        }
    }

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.message || 'Something went wrong.',
        });
    }

    next();
});

// ─────────────────────────────────────
// Start Server
// ─────────────────────────────────────

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});