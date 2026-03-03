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
          const isGoingBack = to === "/" || to === "";
          isGoingBackRef.current = isGoingBack;

          const wipeWrapper = document.getElementById("wipe-wrapper");
          const pageWrapper = document.getElementById("page-transition-wrapper");

          if (pageWrapper) {
            pageWrapper.style.transition = "all 0.5s cubic-bezier(0.76, 0, 0.24, 1)";
            pageWrapper.style.opacity = "0";
            pageWrapper.style.transform = isGoingBack ? "scale(1.05) translateY(-2vh)" : "scale(0.95) translateY(2vh)";
            pageWrapper.style.filter = "blur(10px)";
          }

          if (wipeWrapper) {
            wipeWrapper.style.display = "block";
            wipeWrapper.style.transition = "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)";
            wipeWrapper.style.transformOrigin = isGoingBack ? "top" : "bottom";
            wipeWrapper.style.transform = "scaleY(1)";
          }

          setTimeout(next, 500);
        }}
        enter={(next) => {
          const isGoingBack = isGoingBackRef.current;
          const wipeWrapper = document.getElementById("wipe-wrapper");
          const pageWrapper = document.getElementById("page-transition-wrapper");

          if (pageWrapper) {
            pageWrapper.style.transition = "none";
            pageWrapper.style.opacity = "0";
            pageWrapper.style.transform = isGoingBack ? "scale(0.95) translateY(2vh)" : "scale(1.05) translateY(-2vh)";
            pageWrapper.style.filter = "blur(10px)";

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                pageWrapper.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
                pageWrapper.style.opacity = "1";
                pageWrapper.style.transform = "scale(1) translateY(0vh)";
                pageWrapper.style.filter = "blur(0px)";
              });
            });
          }

          if (wipeWrapper) {
            wipeWrapper.style.transformOrigin = isGoingBack ? "bottom" : "top";
            wipeWrapper.style.transform = "scaleY(0)";
            
            setTimeout(() => {
              wipeWrapper.style.display = "none";
            }, 600);
          }

          next();
        }}
      >
        <div id="page-transition-wrapper" className="w-full min-h-screen origin-center">
          {children}
        </div>
      </TransitionRouter>

      <div
        id="wipe-wrapper"
        className="fixed inset-0 z-[99998] pointer-events-none hidden bg-emerald-500"
        style={{ transform: "scaleY(0)", transformOrigin: "bottom" }}
      >
      </div>
    </>
  );
}
