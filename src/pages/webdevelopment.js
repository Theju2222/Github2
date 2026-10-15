import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { GithubIcon } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

import project1 from "../../public/images/projects/Picture83.png";
import project2 from "../../public/images/projects/Picture98.png";
import project3 from "../../public/images/projects/Picture108.png";
import project31 from "../../public/images/projects/Picture106.png";
import project30 from "../../public/images/projects/Picture107.png";
import project4 from "../../public/images/projects/Picture113.png";
import project5 from "../../public/images/projects/Picture103.png";
import project6 from "../../public/images/projects/Picture93.png";
import project7 from "../../public/images/projects/Picture43.png";
import project8 from "../../public/images/projects/Picture133.png";
import project9 from "../../public/images/projects/Picture88.png";

import project10 from "../../public/images/projects/7.png";
import project11 from "../../public/images/projects/1.png";
import project12 from "../../public/images/projects/6.png";
import project13 from "../../public/images/projects/2.png";
import project14 from "../../public/images/projects/5.png";
import project15 from "../../public/images/projects/4.png";
import project16 from "../../public/images/projects/3.png";
import project17 from "../../public/images/projects/IMG_1375.png";

const projects = [
  {
    id: "blrpods",
    title: "BlrPods",
    category: "Business",
    label: "Hospitality & Booking",
    image: project17,
    description:
      "A booking experience for smart sleeping pods, helping urban travellers and professionals explore a comfortable, private, and convenient place to stay.",
    website: "https://blrpods.com/",
    featured: false,
  },
  {
    id: "izb",
    title: "IZB",
    category: "Banking",
    label: "Banking Website",
    image: project1,
    description:
      "A banking website designed to make financial information and services easier to explore, with clear navigation and a customer-focused experience.",
    website: "https://izb.co.zm/",
  },
  {
    id: "techrowth",
    title: "Techrowth",
    category: "Business",
    label: "Business Website",
    image: project2,
    description:
      "A responsive business website presenting digital marketing and IT services, with clear service information and enquiry forms that help visitors connect.",
    website: "https://www.techrowth.com/",
  },
    {
    id: "hrms-blrpods",
    title: "HRMS – BlrPods",
    category: "Business",
    label: "HR Management System",
    image: project31,
 description:
  "An employee management platform for BlrPods, bringing attendance, leave requests, payroll, and employee records together to simplify everyday HR operations.",
   website: "https://hrm.blrpods.com/",
  },
   {
    id: "crm–fakhri-printing-works",
    title: "CRM – Fakhri Printing Works",
    category: "Business",
    label: "CRM Website",
    image: project30,
  description:
  "A customer relationship management platform for Fakhri Printing Works, designed to organise customer information and support clearer communication throughout the printing workflow.",
   website: "https://crm.blooming-greens.com/",
  },
  {
    id: "citizen-car",
    title: "Citizen Car",
    category: "Business",
    label: "Automotive Website",
    image: project3,
    description:
      "An automotive browsing experience that presents vehicle inventory clearly, helping visitors explore available cars and connect with the business.",
    website: "https://citizencars.netlify.app/",
  },
  {
    id: "business-listing",
    title: "Business Listing",
    category: "Business",
    label: "Business Discovery",
    image: project4,
    description:
      "A business discovery platform that brings local services together, helping visitors find businesses and connect with their communities.",
  },
  {
    id: "prolearn-box",
    title: "Prolearn-Box",
    category: "Business",
    label: "Education Website",
    image: project5,
    description:
      "An education website for a digital marketing institute, presenting courses and approachable experience for prospective students.",
  },
  {
    id: "venus-kart",
    title: "Venus Kart",
    category: "Shopping",
    label: "Online Shopping",
    image: project6,
    description:
      "An online shopping experience focused on clear product discovery and intuitive navigation, making it easier for customers to explore the collection.",
    website: "https://venus-kart.netlify.app/",
  },
  {
    id: "znbs",
    title: "ZNBS Corporate",
    category: "Banking",
    label: "Corporate Banking",
    image: project7,
    description:
      "A corporate banking website that organises financial service information into a clear digital experience, helping visitors find what they need.",
    website: "https://www.znbs.co.zm/",
  },
  {
    id: "izb-crm",
    title: "IZB CRM",
    category: "Banking",
    label: "Customer Management",
    image: project8,
    description:
      "A customer relationship management experience designed to support banking teams with more organised customer interactions and everyday operations.",
   
  },
  {
    id: "grandiose-art",
    title: "Grandiose Art",
    category: "Business",
    label: "Art & Creative Showcase",
    image: project9,
    description:
      "An art-focused website that gives creative work room to stand out, helping visitors explore collections through a visually engaging experience.",
    
  },
  {
    id: "budget-box",
    title: "Budget Box",
    category: "Personal Projects",
    label: "Expense Management",
    image: project10,
    description:
      "An online ledger for tracking income and expenses, with visual summaries that make spending patterns.",
    github: "https://github.com/Theju2222/Budget-Box",
  },
  {
    id: "hive-wear",
    title: "Hive Wear Tech",
    category: "Shopping",
    label: "Fashion Discovery",
    image: project11,
    description:
      "A fashion discovery experience for browsing clothing and accessories by colour, saving favourites, and sharing interesting finds with friends.",
    github: "https://github.com/Theju2222/Hive-Tech-Wear",
  },
  {
    id: "indian-tourism",
    title: "Indian Tourism",
    category: "Personal Projects",
    label: "Travel & Discovery",
    image: project12,
    description:
      "A virtual travel guide for exploring India, bringing information about attractions, places of interest, and travel experiences into one space.",
    github: "https://github.com/Theju2222/Indian-Tourism",
  },
  {
    id: "coolpics",
    title: "Coolpics",
    category: "Personal Projects",
    label: "Image Discovery",
    image: project13,
    description:
      "An image collection for virtual meeting backgrounds, with search, filtering, and previews to help users find a background that suits them.",
    github: "https://github.com/Theju2222/CoolPics",
  },
  {
    id: "hunger-captain",
    title: "Hunger Captain",
    category: "Personal Projects",
    label: "Digital Restaurant Menu",
    image: project14,
    description:
      "A visual restaurant menu that pairs food images with useful details, offering a clearer and more engaging alternative to browsing a menu.",
    github: "https://github.com/Theju2222/Hunger-Captain",
  },
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    category: "Personal Projects",
    label: "Social Experience",
    image: project15,
    description:
      "A social sharing project for publishing thoughts and pictures, with options to create, edit, and delete posts through a simple interface.",
    github: "https://github.com/Theju2222/Twitter-Clone",
  },
  {
    id: "react-redux",
    title: "React-Redux Project",
    category: "Personal Projects",
    label: "Interactive Web Project",
    image: project16,
    description:
      "A project exploring organised application state and consistent interface behaviour, with an emphasis on structured interactions.",
    github: "https://github.com/Theju2222/React-Redux-Project",
  },
];

