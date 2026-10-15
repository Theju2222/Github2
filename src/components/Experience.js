import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    id: "blrpods",
    position: "Senior Full Stack Web Developer",
    company: "BlrPods",
    companyLink: "https://blrpods.com/",
    period: "Nov 2024 — Present",
    location: "",
    current: true,
    summary:
      "As a Senior Full Stack Web Developer at BLRPods, I played a key role in designing, developing, and maintaining web platforms and internal systems, ensuring seamless user experiences across customer-facing and business applications. My responsibilities included:",
    highlights: [
      "Website Developmnt : Developed responsive and user-friendly websites using modern front-end technologies, along with optimized server-side applications and APIs using Node.js and Express, integrating booking, user management, and business workflow features.",
     "WhatsApp Booking System: Designed and developed a WhatsApp-based booking solution, enabling users to make and manage bookings directly through WhatsApp and simplifying the customer journey.",
     "HRMS Development: Contributed to the development of an HRMS platform, including modules for employee management, workflows, and administrative operations, improving internal efficiency.",
     "PMS Development: Built and maintained a Project Management System with features for managing projects, tasks, teams, and operational data, supporting better collaboration and decision-making.",
     "During my tenure, I contributed significantly to improving platform functionality, streamlining booking and internal workflows, and delivering scalable solutions that enhanced user engagement and operational efficiency.",
      
    ],
  },
  {
    id: "techrowth",
    position: "Senior Full Stack Web Developer",
    company: "Techrowth Pvt Ltd",
    companyLink: "https://techrowth.com/",
    period: "Feb 2023 — Nov 2024",
    location: "Bengaluru, Karnataka",
    current: false,
    summary:
      "Worked on customer-facing web applications, bringing together responsive interfaces and practical features for online businesses.",
    highlights: [
      "Developed an e-commerce website with product listings, user authentication, and payment integration.",
      "Collaborated on a blogging platform with account management, post creation, and commenting features.",
    ],
  },
  {
    id: "tech-is",
    position: "Full Stack Web Developer",
    company: "TECH I.S. India Pvt. Ltd.",
    companyLink: "https://techis.io/",
    period: "Feb 2022 — Feb 2023",
    location: "Bengaluru, Karnataka",
    current: false,
    summary:
      "Supported client projects and provided technical guidance, combining hands-on development with problem-solving and project planning.",
    highlights: [
      "Provided technical guidance and troubleshooting support to US clients.",
      "Contributed to strategic planning and improvements in client delivery.",
      "Worked on three Japan-based client projects hosted on AWS.",
    ],
  },
];

