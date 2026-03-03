"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    if (!isMounted) return null;

  return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999999]"
      style={{ originX: 0, originY: 0 }}
      animate={{
        x: mousePosition.x - 4, // Offset to align SVG tip to actual click point
        y: mousePosition.y - 2, // Offset to align SVG tip to actual click point
        scale: isHovering ? 1.15 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 40,
        mass: 0.1,
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="#e4e4e7"
        stroke="rgba(16,185,129,0)"
        strokeWidth="1"
        className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] filter mix-blend-difference"
      >
        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.42a.5.5 0 00.35-.85L5.5 3.21z" />
      </svg>
    </motion.div>
  );
}