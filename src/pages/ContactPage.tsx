import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper
} from '@mui/material';
import { translations, type Language } from "../config/translations";

interface Props {
  language: Language;
}

const ContactPage: React.FC<Props> = ({ language }) => {
  const t = translations[language];
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // later connect to backend
  };

  return (
    <Grid container spacing={4}>
      
      {/* LEFT SIDE */}
      <Grid size={{ xs: 12, md: 5 }} >
        <Paper sx={{ p: 4, backgroundColor: '#f5f2eb' }}>
          <Typography variant="h5" gutterBottom>
            Contact Information
          </Typography>

          <Typography variant="body1">
            <strong>Agris Reinfelds</strong><br />
            +371 29 220 608<br />
            <a href="mailto:agris@agprojekts.lv">
              agris@agprojekts.lv
            </a>
          </Typography>

          <Box mt={4}>
            <Typography variant="body1">
              <strong>Andrejs Džeriņš</strong><br />
              +371 29 238 014<br />
              <a href="mailto:andrejs@agprojekts.lv">
                andrejs@agprojekts.lv
              </a>
            </Typography>
          </Box>
        </Paper>
      </Grid>

      {/* RIGHT SIDE */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>

          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            required
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Phone"
            name="phone"
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            required
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            margin="normal"
            required
            onChange={handleChange}
          />

          <Box mt={3}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: '#1f4f66',
                borderRadius: '30px',
                px: 4
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Grid>

    </Grid>
  );
};

export default ContactPage;