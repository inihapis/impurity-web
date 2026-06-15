"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, socialLinks } from "@/data/site";

// Selected items for the main bottom navigation
const MAIN_NAV_LABELS = ["Home", "About", "Music", "Journal"];

export function MobileNav() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  // Close sheet on navigation
  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  // Lock body scroll when sheet is open
  useEffect(() => {
    if (sheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  const mainNavItems = navigation.filter((item) =>
    MAIN_NAV_LABELS.includes(item.label)
  );
  
  const moreNavItems = navigation.filter(
    (item) => !MAIN_NAV_LABELS.includes(item.label)
  );

  return (
    <div className="lg:hidden ">
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex flex-col border-t border-border bg-background/95 backdrop-blur-md">
        <div className="flex h-16 items-center justify-around pb-6">

          {mainNavItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex h-full flex-1 flex-col items-center justify-center gap-1 transition-colors ${
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {/* Replace with actual SVGs if preferred, for now using simple geometric or generic representations, or just text */}
                <span className="font-mono text-[10px] tracking-wider uppercase">
                  {item.label}
                </span>
                {active && (
                  <span className="h-[2px] w-4 rounded-full bg-foreground" />
                )}
              </Link>
            );
          })}
          <button
            onClick={() => setSheetOpen(true)}
            className={`flex h-full flex-1 flex-col items-center justify-center gap-1 transition-colors ${
              sheetOpen ? "text-foreground" : "text-muted hover:text-foreground"
            }`}
            aria-label="More options"
          >
            <span className="font-mono text-[10px] tracking-wider uppercase">
              More
            </span>
            {sheetOpen && (
              <span className="h-[2px] w-4 rounded-full bg-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Bottom Sheet Overlay */}
      <AnimatePresence>
        {sheetOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setSheetOpen(false)}
            />
            
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 flex max-h-[80vh] flex-col rounded-t-2xl border-t border-border bg-background pb-12 pt-3 px-6 shadow-2xl"
            >
              {/* Handle Bar */}
              <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-border" />

              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-display text-xl text-foreground">More</h2>
                <button
                  onClick={() => setSheetOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/20 text-foreground"
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-3 gap-3">
                  {moreNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-surface/30 py-6 px-2 text-center transition-all hover:bg-surface hover:border-border"
                    >
                      <span className="font-display text-lg text-foreground">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-mono mb-4 text-[10px] tracking-[0.2em] text-muted uppercase">
                    Connect
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-lg border border-border/30 bg-surface/10 p-3 font-mono text-xs tracking-wider text-muted transition-colors hover:bg-surface hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
