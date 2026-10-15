import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

import profilePic from "../../public/images/2.jpg";

import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const statistics = [
  { value: 35, label: "Satisfied clients" },
  { value: 50, label: "Projects completed" },
  { value: 4, label: "Years of experience" },
];

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 65,
    damping: 22,
  });

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.min(value, Math.max(0, Math.round(latest))));
    });

    return unsubscribe;
  }, [springValue, value]);

  useEffect(() => {
    if (isInView && !reduceMotion) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, reduceMotion, value]);

  return (
    <span ref={ref} aria-hidden="true">
      {reduceMotion ? value : displayValue}
    </span>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>Thejas | About</title>

        <meta
          name="description"
          content="Meet Thejas B M — a web developer and UI/UX designer focused on thoughtful design, intuitive interfaces, and meaningful digital experiences."
        />
      </Head>

      <TransitionEffect />

      <main className="about-page">
        <div className="about-container">
          <header className="page-header">
            <p className="eyebrow">
              <span aria-hidden="true" />
              A LITTLE ABOUT ME
            </p>

            <h1>
              Passion fuels
           
              <span> purpose.</span>
            </h1>

            <p className="header-description">
              Bringing ideas to life through thoughtful design,
              creative problem-solving, and attention to detail.
            </p>
          </header>

          <section className="biography" aria-labelledby="biography-title">
        <div className="portrait-column">
  <div className="portrait-frame">
    <div className="portrait-image-wrap">
      <Image
        src={profilePic}
        alt="Portrait of Thejas B M"
        fill
        className="profile-image"
        priority
        sizes="(max-width: 600px) 90vw, (max-width: 800px) 440px, 40vw"
      />
    </div>
  </div>

  <div className="portrait-caption">
    <span className="caption-line" aria-hidden="true" />
    <span>Code. Design. Create.</span>
  </div>
</div>

            <div className="biography-content">
              <p className="section-eyebrow">THE PERSON BEHIND THE WORK</p>

              <h2 id="biography-title">
                Hi, I&apos;m
              
                <span> Thejas B M.</span>
              </h2>

              <p className="intro">
                A web developer and UI/UX designer who enjoys turning
                ideas into beautiful, functional digital experiences.
              </p>

              <p className="body-copy">
                With 3 years of experience, I approach every project with
                curiosity, care, and a focus on the people who will use it.
                My goal is to bring your vision to life through interfaces
                that feel clear, intuitive, and purposeful.
              </p>

              <p className="body-copy">
                I believe good design goes beyond appearance. It solves
                problems, simplifies interactions, and makes everyday
                experiences more enjoyable.
              </p>

              <p className="body-copy">
                Whether I&apos;m working on a website, an app, or another
                digital product, I bring the same commitment to thoughtful
                design and meaningful functionality.
              </p>

     <div className="contact-actions">
  <a
    href="mailto:thejasbm22@gmail.com"
    className="contact-link"
  >
    <svg
      className="contact-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m3 7 9 6 9-6" />
    </svg>

    <span className="contact-label">Email me</span>
    <span className="contact-arrow" aria-hidden="true">↗</span>
  </a>

  <a
    href="https://wa.me/919743506465"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-link"
  >
    <svg
      className="contact-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.84 1.49h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.5-8.41ZM12.05 21.84a9.94 9.94 0 0 1-5.06-1.39l-.36-.21-3.68.97.98-3.59-.24-.37a9.9 9.9 0 0 1-1.52-5.28c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.15 1.04 7.03 2.92a9.88 9.88 0 0 1 2.9 7.03c0 5.48-4.46 9.86-10 9.86Zm5.45-7.39c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.07-.8.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.25 5.16 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>

    <span className="contact-label">WhatsApp me</span>
    <span className="contact-arrow" aria-hidden="true">↗</span>
  </a>
</div>
            </div>
          </section>

          <section className="statistics" aria-label="Professional highlights">
            {statistics.map((stat) => (
              <div
                className="stat"
                key={stat.label}
                aria-label={`${stat.value}+ ${stat.label}`}
              >
                <div className="stat-number" aria-hidden="true">
                  <AnimatedNumber value={stat.value} />
                  <span className="stat-plus">+</span>
                </div>

                <p className="stat-label" aria-hidden="true">
                  {stat.label}
                </p>
              </div>
            ))}
          </section>

          <div className="detail-section">
            <Skills />
          </div>

          <div className="detail-section">
            <Experience />
          </div>

          <div className="detail-section">
            <Education />
          </div>
        </div>

        <style jsx>{`
          .about-page {
            width: 100%;
            background: #ffffff;
            color: #171019;
          }
.contact-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}
.contact-icon {
  display: block;
  width: 19px;
  height: 19px;
  flex-shrink: 0;
}

.contact-label {
  font-size: inherit;
  line-height: inherit;
}

.contact-arrow {
  margin-left: 2px;
  font-size: 20px;
  line-height: 1;
}
.contact-link,
.whatsapp-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  min-height: 48px;
  padding: 12px 20px;
  border: 1px solid transparent;
  border-radius: 999px;

  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
  text-decoration: none;

  transition:
    background 180ms ease,
    border-color 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.contact-link {
  border-color: #ff842b;
  background: #ff842b;
  color: #171019;
  box-shadow: 0 6px 18px rgba(255, 132, 43, 0.14);
}

.whatsapp-link {
  border-color: #d9c5d3;
  background: #ffffff;
  color: #48213f;
}

.contact-link > span,
.whatsapp-link > span {
  font-size: 21px;
  line-height: 1;
}

.contact-link:focus-visible,
.whatsapp-link:focus-visible {
  outline: 2px solid #791d35;
  outline-offset: 5px;
}

@media (hover: hover) {
  .contact-link:hover {
    background: #ff9b51;
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(255, 132, 43, 0.2);
  }

  .whatsapp-link:hover {
    border-color: #791d35;
    background: #fcf8fb;
    transform: translateY(-2px);
  }
}

@media (max-width: 360px) {
  .contact-actions {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-link,
  .whatsapp-link {
    transition: none;
  }

  .contact-link:hover,
  .whatsapp-link:hover {
    transform: none;
  }
}
          .about-container {
            width: min(1200px, calc(100% - 96px));
            margin-inline: auto;
            padding: 56px 0 72px;
          }

          .page-header {
           
            margin-bottom: 30px;
          }

          .eyebrow {
            display: flex;
            align-items: center;
            gap: 12px;
          
            color: #934111;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.16em;
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
            font-size: clamp(48px, 6vw, 80px);
            font-weight: 800;
            line-height: 1.04;
            letter-spacing: -0.055em;
          }

          h1 > span {
            color: #791d35;
          }

          .header-description {
           
            margin: 6px 0 0;
            color: #6b5d66;
            font-size: 14px;
            line-height: 1.85;
          }

          /* Spacious two-column biography */
          .biography {
            display: grid;
            grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
            align-items: center;
            gap: clamp(40px, 6vw, 88px);
          }

      .portrait-column {
  width: 100%;
  max-width: 440px;
  min-width: 0;
  margin-inline: auto;
}

.portrait-frame {
  width: 100%;
  padding: 12px;
  border: 1px solid #e8dce5;
  border-radius: 24px;
  background: #ffffff;
}
.portrait-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 16px;
  background: #f8f5f7;
}

.portrait-image-wrap :global(.profile-image) {
  object-fit: cover;
  object-position: center;
}
          .portrait-frame :global(.profile-image) {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 16px;
          }

          .portrait-caption {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 18px;
            color: #7b6975;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }

          .caption-line {
            width: 24px;
            height: 1px;
            background: #ae4b9d;
          }

          .biography-content {
            min-width: 0;
          }

          .section-eyebrow {
            margin: 0 0 18px;
            color: #934111;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.12em;
            line-height: 1.6;
          }

          .biography-content h2 {
            margin: 0;
            color: #321b26;
            font-size: clamp(36px, 4vw, 54px);
            font-weight: 750;
            line-height: 1.08;
            letter-spacing: -0.045em;
          }

          .biography-content h2 > span {
            color: #791d35;
          }

          .intro {
            margin: 24px 0 0;
            color: #48213f;
            font-size: 17px;
            font-weight: 500;
            line-height: 1.7;
          }

          .body-copy {
            margin: 18px 0 0;
            color: #6b5d66;
            font-size: 14px;
            line-height: 1.9;
          }

.contact-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  min-height: 48px;
 
  padding: 12px 22px;

  border: 1px solid #ff842b;
  border-radius: 999px;
  background: #ff842b;
  color: #171019;

  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
  text-decoration: none;

  box-shadow: 0 6px 18px rgba(255, 132, 43, 0.14);

  transition:
    background 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.contact-link > span {
  font-size: 21px;
  line-height: 1;
}

.contact-link:focus-visible {
  outline: 2px solid #791d35;
  outline-offset: 5px;
}


          /* Statistics are separate from the biography. */
          .statistics {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 24px;
            margin-top: 30px;
            padding: 36px 0;
            border-top: 1px solid #ece3e9;
            border-bottom: 1px solid #ece3e9;
          }

          .stat {
            padding-inline: 20px;
            text-align: center;
          }

          .stat + .stat {
            border-left: 1px solid #ece3e9;
          }

          .stat-number {
            display: flex;
            align-items: baseline;
            justify-content: center;
            color: #48213f;
            font-size: clamp(44px, 5vw, 66px);
            font-weight: 750;
            line-height: 1.1;
            letter-spacing: -0.055em;
            font-variant-numeric: tabular-nums;
          }

          .stat-plus {
            margin-left: 4px;
            color: #a94b13;
            font-size: 0.6em;
            font-weight: 500;
          }

          .stat-label {
            margin: 12px 0 0;
            color: #6b5d66;
            font-size: 12px;
            line-height: 1.6;
          }

          .detail-section {
            margin-top: 64px;
          }

          @media (hover: hover) {
             .contact-link:hover {
    background: #ff9b51;
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(255, 132, 43, 0.2);
    text-decoration: none;
  }

          }

          @media (max-width: 1000px) {
            .about-container {
              width: calc(100% - 64px);
              padding-top: 40px;
            }

            .page-header {
              margin-bottom: 48px;
            }

            .biography {
              gap: 36px;
            }

            .intro {
              font-size: 16px;
            }
          }

          @media (max-width: 800px) {
            .biography {
              grid-template-columns: minmax(0, 1fr);
              gap: 36px;
            }

           .portrait-column {
  width: 100%;
  max-width: 440px;
  margin-inline: auto;
}

            .biography-content {
              max-width: 640px;
              margin-inline: auto;
            }

            .statistics {
              margin-top: 44px;
            }

            .detail-section {
              margin-top: 48px;
            }
          }

          @media (max-width: 600px) {
            .about-container {
              width: calc(100% - 40px);
              padding: 28px 0 44px;
            }

            .page-header {
              margin-bottom: 34px;
            }

            .eyebrow {
              gap: 9px;
              margin-bottom: 18px;
              font-size: 9px;
              letter-spacing: 0.12em;
            }

            h1 {
              font-size: clamp(42px, 11vw, 60px);
            }

            .header-description {
              margin-top: 20px;
              font-size: 13px;
            }

            .portrait-column {
  max-width: 360px;
}

.portrait-frame {
  padding: 10px;
  border-radius: 20px;
}

.portrait-image-wrap {
  border-radius: 12px;
}

            .portrait-frame :global(.profile-image) {
              border-radius: 12px;
            }

            .portrait-caption {
              font-size: 9px;
            }

            .section-eyebrow {
              font-size: 9px;
            }

            .biography-content h2 {
              font-size: 38px;
            }

            .intro {
              margin-top: 20px;
              font-size: 16px;
            }

            .body-copy {
              font-size: 13px;
              line-height: 1.85;
            }

            .statistics {
              gap: 10px;
              margin-top: 36px;
              padding: 28px 0;
            }

            .stat {
              padding-inline: 6px;
            }

            .stat-number {
              font-size: clamp(34px, 9vw, 48px);
            }

            .stat-label {
              margin-top: 10px;
              font-size: 10px;
            }

            .detail-section {
              margin-top: 40px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .contact-link > span {
              transition: none;
            }

         
          }
        `}</style>
      </main>
    </>
  );
}