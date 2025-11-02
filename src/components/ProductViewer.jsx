import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import { useMediaQuery } from "react-responsive";
import ModelSwitcher from "./three/ModelSwitcher";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacBookStore();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info">
          Macbook Pro | Available in 14" & 16" in Space Gray & Dark colors
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#eeeeeeff")}
              className={clsx(
                "bg-neutral-300",
                color === "#eeeeeeff" && "active"
              )}
            />
            <div
              onClick={() => setColor("#5a5a5a")}
              className={clsx(
                "bg-neutral-900",
                color === "#5a5a5a" && "active"
              )}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        // gl={{
        //   powerPreference: "low-power", // Prioritize battery life
        //   antialias: false, // Disable antialiasing
        //   alpha: false,
        // }}
      >
        <StudioLights />
        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
