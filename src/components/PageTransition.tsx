"use client";

import { ReactNode, useRef } from "react";
import { TransitionRouter } from "next-transition-router";

export default function PageTransition({ children }: { children: ReactNode }) {
  const isGoingBackRef = useRef(false);

  return (
    <>
      <TransitionRouter
        auto={true}
        leave={(next, from, to) => {
          // Check if we are heading back to the root vs into a project
          const isGoingBack = to === "/" || to === "";
          isGoingBackRef.current = isGoingBack;
          
          const wipeWrapper = document.getElementById("wipe-wrapper");
          const page = document.getElementById("page-transition-wrapper");

          if (page) {
            page.style.transition = "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
            page.style.opacity = "0";
            page.style.transform = isGoingBack ? "scale(1.05)" : "scale(0.95)";
          }

          if (wipeWrapper) {
            const bars = Array.from(wipeWrapper.children) as HTMLElement[];
            
            // Set initial position based on direction
            bars.forEach((bar) => {
              bar.style.transition = "none";
              bar.style.transform = isGoingBack ? "translateY(-100%)" : "translateY(100%)";
            });

            // Force reflow
            void wipeWrapper.offsetWidth;

            // Animate IN to screen center (0%)
            bars.forEach((bar, index) => {
              bar.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
              // stagger depending on direction
              const delay = isGoingBack 
                ? (4 - index) * 0.08  // Right to Left when backing
                : index * 0.08        // Left to Right when entering
              
              bar.style.transitionDelay = `${delay}s`;
              bar.style.transform = "translateY(0%)";
            });
          }

          setTimeout(next, 900); // Give enough time for the wipe to complete
        }}
        enter={(next) => {
          const isGoingBack = isGoingBackRef.current;
          const wipeWrapper = document.getElementById("wipe-wrapper");
          const page = document.getElementById("page-transition-wrapper");

          if (page) {
            // Prepare incoming page
            page.style.transition = "none";
            page.style.opacity = "0";
            page.style.transform = isGoingBack ? "scale(0.95)" : "scale(1.05)";
            
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                page.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
                page.style.opacity = "1";
                page.style.transform = "scale(1)";
              });
            });
          }

          if (wipeWrapper) {
            const bars = Array.from(wipeWrapper.children) as HTMLElement[];
            
            // Animate OUT of screen
            bars.forEach((bar, index) => {
              // Same stagger
              const delay = isGoingBack 
                ? (4 - index) * 0.08 
                : index * 0.08;
                
              bar.style.transitionDelay = `${delay}s`;
              // Slide down if back, slide up if forward
              bar.style.transform = isGoingBack ? "translateY(100%)" : "translateY(-100%)";
              
              // Reset quietly later
              setTimeout(() => {
                bar.style.transition = "none";
                bar.style.transform = "translateY(100%)"; // reset to default bottom
              }, 1000);
            });
          }
          
          next();
        }}
      >
        <div 
          id="page-transition-wrapper" 
          className="w-full min-h-screen"
          style={{
            opacity: 1,
            transform: "scale(1)",
          }}
        >
          {children}
        </div>
      </TransitionRouter>

      {/* The 5 Column Wipe Overlay */}
      <div 
        id="wipe-wrapper" 
        className="fixed inset-0 z-[99998] pointer-events-none flex"
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-full w-1/5 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] border-l border-r border-emerald-400"
            style={{ transform: "translateY(100%)" }}
          />
        ))}
      </div>
    </>
  );
}