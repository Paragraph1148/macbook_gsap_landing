import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import MacBookModel16 from "../models/Macbook-16";
import MacBookModel14 from "../models/Macbook-14";

const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacBookRef = useRef();
  const largeMacBookRef = useRef();

  const showLargeMacbook = scale === 0.08 || scale === 0.05;

  return <></>;
};

export default ModelSwitcher;
