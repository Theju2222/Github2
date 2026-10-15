import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const educationItems = [
  {
    id: "engineering",
    qualification: "B.E. in Mechanical Engineering",
    period: "2016 — 2020",
    institution: "Channabasaveshwara Institute of Technology",
    location: "Tumkur",
    learning: ["Web Development", "Data Structures & Algorithms"],
  },
  {
    id: "higher-secondary",
    qualification: "Higher Secondary",
    period: "2014 — 2016",
    institution: "Pragathi PU College",
    location: "Kadagodi, Bengaluru",
    learning: ["CET & IIT Preparation", "Tally"],
  },
  {
    id: "secondary",
    qualification: "Class 10",
    period: "2014",
    institution: "Jupiter Public School",
    location: "Madhugiri, Tumkur District",
    learning: ["MS Excel", "MS Word", "Tally", "C++"],
  },
];

function EducationItem({ education, reduceMotion }) {
  return (
    <li className="timeline-item">
      <span className="timeline-marker" aria-hidden="true">
        <span />
      </span>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: reduceMotion ? 0 : 0.45,
          ease: "easeOut",
        }}
      >
        <p className="period">{education.period}</p>

        <h3>{education.qualification}</h3>

        <p className="institution">{education.institution}</p>

        <p className="location">{education.location}</p>

        <div className="learning">
          <p className="learning-label">ADDITIONAL LEARNING</p>

          <ul className="learning-list">
            {education.learning.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </div>
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

        .period {
          margin: 0 0 16px;
          color: #7b6975;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.6;
        }

        h3 {
          margin: 0;
          color: #321b26;
          font-size: clamp(24px, 2.4vw, 30px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.035em;
        }

        .institution {
          margin: 12px 0 0;
          color: #791d35;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.7;
        }

        .location {
          margin: 4px 0 0;
          color: #7b6975;
          font-size: 12px;
          line-height: 1.7;
        }

        .learning {
          margin-top: 22px;
        }

        .learning-label {
          margin: 0 0 12px;
          color: #7b6975;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          line-height: 1.6;
        }

        .learning-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .learning-list li {
          padding: 7px 11px;
          border: 1px solid #e9dfe6;
          border-radius: 8px;
          background: #ffffff;
          color: #48213f;
          font-size: 11px;
          font-weight: 500;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .timeline-item {
            padding-left: 34px;
            padding-bottom: 34px;
          }

          .period {
            margin-bottom: 14px;
            font-size: 10px;
          }

          h3 {
            font-size: 23px;
          }

          .institution {
            margin-top: 10px;
            font-size: 13px;
          }

          .location {
            font-size: 11px;
          }

          .learning {
            margin-top: 18px;
          }

          .learning-list {
            gap: 7px;
          }

          .learning-list li {
            padding: 6px 10px;
            font-size: 10px;
          }
        }
      `}</style>
    </li>
  );
}

export default function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="education-section"
      aria-labelledby="education-title"
    >
      <header className="section-header">
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" />
            MY FOUNDATION
          </p>

          <h2 id="education-title">
            Learning that
          
            <span> shapes my thinking.</span>
          </h2>
        </div>

     
      </header>

      <ol className="timeline">
        {educationItems.map((education) => (
          <EducationItem
            key={education.id}
            education={education}
            reduceMotion={reduceMotion}
          />
        ))}
      </ol>

      <style jsx>{`
        .education-section {
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