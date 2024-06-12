import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceItem } from "../icon";

gsap.registerPlugin(ScrollTrigger);

interface Prop {
  divName: React.MutableRefObject<HTMLDivElement | null> | React.MutableRefObject<HTMLTextAreaElement | null>;
  arrayName?: ServiceItem;
  option: Partial<gsap.TweenVars>;
  startPosition?: string;
  endPosition?: string;
}

export const Animation = ({
  divName,
  option,
  startPosition,
  endPosition,
}: Prop) => {
  useEffect(() => {
    gsap.from(divName.current, {
      scrollTrigger: {
        trigger: divName.current,
        start: startPosition, // Animation starts when the top of the element hits 80% of the viewport height
        end: endPosition, // Animation ends when the top of the element hits 30% of the viewport height
        scrub: true, // Smooth scrubbing
        toggleActions: "play none none none", // Actions to take when element enters/exits the viewport
      },
      // Adjust the duration to control the speed of the animation
      ...option,
    });
  }, [divName, option]);
  return null;
};

export const Animation2 = ({
  divName,
  option,
  startPosition,
  endPosition,
}: Prop) => {
  useEffect(() => {
    gsap.to(divName.current, {
      scrollTrigger: {
        trigger: divName.current,
        start: startPosition, // Animation starts when the top of the element hits 80% of the viewport height
        end: endPosition, // Animation ends when the top of the element hits 30% of the viewport height
        scrub: true, // Smooth scrubbing
        toggleActions: "play none none none", // Actions to take when element enters/exits the viewport
      },
      ...option,
    });
  }, [divName, option]);
  return null;
};
