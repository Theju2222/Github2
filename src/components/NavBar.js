import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Logo from "@/components/Logo";
import { GithubIcon } from "./Icons";

import styles from "../styles/NavBar.module.css";

const navigation = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/webdevelopment", title: "Web Development" },
  { href: "/appdevelopment", title: "App Development" },
];

const NavBar = () => {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  const isActive = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    }

    return (
      router.pathname === href ||
      router.pathname.startsWith(`${href}/`)
    );
  };

  // Close the menu after navigation.
  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  // Close with Escape or a click outside the header.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  // Reset the mobile menu when returning to desktop.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1201px)");

    const handleChange = (event) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.inner}>
        {/* Desktop navigation */}
        <nav
          className={styles.desktopNavigation}
          aria-label="Main navigation"
        >
          {navigation.map(({ href, title }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${
                isActive(href) ? styles.active : ""
              }`}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {title}
              <span className={styles.linkIndicator} aria-hidden="true" />
            </Link>
          ))}
        </nav>

        {/* Keep your existing logo */}
        <div className={styles.logo}>
          <Logo />
        </div>

        {/* Desktop and mobile actions */}
        <div className={styles.actions}>
          <a
            href="https://github.com/Theju2222"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
            aria-label="Visit Thejas on GitHub"
          >
            <GithubIcon className={styles.githubIcon} />
          </a>

          <a
            href="mailto:thejasbm22@gmail.com"
            className={styles.contactButton}
          >
            <span>Let&apos;s talk</span>

            <span className={styles.contactArrow} aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </span>
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className={`${styles.menuButton} ${
              isOpen ? styles.menuButtonOpen : ""
            }`}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className={styles.mobileNavigation}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: reduceMotion ? 0 : -8,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.2,
              }}
            >
              <div className={styles.mobileHeading}>
                <span>EXPLORE</span>
                <span className={styles.mobileHeadingLine} />
              </div>

              <div className={styles.mobileLinks}>
                {navigation.map(({ href, title }, index) => (
                  <Link
                    key={href}
                    href={href}
                    className={`${styles.mobileLink} ${
                      isActive(href) ? styles.mobileLinkActive : ""
                    }`}
                    aria-current={isActive(href) ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={styles.mobileLinkContent}>
                      <span className={styles.mobileNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {title}
                    </span>

                    <span className={styles.mobileArrow} aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>

              <div className={styles.mobileFooter}>
                <span>Have a project in mind?</span>

                <a
                  href="mailto:thejasbm22@gmail.com"
                  onClick={() => setIsOpen(false)}
                >
                  Let&apos;s build it together ↗
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;