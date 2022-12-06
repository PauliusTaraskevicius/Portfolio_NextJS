import { useEffect, useState, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function ParticlesBackground(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const { children } = props;
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          size:0.90,
          scale: 1.0,
          scaleMobile: 1.0,
          color: '#EC4578',
          backgroundColor: '#FFFFFF',
          points: 20,
          maxDistance: 15,
          spacing: 20.00,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return <main className="w-full h-full bg-center bg-cover" ref={vantaRef}>{children}</main>;
}

export default ParticlesBackground;