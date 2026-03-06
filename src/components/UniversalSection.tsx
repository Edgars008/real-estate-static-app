import React from "react";
import { Grid, Box, Typography, Stack, Container } from "@mui/material";

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

type UniversalSectionProps = {
  content?: UniversalSectionContent;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
};

const UniversalSection: React.FC<UniversalSectionProps> = ({
  content,
  image,
  imageAlt,
  imagePosition = "right",
}) => {
  if (!content && !image) return null;

  const isImageLeft = imagePosition === "left";
  const showImage = Boolean(image);
  const showText = Boolean(content?.title) || Boolean(content?.items?.length);

  return (
    <Box my={{ xs: 4, md: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="flex-start">
          {/* IMAGE */}
          {showImage && (
            <Grid
              size={{ xs: 12, md: 6 }}
              order={{ xs: 1, md: isImageLeft ? 1 : 2 }}
            >
              <Box
                component="img"
                src={image}
                alt={imageAlt}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
            </Grid>
          )}

          {/* TEXT */}
          {showText && (
            <Grid
              size={{ xs: 12, md: showImage ? 6 : 12 }}
              order={{ xs: 2, md: isImageLeft ? 2 : 1 }}
            >
              <Stack spacing={3}>
                {/* TITLE */}
                {content?.title && (
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, letterSpacing: "0.03em" }}
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
                        sx={{ fontWeight: 600, lineHeight: 1.5 }}
                      >
                        {item.highlight}
                      </Typography>
                    )}

                    {item.text && (
                      <Typography
                        variant="body2"
                        sx={{ lineHeight: 1.6, color: "text.secondary" }}
                      >
                        {item.text}
                      </Typography>
                    )}
                  </Box>
                ))}

                {/* FEATURES GRID */}
                {content?.features && (
                  <Grid container spacing={3} mt={1}>
                    {content.features.map((feature, index) => (
                      <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Box
                            component="img"
                            src={feature.icon}
                            alt={feature.label}
                            sx={{
                              width: 36,
                              height: 36,
                              objectFit: "contain",
                            }}
                          />

                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
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

export default UniversalSection;
