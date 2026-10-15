import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">
            <span className="copyright-name">
              © {new Date().getFullYear()} Thejas.
            </span>
            <span className="copyright-rights">All rights reserved.</span>
          </p>

          <p className="footer-credit">
            <span>Built with</span>

            <span className="heart" role="img" aria-label="love">
              ♡
            </span>

            <span>by</span>

            <Link href="/" className="credit-link">
              Thejas
            </Link>
          </p>

          <nav className="footer-links" aria-label="Footer contact links">
            <a
              href="mailto:thejasbm22@gmail.com"
              className="text-link"
            >
              Email
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/Theju2222"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>

            <span className="links-divider" aria-hidden="true" />

            <a
              href="https://wa.me/919743506465"
              target="_blank"
              rel="noopener noreferrer"
              className="hello-button"
            >
              Say Hello
              <span className="button-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .portfolio-footer {
          position: relative;
          isolation: isolate;
          width: 100%;
          color: #ffffff;
          background:
            radial-gradient(
              ellipse at 95% 100%,
              rgba(174, 75, 157, 0.14),
              transparent 55%
            ),
            linear-gradient(
              110deg,
              #171019 0%,
              #281723 50%,
              #321b26 100%
            );
        }

        /* A subtle gradient divider rather than a heavy border. */
        .portfolio-footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.05),
            rgba(174, 75, 157, 0.45) 35%,
            rgba(255, 132, 43, 0.45) 70%,
            rgba(255, 255, 255, 0.05)
          );
          pointer-events: none;
        }

        .footer-container {
          width: min(1320px, calc(100% - 96px));
          margin-inline: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 24px;
          
          padding: 12px 0;
        }

        .copyright {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          margin: 0;
          font-size: 12px;
          line-height: 1.6;
        }

        .copyright-name {
          color: #f0e8ed;
          font-weight: 600;
        }

        .copyright-rights {
          color: #cbb5c5;
          font-size: 11px;
        }

        .footer-credit {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 6px;
          margin: 0;
          color: #d9c4d1;
          font-size: 12px;
          line-height: 1.6;
        }

        .heart {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-inline: 1px;
          color: #ff842b;
          font-size: 24px;
          line-height: 1;
        }

        .footer-credit :global(.credit-link) {
          position: relative;
          color: #ffffff;
          font-weight: 600;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .footer-credit :global(.credit-link)::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #ff842b;
          opacity: 0.6;
          transition: opacity 180ms ease;
        }

        .footer-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 20px;
          min-width: 0;
        }

        .text-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          min-height: 44px;
          color: #e7d9e2;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .text-link span {
          color: #c3a7bc;
          font-size: 15px;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .links-divider {
          flex-shrink: 0;
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.16);
        }

        .hello-button {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 44px;
          padding: 6px 7px 6px 17px;
          border: 1px solid rgba(255, 132, 43, 0.4);
          border-radius: 999px;
          background: #ff842b;
          color: #171019;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.2;
          text-decoration: none;
          white-space: nowrap;
          transition:
            background 180ms ease,
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .button-arrow {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(23, 16, 25, 0.1);
          color: #171019;
          font-size: 19px;
          transition: transform 180ms ease;
        }

        .footer-links a:focus-visible,
        .footer-credit :global(.credit-link:focus-visible) {
          outline: 2px solid #ff842b;
          outline-offset: 5px;
          border-radius: 4px;
        }

        .footer-links .hello-button:focus-visible {
          border-radius: 999px;
        }

        @media (hover: hover) {
          .text-link:hover,
          .footer-credit :global(.credit-link:hover) {
            color: #ff842b;
          }

          .text-link:hover span {
            color: #ff842b;
            transform: translate(2px, -2px);
          }

          .footer-credit :global(.credit-link:hover)::after {
            opacity: 1;
          }

          .hello-button:hover {
            background: #ff9b51;
            transform: translateY(-2px);
            box-shadow: 0 6px 22px rgba(255, 132, 43, 0.16);
          }

          .hello-button:hover .button-arrow {
            transform: rotate(8deg);
          }
        }

        /* Smaller desktops and tablets */
        @media (max-width: 1100px) {
          .footer-container {
            width: calc(100% - 64px);
          }

          .footer-content {
            grid-template-columns: 1fr auto;
            gap: 16px 24px;
          }

          .copyright {
            grid-column: 1;
            grid-row: 1;
          }

          .footer-links {
            grid-column: 2;
            grid-row: 1;
          }

          .footer-credit {
            grid-column: 1 / -1;
            padding-top: 16px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }
        }

        /* Phones */
        @media (max-width: 600px) {
          .footer-container {
            width: calc(100% - 40px);
          }

          .footer-content {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
            padding: 26px 0 22px;
          }

          .copyright {
            grid-column: 1;
            grid-row: 2;
            align-items: center;
            text-align: center;
          }

          .footer-links {
            grid-column: 1;
            grid-row: 1;
            justify-content: center;
            gap: 18px;
          }

          .footer-credit {
            grid-column: 1;
            grid-row: 3;
            padding-top: 16px;
            font-size: 11px;
          }

          .text-link {
            font-size: 12px;
          }

          .hello-button {
            gap: 9px;
            padding-left: 14px;
          }
        }

        @media (max-width: 360px) {
          .footer-container {
            width: calc(100% - 32px);
          }

          .footer-links {
            gap: 12px;
          }

          .links-divider {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .text-link,
          .text-link span,
          .hello-button,
          .button-arrow,
          .footer-credit :global(.credit-link),
          .footer-credit :global(.credit-link)::after {
            transition: none;
          }

          .hello-button:hover,
          .hello-button:hover .button-arrow,
          .text-link:hover span {
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;