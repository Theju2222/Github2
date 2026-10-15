import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="logo-wrapper">
      <MotionLink
        href="/"
        className="portfolio-logo"
        aria-label="Thejas — home"
        whileHover={reduceMotion ? undefined : { y: -2, scale: 1.04 }}
        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <span className="logo-letter" aria-hidden="true">
          T<span className="logo-dot">.</span>
        </span>
      </MotionLink>

      <style jsx>{`
        .logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-block: 8px;
        }

        .logo-wrapper :global(.portfolio-logo) {
          position: relative;
          isolation: isolate;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;

          width: 64px;
          height: 64px;
          border: 1px solid transparent;
          border-radius: 50%;

          background:
            linear-gradient(135deg, #48213f, #171019 75%) padding-box,
            linear-gradient(
                135deg,
                #ff842b,
                rgba(243, 78, 170, 0.65) 50%,
                rgba(174, 75, 157, 0.25)
              )
              border-box;

          color: #ffffff;
          text-decoration: none;

          box-shadow:
            0 6px 18px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);

          transition: box-shadow 200ms ease;
          -webkit-tap-highlight-color: transparent;
        }

        .logo-letter {
          display: inline-flex;
          align-items: baseline;
          padding-left: 4px;
          font-size: 30px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -3px;
        }

        .logo-dot {
          color: #ff842b;
        }

        .logo-wrapper :global(.portfolio-logo:focus-visible) {
          outline: 2px solid #ff842b;
          outline-offset: 5px;
        }

        @media (hover: hover) {
          .logo-wrapper :global(.portfolio-logo:hover) {
            box-shadow:
              0 8px 24px rgba(0, 0, 0, 0.25),
              0 0 22px rgba(243, 78, 170, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }
        }

        @media (max-width: 600px) {
          .logo-wrapper :global(.portfolio-logo) {
            width: 54px;
            height: 54px;
          }

          .logo-letter {
            font-size: 26px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-wrapper :global(.portfolio-logo) {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;