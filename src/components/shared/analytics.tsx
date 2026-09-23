"use client";

import { useEffect, useRef } from "react";

export function Analytics() {
  useEffect(() => {
    // Google Analytics placeholder - replace GA_MEASUREMENT_ID with your ID
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    if (GA_ID && typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", GA_ID);
    }

    // Microsoft Clarity placeholder - replace CLARITY_ID with your ID
    const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (CLARITY_ID && typeof window !== "undefined") {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
