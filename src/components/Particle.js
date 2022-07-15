import React from "react";
import Particles from "react-tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

function Particle() {
  const customInit = async (engine) => {
    // this adds the preset to tsParticles, you can safely use the
    await loadFireflyPreset(engine);
  };

  // customInit();
  return (
    <Particles
      style={{ minHeight: "100vh" }}
      // options={{ preset: "firefly" }}
      params={{
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#b6b2b2",
            },
          },
          links: {
            distance: 150,
            enable: true,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: false,
            straight: false,
            outMode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          size: {
            value: 8.017060304327615,
            random: true,
            animation: {
              enable: true,
              speed: 12.181158184520175,
              minimumValue: 0.1,
              sync: false,
            },
          },
          lineLinked: {
            enable: false,
            distance: 150,
            color: "#c8c8c8",
            opacity: 0.4,
            width: 1,
          },

          stroke: {
            width: 0,
            color: "#b6b2b2",
          },
          opacity: {
            value: 0.5211089197812949,
            random: false,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        interactivity: {
          detectOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "connect",
            },
            onClick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            connect: {},
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
        detectRetina: true,
      }}
      id="tsparticles"
      // init={customInit}
      // params={{
      //   particles: {
      //     number: {
      //       value: 160,
      //       density: {
      //         enable: true,
      //         value_area: 1500,
      //       },
      //     },
      //     line_linked: {
      //       enable: false,
      //       opacity: 0.03,
      //     },
      //     move: {
      //       direction: "right",
      //       speed: 0.05,
      //     },
      //     size: {
      //       value: 1,
      //     },
      //     opacity: {
      //       anim: {
      //         enable: true,
      //         speed: 1,
      //         opacity_min: 0.05,
      //       },
      //     },
      //   },
      //   interactivity: {
      //     events: {
      //       onclick: {
      //         enable: true,
      //         mode: "push",
      //       },
      //     },
      //     modes: {
      //       push: {
      //         particles_nb: 1,
      //       },
      //     },
      //   },
      //   retina_detect: true,
      // }}
    />
  );
}

export default Particle;