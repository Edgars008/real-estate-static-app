import { useEffect, useState } from "react";

const KuulaTour = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: isLargeScreen ? "95vh" : "56.25%", // taller on big screens
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        title="Kuula 3D Tour"
        src="https://kuula.co/share/collection/7b0w9?logo=1&info=1&fs=1&vr=0&thumbs=1"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowFullScreen
      />
    </div>
  );
};

export default KuulaTour;