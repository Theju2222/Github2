import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import profilePic from "../../public/images/1.png";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thejas | Full-Stack Developer</title>

     <meta
  name="description"
  content="Thejas's portfolio — turning ideas into thoughtful digital experiences through code and design."
/>
      </Head>

      <TransitionEffect />

      <main className="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="portrait">
            <Image
              src={profilePic}
              alt="Illustrated portrait of Thejas, full-stack developer"
              className="profile-image"
              priority
              sizes="(max-width: 600px) 90vw, (max-width: 900px) 65vw, 45vw"
            />
          </div>

          <div className="hero-content">
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              HEY, I&apos;M THEJAS
            </p>

            <h1 id="hero-title">
              Turning ideas into
              <span className="heading-accent"> digital experiences.</span>
            </h1>

          <p className="role">
  Full-Stack Developer
  <span aria-hidden="true"> / </span>
  Creative Problem Solver
</p>

<p className="description">
  I turn ideas into engaging digital experiences with thoughtful design
  and clean code. My focus is on building intuitive, visually polished
  web applications that bring your vision to life.
</p>

<p className="supporting-text">
  Explore my latest projects and see creativity meet functionality.
</p>

            <div className="hero-actions">
              <a
                href="/Thejas-Resume.pdf"
                className="resume-button"
                download
              >
                Download Resume

                <span className="resume-icon" aria-hidden="true">
                  <LinkArrow />
                </span>
              </a>

              <a href="tel:+919743506465" className="contact-button">
                Let&apos;s talk
                <span aria-hidden="true">↗</span>
              </a>
            </div>

      

            <Link href="/webdevelopment" className="projects-link">
              Explore my projects
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <style jsx>{`
          .home {
            width: 100%;
            background: #ffffff;
            color: #171019;
          }

          .hero {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
            align-items: center;
            gap: clamp(32px, 5vw, 80px);

            width: min(1320px, calc(100% - 96px));
            margin-inline: auto;
            
          }

          .portrait {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 0;
          }

          .portrait :global(.profile-image) {
            display: block;
            width: 100%;
            max-width: 560px;
            height: auto;
            object-fit: contain;
          }

          .hero-content {
            min-width: 0;
          }

          .eyebrow {
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 0 0 22px;
            color: #9a430e;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.16em;
          }

          .eyebrow-line {
            width: 28px;
            height: 2px;
            flex-shrink: 0;
            background: #ff842b;
          }

          h1 {
            margin: 0;
            color: #321b26;
            font-size: clamp(42px, 4.5vw, 68px);
            font-weight: 800;
            line-height: 1.08;
            letter-spacing: -0.055em;
          }

          .heading-accent {
            color: #791d35;
          }

          .role {
            margin: 24px 0 0;
            color: #48213f;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.7;
          }

          .role span {
            margin-inline: 7px;
            color: #ae4b9d;
          }

          .description {
            max-width: 540px;
            margin: 18px 0 0;
            color: #5f535c;
            font-size: 15px;
            line-height: 1.9;
          }

          .supporting-text {
            margin: 12px 0 0;
            color: #5f535c;
            font-size: 14px;
            line-height: 1.8;
          }

          .hero-actions {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
            margin-top: 30px;
          }

          .resume-button,
          .contact-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            min-height: 50px;
            padding: 13px 22px;
            border-radius: 999px;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            transition:
              transform 180ms ease,
              background 180ms ease,
              border-color 180ms ease,
              box-shadow 180ms ease;
          }

          .resume-button {
            border: 1px solid #ff842b;
            background: #ff842b;
            color: #171019;
            box-shadow: 0 6px 18px rgba(255, 132, 43, 0.14);
          }

          .resume-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 19px;
            height: 19px;
            flex-shrink: 0;
          }

          .contact-button {
            border: 1px solid #dfd3dc;
            background: #ffffff;
            color: #48213f;
          }

          .contact-button span {
            color: #791d35;
            font-size: 21px;
            line-height: 1;
          }

          .expertise {
            margin-top: 34px;
            padding-top: 24px;
            border-top: 1px solid #ece4e9;
          }

          .expertise-label {
            display: block;
            margin-bottom: 12px;
            color: #71616c;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.16em;
          }

          .technology-list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .technology-list li {
            padding: 7px 12px;
            border: 1px solid #e9dfe6;
            border-radius: 8px;
            background: #ffffff;
            color: #48213f;
            font-size: 12px;
            font-weight: 600;
            line-height: 1.4;
          }

          .hero-content :global(.projects-link) {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            min-height: 44px;
            margin-top: 16px;
            color: #791d35;
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
          }

          .projects-link span {
            font-size: 19px;
          }

          .hero a:focus-visible,
          .hero-content :global(.projects-link:focus-visible) {
            outline: 2px solid #791d35;
            outline-offset: 5px;
          }

          @media (hover: hover) {
            .resume-button:hover {
              transform: translateY(-2px);
              background: #ff9b51;
              border-color: #ff9b51;
              box-shadow: 0 10px 24px rgba(255, 132, 43, 0.2);
            }

            .contact-button:hover {
              transform: translateY(-2px);
              border-color: #791d35;
              background: #fcf8fb;
            }

            .hero-content :global(.projects-link:hover) {
              text-decoration: underline;
              text-underline-offset: 5px;
            }
          }

          @media (max-width: 1100px) {
            .hero {
              width: calc(100% - 64px);
              gap: 32px;
              padding: 48px 0 64px;
            }

            h1 {
              font-size: clamp(40px, 4.8vw, 54px);
            }

            .role {
              font-size: 13px;
            }

            .description {
              font-size: 14px;
            }
          }

          @media (max-width: 900px) {
            .hero {
              grid-template-columns: minmax(0, 1fr);
              gap: 32px;
              padding-top: 28px;
            }

            .portrait {
              width: min(65%, 440px);
              margin-inline: auto;
            }

            .hero-content {
              max-width: 640px;
              margin-inline: auto;
              text-align: center;
            }

            .eyebrow,
            .hero-actions,
            .technology-list {
              justify-content: center;
            }

            h1 {
              font-size: clamp(42px, 6.5vw, 60px);
            }

            .description {
              margin-inline: auto;
            }
          }

          @media (max-width: 600px) {
            .hero {
              width: calc(100% - 40px);
              gap: 24px;
              padding: 20px 0 44px;
            }

            .portrait {
              width: min(90%, 360px);
            }

            .eyebrow {
              gap: 9px;
              margin-bottom: 18px;
              font-size: 10px;
              letter-spacing: 0.13em;
            }

            .eyebrow-line {
              width: 22px;
            }

            h1 {
              font-size: clamp(34px, 8.5vw, 48px);
              line-height: 1.12;
            }

            .role {
              margin-top: 20px;
              font-size: 12px;
            }

            .role span {
              margin-inline: 4px;
            }

            .description {
              margin-top: 16px;
              font-size: 14px;
              line-height: 1.8;
            }

            .supporting-text {
              font-size: 13px;
            }

            .hero-actions {
              gap: 12px;
              margin-top: 24px;
            }

            .resume-button,
            .contact-button {
              min-height: 48px;
              padding: 12px 18px;
              font-size: 13px;
            }

            .expertise {
              margin-top: 28px;
              padding-top: 22px;
            }

            .technology-list {
              gap: 8px;
            }

            .technology-list li {
              padding: 7px 10px;
              font-size: 11px;
            }
          }

          @media (max-width: 360px) {
            .hero-actions {
              flex-direction: column;
              align-items: stretch;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .resume-button,
            .contact-button {
              transition: none;
            }

            .resume-button:hover,
            .contact-button:hover {
              transform: none;
            }
          }
        `}</style>
      </main>
    </>
  );
}