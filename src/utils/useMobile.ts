import { useState, useEffect } from "react";

/**
 * Checks if browser is on mobile and if in portrait or landscape.
 *
 * @returns [bool isMobile, bool isPortrait]
 */
export function useMobile() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return [width <= 1024, height > width];
}
