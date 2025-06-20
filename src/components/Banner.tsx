'use client';

import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

const Banner = () => {
  return (
    <Box
      position="relative"
      height="80vh"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      padding="2rem"
      sx={{
        overflow: 'hidden',
      }}
    >
      {/* Imagem de fundo */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-1}
      >
        <Image
          src="/images/strangerThings.png"
          alt="Stranger Things Banner"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>

      {/* Conteúdo do banner */}
      <Box maxWidth="600px" zIndex={1}>
        <Typography variant="h2" fontWeight="bold" color="white" gutterBottom>
          Stranger Things
        </Typography>
        <Typography variant="body1" color="white" gutterBottom>
          Um grupo de crianças enfrenta perigos sobrenaturais em uma cidade cheia de mistérios.
        </Typography>
        <Box display="flex" gap={2} mt={2}>
          <Button variant="contained" color="primary">
            Assistir
          </Button>
          <Button variant="outlined" color="inherit">
            Mais informações
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
