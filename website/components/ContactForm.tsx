import { useForm, ValidationError } from "@formspree/react";
import { Button, TextField, FormControl, FormHelperText, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

export default function ContactForm() {

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || '');

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <Box sx={{ width: '100%', height: '600px', overflow: 'hidden' }}>
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1E9GyfFwA0meyAtms4lW68sFpJKgZ11J3_R9G2ZhiH9TeELxh43V1Z07F-975le1baY-y82PSS?gv=true"
        style={{ border: 0 }}
        width="100%"
        height="100%"
      ></iframe>
    </Box>
  );
}
