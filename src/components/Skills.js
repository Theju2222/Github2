import React from "react";
import { motion, useReducedMotion } from "framer-motion";


/*
  Enable these only if you use them.
  Add other skills to the appropriate group below.
*/
const includeTypeScript = false;
const includeTailwind = false;


const skillGroups = [
  {
    id: "foundations",
    number: "01",
    title: "Web Foundations",
    description: "The building blocks of clear, interactive interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      ...(includeTypeScript ? ["TypeScript"] : []),
    ],
  },
  {
    id: "interfaces",
    number: "02",
    title: "Interface Development",
    description: "Tools for creating responsive web experiences.",
    skills: [
      "React.js",
      "Next.js",
      "Bootstrap",
      ...(includeTailwind ? ["Tailwind CSS"] : []),
    ],
  },
  {
    id: "applications",
    number: "03",
    title: "Application Development",
    description: "Frameworks and services that support application features.",
    skills: [".NET", "Django", "Firebase"],
  },
  {
    id: "design-cloud",
    number: "04",
    title: "Design & Cloud",
    description: "Tools that support design and application delivery.",
    skills: ["Figma", "Azure"],
  },
];


function SkillGroup({ group, reduceMotion }) {
  return (
    <motion.article
      className="skill-group"
      aria-labelledby={`${group.id}-title`}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: "easeOut",
      }}
    >
      <div className="group-heading">
        <span className="group-number" aria-hidden="true">
          {group.number}
        </span>


        <h3 id={`${group.id}-title`}>{group.title}</h3>
      </div>


      <p className="group-description">{group.description}</p>


      <ul className="skill-list">
        {group.skills.map((skill) => (
          <li key={skill}>
            <span className="skill-dot" aria-hidden="true" />
            {skill}
          </li>
        ))}
      </ul>


      <style jsx>{`
     .skill-group {
  position: relative;
  isolation: isolate;
  min-width: 0;
  padding: 30px;
  overflow: hidden;

  border: 1px solid transparent;
  border-radius: 18px;

  background:
    linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(
      135deg,
      #dfc5d6 0%,
      #eee5eb 45%,
      #e7b99c 100%
    ) border-box;

  box-shadow: 0 6px 22px rgba(50, 27, 38, 0.035);

  transition:
    transform 200ms ease,
    box-shadow 200ms ease;
}

/* Small accent along the top edge */
.skill-group::before {
  content: "";
  position: absolute;
  top: 0;
  left: 30px;
  width: 56px;
  height: 3px;
  border-radius: 0 0 4px 4px;
  background: linear-gradient(90deg, #ff842b, #ae4b9d);
  pointer-events: none;
}

/* Restrained glow behind the card content */
.skill-group::after {
  content: "";
  position: absolute;
  z-index: -1;
  right: -60px;
  bottom: -80px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(174, 75, 157, 0.07),
    transparent 70%
  );
  pointer-events: none;
}

@media (hover: hover) {
  .skill-group:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(50, 27, 38, 0.075);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-group {
    transition: none;
  }

  .skill-group:hover {
    transform: none;
  }
}


        .group-heading {
          display: flex;
          align-items: center;
          gap: 14px;
        }


        .group-number {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border: 1px solid #eadce6;
          border-radius: 10px;
          color: #791d35;
          font-size: 10px;
          font-weight: 700;
        }


        h3 {
          margin: 0;
          color: #321b26;
          font-size: 21px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.025em;
        }


        .group-description {
          margin: 18px 0 0;
          color: #6b5d66;
          font-size: 13px;
          line-height: 1.8;
        }


        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
        }


        .skill-list li {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border: 1px solid #e9dfe6;
          border-radius: 999px;
          background: #fcf9fb;
          color: #48213f;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
        }


        .skill-dot {
          width: 5px;
          height: 5px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #ae4b9d;
        }


        @media (max-width: 600px) {
          .skill-group {
            padding: 24px 20px;
            border-radius: 16px;
          }


          .group-heading {
            gap: 12px;
          }


          h3 {
            font-size: 19px;
          }


          .group-description {
            font-size: 12px;
          }


          .skill-list {
            gap: 8px;
            margin-top: 20px;
          }


          .skill-list li {
            padding: 9px 12px;
            font-size: 11px;
          }
        }
      `}</style>
    </motion.article>
  );
}


export default function Skills() {
  const reduceMotion = useReducedMotion();


  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <header className="skills-header">
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" />
            MY TOOLKIT
          </p>


          <h2 id="skills-title">
            Skills that bring
          
            <span> ideas to life.</span>
          </h2>
        </div>


     
      </header>


      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.id}
            group={group}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>


      <style jsx>{`
        .skills-section {
          width: 100%;
          background: #ffffff;
          color: #171019;
        }


        .skills-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 32px;
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


        .eyebrow span {
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


        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }


        @media (max-width: 800px) {
          .skills-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }


          .section-description {
            max-width: 520px;
          }
        }


        @media (max-width: 600px) {
          .skills-header {
            margin-bottom: 24px;
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


          .skills-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}

