"use client";

import React, { useEffect, useState } from 'react';
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
        position: 'absolute',
        height: { xs: '100vh', md: 'auto' },
        backgroundImage: 'url("/Hero-Image.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "30% top", md: "80% top", lg: "80% top" },
        px: { xs: 4, sm: 8 },
        py: 8
      }}>
      <Grid container maxWidth="lg" sx={{ margin: { md: '-8px', lg: '50px auto', }, pb: 8 }}>
        <Grid item xs={12} md={8}
          sx={{
            mt: {
              xs: "20px",
              md: "50px",
            },
            pr: {
              sm: 0,
              md: 8
            }
          }}>
          <Grid container spacing={0} sx={{ my: 8 }}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h2" sx={{ color: theme.palette.primary.contrastText, fontSize: '2.475rem', }}>{'Helping men break free and'}</Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: 4, mb: 2, }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: theme.palette.primary.main,
                  lineHeight: '0.9',
                  fontSize: {
                    xs: '6.5rem',
                    sm: '6.5rem',
                    md: '8rem',
                  },
                  }}
              >
                  {'Thrive'}
              </Typography>
              <Divider sx={{ borderBottomWidth: '5px', borderColor: theme.palette.primary.main, }} />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Typography variant="h3" component="h3" sx={{ color: theme.palette.primary.contrastText, }}>
                {'embrace positivity. embody your best self.'}
              </Typography>
            </Grid>
          </Grid>
          <Button variant="outlined" color="inherit" size="large" sx={{ mt: 1, width: { xs: "100%", sm: 'auto' }, py: { xs: 1.5, sm: 'auto' }, letterSpacing: '2px' }} onClick={handleClickOpen}>
            {'Unlock your potential'}
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="lg">
        <DialogContent sx={{ p: 0, }}>
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
          <Button fullWidth size="small" variant="contained" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}