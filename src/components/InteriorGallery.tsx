import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  title: string;
  images: string[];
}

const InteriorGallery: React.FC<Props> = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box sx={{ mt: 12 }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: 4 }}
      >
        {title}
      </Typography>

      {/* Image Wrapper */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        {/* Main Image */}
        <Box
          component="img"
          src={images[currentIndex]}
          alt={title}
          sx={{
            width: "100%",
            height: { xs: 300, md: 550 },
            objectFit: "cover",
          }}
        />

        {/* Left Arrow */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 20,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.6)",
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 20,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.6)",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Bottom Segmented Progress Indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 40,
                height: 4,
                borderRadius: 2,
                cursor: "pointer",
                transition: "all 0.3s ease",
                backgroundColor:
                  index === currentIndex
                    ? "#ffffff"
                    : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InteriorGallery;