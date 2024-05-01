"use client";

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "@/src/components/ContactForm";
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
    <Container maxWidth={false} className="container">
      <Box maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: {
            sm: "column",
            lg: "row"
          },
          margin: "0 auto",
        }}>
        <Grid container sx={{ py: 8 }}>
          <Grid xs={8} sx={{ display: "flex", flexDirection: "column", gap: 4, margin: "0 auto" }}>
            <h1 style={{ color: theme.palette.primary.main }}>
              {'Embrace Positivity and Embody Your Best Self'}
            </h1>
            <div>
              <p>It&apos;s time to ditch the negativity holding you back.</p>
              <p>As a Positivity and Embodiment Coach, I help guys like you rediscover their confidence and build a life they're excited about.
                We&apos;ll tackle the mental roadblocks keeping you stuck and equip you with practical tools to manage anxiety, boost your self-esteem, and achieve your goals.</p>

              <p>Whether you&apos;re looking to improve your career, relationships, or overall well-being, this is your chance to take charge and become the best version of yourself.</p>
            </div>
            <p style={{ marginTop: "24px" }}>
              <Button variant="contained" size="large" color="primary" onClick={handleClickOpen}>
                {'Get Started'}
              </Button>
              <Dialog open={open} onClose={handleClose} sx={{ textAlign: "center" }}>
                <DialogTitle>{'My site is almost ready.'}</DialogTitle>
                <Divider />
                <DialogContent sx={{ textAlign: "center", px: 8 }}>
                    <p>
                      {'Please call or email me for now'}
                    </p>
                    <p>
                      {'Phone: 801-739-4598'}
                      <br />
                      {'Email: tim_watts@ymail.com'}
                    </p>
                    <p>Contact me to get a <strong style={{ color: theme.palette.primary.main }}>free</strong> 30 min consultation</p>
                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button onClick={handleClose}>Close</Button>
                </DialogActions>
              </Dialog>
            </p>
          </Grid>
        </Grid>
      </Box>
    </Container >
  );
}