function ExperienceItem({ experience, reduceMotion }) {
  return (
    <li className={`timeline-item ${experience.current ? "current" : ""}`}>
      <span className="timeline-marker" aria-hidden="true">
        <span />
      </span>

      <motion.div
        className="experience-entry"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: reduceMotion ? 0 : 0.45,
          ease: "easeOut",
        }}
      >
        <div className="entry-meta">
          <span className="period">{experience.period}</span>

          {experience.current && (
            <span className="current-badge">
              <span aria-hidden="true" />
              Current role
            </span>
          )}
        </div>

        <h3>{experience.position}</h3>

        <div className="company-row">
          <a
            href={experience.companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
            aria-label={`Visit ${experience.company} website`}
          >
            {experience.company}
            <span aria-hidden="true">↗</span>
          </a>

          {experience.location && (
            <>
              <span className="location-divider" aria-hidden="true" />
              <span className="location">{experience.location}</span>
            </>
          )}
        </div>

        <p className="summary">{experience.summary}</p>

        <ul className="highlights">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>
              <span className="highlight-dot" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <style jsx>{`
        .timeline-item {
          position: relative;
          padding: 0 0 42px 48px;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-item::before {
          content: "";
          position: absolute;
          top: 20px;
          bottom: -1px;
          left: 9px;
          width: 1px;
          background: #e3d2de;
        }

        .timeline-item:last-child::before {
          display: none;
        }

        .timeline-marker {
          position: absolute;
          top: 3px;
          left: 0;
          display: grid;
          place-items: center;
          width: 19px;
          height: 19px;
          border: 1px solid #caa9be;
          border-radius: 50%;
          background: #ffffff;
        }

        .timeline-marker > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ae4b9d;
        }

        .current .timeline-marker {
          border-color: #ff842b;
        }

        .current .timeline-marker > span {
          background: #ff842b;
        }

        .entry-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 16px;
          min-height: 24px;
        }

        .period {
          color: #7b6975;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.6;
        }

        .current-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 9px;
          border: 1px solid #efd8c9;
          border-radius: 999px;
          background: #fff8f3;
          color: #934111;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.2;
        }

        .current-badge > span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ff842b;
        }

        h3 {
          margin: 0;
          color: #321b26;
          font-size: clamp(24px, 2.4vw, 30px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.035em;
        }

        .company-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 12px;
        }

        .company-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #791d35;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.6;
          text-decoration: none;
        }

        .company-link > span {
          font-size: 17px;
        }

        .company-link:focus-visible {
          outline: 2px solid #791d35;
          outline-offset: 5px;
          border-radius: 3px;
        }

        .location-divider {
          width: 1px;
          height: 12px;
          background: #dfd0db;
        }

        .location {
          color: #7b6975;
          font-size: 11px;
          line-height: 1.6;
        }

        .summary {
          max-width: 760px;
          margin: 20px 0 0;
          color: #655660;
          font-size: 14px;
          line-height: 1.85;
        }

        .highlights {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
        }

        .highlights li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #6b5d66;
          font-size: 13px;
          line-height: 1.8;
        }

        .highlight-dot {
          width: 4px;
          height: 4px;
          flex-shrink: 0;
          margin-top: 10px;
          border-radius: 50%;
          background: #ae4b9d;
        }

        @media (hover: hover) {
          .company-link:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
          }
        }

        @media (max-width: 600px) {
          .timeline-item {
            padding-left: 34px;
            padding-bottom: 34px;
          }

          .entry-meta {
            gap: 8px;
            margin-bottom: 14px;
          }

          .period {
            font-size: 10px;
          }

          h3 {
            font-size: 23px;
          }

          .company-row {
            gap: 8px 10px;
          }

          .company-link {
            font-size: 12px;
          }

          .location {
            font-size: 10px;
          }

          .summary {
            margin-top: 18px;
            font-size: 13px;
          }

          .highlights {
            gap: 10px;
            margin-top: 16px;
          }

          .highlights li {
            font-size: 12px;
          }
        }
      `}</style>
    </li>
  );
}

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="experience-section"
      aria-labelledby="experience-title"
    >
      <header className="section-header">
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" />
            MY JOURNEY
          </p>

          <h2 id="experience-title">
            Experience that
           
            <span> shapes my work.</span>
          </h2>
        </div>

     
      </header>

      <ol className="timeline">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            reduceMotion={reduceMotion}
          />
        ))}
      </ol>

      <style jsx>{`
        .experience-section {
          width: 100%;
          background: #ffffff;
          color: #171019;
        }

        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 40px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 18px;
          color: #934111;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          line-height: 1.6;
        }

        .eyebrow > span {
          width: 24px;
          height: 2px;
          background: #ff842b;
        }

        h2 {
          margin: 0;
          color: #321b26;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 750;
          line-height: 1.1;
          letter-spacing: -0.045em;
        }

        h2 > span {
          color: #791d35;
        }

        .section-description {
          max-width: 320px;
          margin: 0;
          color: #6b5d66;
          font-size: 14px;
          line-height: 1.85;
        }

        .timeline {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        @media (max-width: 800px) {
          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .section-description {
            max-width: 520px;
          }
        }

        @media (max-width: 600px) {
          .section-header {
            margin-bottom: 30px;
          }

          .eyebrow {
            margin-bottom: 16px;
            font-size: 9px;
          }

          h2 {
            font-size: clamp(32px, 8vw, 40px);
          }

          .section-description {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}