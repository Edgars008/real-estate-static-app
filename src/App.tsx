import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

type Page = 'Home' | 'About' | 'Contact';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('Home');

  const renderContent = () => {
    switch (page) {
      case 'Home':
        return <Typography variant="h4">Welcome to the Home Page!</Typography>;
      case 'About':
        return <Typography variant="h4">About us content goes here.</Typography>;
      case 'Contact':
        return <Typography variant="h4">Contact us at example@example.com</Typography>;
      default:
        return null;
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Simple App
          </Typography>
          <Button color="inherit" onClick={() => setPage('Home')}>Home</Button>
          <Button color="inherit" onClick={() => setPage('About')}>About</Button>
          <Button color="inherit" onClick={() => setPage('Contact')}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
        {renderContent()}
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ py: 2, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Typography>© 2026 My Simple App</Typography>
      </Box>
    </Box>
  );
};

export default App;