VGIL Website
============

PROJECT STRUCTURE

frontend/
  React + Vite frontend

backend/
  Node + Express API
  Nodemailer email service


LOCAL SETUP
==========

1. Frontend

cd frontend
npm install
npm run dev

Frontend:
http://localhost:5173


2. Backend

cd backend
npm install
npm start

Backend:
http://localhost:5000


ENVIRONMENT VARIABLES
=====================

Frontend:
VITE_API_URL=http://localhost:5000

Backend:
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=
JOB_EMAIL_TO=
PORT=5000


FORMS

Contact:
POST /api/contact

Job Application:
POST /api/job-application