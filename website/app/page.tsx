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
import ServiceCard from '@/components/ServiceCard';
import Hero from '@/components/Hero';

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Hero />
      {/* <ServiceCard /> */}
    </>
  );
}