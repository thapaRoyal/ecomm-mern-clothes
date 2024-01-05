import React, { useEffect, useState } from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const HomeBanner = () => {
  const [smallDevice, setSmallDevice] = useState(false);
  const dimensions = useWindowDimensions();
  const handleWindowResize = () => {
    if (dimensions.width < 740) {
      setSmallDevice(true);
    } else {
      setSmallDevice(false);
    }
  };
  useEffect(() => {
    handleWindowResize();
  }, [dimensions]);
  const contentStyle = {
    height: "580px",
    minWidth: "100%",
    maxWidth: "100%",
    backgroundSize: "cover",
    backgroundPosition: "top",
  };
  return (
    <>
      <h4
        className={` text-center pb-3   my-5 text-white font-weight-bold font-italic mx-auto`}
        style={{
          letterSpacing: "3px",
          borderBottom: "5px solid #4db5ff",
          width: "fit-content",
        }}
      >
        Latest Products
      </h4>
    </>
  );
};

export default HomeBanner;
