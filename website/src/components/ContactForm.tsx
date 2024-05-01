import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/mailgun', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // Handle response...
    } catch (error) {
      // Handle error...
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField name="name" label="Name" size="small" value={formData.name} onChange={handleChange} />
      <TextField name="email" label="Email" size="small" value={formData.email} onChange={handleChange} />
      <TextField name="subject" label="Subject" size="small" value={formData.subject} onChange={handleChange} />
      <TextField name="message" label="Message" size="small" value={formData.message} onChange={handleChange} multiline />
      <Button variant="contained" color="primary" type="submit">Submit</Button>
    </Box>
  );
};

export default ContactForm;