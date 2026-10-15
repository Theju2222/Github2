import Head from "next/head";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import TransitionEffect from "@/components/TransitionEffect";

import project1 from "../../public/images/projects/A1.png";
import project2 from "../../public/images/projects/A2.png";
import project3 from "../../public/images/projects/A3.png";


const projectItems = [
  {
    id: "izb",
    number: "01",
    title: "IZB App",
    category: "Finance",
    image: project1,
    description:
      "A mobile banking experience for Indo Zambia Bank, bringing account management, fund transfers, bill payments, and everyday banking services together in one convenient place.",
    featured: false,
  },
    {
    // Replace this placeholder with your actual fifth app.
    id: "bhoomee-store",
    number: "02",
    title: "Bhoomee Store",
    category: "Shopping",
    image: project2,
    description:
  "Bhoomee Store connects farmers directly with customers, making it easier to sell and buy vegetables without middlemen. The app brings local produce closer to households while helping farmers reach more customers.",
    featured: false,
  },
  {
    id: "taza-delivery",
    number: "03",
    title: "TaZa Delivery App",
    category: "Water Delivery",
    image: project3,
    description:
      "A convenient water delivery experience that helps customers place orders and track deliveries, making everyday essentials easier to manage.",
    featured: false,
  },


];

function ProjectCard({ project, index, reduceMotion }) {
  return (
    <motion.article
      className={`project-card ${project.featured ? "featured" : ""}`}
      aria-labelledby={`${project.id}-title`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        ease: "easeOut",
      }}
    >
      <div className="project-visual">
        <div className="image-stage">
          <Image
            src={project.image}
            alt={`${project.title} app preview`}
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
          {project.number}
        </span>

    
      </div>

      <div className="project-content">
        <div className="content-panel">
          <div className="category-row">
            <span className="category-line" aria-hidden="true" />
            <span className="category">{project.category}</span>
          </div>

          <h2 id={`${project.id}-title`}>{project.title}</h2>

          <p className="project-description">{project.description}</p>

          <div className="project-bottom">
        <span className="project-caption">
  <span className="caption-dot" aria-hidden="true" />
  Built with purpose
</span>

            <span className="project-index">
              PROJECT
              <span className="index-number">{project.number}</span>
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
            border-color 220ms ease,
            box-shadow 220ms ease;
        }

        .featured {
          display: grid;
          grid-column: 1 / -1;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
          align-items: stretch;
          gap: 12px;
        }

        /* Wide rectangular image frame */
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
          overflow: hidden;
        }

        .image-stage :global(.project-image) {
          object-fit: contain;
          object-position: center;
          transition: transform 450ms ease;
        }

        .visual-number {
          position: absolute;
          z-index: 1;
          top: 14px;
          left: 14px;
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border: 1px solid rgba(72, 33, 63, 0.14);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.95);
          color: #48213f;
          font-size: 11px;
          font-weight: 700;
        }

        .featured-badge {
          position: absolute;
          z-index: 1;
          top: 14px;
          right: 14px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 12px;
          border: 1px solid rgba(72, 33, 63, 0.12);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.96);
          color: #791d35;
          font-size: 10px;
          font-weight: 600;
          line-height: 1;
        }

        .featured-badge span {
          color: #ae4b9d;
          font-size: 13px;
        }

        /* Separate bordered description panel */
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
          flex-direction: column;
          flex: 1;
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

        .category-row {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 16px;
        }

        .category-line {
          width: 18px;
          height: 2px;
          flex-shrink: 0;
          background: #ff842b;
        }

        .category {
          color: #934111;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          line-height: 1.5;
          text-transform: uppercase;
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
          font-size: clamp(32px, 3.5vw, 46px);
        }

        .project-description {
          margin: 16px 0 24px;
          color: #655660;
          font-size: 14px;
          line-height: 1.85;
        }

        .project-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px solid #eee5eb;
        }

        .featured .project-bottom {
          margin-top: 6px;
        }

        .project-caption {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #655660;
          font-size: 11px;
          font-weight: 500;
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
          gap: 9px;
          color: #7b6975;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .index-number {
          display: grid;
          place-items: center;
          width: 27px;
          height: 27px;
          border: 1px solid #e7d8e2;
          border-radius: 8px;
          color: #791d35;
          font-size: 10px;
          letter-spacing: 0;
        }

        @media (hover: hover) {
          .project-card:hover {
            border-color: #cba9bf;
            box-shadow: 0 14px 36px rgba(50, 27, 38, 0.075);
          }

          .project-card:hover .image-stage :global(.project-image) {
            transform: scale(1.035);
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

          .project-visual,
          .content-panel {
            border-radius: 12px;
          }

          .project-content {
            padding-top: 10px;
          }

          .featured .project-content {
            padding-top: 0;
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
            margin-top: 14px;
            font-size: 13px;
            line-height: 1.8;
          }

          .visual-number {
            top: 10px;
            left: 10px;
            width: 29px;
            height: 29px;
            font-size: 10px;
          }

          .featured-badge {
            top: 10px;
            right: 10px;
            padding: 8px 9px;
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .image-stage :global(.project-image) {
            transition: none;
          }

          .project-card:hover .image-stage :global(.project-image) {
            transform: none;
          }
        }
      `}</style>
    </motion.article>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Head>
        <title>Thejas | App Projects</title>

        <meta
          name="description"
          content="Explore five selected app projects from Thejas — thoughtful design, practical functionality, and engaging digital experiences."
        />
      </Head>

      <TransitionEffect />

      <main className="projects-page">
        <div className="projects-container">
          <header className="page-header">
            <div className="header-content">
              <p className="eyebrow">
                <span aria-hidden="true" />
                SELECTED APP PROJECTS
              </p>

              <h1>
                Ideas brought
                <br />
                <span className="heading-accent">to life.</span>
              </h1>

              <p className="page-description">
                A collection of app experiences shaped by thoughtful design,
                practical functionality, and attention to detail.
              </p>
            </div>

            <div
              className="collection-note"
              aria-label={`${projectItems.length} selected projects`}
            >
              <span className="collection-number" aria-hidden="true">
                {String(projectItems.length).padStart(2, "0")}
              </span>

              <span className="collection-label" aria-hidden="true">
                Selected
                <br />
                projects
              </span>
            </div>
          </header>

          <section
            className="projects-grid"
            aria-label="Selected app projects"
          >
            {projectItems.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </section>

          <section
            className="contact-strip"
            aria-labelledby="contact-title"
          >
            <div className="contact-content">
              <p className="contact-eyebrow">
                HAVE SOMETHING IN MIND?
              </p>

              <h2 id="contact-title">
                Let’s bring your next idea to life.
              </h2>
            </div>

            <a
              href="mailto:thejasbm22@gmail.com"
              className="contact-button"
            >
              Let&apos;s talk
              <span aria-hidden="true">↗</span>
            </a>
          </section>
        </div>

        <style jsx>{`
          .projects-page {
            width: 100%;
            background: #ffffff;
            color: #171019;
          }

          .projects-container {
            width: min(1280px, calc(100% - 96px));
            margin-inline: auto;
            padding: 56px 0 72px;
          }

          .page-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;
            margin-bottom: 42px;
            padding-bottom: 36px;
            border-bottom: 1px solid #ece3e9;
          }

          .header-content {
            max-width: 720px;
            min-width: 0;
          }

          .eyebrow {
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 0 0 22px;
            color: #934111;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.16em;
            line-height: 1.6;
          }

          .eyebrow span {
            width: 28px;
            height: 2px;
            flex-shrink: 0;
            background: #ff842b;
          }

          h1 {
            margin: 0;
            color: #321b26;
            font-size: clamp(48px, 6vw, 80px);
            font-weight: 800;
            line-height: 1.04;
            letter-spacing: -0.06em;
          }

          .heading-accent {
            color: #791d35;
          }

          .page-description {
            max-width: 500px;
            margin: 24px 0 0;
            color: #655660;
            font-size: 15px;
            line-height: 1.85;
          }

          .collection-note {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-shrink: 0;
            padding-bottom: 4px;
          }

          .collection-number {
            color: #48213f;
            font-size: 64px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: -0.06em;
          }

          .collection-label {
            color: #7b6975;
            font-size: 11px;
            line-height: 1.6;
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: stretch;
            gap: 32px;
          }

          .contact-strip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 28px;
            margin-top: 56px;
            padding-top: 34px;
            border-top: 1px solid #ece3e9;
          }

          .contact-content {
            min-width: 0;
          }

          .contact-eyebrow {
            margin: 0 0 10px;
            color: #934111;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.14em;
            line-height: 1.6;
          }

          .contact-strip h2 {
            margin: 0;
            color: #321b26;
            font-size: clamp(24px, 2.5vw, 34px);
            font-weight: 700;
            line-height: 1.25;
            letter-spacing: -0.04em;
          }

          .contact-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
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
            transition:
              background 180ms ease,
              transform 180ms ease;
          }

          .contact-button span {
            font-size: 20px;
            line-height: 1;
          }

          .contact-button:focus-visible {
            outline: 2px solid #791d35;
            outline-offset: 5px;
          }

          @media (hover: hover) {
            .contact-button:hover {
              background: #ff9b51;
              transform: translateY(-2px);
            }
          }

          @media (max-width: 1000px) {
            .projects-container {
              width: calc(100% - 64px);
              padding-top: 40px;
            }

            .projects-grid {
              gap: 24px;
            }

            .page-header {
              gap: 28px;
            }
          }

          @media (max-width: 700px) {
            .projects-container {
              width: calc(100% - 40px);
              padding: 28px 0 44px;
            }

            .page-header {
              align-items: flex-start;
              gap: 18px;
              margin-bottom: 28px;
              padding-bottom: 26px;
            }

            .eyebrow {
              gap: 9px;
              margin-bottom: 18px;
              font-size: 9px;
              letter-spacing: 0.1em;
            }

            .eyebrow span {
              width: 20px;
            }

            h1 {
              font-size: clamp(40px, 9vw, 60px);
            }

            .page-description {
              margin-top: 18px;
              font-size: 13px;
            }

            .collection-note {
              flex-direction: column;
              align-items: flex-end;
              gap: 6px;
              padding-top: 30px;
              text-align: right;
            }

            .collection-number {
              font-size: 38px;
            }

            .collection-label {
              font-size: 9px;
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
              font-size: 27px;
            }
          }

          @media (max-width: 360px) {
            .projects-container {
              width: calc(100% - 32px);
            }

            .collection-note {
              display: none;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .contact-button {
              transition: none;
            }

            .contact-button:hover {
              transform: none;
            }
          }
        `}</style>
      </main>
    </>
  );
}