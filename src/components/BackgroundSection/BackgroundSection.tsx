import React, { FC, useEffect } from "react";

export interface BackgroundSectionProps {
  className?: string;
}

const BackgroundSection: FC<BackgroundSectionProps> = ({
  className = "bg-neutral-100/70 dark:bg-black/20",
}) => {
  useEffect(() => {
    // Load particles.js library dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize particle animation on component mount
    script.onload = () => {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          color: {
            value: ["#FF6347", "#FFD700", "#32CD32", "#4682B4","#FF7F50","#00CED1",  "#FFD700", "#8A2BE2"],
          },
          shape: {
            type: "polygon",
            polygon: {
              nb_sides: 6, // Number of sides for the hexagon
            },
          },
          opacity: {
            value: 0.6,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: "#DEE7FF",
            opacity: 1,
            width: 0.6,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 100,
              duration: 1,
              opacity: 8,
              speed: 9,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    };

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${className}`}
    >
      <div id="particles-js"></div>
      <span className="sr-only hidden">bg</span>
    </div>
  );
};

export default BackgroundSection;
