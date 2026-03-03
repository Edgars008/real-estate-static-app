import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { environment } from "../config/environment";

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#2b6276", color: "white" }}>
      {/* 🔹 TOP FOOTER CONTENT */}
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4} alignItems="center">
          {/* 1️⃣ Main Logo */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Box
              component="img"
              src={environment.logos.main}
              alt="Main Logo"
              sx={{ maxWidth: "120px" }}
            />
          </Grid>

          {/* 2️⃣ Company Data */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography fontWeight="bold">
              {environment.company.name}
            </Typography>
            <Typography variant="body2">
              {environment.company.registrationNumber}
            </Typography>
            <Typography variant="body2">
              {environment.company.vatNumber}
            </Typography>
            <Typography variant="body2">
              {environment.company.legalAddress}
            </Typography>
            <Typography variant="body2">
              {environment.company.bankName}
            </Typography>
            <Typography variant="body2">
              {environment.company.bankAccount}
            </Typography>
          </Grid>

          {/* 3️⃣ Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography fontWeight="bold">Kontakti</Typography>
            <Typography variant="body2">{environment.contact.phone}</Typography>
            <Typography variant="body2">{environment.contact.email}</Typography>
            <Typography variant="body2">
              {environment.contact.address}
            </Typography>
          </Grid>

          {/* 4️⃣ Social */}
          <Grid size={{ xs: 12, md: 2 }}>
            <IconButton
              component="a"
              href={environment.social.facebook}
              target="_blank"
              sx={{ color: "white" }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              component="a"
              href={environment.social.instagram}
              target="_blank"
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>

          {/* 5️⃣ Secondary Logo */}
          <Grid size={{ xs: 12, md: 2 }} textAlign="right">
            <Box
              component="img"
              src={environment.logos.secondary}
              alt="Secondary Logo"
              sx={{ maxWidth: "100px" }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* 🔹 Divider Line */}
      <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />

      {/* 🔹 BOTTOM COPYRIGHT BAR */}
      <Box sx={{ py: 2, textAlign: "center" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
