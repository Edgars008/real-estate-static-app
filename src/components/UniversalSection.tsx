import React from 'react';
import { Grid, Box, Typography, Stack } from '@mui/material';

type SectionItem = {
  subtitle: string;
  highlight?: string;
  text?: string;
};

type UniversalSectionContent = {
  title?: string;
  items?: SectionItem[];
};

type UniversalSectionProps = {
  content?: UniversalSectionContent;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
};

const UniversalSection: React.FC<UniversalSectionProps> = ({
  content,
  image,
  imageAlt,
  imagePosition = 'right',
}) => {
  if (!content && !image) return null;

  const isImageLeft = imagePosition === 'left';

  const showImage = Boolean(image);
  const showText =
    Boolean(content?.title) ||
    Boolean(content?.items && content.items.length > 0);

  return (
    <Box mb={{ xs: 6, md: 10 }}> {/* 👈 section bottom spacing */}
      <Grid container spacing={6} alignItems="center">

        {/* IMAGE (hidden on xs & sm) */}
        {showImage && (
          <Grid
            size={{ xs: 0, md: showText ? 6 : 12 }}
            order={{ md: isImageLeft ? 1 : 2 }}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Box
              component="img"
              src={image}
              alt={imageAlt}
              sx={{
                width: '100%',
                borderRadius: 2,
                objectFit: 'cover'
              }}
            />
          </Grid>
        )}

        {/* TEXT */}
        {showText && (
          <Grid
            size={{ xs: 12, md: showImage ? 6 : 12 }}
            order={{ md: isImageLeft ? 2 : 1 }}
          >
            <Stack spacing={5}>

              {/* TITLE */}
              {content?.title && (
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                  }}
                >
                  {content.title}
                </Typography>
              )}

              {/* ITEMS */}
              {content?.items?.map((item, index) => (
                <Box key={index}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  {item.highlight && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.6,
                        mb: item.text ? 1 : 0,
                      }}
                    >
                      {item.highlight}
                    </Typography>
                  )}

                  {item.text && (
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: 'text.secondary',
                      }}
                    >
                      {item.text}
                    </Typography>
                  )}
                </Box>
              ))}

            </Stack>
          </Grid>
        )}

      </Grid>
    </Box>
  );
};

export default UniversalSection;