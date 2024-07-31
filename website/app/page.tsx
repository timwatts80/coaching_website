"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from "next/image";
import Script from 'next/script';
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
import ServiceCard from '@/components/ServiceCard';
import Hero from '@/components/Hero';
import { loadStripe } from '@stripe/stripe-js';

export default function Home() {
  const theme = useTheme();

  const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  if (!stripePublishableKey) {
    return <div>Error: Stripe publishable key is not set.</div>;
  }

  return (
    <>
      <Hero />
      <Box>
        <Box id="coaching" sx={{ py: 4, }}></Box>
        <Typography variant="h2" align="center" sx={{ color: theme.palette.primary.main,}}>Transformational Coaching</Typography>
        <Container
          sx={{
            my: 8,
            px: {xs: 3},
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <ServiceCard
                cardTitle={'Embodiment'}
                cardBody={'Connect with your physical self through movement, breathwork, and mindfulness practices. Develop a fitness routine that aligns with your goals, build strength and resilience, and release trapped emotions. Cultivate healthy masculinity by embodying strength, resilience, and groundedness through mindful movement.'}
                showButton={true}
                cardAction={'Book Now'} />
            </Grid>
            <Grid item xs={12} md={4}>
              <ServiceCard
                cardTitle={'Positivity'}
                cardBody={'Identify and reframe limiting beliefs and negative thought patterns that hold you back. Embrace challenges as opportunities for growth and shift your focus towards the positive aspects of your life to increase happiness and well-being. Cultivate a mindset that fosters resilience and positivity.'}
                showButton={true}
                cardAction={'Book Now'} />
            </Grid>
            <Grid item xs={12} md={4}>
              <ServiceCard
                cardTitle={'Nice Guy Recovery'}
                cardBody={'Explore Nice Guy Syndrome and how it affects your life and relationships. Learn to set boundaries, assert your needs, and prioritize your well-being without guilt. Embrace your true self, build fulfilling relationships based on authenticity and respect, and develop assertive communication skills for stronger connections.'}
                showButton={true}
                cardAction={'Book Now'} />
            </Grid>
            {/* <Grid item xs={12} md={4}>
              <ServiceCard
                cardTitle={'Nice Guy Recovery'}
                cardBody={'Explore Nice Guy Syndrome and how it affects your life and relationships. Learn to set boundaries, assert your needs, and prioritize your well-being without guilt. Embrace your true self, build fulfilling relationships based on authenticity and respect, and develop assertive communication skills for stronger connections.'}
                showButton={true}
                cardAction={'Book Now'} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ServiceCard
                cardTitle={'Nice Guy Recovery'}
                cardBody={'Explore Nice Guy Syndrome and how it affects your life and relationships. Learn to set boundaries, assert your needs, and prioritize your well-being without guilt. Embrace your true self, build fulfilling relationships based on authenticity and respect, and develop assertive communication skills for stronger connections.'}
                showButton={true}
                cardAction={'Book Now'} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ServiceCard
                cardTitle={'Nice Guy Recovery'}
                cardBody={'Explore Nice Guy Syndrome and how it affects your life and relationships. Learn to set boundaries, assert your needs, and prioritize your well-being without guilt. Embrace your true self, build fulfilling relationships based on authenticity and respect, and develop assertive communication skills for stronger connections.'}
                showButton={true}
                cardAction={'Book Now'} />
            </Grid> */}
          </Grid>
        </Container>
        <Box id="pricing" sx={{
          backgroundColor: "#313131",
          py: 8,
        }}>
          <Typography variant="h2" align="center" sx={{ color: theme.palette.primary.main }}>Pricing</Typography>
          <Box sx={{
            mt: 8,
          }}>
            <Script async src="https://js.stripe.com/v3/pricing-table.js"></Script>
            <stripe-pricing-table
              pricing-table-id="prctbl_1PiiKvCEUfFr0vqOqNpFqPfj"
              publishable-key={stripePublishableKey}
            ></stripe-pricing-table>
          </Box>
        </Box>
      </Box>
    </>
  );
}