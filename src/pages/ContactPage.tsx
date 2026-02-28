import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { translations, type Language } from "../config/translations";

import agrisImg from "../assets/contactsPage/agris.png";
import andrejsImg from "../assets/contactsPage/andrejs.png";

interface Props {
  language: Language;
}

const ContactPage: React.FC<Props> = ({ language }) => {
  const t = translations[language].contactPage;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  const contacts = [
    {
      name: "Agris Reinfelds",
      title: t.salesSpecialist,
      phone: "+371 29 220 608",
      email: "agris@agprojekts.lv",
      image: agrisImg,
    },
    {
      name: "Andrejs Džeriņš",
      title: t.ceo,
      phone: "+371 29 238 014",
      email: "andrejs@agprojekts.lv",
      image: andrejsImg,
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
      <Grid container spacing={8}>
        {/* LEFT SIDE — CONTACT PEOPLE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={6}>
            {contacts.map((person) => (
              <Grid size={{ xs: 12, sm: 6 }} key={person.email}>
                <Box>
                  {/* Image */}
                  <Box
                    component="img"
                    src={person.image}
                    alt={person.name}
                    sx={{
                      width: "100%",
                      maxWidth: 260,
                      height: 260,
                      objectFit: "cover",
                      mb: 3,
                    }}
                  />

                  {/* Name */}
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {person.name}
                  </Typography>

                  {/* Job Title */}
                  <Typography
                    variant="body2"
                    sx={{ mb: 1.5, color: "text.secondary" }}
                  >
                    {person.title}
                  </Typography>

                  {/* Phone */}
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {person.phone}
                  </Typography>

                  {/* Email */}
                  <Typography variant="body2">
                    <a
                      href={`mailto:${person.email}`}
                      style={{
                        textDecoration: "none",
                        color: "#1f4f66",
                      }}
                    >
                      {person.email}
                    </a>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* RIGHT SIDE — CONTACT FORM */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 4,
              }}
            >
              {t.contactUs}
            </Typography>

            <TextField
              fullWidth
              label={t.form.nameSurname}
              name="name"
              margin="normal"
              required
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label={t.form.phoneNumber}
              name="phone"
              margin="normal"
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label={t.form.email}
              name="email"
              type="email"
              margin="normal"
              required
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label={t.form.message}
              name="message"
              multiline
              rows={4}
              margin="normal"
              required
              onChange={handleChange}
            />

            <Box mt={4}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#1f4f66",
                  borderRadius: "30px",
                  px: 6,
                  py: 1.3,
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#163a4d",
                  },
                }}
              >
                {t.form.send}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
