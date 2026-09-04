import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import JobApplicationForm from "../components/JobApplicationForm";

const CareerDetails = () => {
  const { jobId } = useParams();

  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);

  const jobs = {
    "business-development-analyst": {
      title: "Business Development Analyst",
      category: "Engineering",
      type: "Full-Time",
      location: "Nagpur / Pune / Mumbai / Hyderabad, India",
      positions: "5",
      experience: "4 years",

      description: [
        "Conduct market research to analyze industry trends, customer needs, and identify growth opportunities",
        "Identify and generate new business opportunities through research, networking, and lead generation activities.",
        "Analyze business and sales data to prepare reports, dashboards, and presentations for decision- making.",
        "Track competitor activities, market positioning, and provide actionable market insights.",
        "Support business growth strategies, planning, and execution of new initiatives.",
        "Collaborate closely with sales and marketing teams to improve lead conversion and customer acquisition.",
        "Assist in preparing client proposals, presentations, and business pitches.",
        "Monitor key performance indicators (KPIs) and recommend improvements for business performance.",
        "Maintain and update CRM systems to ensure accurate tracking of leads, client interactions, andsales pipeline.",
        "Stay updated with IT trends, technologies, and competitor solutions to improve pitching effectiveness.",
        "Convert qualified leads into customers by understanding technical requirements, proposing suitable solutions, handling objections, and closing deals.",
      ],

      qualifications: [
        "A Master of Business Administration (MBA) will be considered an added advantage.",
        "Bachelor’s degree in Business Administration, Marketing, IT, or related field.",
      ]
    },

    "customer-acquisition-execution": {
      title: "Customer Acquisition Executive",
      category: "Marketing",
      type: "Full-Time",
      location: "Nagpur, India",
      positions: "3",
      experience: "3 years",

      description: [
        "Identify, qualify, and generate high-quality leads through cold calling, email outreach, LinkedIn, tech forums, referrals, industry events, and various lead generation portals to build a strong IT sales pipeline.",
        "Plan and execute customer acquisition strategies aligned with organizational goals, focusingonIT products and services such as software solutions, SaaS, and cloud services.",
        "Conduct market research to understand client requirements, emerging technologies, competitor offerings, and new business opportunities.",
        "Initiate and manage communication with prospects through calls, emails, virtual demos, webinars, and meetings to position IT solutions effectively.",
        "Convert prospects into qualified leads and subsequently into customers by understanding technical requirements, proposing appropriate solutions, addressing objections, and successfully closing deals Build and maintain long-term client relationships to ensure customer satisfaction, repeat business, and cross-selling/up-selling opportunities.",
        "Collaborate with marketing, pre-sales, and technical teams to align campaigns, proposals, and lead generation strategies.",
        "Track and analyze key performance metrics such as conversion rates, cost per acquisition, lead quality, and ROI.",
        "Maintain accurate CRM records of leads, interactions, proposals, and deal progress.",
        "Conduct regular follow-ups and nurture leads through the sales funnel for timely closures.",
        "Stay updated with IT trends, technologies, and competitor solutions to improve pitching effectiveness.",
        "Prepare and present daily/weekly reports on sales performance, pipeline status, forecasts, and achievements",
      ],

      qualifications: [
        "Bachelor’s degree in Business Administration, Marketing, IT, or related field.",
        
      ]
    },

    "solution": {
      title: "Solution Opportunity Manager (Govt.& BFSI)",
      category: "Marketing",
      type: "Full-Time",
      location: "Chennai, Jaipur, Hyderabad, Mumbai, Nagpur / India",
      positions: "5",
      experience: "8+ years",

      description: [
        "Identify and pursue new business opportunities within Government and BFSI sectors.",
        "Build and maintain strong relationships with key decision-makers and stakeholders.",
        "Lead RFP responses, including solution design, documentation, and submission.",
        "Conduct solution presentations and participate in client meetings and discussions.",
        "Handle contract negotiations and closure of business deals.",
        "Develop and execute sales strategies to achieve revenue targets.",
        "Expand existing client accounts and identify cross-selling/up-selling opportunities.",
        "Attend industry events, seminars, and networking forums to represent the organization.",
        "Track sales pipeline, monitor progress, and report updates to management regularly.",
        "Collaborate with internal teams (technical, delivery, management) for successful project execution",
        "Stay updated with government procurement processes and BFSI regulations",
        "Analyze market trends and competitor activities to identify growth opportunities",
      ],

      qualifications: [
        "Bachelor’s or Master’s Degree (B.E / MBA or equivalent)."
      ]
    },

    // "product-manager": {
    //   title: "Technical Product Manager",
    //   category: "Product",
    //   type: "Full-Time",
    //   location: "Nagpur, India",
    //   positions: "1",
    //   experience: "4+ years",

    //   description: [
    //     "Define and communicate product vision and strategy.",
    //     "Create and maintain product roadmaps.",
    //     "Work closely with engineering, design, and business teams.",
    //     "Understand customer requirements and translate them into product features.",
    //     "Analyze market trends and competitor products.",
    //     "Prioritize product features based on business and customer needs.",
    //     "Monitor product KPIs and performance.",
    //     "Coordinate product launches and continuous improvements."
    //   ],

    //   qualifications: [
    //     "Bachelor's degree in Business, Technology, Engineering, or related field.",
    //     "Experience managing technical products.",
    //     "Strong understanding of software development processes.",
    //     "Excellent communication, analytical, and leadership skills."
    //   ]
    // },

    // "sales-executive": {
    //   title: "Business Development Analyst",
    //   category: "Marketing",
    //   type: "Sales",
    //   location: "Chennai, Jaipur, Hyderabad, Mumbai, Nagpur",
    //   positions: "5",
    //   experience: "4 years",

    //   description: [
    //     "Conduct market research to analyze industry trends, customer needs, and identify growth opportunities.",
    //     "Identify and generate new business opportunities through research, networking, and lead generation activities.",
    //     "Analyze business and sales data to prepare reports, dashboards, and presentations for decision-making.",
    //     "Track competitor activities, market positioning, and provide actionable market insights.",
    //     "Support business growth strategies, planning, and execution of new initiatives.",
    //     "Collaborate closely with sales and marketing teams to improve lead conversion and customer acquisition.",
    //     "Assist in preparing client proposals, presentations, and business pitches.",
    //     "Monitor key performance indicators (KPIs) and recommend improvements for business performance.",
    //     "Maintain and update CRM systems to ensure accurate tracking of leads, client interactions, and sales pipeline.",
    //     "Stay updated with IT trends, technologies, and competitor solutions to improve pitching effectiveness.",
    //     "Convert qualified leads into customers by understanding technical requirements, proposing suitable solutions, handling objections, and closing deals."
    //   ],

    //   qualifications: [
    //     "A Master of Business Administration (MBA) will be considered an added advantage.",
    //     "Bachelor’s degree in Business Administration, Marketing, IT, or related field."
    //   ]
    // },

    // "data-scientist": {
    //   title: "Data Scientist (AI/ML)",
    //   category: "Data",
    //   type: "Full-Time",
    //   location: "Remote",
    //   positions: "1",
    //   experience: "3+ years",

    //   description: [
    //     "Develop machine learning models and data-driven solutions.",
    //     "Analyze large datasets to identify patterns and trends.",
    //     "Build predictive models and recommendation systems.",
    //     "Clean, process, and transform structured and unstructured data.",
    //     "Evaluate machine learning models and improve their performance.",
    //     "Collaborate with engineering and product teams.",
    //     "Present data insights to technical and business stakeholders."
    //   ],

    //   qualifications: [
    //     "Bachelor's or Master's degree in Computer Science, Data Science, Mathematics, or related field.",
    //     "Experience with Python and machine learning frameworks.",
    //     "Strong understanding of statistics and data analysis.",
    //     "Knowledge of machine learning and AI concepts."
    //   ]
    // }
  };

  // Find the selected job
  const job = jobs[jobId];

  // If wrong URL is entered
  if (!job) {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
        <div>
          <h1>Job Not Found</h1>
          <p>This job position does not exist.</p>

          {/* <Link
            to="/careers"
            style={{
              display: "inline-block",
              marginTop: "15px",
              background: "#e10600",
              color: "#fff",
              padding: "12px 25px",
              borderRadius: "30px",
              textDecoration: "none"
            }}
          >
            Back to Careers
          </Link> */}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* HEADER */}
      <section
        style={{
          padding: "120px 20px 40px 20px",
          borderBottom: "1px solid #eee",
          background: "#fff"
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap:'wrap',
            gap: "30px"
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 8px",
                color: "#333",
                fontSize: "14px"
              }}
            >
              Careers
            </p>

            <h1
              style={{
                margin: 0,
                color: "#e10600",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "800"
              }}
            >
              {job.title}
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <a
              href="mailto:hr@vginfotech.ai"
              style={{
                color: "#e10600"
              }}
            >
              ✉ hr@vginfotech.ai
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#e10600"
              }}
            >
              in LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* JOB INFO */}
      <section style={{ padding: "30px 6% 10px" }}>
        <div
          style={{
            maxWidth: "1250px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "7px"
          }}
        >
          <InfoCard
            title="Job Category"
            value={job.category}
          />

          <InfoCard
            title="Job Type"
            value={job.type}
          />

          <InfoCard
            title="Location"
            value={job.location}
          />

          <InfoCard
            title="Positions"
            value={job.positions}
          />

          <InfoCard
            title="Experience"
            value={job.experience}
          />
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "20px 6% 70px" }}>
        <div
          style={{
            maxWidth: "1250px",
            margin: "auto"
          }}
        >
          <h2 style={headingStyle}>
            Job Description
          </h2>

          <ul style={listStyle}>
            {job.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2
            style={{
              ...headingStyle,
              marginTop: "35px"
            }}
          >
            Qualification
          </h2>

          <ul style={listStyle}>
            {job.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

  <button
  type="button"
  onClick={() => {
    setShowApplicationForm(true);

    setTimeout(() => {
      document
        .getElementById("job-application")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
    }, 100);
  }}
  style={{
    display: "inline-block",
    background: "#e10600",
    color: "#fff",
    padding: "13px 25px",
    marginTop:"40px",
    borderRadius: "30px",
    border: "none",
    textDecoration: "none",
    fontWeight: "700",
    cursor: "pointer"
  }}
>
  Apply Now
</button>

{showApplicationForm && (
  <div id="job-application">
    <JobApplicationForm jobTitle={job.title} />
  </div>
)}
          <div style={{ marginTop: "25px" }}>
            <Link
              to="/careers"
              style={{
                color: "#111",
                textDecoration: "none",
                fontWeight: "600"
              }}
            >
              ← Back to Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const InfoCard = ({ title, value }) => {
  return (
    <div
      style={{
        minHeight: "85px",
        padding: "15px",
        border: "1px solid #e10600",
        background: "#fff5f3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <span
        style={{
          fontSize: "13px",
          marginBottom: "7px"
        }}
      >
        {title}
      </span>

      <strong
        style={{
          fontSize: "15px"
        }}
      >
        {value}
      </strong>
    </div>
  );
};

const headingStyle = {
  fontSize: "1.35rem",
  fontWeight: "700",
  color: "#222",
  marginBottom: "15px"
};

const listStyle = {
  paddingLeft: "20px",
  margin: 0,
  color: "#222",
  fontSize: "14px",
  lineHeight: "1.7"
};

export default CareerDetails;