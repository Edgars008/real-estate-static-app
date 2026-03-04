import React from 'react';
import { Grid, Box, Typography, Stack, Container } from '@mui/material';

type SectionItem = {
  subtitle?: string;
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
  const showText = Boolean(content?.title) || Boolean(content?.items?.length);

  return (
    <Box my={{ xs: 4, md: 6 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          alignItems="center"
          sx={{ flexWrap: 'nowrap' }} // prevent wrapping on md+ screens
        >
          {/* IMAGE */}
          {showImage && (
            <Grid
              sx={{
                flex: { xs: '0 0 0%', md: showText ? '0 0 50%' : '0 0 100%' },
                maxWidth: { xs: 0, md: showText ? '50%' : '100%' },
                order: { xs: 1, md: isImageLeft ? 1 : 2 },
                display: { xs: 'none', md: 'block' },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={imageAlt}
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  objectFit: 'cover',
                }}
              />
            </Grid>
          )}

          {/* TEXT */}
          {showText && (
            <Grid
              sx={{
                flex: { xs: '1 1 100%', md: showImage ? '0 0 50%' : '1 1 100%' },
                maxWidth: { xs: '100%', md: showImage ? '50%' : '100%' },
                order: { xs: 2, md: isImageLeft ? 2 : 1 },
              }}
            >
              <Stack spacing={3}>
                {content?.title && (
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, letterSpacing: '0.03em' }}
                  >
                    {content.title}
                  </Typography>
                )}

                {content?.items?.map((item, index) => (
                  <Box key={index}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, mb: 0.5, letterSpacing: '0.02em' }}
                    >
                      {item.subtitle}
                    </Typography>

                    {item.highlight && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          lineHeight: 1.5,
                          mb: item.text ? 0.5 : 0,
                        }}
                      >
                        {item.highlight}
                      </Typography>
                    )}

                    {item.text && (
                      <Typography
                        variant="body2"
                        sx={{ lineHeight: 1.5, color: 'text.secondary' }}
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
      </Container>
    </Box>
  );
};

export default UniversalSection;