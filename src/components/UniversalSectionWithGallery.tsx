import React from "react";
import { Grid, Box, Typography, Stack, Container } from "@mui/material";
import InteriorGallery from "./InteriorGallery";

type FeatureItem = {
  icon: string;
  label: string;
};

type SectionItem = {
  subtitle?: string;
  highlight?: string;
  text?: string;
};

type UniversalSectionContent = {
  title?: string;
  items?: SectionItem[];
  features?: FeatureItem[];
};

type Props = {
  content?: UniversalSectionContent;
  galleryTitle?: string;
  images?: string[];
  imagePosition?: "left" | "right";
};

const UniversalSectionWithGallery: React.FC<Props> = ({
  content,
  galleryTitle,
  images = [],
  imagePosition = "right",
}) => {
  if (!content && !images.length) return null;

  const isLeft = imagePosition === "left";
  const showGallery = images.length > 0;
  const showText =
    Boolean(content?.title) || Boolean(content?.items?.length);

  return (
    <Box my={{ xs: 6, md: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          
          {/* GALLERY */}
          {showGallery && (
            <Grid
              size={{ xs: 12, md: 8 }}
              order={{ xs: 1, md: isLeft ? 1 : 2 }}
            >
              <InteriorGallery
                title={galleryTitle || ""}
                images={images}
              />
            </Grid>
          )}

          {/* TEXT */}
          {showText && (
            <Grid
              size={{ xs: 12, md: 4 }}
              order={{ xs: 2, md: isLeft ? 2 : 1 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // ✅ vertical center
                height: "100%",
              }}
            >
              <Stack spacing={3}>
                
                {/* TITLE */}
                {content?.title && (
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {content.title}
                  </Typography>
                )}

                {/* TEXT ITEMS */}
                {content?.items?.map((item, index) => (
                  <Box key={index}>
                    {item.subtitle && (
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        {item.subtitle}
                      </Typography>
                    )}

                    {item.highlight && (
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600 }}
                      >
                        {item.highlight}
                      </Typography>
                    )}

                    {item.text && (
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.text}
                      </Typography>
                    )}
                  </Box>
                ))}

                {/* FEATURES */}
                {content?.features && (
                  <Grid container spacing={2}>
                    {content.features.map((feature, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                        >
                          <Box
                            component="img"
                            src={feature.icon}
                            alt={feature.label}
                            sx={{
                              width: 32,
                              height: 32,
                              objectFit: "contain",
                            }}
                          />

                          <Typography variant="body2" fontWeight={500}>
                            {feature.label}
                          </Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default UniversalSectionWithGallery;