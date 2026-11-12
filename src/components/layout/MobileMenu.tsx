"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { EASE_OUT } from "@/lib/motion";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // While the menu is open, let the Escape key close it.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup: stop listening when the menu closes (or the component unmounts).
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function toggleMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function closeMenu() {
    setIsOpen(false);
  }

  // Pick the icon and the screen-reader label based on whether the menu is open.
  let buttonLabel = "Open menu";
  let icon = <Menu className="h-5 w-5" aria-hidden="true" />;
  if (isOpen) {
    buttonLabel = "Close menu";
    icon = <X className="h-5 w-5" aria-hidden="true" />;
  }

  // Only build the menu panel when it's open. AnimatePresence (below)
  // plays the `exit` animation before removing it.
  let menuPanel = null;
  if (isOpen) {
    menuPanel = (
      <motion.nav
        key="mobile-menu"
        id="mobile-menu"
        aria-label="Mobile"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.2, ease: EASE_OUT }}
        className="absolute inset-x-0 top-full border-b-2 border-border bg-background px-6 py-8"
      >
        <ul className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={closeMenu} className="font-display text-3xl font-extrabold">
                <span className="mr-3 font-mono text-sm text-muted">{link.number}</span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-block rounded-xl border-2 border-border bg-pink px-4 py-2 font-mono text-sm font-bold text-ink shadow-chunky-sm"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </motion.nav>
    );
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={buttonLabel}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border bg-surface text-foreground shadow-chunky-sm"
      >
        {icon}
      </button>

      <AnimatePresence>{menuPanel}</AnimatePresence>
    </div>
  );
}