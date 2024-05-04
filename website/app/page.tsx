"use client";

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "../components/ContactForm";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      maxWidth={false}
      className="container"
      sx={{
        position: 'absolute',
        height: "100vh",
        backgroundImage: 'url("/Hero-Image.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: { sm: "left top", md: "80% top", lg: "80% top" },
        px: { xs: 4, sm: 8 },
        py: 8
      }}>
      <Grid container maxWidth="lg" sx={{ margin: { md: '-8px', lg: '50px auto', }, pb: 8 }}>
        <Grid item xs={12} md={8}
          sx={{
            mt: {
              xs: "70px",
              md: "150px",
            },
            pr: {
              sm: 0,
              md: 8
            }
          }}>
          <h1 style={{ color: theme.palette.primary.main }}>
            {'Embrace Positivity and Embody Your Best Self'}
          </h1>
          <div>
            <p>{'It\'s time to ditch the negativity holding you back.'}</p>
            <p>{'As a Positivity and Embodiment Coach, I help guys like you rediscover their confidence and build a life they\'re excited about. We\'ll tackle the mental roadblocks keeping you stuck and equip you with practical tools to manage anxiety, boost your self-esteem, and achieve your goals.'}</p>
            <p>{'Whether you\'re looking to improve your career, relationships, or overall well-being, this is your chance to take charge and become the best version of yourself.'}</p>
          </div>
          <Button variant="contained" color="primary" size="large" sx={{ width: { xs: "100%", sm: 'auto' }, py: { xs: 1.5, sm: 'auto' } }} onClick={handleClickOpen}>
            {'Schedule a Free Consultation'}
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ p: 0 }}>
          <Card sx={{ width: "100%", height: "100%", maxWidth: { sm: "100%", md: 425 }, }}>
            <CardContent sx={{ mt: 2, textAlign: "center", }}>
              {'Contact me for a '}<strong style={{ color: theme.palette.primary.main }}>{'free'}</strong>{' 30 min consultation'}
            </CardContent>
            <CardContent sx={{ px: { xs: 4, md: 6 }, mb: -3 }}>
              <ContactForm />
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions sx={{ px: { xs: 4, md: 6 }, mb: 4 }}>
          <Button fullWidth size="large" variant="outlined" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}