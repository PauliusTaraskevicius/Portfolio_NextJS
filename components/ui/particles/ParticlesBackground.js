import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground(props) {
  const { children } = props;

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "grab",
            },
          },
          modes: {
            push: {
              quantity: 3,
            },
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.1,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#db2777",
          },

          links: {
            color: "#db2777",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    >
      {children}
    </Particles>
  );
}

export default ParticlesBackground;