const categories = [
  "All Projects",
  "Business",
  "Banking",
  "Shopping",
  "Personal Projects",
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ProjectCard({ project, index, reduceMotion, style }) {
  const number = String(index + 1).padStart(2, "0");

  return (
<motion.article
  style={style}
  className={`project-card ${project.featured ? "featured" : ""}`}
  aria-labelledby={`${project.id}-title`}
  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.08 }}
  transition={{
    duration: reduceMotion ? 0 : 0.45,
    ease: "easeOut",
  }}
>
    
      <div className="project-visual">
        <div className="image-stage">
          <Image
            src={project.image}
            alt={`${project.title} website preview`}
            fill
            className="project-image"
            priority={index === 0}
            sizes={
              project.featured
                ? "(max-width: 900px) 90vw, 55vw"
                : "(max-width: 700px) 90vw, 45vw"
            }
          />
        </div>

        <span className="visual-number" aria-hidden="true">
          {number}
        </span>

        {project.featured && (
          <span className="featured-badge">
            <span aria-hidden="true">✦</span>
            Featured project
          </span>
        )}
      </div>

      <div className="project-content">
        <div className="content-panel">
          <p className="category">
            <span aria-hidden="true" />
            {project.label}
          </p>

          <h2 id={`${project.id}-title`}>{project.title}</h2>

          <p className="project-description">{project.description}</p>

          <div className="project-actions">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
                aria-label={`Visit ${project.title} website`}
              >
                Visit website
                <ArrowIcon />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="source-button"
                aria-label={`View ${project.title} source on GitHub`}
              >
                <span className="github-icon">
                  <GithubIcon />
                </span>
                View source
                <ArrowIcon />
              </a>
            )}
          </div>

          <div className="project-bottom">
            <span className="project-caption">
              <span className="caption-dot" aria-hidden="true" />
              Built with purpose
            </span>

            <span className="project-index">
              PROJECT <span>{number}</span>
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          height: 100%;
          padding: 12px;
    
          border: 1px solid #e8dce5;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 6px 24px rgba(50, 27, 38, 0.035);
          transition:
            border-color 200ms ease,
            box-shadow 200ms ease;
        }

        
        .featured {
          display: grid;
          grid-column: 1 / -1;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
          gap: 12px;
        }

        .project-visual {
          position: relative;
          min-width: 0;
          overflow: hidden;
          border: 1px solid #eadfe7;
          border-radius: 16px;
          background: #f7f2f6;
        }

        .image-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        .image-stage :global(.project-image) {
          object-fit: contain;
          object-position: top center;
          transition: transform 450ms ease;
        }

        .visual-number {
          position: absolute;
          top: 12px;
          left: 12px;
          display: grid;
          place-items: center;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(72, 33, 63, 0.14);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.96);
          color: #48213f;
          font-size: 10px;
          font-weight: 700;
        }

        .featured-badge {
          position: absolute;
          top: 14px;
          right: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 10px;
          border: 1px solid #eadce6;
          border-radius: 999px;
          background: #ffffff;
          color: #791d35;
          font-size: 10px;
          font-weight: 600;
        }

        .featured-badge span {
          color: #ae4b9d;
        }

        .project-content {
          display: flex;
          flex: 1;
          min-width: 0;
          padding-top: 12px;
        }

        .featured .project-content {
          padding-top: 0;
        }

        .content-panel {
          position: relative;
          display: flex;
          flex: 1;
          flex-direction: column;
          min-width: 0;
          padding: 28px;
          overflow: hidden;
          border: 1px solid #e9dce5;
          border-radius: 16px;
          background: #ffffff;
        }

        .content-panel::before {
          content: "";
          position: absolute;
          top: 24px;
          bottom: 24px;
          left: 0;
          width: 3px;
          border-radius: 0 4px 4px 0;
          background: linear-gradient(
            to bottom,
            #ff842b,
            #ae4b9d 55%,
            #791d35
          );
        }

        .featured .content-panel {
          justify-content: center;
          padding: clamp(28px, 3vw, 42px);
        }

        .category {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0 0 16px;
          color: #934111;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.11em;
          line-height: 1.5;
          text-transform: uppercase;
        }

        .category > span {
          width: 18px;
          height: 2px;
          flex-shrink: 0;
          background: #ff842b;
        }

        h2 {
          margin: 0;
          color: #321b26;
          font-size: clamp(26px, 2.5vw, 34px);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.04em;
          overflow-wrap: anywhere;
        }

        .featured h2 {
          font-size: clamp(34px, 3.5vw, 46px);
        }

        .project-description {
          margin: 16px 0 22px;
          color: #655660;
          font-size: 14px;
          line-height: 1.85;
        }

        .project-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: auto;
          padding-bottom: 24px;
        }

        .visit-button,
        .source-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 44px;
          padding: 11px 16px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.4;
          text-decoration: none;
          transition:
            background 180ms ease,
            border-color 180ms ease,
            transform 180ms ease;
        }

        .visit-button {
          background: #ff842b;
          border-color: #ff842b;
          color: #171019;
        }

        .source-button {
          border-color: #dfd0db;
          background: #ffffff;
          color: #48213f;
        }

        .github-icon {
          display: inline-flex;
          width: 17px;
          height: 17px;
          flex-shrink: 0;
        }

        .project-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid #eee5eb;
        }

        .project-caption {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #655660;
          font-size: 10px;
        }

        .caption-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ae4b9d;
        }

        .project-index {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #7b6975;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .project-index > span {
          display: grid;
          place-items: center;
          width: 26px;
          height: 26px;
          border: 1px solid #e7d8e2;
          border-radius: 7px;
          color: #791d35;
          font-size: 10px;
          letter-spacing: 0;
        }

        .project-actions a:focus-visible {
          outline: 2px solid #791d35;
          outline-offset: 4px;
        }

        @media (hover: hover) {
          .project-card:hover {
            border-color: #cba9bf;
            box-shadow: 0 14px 36px rgba(50, 27, 38, 0.075);
          }

          .project-card:hover .image-stage :global(.project-image) {
            transform: scale(1.025);
          }

          .visit-button:hover {
            background: #ff9b51;
            transform: translateY(-2px);
          }

          .source-button:hover {
            background: #fcf8fb;
            border-color: #791d35;
            transform: translateY(-2px);
          }
        }

        @media (max-width: 900px) {
          .featured {
            grid-template-columns: minmax(0, 1fr);
          }

          .featured .content-panel {
            padding: 28px;
          }
        }

        @media (max-width: 700px) {
          .project-card {
            padding: 10px;
            border-radius: 20px;
          }

          .featured {
            gap: 10px;
          }

          .project-content {
            padding-top: 10px;
          }

          .featured .project-content {
            padding-top: 0;
          }

          .project-visual,
          .content-panel {
            border-radius: 12px;
          }

          .content-panel,
          .featured .content-panel {
            padding: 24px 22px;
          }

          h2,
          .featured h2 {
            font-size: clamp(26px, 7vw, 34px);
          }

          .project-description {
            font-size: 13px;
            line-height: 1.8;
          }

          .category {
            font-size: 9px;
          }

          .featured-badge {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .image-stage :global(.project-image),
          .visit-button,
          .source-button {
            transition: none;
          }

          .project-card:hover .image-stage :global(.project-image),
          .visit-button:hover,
          .source-button:hover {
            transform: none;
          }
        }
      `}</style>
    </motion.article>
  );
}

export default function WebProjects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [search, setSearch] = useState("");

  const reduceMotion = useReducedMotion();

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All Projects" ||
      project.category === activeCategory;

    const query = search.trim().toLowerCase();

    const matchesSearch =
      !query ||
      `${project.title} ${project.label} ${project.description}`
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesSearch;
  });

  const clearFilters = () => {
    setActiveCategory("All Projects");
    setSearch("");
  };

  return (
    <>
      <Head>
        <title>Thejas | Web Projects</title>

        <meta
          name="description"
          content="Explore Thejas's web projects, from business websites and digital experiences to thoughtfully crafted personal projects."
        />
      </Head>

      <TransitionEffect />

      <main className="projects-page">
        <div className="page-container">
          <header className="page-header">
            <div className="header-copy">
              <p className="eyebrow">
                <span aria-hidden="true" />
                WEB DESIGN & DEVELOPMENT
              </p>

              <h1>
                Thoughtfully built.
                <br />
                <span>Purposefully designed.</span>
              </h1>

              <p className="page-description">
                A collection of websites and digital experiences, bringing
                together clear design, practical functionality, and
                attention to detail.
              </p>
            </div>

            <div
              className="project-count"
              aria-label={`${projects.length} projects in this collection`}
            >
              <span className="count-number" aria-hidden="true">
                {String(projects.length).padStart(2, "0")}
              </span>

              <span className="count-label" aria-hidden="true">
                PROJECTS IN
                <br />
                THE COLLECTION
              </span>
            </div>
          </header>

          <section className="project-controls" aria-label="Filter projects">
            <div className="filter-list" role="group" aria-label="Categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-button ${
                    activeCategory === category ? "active" : ""
                  }`}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="search-field">
              <label className="sr-only" htmlFor="project-search">
                Search projects
              </label>

              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>

              <input
                id="project-search"
                type="search"
                placeholder="Search projects..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </section>

          <div className="results-bar">
            <p role="status" aria-live="polite">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>

            {(search || activeCategory !== "All Projects") && (
              <button
                type="button"
                onClick={clearFilters}
                className="clear-button"
              >
                Clear filters ×
              </button>
            )}
          </div>

          {filteredProjects.length > 0 ? (
            <section className="projects-grid" aria-label="Web projects">
              {filteredProjects.map((project) => (
                <ProjectCard
  key={project.id}
  project={project}
  index={projects.indexOf(project)}
  reduceMotion={reduceMotion}
  style={{ margin: "2rem" }}
/>
              ))}
            </section>
          ) : (
            <div className="empty-state">
              <span className="empty-symbol" aria-hidden="true">
                ⌕
              </span>

              <h2>No matching projects</h2>

              <p>Try a different search or browse the full collection.</p>

              <button type="button" onClick={clearFilters}>
                Show all projects
              </button>
            </div>
          )}

          <section className="contact-strip" aria-labelledby="contact-title">
            <div>
              <p className="contact-eyebrow">HAVE A PROJECT IN MIND?</p>

              <h2 id="contact-title">
                Let&apos;s build your next idea.
              </h2>
            </div>

            <a
              href="mailto:thejasbm22@gmail.com"
              className="contact-button"
            >
              Let&apos;s talk
              <ArrowIcon />
            </a>
          </section>
        </div>

        <style jsx>{`
          .projects-page {
            width: 100%;
            background: #ffffff;
            color: #171019;
          }

          .page-container {
            width: min(1280px, calc(100% - 96px));
            margin-inline: auto;
            padding: 56px 0 72px;
          }

          .page-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 32px;
            padding-bottom: 34px;
            border-bottom: 1px solid #ece3e9;
          }

          .header-copy {
            min-width: 0;
            max-width: 900px;
          }

          .eyebrow {
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 0 0 22px;
            color: #934111;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.15em;
            line-height: 1.6;
          }

          .eyebrow > span {
            width: 26px;
            height: 2px;
            flex-shrink: 0;
            background: #ff842b;
          }

          h1 {
            margin: 0;
            color: #321b26;
            font-size: clamp(40px, 5vw, 68px);
            font-weight: 800;
            line-height: 1.08;
            letter-spacing: -0.055em;
          }

          h1 > span {
            color: #791d35;
          }

          .page-description {
            max-width: 560px;
            margin: 24px 0 0;
            color: #655660;
            font-size: 14px;
            line-height: 1.85;
          }

          .project-count {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            flex-shrink: 0;
            padding-bottom: 4px;
            text-align: right;
          }

          .count-number {
            color: #48213f;
            font-size: 64px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: -0.06em;
          }

          .count-label {
            color: #7b6975;
            font-size: 9px;
            font-weight: 600;
            letter-spacing: 0.1em;
            line-height: 1.6;
          }

          .project-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 28px;
          }

          .filter-list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
          }

          .filter-button {
            min-height: 42px;
            padding: 10px 15px;
            border: 1px solid #e7dce4;
            border-radius: 999px;
            background: #ffffff;
            color: #655660;
            font-family: inherit;
            font-size: 11px;
            font-weight: 600;
            cursor: pointer;
            transition:
              background 180ms ease,
              color 180ms ease,
              border-color 180ms ease;
          }

          .filter-button.active {
            border-color: #48213f;
            background: #48213f;
            color: #ffffff;
          }

          .search-field {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 240px;
            max-width: 100%;
            min-height: 44px;
            padding: 10px 14px;
            border: 1px solid #e7dce4;
            border-radius: 12px;
            color: #7b6975;
          }

          .search-field:focus-within {
            border-color: #791d35;
            outline: 2px solid rgba(121, 29, 53, 0.1);
            outline-offset: 2px;
          }

          .search-field svg {
            flex-shrink: 0;
          }

          .search-field input {
            width: 100%;
            min-width: 0;
            padding: 0;
            border: none;
            outline: none;
            background: transparent;
            color: #321b26;
            font-family: inherit;
            font-size: 12px;
          }

          .search-field input::placeholder {
            color: #85717f;
          }

          .results-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
            margin: 18px 0 26px;
            min-height: 32px;
          }

          .results-bar p {
            margin: 0;
            color: #7b6975;
            font-size: 11px;
          }

          .clear-button {
            min-height: 36px;
            padding: 6px 0;
            border: none;
            background: transparent;
            color: #791d35;
            font-family: inherit;
            font-size: 11px;
            font-weight: 600;
            cursor: pointer;
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: stretch;
            gap: 28px;
          }

          .empty-state {
            padding: 64px 24px;
            border: 1px dashed #d8bfd0;
            border-radius: 20px;
            text-align: center;
          }

          .empty-symbol {
            color: #ae4b9d;
            font-size: 42px;
          }

          .empty-state h2 {
            margin: 12px 0 0;
            color: #321b26;
            font-size: 24px;
            font-weight: 700;
          }

          .empty-state p {
            margin: 12px 0 22px;
            color: #655660;
            font-size: 13px;
            line-height: 1.7;
          }

          .empty-state button {
            min-height: 44px;
            padding: 11px 18px;
            border: 1px solid #ff842b;
            border-radius: 999px;
            background: #ff842b;
            color: #171019;
            font-family: inherit;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
          }

          .contact-strip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 28px;
            margin-top: 52px;
            padding-top: 32px;
            border-top: 1px solid #ece3e9;
          }

          .contact-eyebrow {
            margin: 0 0 12px;
            color: #934111;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.13em;
            line-height: 1.6;
          }

          .contact-strip h2 {
            margin: 0;
            color: #321b26;
            font-size: clamp(26px, 3vw, 36px);
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.04em;
          }

          .contact-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
            flex-shrink: 0;
            min-height: 48px;
            padding: 13px 22px;
            border: 1px solid #ff842b;
            border-radius: 999px;
            background: #ff842b;
            color: #171019;
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
            transition: background 180ms ease;
          }

          .projects-page button:focus-visible,
          .contact-button:focus-visible {
            outline: 2px solid #791d35;
            outline-offset: 4px;
          }

          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }

          @media (hover: hover) {
            .filter-button:not(.active):hover {
              border-color: #cba9bf;
              background: #fcf8fb;
              color: #48213f;
            }

            .contact-button:hover {
              background: #ff9b51;
            }
          }

          @media (max-width: 1000px) {
            .page-container {
              width: calc(100% - 64px);
              padding-top: 40px;
            }

            .projects-grid {
              gap: 24px;
            }

            .search-field {
              flex: 1;
              min-width: 200px;
            }
          }

          @media (max-width: 700px) {
            .page-container {
              width: calc(100% - 40px);
              padding: 28px 0 44px;
            }

            .page-header {
              align-items: flex-start;
              gap: 16px;
              padding-bottom: 26px;
            }

            .eyebrow {
              gap: 8px;
              margin-bottom: 18px;
              font-size: 9px;
              letter-spacing: 0.1em;
            }

            h1 {
              font-size: clamp(32px, 7.5vw, 48px);
            }

            .page-description {
              margin-top: 18px;
              font-size: 13px;
            }

            .project-count {
              padding-top: 28px;
            }

            .count-number {
              font-size: 38px;
            }

            .count-label {
              font-size: 8px;
            }

            .project-controls {
              align-items: stretch;
              gap: 16px;
              margin-top: 22px;
            }

            .filter-button {
              min-height: 40px;
              padding: 9px 12px;
              font-size: 10px;
            }

            .search-field {
              width: 100%;
              flex-basis: 100%;
              min-width: 0;
            }

            .results-bar {
              margin-bottom: 20px;
            }

            .projects-grid {
              grid-template-columns: minmax(0, 1fr);
              gap: 24px;
            }

            .contact-strip {
              flex-direction: column;
              align-items: flex-start;
              gap: 22px;
              margin-top: 36px;
              padding-top: 28px;
            }

            .contact-strip h2 {
              font-size: 28px;
            }
          }

          @media (max-width: 360px) {
            .page-container {
              width: calc(100% - 32px);
            }

            .project-count {
              display: none;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .filter-button,
            .contact-button {
              transition: none;
            }
          }
        `}</style>
      </main>
    </>
  );
}