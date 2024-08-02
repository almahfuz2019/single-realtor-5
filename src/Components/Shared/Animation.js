"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Animation({ children }) {
  useEffect(() => {
    AOS.init({ duration: 200, once: true });
  }, []);

  return <>{children}</>;
}
