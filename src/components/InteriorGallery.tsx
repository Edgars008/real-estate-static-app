import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  title: string;
  images: string[];
}

const InteriorGallery: React.FC<Props> = ({ title, images }) => {
  const loopedImages = [images[images.length - 1], ...images, images[0]];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setTransition(false);
      setCurrentIndex(images.length);
    }

    if (currentIndex === images.length + 1) {
      setTransition(false);
      setCurrentIndex(1);
    }
  };

  React.useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  return (
    <Box sx={{ mt: 12 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
        {title}
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          onTransitionEnd={handleTransitionEnd}
          sx={{
            display: "flex",
            transition: transition ? "transform 0.5s ease" : "none",
            transform: `translateX(calc(-${currentIndex * 60}% + 20%))`,
            alignItems: "center",
          }}
        >
          {loopedImages.map((img, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 60%",
                px: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`slide-${index}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "75vh",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "#fff",
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "#fff",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InteriorGallery;