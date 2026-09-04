import React, { useRef, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input";
import countryLabels from "react-phone-number-input/locale/en";
import flags from "react-phone-number-input/flags";

import "./JobApplicationForm.css";


/* =========================================================
   COUNTRY DROPDOWN
========================================================= */

function CountryDropdown({
  value,
  onChange,
  options,
  mode = "phone",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selected = options.find(
    (country) => country.code === value
  );

  const handleSelect = (country) => {
    onChange(country.code);
    setIsOpen(false);
  };

  return (
    <div
      className={`job-country-dropdown ${mode} ${
        isOpen ? "is-open" : ""
      }`}
    >

      {/* Trigger */}
      <button
        type="button"
        className="job-country-dropdown-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="job-country-selected-content">

          {selected && (
            <span className="job-country-flag">
              {flags[selected.code] &&
                React.createElement(flags[selected.code])}
            </span>
          )}

          {mode === "phone" && selected && (
            <span className="job-country-selected-code">
              +{selected.phone}
            </span>
          )}

        </span>

        <svg
          className="job-country-dropdown-arrow"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>


      {/* Dropdown */}
      {isOpen && (
        <div className="job-country-dropdown-menu">
          <div className="job-country-dropdown-list">

            {options.map((country) => (
              <button
                type="button"
                key={country.code}
                className={`job-country-dropdown-option ${
                  country.code === value ? "selected" : ""
                }`}
                onClick={() => handleSelect(country)}
              >

                <span className="job-country-option-flag">
                  {flags[country.code] &&
                    React.createElement(flags[country.code])}
                </span>

                <span className="job-country-option-name">
                  {country.name}
                </span>

                <span className="job-country-option-code">
                  +{country.phone}
                </span>

              </button>
            ))}

          </div>
        </div>
      )}
    </div>
  );
}


/* =========================================================
   JOB APPLICATION FORM
========================================================= */

const JobApplicationForm = ({ jobTitle }) => {

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const [selectedPhoneCountry, setSelectedPhoneCountry] =
    useState("IN");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);


  /* =========================================================
     COUNTRY OPTIONS
  ========================================================= */

  const countryOptions = getCountries()
    .map((code) => ({
      code,
      name: countryLabels[code],
      phone: getCountryCallingCode(code),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));


  /* =========================================================
     NORMAL FIELD CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  /* =========================================================
     PHONE CHANGE
  ========================================================= */

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    setPhoneNumber(value);
  };


  /* =========================================================
     FILE UPLOAD
  ========================================================= */

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };


  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;


    /* ---- PDF validation ---- */

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file only.");

      e.target.value = "";
      return;
    }


    /* ---- 25MB validation ---- */

    const maxSize = 25 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("Resume size must be less than 25MB.");

      e.target.value = "";
      return;
    }


    setSelectedFile(file);
  };


  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicationData = {
      jobTitle,
      ...formData,
      phoneCountry: selectedPhoneCountry,
      phoneCountryCode:
        getCountryCallingCode(selectedPhoneCountry),
      phoneNumber,
      resume: selectedFile,
    };

    console.log("Application submitted:", applicationData);

    setSubmitted(true);
  };


  /* =========================================================
     SUCCESS STATE
  ========================================================= */

  if (submitted) {
    return (
      <div className="job-application-wrapper">
        <div className="job-application-form">

          <div className="application-success">

            <div className="success-icon">
              ✓
            </div>

            <h4>
              Application Submitted!
            </h4>

            <p>
              Thank you for applying for the{" "}
              <strong>{jobTitle}</strong> position.
              Our recruitment team will review your application.
            </p>

          </div>

        </div>
      </div>
    );
  }


  /* =========================================================
     FORM
  ========================================================= */

  return (
    <div className="job-application-wrapper">

      <div className="job-application-form">

        <h3>
          Applying for {jobTitle}
        </h3>


        <form onSubmit={handleSubmit}>

          {/* =================================================
              FULL NAME
          ================================================= */}

          <fieldset>
            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </fieldset>


          {/* =================================================
              EMAIL
          ================================================= */}

          <fieldset>
            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>


          {/* =================================================
              PHONE
          ================================================= */}

          <fieldset>
            <label>
              Your Phone
            </label>

            <div className="job-phone-input-wrapper">

              <CountryDropdown
                value={selectedPhoneCountry}
                onChange={setSelectedPhoneCountry}
                options={countryOptions}
                mode="phone"
              />

              <input
                type="tel"
                className="job-phone-number-input"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Enter your phone number"
                inputMode="numeric"
                autoComplete="tel"
                pattern="[0-9]*"
                required
              />

            </div>
          </fieldset>


          {/* =================================================
              MESSAGE
          ================================================= */}

          <fieldset>
            <label>
              Message
            </label>

            <textarea
              name="message"
              placeholder="Tell us a little about yourself"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </fieldset>


          {/* =================================================
              RESUME
          ================================================= */}

          <fieldset className="resume-fieldset">

            <label>
              Attach Resume
            </label>

            <div
              className={`job-attachment ${
                selectedFile ? "has-file" : ""
              }`}
              onClick={handleAttachmentClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleAttachmentClick();
                }
              }}
            >

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="job-attachment-icon"
              >
                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>

              <div className="job-attachment-text">
                {selectedFile
                  ? selectedFile.name
                  : "Add an Attachment"}
              </div>

            </div>


            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="job-file-input"
              required
            />


            <div className="resume-info">
              <span>
                Supported Format: PDF
              </span>

              <span>
                Max Size: 25MB
              </span>
            </div>

          </fieldset>


          {/* =================================================
              SUBMIT
          ================================================= */}

          <div className="job-submit-wrapper">

            <button
              type="submit"
              className="job-application-submit"
            >
              Submit
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};


export default JobApplicationForm;