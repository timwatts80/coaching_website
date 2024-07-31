"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Kalam } from 'next/font/google';
import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "./ContactForm";
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
import ServiceCard from '@/components/ServiceCard';
import HeroImage from '../public/headerUnderline.png';

export default function Hero() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [vh, setVh] = useState('100vh');

  useEffect(() => {
    const setVhToWindowHeight = () => {
      setVh(`${window.innerHeight}px`);
    };
    window.addEventListener('resize', setVhToWindowHeight);
    setVhToWindowHeight();
    return () => window.removeEventListener('resize', setVhToWindowHeight);
  }, []);

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
        position: 'relative',
        height: 'auto',
        backgroundImage: 'url("/Hero-Image.png")',
        backgroundSize: { xs: 'cover', sm: 'cover', md: 'cover' },
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "left top", md: "50% top", },
        px: { xs: 4, sm: 8 },
        py: 8
      }}>
      <Grid container maxWidth="lg" sx={{ margin: { md: '50px auto', }, pb: 8 }}>
        <Grid item xs={12} md={8}
          sx={{
            pr: {
              sm: 0,
              md: 8
            }
          }}>
          <Grid container spacing={0} sx={{ my: 8 }}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: {
                    xs: '1.25rem',
                    sm: '2rem',
                    md: '1.75rem',
                    lg: '1.75rem',
                  },
                }}
              >
                {'Break free from the nice guy and'}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: 6,}}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: theme.palette.primary.main,
                  lineHeight: '.8',
                  fontSize: {
                    xs: '32vw',
                    md: '8rem',
                    lg: '8rem',
                  },
                  fontFamily: theme.kalamTypography.fontFamily,
                  textShadow: '5px 10px 20px rgba(0,0,0,0.2)',
                }}
              >
                {'Thrive'}
              </Typography>
              <Box
                component="img"
                sx={{
                  height: 'auto', 
                  width: '100%', 
                  maxWidth: {
                    sm: 'auto',
                    md: '325px',
                   }, 
                  mb: 2,
                  filter: 'drop-shadow(5px 10px 20px rgba(0,0,0,0.2))',
                }}
                alt="Header underline"
                src="/headerUnderline.svg"
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 4 }}>
              <Typography variant="h3" component="h3" sx={{ color: theme.palette.primary.contrastText, }}>
                {'embrace positivity. embody your best self.'}
              </Typography>
            </Grid>
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              sx={{
                mt: 4,
                width: {
                  xs: "100%",
                  md: 'auto'
                },
                py: 1.5,
                px: {
                  xs: 'auto',
                  md: 4
                },
                letterSpacing: '2px',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
              onClick={handleClickOpen}
            >
              {'Unlock your potential'}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="lg">
        <DialogContent sx={{ py: 0, }}>
          <Card sx={{ width: "100%", height: "100%", }}>
            <CardContent sx={{ mt: 0, textAlign: "center", }}>
              <Typography variant="h4" component="h4">
                {'Schedule a '}
                <strong style={{ color: theme.palette.primary.main }}>
                  {'free'}
                </strong>
                {' 30 min consultation'}
              </Typography>
            </CardContent>
            <Divider />
            <CardContent
              sx={{
                px: 0,
                my: 0,
                backgroundColor: theme.palette['grey']['200'],
                '&.MuiCardContent-root:last-child': {
                  py: 0
                }
              }}
            >
              <ContactForm />
            </CardContent>
          </Card>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ px: { xs: 2, md: 4 }, my: 1, }}>
          <Button
            fullWidth
            size="small"
            variant="contained"
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}