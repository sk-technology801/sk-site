"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        :root {
          --bg: #0f0f0f;
          --surface: #1f1f1f;
          --text: #f5f5f5;
          --muted: #777;
        }

        .header {
          background: var(--bg);
          color: var(--text);
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: saturate(180%) blur(10px);
        }

        .inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.375rem;
          text-decoration: none;
          color: var(--text);
        }

        .logo svg {
          background: var(--text);
          border-radius: 6px;
          padding: 5px;
        }

        nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link {
          position: relative;
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          color: var(--text);
          overflow: hidden;
          padding: 0.25rem 0;
          cursor: pointer;
        }

        /* slide-down effect: initial above and invisible, on hover slide into place */
        .nav-link .text {
          display: inline-block;
          transform: translateY(-10px);
          opacity: 0;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .nav-link:hover .text {
          transform: translateY(0);
          opacity: 1;
        }

        .nav-link .fallback {
          position: absolute;
          inset: 0;
          pointer-events: none;
          color: transparent;
          text-shadow: 0 0 0 var(--text);
        }

        .services {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .services.open .chevron {
          transform: rotate(180deg);
        }

        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: var(--surface);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 0.5rem 0;
          min-width: 14rem;
          box-shadow: 0 24px 64px -8px rgba(0, 0, 0, 0.6);
          opacity: 0;
          visibility: hidden;
          transform: translateY(6px);
          transition: all 0.25s ease;
          z-index: 30;
        }

        .dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown a {
          display: block;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text);
          text-decoration: none;
        }

        .dropdown a:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .cta {
          padding: 0.55rem 1.4rem;
          border-radius: 999px;
          background: #ffffff;
          color: #0f0f0f;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.9rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap;
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px -4px rgba(255, 255, 255, 0.25);
        }

        .toggle-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text);
        }

        .mobile-menu {
          display: none;
          width: 100%;
          margin-top: 0.5rem;
          background: var(--surface);
          border-radius: 8px;
          padding: 1rem;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-links a {
          display: block;
          padding: 0.6rem 0;
          font-weight: 500;
          color: var(--text);
          text-decoration: none;
        }

        .mobile-services {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 0.5rem 0;
        }

        @media (max-width: 960px) {
          nav {
            display: none;
          }
          .toggle-btn {
            display: inline-flex;
          }
        }
      `}</style>

      <header className="header">
        <div className="inner">
          <Link href="/" className="logo" aria-label="Home">
            <Code className="h-6 w-6" />
            <span>SoftWareHouse</span>
          </Link>

          <nav aria-label="Primary navigation">
            <Link href="/" className="nav-link">
              <span className="fallback">Home</span>
              <span className="text">Home</span>
            </Link>

            <Link href="/about" className="nav-link">
              <span className="fallback">About</span>
              <span className="text">About</span>
            </Link>

            <div className={`services ${isServicesOpen ? "open" : ""}`}>
              <button
                onClick={() => setIsServicesOpen((o) => !o)}
                aria-expanded={isServicesOpen}
                aria-label="Services"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "inherit",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              >
                <span className="nav-link" style={{ padding: 0, marginRight: 4 }}>
                  <span className="fallback">Services</span>
                  <span className="text">Services</span>
                </span>
                <ChevronDown className="chevron" size={16} />
              </button>
              <div className={`dropdown ${isServicesOpen ? "open" : ""}`}>
                <Link href="/services/web-development">Web Development</Link>
                <Link href="/services/mobile-apps">Mobile Apps</Link>
                <Link href="/services/cloud-solutions">Cloud Solutions</Link>
                <Link href="/services/consulting">IT Consulting</Link>
              </div>
            </div>

            <Link href="/portfolio" className="nav-link">
              <span className="fallback">Portfolio</span>
              <span className="text">Portfolio</span>
            </Link>

            <Link href="/contact" className="nav-link">
              <span className="fallback">Contact</span>
              <span className="text">Contact</span>
            </Link>

            <Link href="/get-quote" className="cta">
              Get Quote
            </Link>
          </nav>

          <button
            className="toggle-btn"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((o) => !o)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="mobile-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <div className="mobile-services">
                <button
                  onClick={() => setIsServicesOpen((o) => !o)}
                  aria-expanded={isServicesOpen}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "inherit",
                    fontWeight: 500,
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    cursor: "pointer",
                  }}
                >
                  <span>Services</span>
                  <ChevronDown
                    className="chevron"
                    size={16}
                    style={{
                      transform: isServicesOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
                {isServicesOpen && (
                  <div style={{ paddingLeft: "12px", marginTop: "4px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <Link href="/services/web-development">Web Development</Link>
                    <Link href="/services/mobile-apps">Mobile Apps</Link>
                    <Link href="/services/cloud-solutions">Cloud Solutions</Link>
                    <Link href="/services/consulting">IT Consulting</Link>
                  </div>
                )}
              </div>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
              <div className="divider" />
              <Link href="/get-quote" className="cta" style={{ display: "inline-block", textAlign: "center" }}>
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
