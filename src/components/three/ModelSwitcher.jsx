import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import MacBookModel16 from "../models/Macbook-16";
import MacBookModel14 from "../models/Macbook-14";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.toString(child.material, {
        opacity,
        duration: ANIMATION_DURATION,
      });
    }
  });
};

constmoveGrop = (group, x) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacBookRef = useRef();
  const largeMacBookRef = useRef();

  const showLargeMacbook = scale === 0.08 || scale === 0.05;

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
          <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      {/* <PresentationControls {...controlsConfig} >
        <group ref={smallMacBookRef}>
          <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls> */}
    </>
  );
};

export default ModelSwitcher;
