'use client';

import { Button, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Netflix Clone
      </Typography>
      <Button variant="contained" color="primary">
        Entrar
      </Button>
    </Container>
  );
}