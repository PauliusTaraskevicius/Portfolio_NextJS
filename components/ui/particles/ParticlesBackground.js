import ParticlesBg from "particles-bg";

function ParticlesBackground({ height }) {
  return (
    <ParticlesBg
      id="tsparticles"
      type="cobweb"
      color={"#EC4578"}
      num={20}
      bg={{
        position: "absolute",
        width: "100%",
        height: height,
        pointerEvents: "none",
        zIndex: -1,
        display: "block",
        top: 0,
        left: 0,
      }}
    />
  );
}

export default ParticlesBackground;
